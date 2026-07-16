import { useEffect, useState } from 'react';
import { Info } from 'lucide-react';
import { recordLead } from '../services/leadCaptureService';
import { trackFlowEvent } from '../services/flowAnalytics';
import {
  PRACTICE_AREA_CARDS,
  COMPANY_SIZES,
  ENGAGEMENT_MODELS,
  START_TIMINGS,
  SKILLS_BY_PRACTICE_AREA,
} from '../data/findLeader';
import type { PracticeAreaName } from '../data/practiceAreas';
import FlowHeader from '../components/findLeader/FlowHeader';
import FlowStepLayout from '../components/findLeader/FlowStepLayout';
import ChoiceCard from '../components/findLeader/ChoiceCard';
import MultiSelectSkills from '../components/findLeader/MultiSelectSkills';
import ContactStep from '../components/findLeader/ContactStep';
import SubmissionSuccess from '../components/findLeader/SubmissionSuccess';
import { initialIntake, TOTAL_STEPS, type ContactInfo, type IntakeState } from '../components/findLeader/types';

const STORAGE_KEY = 'nwa_find_leader';

// Persist only non-sensitive answers (never the Step 6 contact fields).
type Persisted = {
  step: number;
  practiceArea: string | null;
  companySize: string | null;
  engagementModel: string | null;
  skills: string[];
  startTiming: string | null;
};

function readPersisted(): Persisted | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Persisted) : null;
  } catch {
    return null;
  }
}

function clearPersisted() {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // sessionStorage unavailable; nothing to clear.
  }
}

