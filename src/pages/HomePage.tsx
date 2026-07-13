import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import LogoScroller from '../components/LogoScroller';
import HeroRotator from '../components/HeroRotator';
import NextWaveHero from '../components/NextWaveHero';
import {
  Package, Handshake, TrendingUp, Workflow, ClipboardList, GitMerge,
  Target, Award, Zap, SlidersHorizontal,
  UserMinus, UserPlus, Activity, Rocket, Combine, Blocks,
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';
import { getAllPublishedInsights, Insight } from '../services/insightsService';

// Cards for the "Why Companies Choose New Wave" section.
const values = [
  {
    icon: Target,
    title: 'We Own the Outcome',
    description: 'We take responsibility for execution and results, not just recommendations.',
  },
  {
    icon: Award,
    title: 'We Have Been There',
    description: 'Our professionals bring real executive and functional leadership experience, not just advisory experience.',
  },
  {
    icon: Zap,
    title: 'Ready When You Are',
    description: 'Fill critical leadership gaps quickly without waiting through a lengthy executive search.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Flexible by Design',
    description: 'Engage leadership on a fractional, interim, or project basis as your needs evolve.',
  },
];

// Informational cards for the "Executive Leadership, On Demand" section.
const services = [
  {
    icon: Package,
    title: 'Procurement',
    description: 'Fractional procurement executives who reduce costs, strengthen supplier partnerships, and build scalable procurement organizations.',
  },
  {
    icon: Handshake,
    title: 'Strategic Sourcing',
    description: 'Experienced sourcing leaders who negotiate complex agreements, improve supplier performance, and deliver measurable savings.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Operations',
    description: 'Revenue operators who improve forecasting, sales execution, CRM performance, and commercial operations.',
  },
  {
    icon: Workflow,
    title: 'Transformation Office',
    description: 'Experienced transformation leaders who establish governance, drive execution, and deliver enterprise change.',
  },
  {
    icon: ClipboardList,
    title: 'Project Management Office',
    description: 'PMO leaders who improve delivery predictability, portfolio governance, and executive visibility.',
  },
  {
    icon: GitMerge,
    title: 'M&A Integration',
    description: 'Operators who lead due diligence, integration planning, carve-outs, and post-close execution.',
  },
];

// Informational cards for the "When to Call New Wave" section.
const whenToCall = [
  {
    icon: UserMinus,
    title: 'A Key Leader Just Left',
    description: 'Maintain momentum and stability with an experienced interim leader while you determine the right long-term solution.',
  },
  {
    icon: UserPlus,
    title: 'You Need Leadership Before You Can Hire It',
    description: 'Access senior functional expertise without taking on the cost or commitment of a full-time executive.',
  },
  {
    icon: Activity,
    title: 'A Critical Initiative Is Falling Behind',
    description: 'Bring in an experienced operator to establish accountability, remove barriers, and restore execution.',
  },
  {
    icon: Rocket,
    title: 'Your Company Is Entering Its Next Stage of Growth',
    description: 'Add leadership capacity and operating discipline as the complexity of the business increases.',
  },
  {
    icon: Combine,
    title: 'You Are Integrating an Acquisition',
    description: 'Deploy experienced M&A leadership to coordinate decisions, manage dependencies, and accelerate value realization.',
  },
  {
    icon: Blocks,
    title: 'You Need to Build the Function',
    description: 'Set the strategy, establish the operating model, and build the foundation before making permanent hires.',
  },
];

export default function HomePage() {
  const [featured, setFeatured] = useState<Insight[]>([]);
  const [insightsLoaded, setInsightsLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    async function loadFeatured() {
      try {
        const data = await getAllPublishedInsights();
        if (active) setFeatured(data.slice(0, 3));
      } catch (e) {
        console.error('Failed to load featured insights:', e);
      } finally {
        if (active) setInsightsLoaded(true);
      }
    }
    loadFeatured();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="overflow-x-clip">
      <div className="hero relative overflow-x-clip bg-white">
        <PageHeader />

        {/* White band holding the "Your Next Wave" hero and the rotator/logos.
            The shaded treatment now starts at the sections below. */}
        <div className="relative overflow-x-clip bg-white">
          <h1 className="sr-only">
            New Wave Associates — Operational Transformation, Procurement & Revenue Operations Consulting
          </h1>

          <NextWaveHero />

          <div className="relative flex items-start pt-6 sm:pt-8 lg:pt-12">
          <div className="w-full flex flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
              <HeroRotator />
            </div>
            <div className="w-full flex items-center justify-center pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 lg:pb-12 overflow-hidden">
              <LogoScroller logos={[
                '/osg_logo.png',
                '/bridgeview_eye_logo.png',
                '/medius.png',
                '/neweratechnology.png',
                '/trustage.png',
                '/tenet_health_logo.png',
                '/hydrochem_logo.png',
                '/netsuite_logo.png',
                '/sentinel_logo.png',
              ]} />
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Executive Leadership, On Demand */}
      <Section background="gray">
        <SectionHeader
          label="Executive Leadership, On Demand."
          intro="We deploy experienced fractional and interim leaders who have successfully done the job before. Whether you need executive leadership for a critical function, an experienced operator to lead a transformation, or temporary leadership while you hire, New Wave provides deeply vetted professionals who step in quickly and own the outcome. Our expertise spans the critical business functions where experienced leadership creates the greatest impact."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              accent="blue"
            />
          ))}
        </div>
      </Section>

      {/* Why Companies Choose New Wave */}
      <Section background="white">
        <SectionHeader
          label="Operators. Not Consultants."
          intro="Every New Wave leader has sat in the seat before. We do not hand over recommendations and disappear. We step into critical leadership roles, take ownership, and stay accountable until results are delivered. Not all fractional and interim leadership is created equal. Here's what sets New Wave apart."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {values.map((value) => (
            <FeatureCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              accent="navy"
            />
          ))}
        </div>
      </Section>

      {/* When to Call New Wave */}
      <Section background="gray">
        <SectionHeader
          label="Critical Leadership Gaps Cannot Wait."
          intro="Whether you are navigating a leadership vacancy, accelerating a major initiative, or building a capability your organization does not yet have, New Wave provides experienced leaders who can step in and move the work forward. When the stakes are high and execution matters, this is where we shine."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {whenToCall.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              accent="orange"
            />
          ))}
        </div>

        {/* Closing CTA, centered within the grey section: the top margin matches
            the section's bottom padding (64 / 80 / 96px) so the CTA sits midway
            between the cards above and the end of the grey background below. */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#38495D] mb-2">
            Need experienced leadership now?
          </h3>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-7">
            We are ready when you are.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-[#f05e00] text-white text-sm font-semibold uppercase tracking-wide rounded-md hover:bg-[#d94f00] transition-all shadow-sm hover:shadow-md"
          >
            Meet New Wave
          </Link>
        </div>
      </Section>

      {/* Featured Insights */}
      <Section background="white" dataInsightsReady={insightsLoaded}>
        <SectionHeader
          label="Latest Insights"
          action={
            <Link to="/insights" className="text-sm font-semibold text-[#01A3DB] hover:underline whitespace-nowrap">
              View all →
            </Link>
          }
        />
        {featured.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {featured.map((insight) => (
              <Link
                key={insight.slug}
                to={`/insights/${insight.slug}`}
                className="group block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {insight.image_url && (
                  <img
                    src={insight.image_url}
                    alt={insight.title}
                    className="w-full h-44 object-cover"
                  />
                )}
                <div className="p-5 sm:p-6">
                  {insight.category && (
                    <span className="inline-block px-3 py-1 bg-[#01A3DB] text-white text-xs font-semibold rounded-full uppercase tracking-wide mb-3">
                      {insight.category}
                    </span>
                  )}
                  <h3 className="text-base sm:text-lg font-bold text-[#38495D] leading-snug mb-2 group-hover:text-[#01A3DB] transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                    {insight.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            Read our latest thinking on the{' '}
            <Link to="/insights" className="text-[#01A3DB] hover:underline">Insights page</Link>.
          </p>
        )}
      </Section>

      {/* Get In Touch */}
      <Section background="gray">
        <SectionHeader label="Reach out to an Expert today" />
        <div className="max-w-3xl mx-auto">
          <ContactForm source="homepage" />
        </div>
      </Section>
    </div>
  );
}
