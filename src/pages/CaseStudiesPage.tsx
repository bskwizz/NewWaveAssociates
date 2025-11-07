import { useRef, useEffect, useState } from 'react';
import CTABar from '../components/CTABar';

interface CaseStudiesPageProps {
  onNavigate: (page: string) => void;
}

const caseStudies = [
  {
    title: 'Transforming Operations for Sustainable Growth',
    subtitle: 'How we helped a mid-market company scale efficiently',
    image: '/Pictures-5.png',
    opportunity: 'A rapidly growing technology company was facing operational bottlenecks that threatened their ability to scale. Revenue was increasing 40% year-over-year, but profitability was declining as headcount and costs grew faster than revenue.',
    approach: [
      'Conducted comprehensive operational assessment across all business units',
      'Identified redundant processes and automation opportunities',
      'Redesigned organizational structure to eliminate silos',
      'Implemented lean management principles and KPI dashboards',
      'Coached leadership team on sustainable growth practices'
    ],
    outcome: 'Within 12 months, the company reduced operational costs by 25% while maintaining growth trajectory. Employee satisfaction increased by 30% due to clearer roles and reduced redundancy. The leadership team now has real-time visibility into key metrics, enabling faster, data-driven decisions.',
    team: [
      { name: 'Craig Keller', image: '/Pictures-6.png' },
      { name: 'Bryan Skwirut', image: '/Pictures-3.png' }
    ]
  },
  {
    title: 'Strategic Repositioning in a Changing Market',
    subtitle: 'Helping a legacy brand find its next chapter',
    image: '/Pictures.png',
    opportunity: 'A 30-year-old consumer brand was losing market share to nimble competitors. Their core customer base was aging, and they struggled to connect with younger demographics while maintaining brand heritage.',
    approach: [
      'Deep-dive market analysis and competitive landscape assessment',
      'Customer segmentation and value proposition refinement',
      'Product portfolio optimization and innovation roadmap',
      'Brand refresh and go-to-market strategy development',
      'Cross-functional team workshops to drive alignment'
    ],
    outcome: 'The brand successfully launched three new product lines targeting younger consumers while retaining core customers. Market share stabilized and began growing again within 18 months. The company now has a clear innovation framework and consumer insights capability that drives ongoing product development.',
    team: [
      { name: 'Hunter New', image: '/Pictures-2.png' },
      { name: 'Jason Lee', image: '/Pictures-4.png' }
    ]
  }
];

export default function CaseStudiesPage({ onNavigate }: CaseStudiesPageProps) {
  const [fadeIn, setFadeIn] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="pt-16">
      <div ref={vantaRef} className="capabilities-hero" aria-label="Case Studies">
        <div className="capabilities-hero__inner hero-content">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-center h-full">
            <h1
              className={`text-5xl font-bold text-[#38495D] text-center transition-opacity duration-1000 ${
                fadeIn ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Case Studies
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 -mt-24 pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="mb-20">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('bg-gradient-to-br', 'from-[#01A3DB]', 'to-[#38495D]');
                      }
                    }}
                  />
                </div>

                <div className="p-12">
                  <h2 className="text-4xl font-bold text-[#38495D] mb-3">
                    {study.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    {study.subtitle}
                  </p>

                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-[#01A3DB] mb-4">
                      The Opportunity
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {study.opportunity}
                    </p>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-[#01A3DB] mb-4">
                      The Approach
                    </h3>
                    <ul className="space-y-3">
                      {study.approach.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-[#01A3DB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 leading-relaxed text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-[#01A3DB] mb-4">
                      The Outcome
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {study.outcome}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-xl font-bold text-[#38495D] mb-6">
                      Meet The Team
                    </h3>
                    <div className="flex gap-6">
                      {study.team.map((member, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-[#01A3DB] to-[#38495D]">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          </div>
                          <span className="text-gray-700 font-medium">{member.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <CTABar
            text="Have a unique challenge? Let's discuss how we can help."
            buttonText="Contact Us"
            onButtonClick={() => onNavigate('contact-us')}
          />
        </div>
      </div>
    </div>
  );
}
