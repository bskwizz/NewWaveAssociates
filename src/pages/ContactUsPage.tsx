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
      <h1 className="sr-only">Contact New Wave Associates</h1>
      <div className="pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-14 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 items-start">
            <div className="w-full md:w-[30%] md:flex-shrink-0">
              <div className="inline-block mb-2">
                <div>
                  <p className="text-black text-xs sm:text-sm lg:text-base font-bold tracking-[0.2em] uppercase mb-2" style={{
                    letterSpacing: '0.25em'
                  }}>
                    WE WOULD LOVE
                    <br />
                    TO HEAR FROM YOU
                  </p>
                  <div className="h-[2px] bg-[#f05e00]"></div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4 sm:mt-5 lg:mt-6 mb-6 sm:mb-7 lg:mb-8">
                Please let us know if you have a question, want to leave a comment, or would like further information about New Wave Associates.
              </p>

              <div className="space-y-5 sm:space-y-6">
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

            <div className="w-full md:w-[70%] md:flex-shrink-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
