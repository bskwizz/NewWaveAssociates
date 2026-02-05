import { Routes, Route, useParams } from 'react-router-dom';
import { useAppNavigate } from './hooks/useAppNavigate';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurServicesPage from './pages/OurServicesPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import InsightsPage from './pages/InsightsPage';
import InsightDetailPage from './pages/InsightDetailPage';
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

function WithNav({ Component }: { Component: React.ComponentType<{ onNavigate: (page: string) => void }> }) {
  const onNavigate = useAppNavigate();
  return <Component onNavigate={onNavigate} />;
}

function InsightDetailWrapper() {
  const { slug } = useParams<{ slug: string }>();
  const onNavigate = useAppNavigate();
  return <InsightDetailPage onNavigate={onNavigate} slug={slug!} />;
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<WithNav Component={HomePage} />} />
          <Route path="/services" element={<WithNav Component={OurServicesPage} />} />
          <Route path="/case-studies" element={<WithNav Component={CapabilitiesPage} />} />
          <Route path="/about-us" element={<WithNav Component={AboutUsPage} />} />
          <Route path="/insights" element={<WithNav Component={InsightsPage} />} />
          <Route path="/insights/:slug" element={<InsightDetailWrapper />} />
          <Route path="/contact-us" element={<WithNav Component={ContactUsPage} />} />

          <Route path="/case-study-pmo" element={<WithNav Component={PMOCaseStudy} />} />
          <Route path="/case-study-operating-model" element={<WithNav Component={OperatingModelCaseStudy} />} />
          <Route path="/case-study-pricing" element={<WithNav Component={PricingCaseStudy} />} />
          <Route path="/case-study-merger" element={<WithNav Component={MergerCaseStudy} />} />
          <Route path="/case-study-data" element={<WithNav Component={DataInsightsCaseStudy} />} />
          <Route path="/case-study-platform" element={<WithNav Component={PlatformModernizationCaseStudy} />} />
          <Route path="/case-study-ai" element={<WithNav Component={AICaseStudy} />} />
          <Route path="/case-study-gtm" element={<WithNav Component={GTMCaseStudy} />} />
          <Route path="/case-study-labor" element={<WithNav Component={LaborStrategyCaseStudy} />} />
          <Route path="/case-study-sga" element={<WithNav Component={SGACaseStudy} />} />

          <Route path="/case-studies/automation-ap-makeover" element={<WithNav Component={APAutomationCaseStudy} />} />
          <Route path="/case-studies/automation-ar-acceleration" element={<WithNav Component={ARAutomationCaseStudy} />} />
          <Route path="/case-studies/gtm-pricing-packaging" element={<WithNav Component={PricingPackagingCaseStudy} />} />
          <Route path="/case-studies/gtm-allbound-model" element={<WithNav Component={AllboundGTMCaseStudy} />} />
          <Route path="/case-studies/gtm-vertical-incubation" element={<WithNav Component={VerticalIncubationCaseStudy} />} />
          <Route path="/case-studies/gtm-revenue-visibility" element={<WithNav Component={RevenueVisibilityCaseStudy} />} />
          <Route path="/case-studies/integration-multisite-system" element={<WithNav Component={MultisiteSystemIntegrationCaseStudy} />} />
          <Route path="/case-studies/integration-partnership-transition" element={<WithNav Component={PartnershipTransitionCaseStudy} />} />
          <Route path="/case-studies/integration-agreements-standardization" element={<WithNav Component={AgreementsStandardizationCaseStudy} />} />
          <Route path="/case-studies/integration-catalog-rationalization" element={<WithNav Component={CatalogRationalizationCaseStudy} />} />
          <Route path="/case-studies/integration-techstack-bi" element={<WithNav Component={TechStackBICaseStudy} />} />
          <Route path="/case-studies/labor-itmsp-offshoring" element={<WithNav Component={ITMSPOffshoringCaseStudy} />} />
          <Route path="/case-studies/labor-healthcare-offshoring" element={<WithNav Component={HealthcareOffshoringCaseStudy} />} />
          <Route path="/case-studies/labor-healthcare-review" element={<WithNav Component={HealthcareOrganizationReviewCaseStudy} />} />
          <Route path="/case-studies/sga-subcontracting-capture" element={<WithNav Component={SubcontractingCaptureCaseStudy} />} />
          <Route path="/case-studies/sga-virtual-card" element={<WithNav Component={VirtualCardCaseStudy} />} />

          <Route path="/hub-transformation-office" element={<WithNav Component={TransformationOfficeHub} />} />
          <Route path="/hub-gtm-growth" element={<WithNav Component={GTMGrowthHub} />} />
          <Route path="/hub-integration-consolidation" element={<WithNav Component={IntegrationConsolidationHub} />} />
          <Route path="/hub-labor-offshoring" element={<WithNav Component={LaborOffshoringHub} />} />
          <Route path="/hub-sga-optimization" element={<WithNav Component={SGAOptimizationHub} />} />
          <Route path="/hub-ai-automation" element={<WithNav Component={AIAutomationHub} />} />

          <Route path="*" element={<WithNav Component={HomePage} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
