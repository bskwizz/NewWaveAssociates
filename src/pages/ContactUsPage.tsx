import { Mail, Linkedin } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

interface ContactUsPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactUsPage({ onNavigate }: ContactUsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader />

      {/* Centered hero banner, sized to match the homepage headline. */}
      <section className="pt-8 sm:pt-10 lg:pt-14 pb-2 sm:pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#38495D] leading-tight">
            Contact the <span className="text-[#f05e00]">Experts</span>
          </h1>
        </div>
      </section>

      <div className="pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-14 lg:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
          <ContactForm />

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-start gap-3 sm:gap-4">
              <Mail className="text-[#01A3DB] mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-[#38495D] mb-1 text-sm sm:text-base">Email</p>
                <a
                  href="mailto:hello@newwaveassociates.com"
                  className="text-[#01A3DB] hover:text-[#0192C5] transition-colors text-sm sm:text-base"
                >
                  hello@newwaveassociates.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <Linkedin className="text-[#01A3DB] mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-[#38495D] mb-1 text-sm sm:text-base">Find Us Online</p>
                <a
                  href="https://www.linkedin.com/company/new-wave-associates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#01A3DB] hover:text-[#0192C5] transition-colors text-sm sm:text-base"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
