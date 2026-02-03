import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurServicesPage from './pages/OurServicesPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import PMOCaseStudy from './pages/case-studies/PMOCaseStudy';
import OperatingModelCaseStudy from './pages/case-studies/OperatingModelCaseStudy';
import PricingCaseStudy from './pages/case-studies/PricingCaseStudy';
import MergerCaseStudy from './pages/case-studies/MergerCaseStudy';
import DataInsightsCaseStudy from './pages/case-studies/DataInsightsCaseStudy';
import PlatformModernizationCaseStudy from './pages/case-studies/PlatformModernizationCaseStudy';
import AICaseStudy from './pages/case-studies/AICaseStudy';
import GTMCaseStudy from './pages/case-studies/GTMCaseStudy';
import LaborStrategyCaseStudy from './pages/case-studies/LaborStrategyCaseStudy';
import SGACaseStudy from './pages/case-studies/SGACaseStudy';
import APAutomationCaseStudy from './pages/case-studies/APAutomationCaseStudy';
import ARAutomationCaseStudy from './pages/case-studies/ARAutomationCaseStudy';
import PricingPackagingCaseStudy from './pages/case-studies/PricingPackagingCaseStudy';
import AllboundGTMCaseStudy from './pages/case-studies/AllboundGTMCaseStudy';
import VerticalIncubationCaseStudy from './pages/case-studies/VerticalIncubationCaseStudy';
import RevenueVisibilityCaseStudy from './pages/case-studies/RevenueVisibilityCaseStudy';
import MultisiteSystemIntegrationCaseStudy from './pages/case-studies/MultisiteSystemIntegrationCaseStudy';
import PartnershipTransitionCaseStudy from './pages/case-studies/PartnershipTransitionCaseStudy';
import AgreementsStandardizationCaseStudy from './pages/case-studies/AgreementsStandardizationCaseStudy';
import CatalogRationalizationCaseStudy from './pages/case-studies/CatalogRationalizationCaseStudy';
import TechStackBICaseStudy from './pages/case-studies/TechStackBICaseStudy';
import ITMSPOffshoringCaseStudy from './pages/case-studies/ITMSPOffshoringCaseStudy';
import HealthcareOffshoringCaseStudy from './pages/case-studies/HealthcareOffshoringCaseStudy';
import HealthcareOrganizationReviewCaseStudy from './pages/case-studies/HealthcareOrganizationReviewCaseStudy';
import SubcontractingCaptureCaseStudy from './pages/case-studies/SubcontractingCaptureCaseStudy';
import VirtualCardCaseStudy from './pages/case-studies/VirtualCardCaseStudy';
import TransformationOfficeHub from './pages/hubs/TransformationOfficeHub';
import GTMGrowthHub from './pages/hubs/GTMGrowthHub';
import IntegrationConsolidationHub from './pages/hubs/IntegrationConsolidationHub';
import LaborOffshoringHub from './pages/hubs/LaborOffshoringHub';
import SGAOptimizationHub from './pages/hubs/SGAOptimizationHub';
import AIAutomationHub from './pages/hubs/AIAutomationHub';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [capabilitiesScrollPosition, setCapabilitiesScrollPosition] = useState(0);

  useEffect(() => {
    if (currentPage === 'case-studies' && capabilitiesScrollPosition > 0) {
      setTimeout(() => {
        window.scrollTo({ top: capabilitiesScrollPosition, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    if (currentPage === 'case-studies' && page.startsWith('hub-')) {
      setCapabilitiesScrollPosition(window.scrollY);
    } else if (page !== 'case-studies') {
      setCapabilitiesScrollPosition(0);
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'our-services':
        return <OurServicesPage onNavigate={handleNavigate} />;
      case 'case-studies':
        return <CapabilitiesPage onNavigate={handleNavigate} />;
      case 'about-us':
        return <AboutUsPage onNavigate={handleNavigate} />;
      case 'contact-us':
        return <ContactUsPage onNavigate={handleNavigate} />;
      case 'case-study-pmo':
        return <PMOCaseStudy onNavigate={handleNavigate} />;
      case 'case-study-operating-model':
        return <OperatingModelCaseStudy onNavigate={handleNavigate} />;
      case 'case-study-pricing':
        return <PricingCaseStudy onNavigate={handleNavigate} />;
      case 'case-study-merger':
        return <MergerCaseStudy onNavigate={handleNavigate} />;
      case 'case-study-data':
        return <DataInsightsCaseStudy onNavigate={handleNavigate} />;
      case 'case-study-platform':
        return <PlatformModernizationCaseStudy onNavigate={handleNavigate} />;
      case 'case-study-ai':
        return <AICaseStudy onNavigate={handleNavigate} />;
      case 'case-study-gtm':
        return <GTMCaseStudy onNavigate={handleNavigate} />;
      case 'case-study-labor':
        return <LaborStrategyCaseStudy onNavigate={handleNavigate} />;
      case 'case-study-sga':
        return <SGACaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/automation-ap-makeover':
        return <APAutomationCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/automation-ar-acceleration':
        return <ARAutomationCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/gtm-pricing-packaging':
        return <PricingPackagingCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/gtm-allbound-model':
        return <AllboundGTMCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/gtm-vertical-incubation':
        return <VerticalIncubationCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/gtm-revenue-visibility':
        return <RevenueVisibilityCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/integration-multisite-system':
        return <MultisiteSystemIntegrationCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/integration-partnership-transition':
        return <PartnershipTransitionCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/integration-agreements-standardization':
        return <AgreementsStandardizationCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/integration-catalog-rationalization':
        return <CatalogRationalizationCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/integration-techstack-bi':
        return <TechStackBICaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/labor-itmsp-offshoring':
        return <ITMSPOffshoringCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/labor-healthcare-offshoring':
        return <HealthcareOffshoringCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/labor-healthcare-review':
        return <HealthcareOrganizationReviewCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/sga-subcontracting-capture':
        return <SubcontractingCaptureCaseStudy onNavigate={handleNavigate} />;
      case 'case-studies/sga-virtual-card':
        return <VirtualCardCaseStudy onNavigate={handleNavigate} />;
      case 'hub-transformation-office':
        return <TransformationOfficeHub onNavigate={handleNavigate} />;
      case 'hub-gtm-growth':
        return <GTMGrowthHub onNavigate={handleNavigate} />;
      case 'hub-integration-consolidation':
        return <IntegrationConsolidationHub onNavigate={handleNavigate} />;
      case 'hub-labor-offshoring':
        return <LaborOffshoringHub onNavigate={handleNavigate} />;
      case 'hub-sga-optimization':
        return <SGAOptimizationHub onNavigate={handleNavigate} />;
      case 'hub-ai-automation':
        return <AIAutomationHub onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