function buildMessage(intake: IntakeState): string {
  const lines: string[] = ['Find the Right Leader intake (source: find-a-leader)', ''];
  lines.push(`Practice Area: ${intake.practiceArea ?? 'Not specified'}`);
  lines.push(`Company Size: ${intake.companySize ?? 'Not specified'}`);
  lines.push(`Engagement Model: ${intake.engagementModel ?? 'Not specified'}`);
  lines.push(`Selected Skills: ${intake.skills.length ? intake.skills.join(', ') : 'Not specified'}`);
  lines.push(`Desired Start Timing: ${intake.startTiming ?? 'Not specified'}`);
  if (intake.contact.jobTitle) lines.push(`Job Title: ${intake.contact.jobTitle}`);
  if (intake.contact.additionalContext) {
    lines.push('', 'Additional Context:', intake.contact.additionalContext);
  }
  lines.push('', `Submitted: ${new Date().toISOString()}`);
  return lines.join('\n');
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 flex gap-3 rounded-lg border border-[#01A3DB]/15 bg-[#01A3DB]/5 p-4 text-sm text-gray-700 leading-relaxed">
      <Info size={18} className="shrink-0 text-[#01A3DB] mt-0.5" aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}

export default function FindLeaderPage() {
  const restored = readPersisted();
  const [step, setStep] = useState<number>(restored?.step ?? 1);
  const [intake, setIntake] = useState<IntakeState>(
    restored
      ? {
          ...initialIntake,
          practiceArea: restored.practiceArea,
          companySize: restored.companySize,
          engagementModel: restored.engagementModel,
          skills: restored.skills ?? [],
          startTiming: restored.startTiming,
        }
      : initialIntake,
  );
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  // Rebuild the history stack [1..step] so browser back and the on-screen back
  // both step backward through the flow. On Step 1, back exits to wherever the
  // visitor came from. Runs once on mount.
  useEffect(() => {
    trackFlowEvent('find_leader_started');
    try {
      window.history.replaceState({ flowStep: 1 }, '');
      for (let s = 2; s <= step; s++) window.history.pushState({ flowStep: s }, '');
    } catch {
      // history unavailable; on-screen back still works via setStep fallback.
    }
    const onPop = (e: PopStateEvent) => {
      const fs = (e.state as { flowStep?: number } | null)?.flowStep;
      if (typeof fs === 'number') setStep(fs);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist non-sensitive progress on change.
  useEffect(() => {
    if (submitted) return;
    try {
      const data: Persisted = {
        step,
        practiceArea: intake.practiceArea,
        companySize: intake.companySize,
        engagementModel: intake.engagementModel,
        skills: intake.skills,
        startTiming: intake.startTiming,
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // sessionStorage unavailable; progress simply won't survive a refresh.
    }
  }, [step, intake, submitted]);

  function advance(next: number) {
    try {
      window.history.pushState({ flowStep: next }, '');
    } catch {
      // ignore
    }
    setStep(next);
    trackFlowEvent('find_leader_step_completed', { step });
  }

  function goBack() {
    trackFlowEvent('find_leader_back_clicked', { step });
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      setStep((s) => Math.max(1, s - 1));
    }
  }

  function setContact(field: keyof ContactInfo, value: string) {
    setIntake((prev) => ({ ...prev, contact: { ...prev.contact, [field]: value } }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return; // bot
    setIsSubmitting(true);
    setError(null);
    const c = intake.contact;
    try {
      await recordLead({
        source: 'contact_form',
        email: c.workEmail,
        name: `${c.firstName} ${c.lastName}`.trim(),
        company: c.companyName || undefined,
        phone: c.phone || undefined,
        reason: `Find a Leader: ${intake.practiceArea ?? 'Not specified'}`,
        page_url: window.location.href,
        message: buildMessage(intake),
      });
      clearPersisted();
      setSubmitted(true);
      trackFlowEvent('find_leader_submitted', {
        practiceArea: intake.practiceArea ?? '',
        engagementModel: intake.engagementModel ?? '',
        companySize: intake.companySize ?? '',
        startTiming: intake.startTiming ?? '',
      });
    } catch {
      setError(
        'We could not submit your leadership request. Please try again or contact New Wave directly.',
      );
      trackFlowEvent('find_leader_submission_failed');
    } finally {
      setIsSubmitting(false);
    }
  }

  const activeSkills =
    intake.practiceArea && intake.practiceArea in SKILLS_BY_PRACTICE_AREA
      ? SKILLS_BY_PRACTICE_AREA[intake.practiceArea as PracticeAreaName]
      : [];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-clip">
      <FlowHeader />
      <main className="flex-grow">
        {submitted ? (
          <SubmissionSuccess />
        ) : step === 1 ? (
          <FlowStepLayout
            step={1}
            total={TOTAL_STEPS}
            intro={
              <Callout>
                Thank you for your interest in a New Wave leader! Before we get started, we would like
                to ask a few questions to better understand your business needs.
              </Callout>
            }
            eyebrow="Find the Right Leader"
            heading="Where do you need experienced leadership?"
          >
            <div className="mt-6 space-y-3 sm:space-y-4">
              {PRACTICE_AREA_CARDS.map((area) => (
                <ChoiceCard
                  key={area.name}
                  title={area.name}
                  description={area.description}
                  icon={area.icon}
                  selected={intake.practiceArea === area.name}
                  onSelect={() => {
                    setIntake((prev) => ({
                      ...prev,
                      practiceArea: area.name,
                      skills: prev.practiceArea === area.name ? prev.skills : [],
                    }));
                    advance(2);
                  }}
                />
              ))}
            </div>
          </FlowStepLayout>
        ) : step === 2 ? (
          <FlowStepLayout step={2} total={TOTAL_STEPS} onBack={goBack} heading="How many people are employed by your company?">
            <div className="mt-6 space-y-3 sm:space-y-4">
              {COMPANY_SIZES.map((size) => (
                <ChoiceCard
                  key={size}
                  title={size}
                  selected={intake.companySize === size}
                  onSelect={() => {
                    setIntake((prev) => ({ ...prev, companySize: size }));
                    advance(3);
                  }}
                />
              ))}
            </div>
          </FlowStepLayout>
        ) : step === 3 ? (
          <FlowStepLayout step={3} total={TOTAL_STEPS} onBack={goBack} heading="What level of leadership capacity do you need?">
            <Callout>
              Not sure yet? New Wave engagements can be structured around the needs of your business
              and adjusted as the work evolves.
            </Callout>
            <div className="mt-6 space-y-3 sm:space-y-4">
              {ENGAGEMENT_MODELS.map((model) => (
                <ChoiceCard
                  key={model.name}
                  title={model.name}
                  description={model.description}
                  selected={intake.engagementModel === model.name}
                  onSelect={() => {
                    setIntake((prev) => ({ ...prev, engagementModel: model.name }));
                    advance(4);
                  }}
                />
              ))}
            </div>
          </FlowStepLayout>
        ) : step === 4 ? (
          <FlowStepLayout step={4} total={TOTAL_STEPS} onBack={goBack} heading="What experience would you like your New Wave leader to bring?">
            <Callout>
              Choose as many as are relevant. You can also skip this step and describe the situation in
              your own words later.
            </Callout>
            <div className="mt-6">
              <MultiSelectSkills
                skills={activeSkills}
                selected={intake.skills}
                onToggle={(skill) =>
                  setIntake((prev) => ({
                    ...prev,
                    skills: prev.skills.includes(skill)
                      ? prev.skills.filter((s) => s !== skill)
                      : [...prev.skills, skill],
                  }))
                }
                onContinue={() => advance(5)}
                onSkip={() => {
                  trackFlowEvent('find_leader_skills_skipped');
                  advance(5);
                }}
              />
            </div>
          </FlowStepLayout>
        ) : step === 5 ? (
          <FlowStepLayout step={5} total={TOTAL_STEPS} onBack={goBack} heading="When do you need the leader to start?">
            <Callout>
              Timing depends on the required experience, fit, availability, scope, and contracting.
            </Callout>
            <div className="mt-6 space-y-3 sm:space-y-4">
              {START_TIMINGS.map((timing) => (
                <ChoiceCard
                  key={timing}
                  title={timing}
                  selected={intake.startTiming === timing}
                  onSelect={() => {
                    setIntake((prev) => ({ ...prev, startTiming: timing }));
                    advance(6);
                  }}
                />
              ))}
            </div>
          </FlowStepLayout>
        ) : (
          <FlowStepLayout step={6} total={TOTAL_STEPS} onBack={goBack} heading="Let's Connect You With the Right Leader">
            <ContactStep
              intake={intake}
              contact={intake.contact}
              onChange={setContact}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              error={error}
              onEditAnswers={goBack}
              honeypot={honeypot}
              onHoneypotChange={setHoneypot}
            />
          </FlowStepLayout>
        )}
      </main>
    </div>
  );
}
