import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FlywheelPage from './pages/FlywheelPage';
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
import AutomationGovernanceCaseStudy from './pages/case-studies/AutomationGovernanceCaseStudy';
import PricingPackagingCaseStudy from './pages/case-studies/PricingPackagingCaseStudy';
import AllboundGTMCaseStudy from './pages/case-studies/AllboundGTMCaseStudy';
import VerticalIncubationCaseStudy from './pages/case-studies/VerticalIncubationCaseStudy';
import RevenueVisibilityCaseStudy from './pages/case-studies/RevenueVisibilityCaseStudy';
import MultisiteSystemIntegrationCaseStudy from './pages/case-studies/MultisiteSystemIntegrationCaseStudy';
import PartnershipTransitionCaseStudy from './pages/case-studies/PartnershipTransitionCaseStudy';
import AgreementsStandardizationCaseStudy from './pages/case-studies/AgreementsStandardizationCaseStudy';
import CatalogRationalizationCaseStudy from './pages/case-studies/CatalogRationalizationCaseStudy';
import TechStackBICaseStudy from './pages/case-studies/TechStackBICaseStudy';
import TransformationOfficeHub from './pages/hubs/TransformationOfficeHub';
import GTMGrowthHub from './pages/hubs/GTMGrowthHub';
import IntegrationConsolidationHub from './pages/hubs/IntegrationConsolidationHub';
import LaborOffshoringHub from './pages/hubs/LaborOffshoringHub';
import SGAOptimizationHub from './pages/hubs/SGAOptimizationHub';
import AIAutomationHub from './pages/hubs/AIAutomationHub';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'flywheel':
        return <FlywheelPage />;
      case 'capabilities':
        return <CapabilitiesPage onNavigate={setCurrentPage} />;
      case 'about-us':
        return <AboutUsPage onNavigate={setCurrentPage} />;
      case 'contact-us':
        return <ContactUsPage />;
      case 'case-study-pmo':
        return <PMOCaseStudy onNavigate={setCurrentPage} />;
      case 'case-study-operating-model':
        return <OperatingModelCaseStudy onNavigate={setCurrentPage} />;
      case 'case-study-pricing':
        return <PricingCaseStudy onNavigate={setCurrentPage} />;
      case 'case-study-merger':
        return <MergerCaseStudy onNavigate={setCurrentPage} />;
      case 'case-study-data':
        return <DataInsightsCaseStudy onNavigate={setCurrentPage} />;
      case 'case-study-platform':
        return <PlatformModernizationCaseStudy onNavigate={setCurrentPage} />;
      case 'case-study-ai':
        return <AICaseStudy onNavigate={setCurrentPage} />;
      case 'case-study-gtm':
        return <GTMCaseStudy onNavigate={setCurrentPage} />;
      case 'case-study-labor':
        return <LaborStrategyCaseStudy onNavigate={setCurrentPage} />;
      case 'case-study-sga':
        return <SGACaseStudy onNavigate={setCurrentPage} />;
      case 'case-studies/automation-ap-makeover':
        return <APAutomationCaseStudy onNavigate={setCurrentPage} />;
      case 'case-studies/automation-ar-acceleration':
        return <ARAutomationCaseStudy onNavigate={setCurrentPage} />;
      case 'case-studies/automation-governance':
        return <AutomationGovernanceCaseStudy onNavigate={setCurrentPage} />;
      case 'case-studies/gtm-pricing-packaging':
        return <PricingPackagingCaseStudy onNavigate={setCurrentPage} />;
      case 'case-studies/gtm-allbound-model':
        return <AllboundGTMCaseStudy onNavigate={setCurrentPage} />;
      case 'case-studies/gtm-vertical-incubation':
        return <VerticalIncubationCaseStudy onNavigate={setCurrentPage} />;
      case 'case-studies/gtm-revenue-visibility':
        return <RevenueVisibilityCaseStudy onNavigate={setCurrentPage} />;
      case 'case-studies/integration-multisite-system':
        return <MultisiteSystemIntegrationCaseStudy onNavigate={setCurrentPage} />;
      case 'case-studies/integration-partnership-transition':
        return <PartnershipTransitionCaseStudy onNavigate={setCurrentPage} />;
      case 'case-studies/integration-agreements-standardization':
        return <AgreementsStandardizationCaseStudy onNavigate={setCurrentPage} />;
      case 'case-studies/integration-catalog-rationalization':
        return <CatalogRationalizationCaseStudy onNavigate={setCurrentPage} />;
      case 'case-studies/integration-techstack-bi':
        return <TechStackBICaseStudy onNavigate={setCurrentPage} />;
      case 'hub-transformation-office':
        return <TransformationOfficeHub onNavigate={setCurrentPage} />;
      case 'hub-gtm-growth':
        return <GTMGrowthHub onNavigate={setCurrentPage} />;
      case 'hub-integration-consolidation':
        return <IntegrationConsolidationHub onNavigate={setCurrentPage} />;
      case 'hub-labor-offshoring':
        return <LaborOffshoringHub onNavigate={setCurrentPage} />;
      case 'hub-sga-optimization':
        return <SGAOptimizationHub onNavigate={setCurrentPage} />;
      case 'hub-ai-automation':
        return <AIAutomationHub onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
