import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import Navigation from "./components/Navigation";
import Home from "./components/home_sections/Home.js";

import About from "./components/home_sections/About.js";
import Footer from "./components/Footer";
import { Fragment } from "react";
import ScrollToTop from "./components/ScrollToTop";
import GenericNotFound from "./components/GenericNotFound";

import Usecases from "./components/home_sections/Solutions.js";
import Features from "./components/home_sections/Features.js";
import Mission from "./components/home_sections/Mission.js";

import UsecasesExtenstion from "./components/home_sections/UsecasesExtenstion.";
import Recognition from "./components/home_sections/Recognition.js";
import ForFI from "./ForFI";

import { Routes, Route } from "react-router-dom";
import GetInTouch from "./GetInTouch";
import Start from "./Start";
import ForBusiness from "./ForBusiness";
import Pfm from "./Pfm";
import { Context } from "./components/Wrapper";
import "./fonts/IBMPlexSansArabic-Medium.ttf";
import SolutionB2BAPIGateway from "./SolutionB2BAPIGateway.js";
import ProductGuranteeApp from "./ProductGuranteeApp.js";
import GenericUnderConstruction from "./components/GenericUnderConstruction.js";
import LeaproExistingUser from "./LeaproExistingUser.js";

import ProductFinanceApp from "./ProductFinanceApp.js";
import ProductFinanceAppApplication from "./ProductFinanceAppApplication .js";
import ProductFinanceAppApplicationEndy from "./ProductFinanceAppApplicationEndy.js";
import './App.css';
import ServiceBTTransformation from "./ServiceBTTransformation.js";
import ServiceCustomizedSolutions from "./ServiceCustomizedSolutions.js";
import SolutionB2BClientConnector from "./SolutionB2BClientConnector.js";
import SolutionB2B2CInfrastructure from "./SolutionB2B2CInfrastructure.js";
import SolutionOBTPPEnablement from "./SolutionOBTPPEnablement.js";
import SolutionOBStreamlineLGIssuance from "./SolutionOBStreamlineLGIssuance.js";
import SolutionOBStreamlineLGRequest from "./SolutionOBStreamlineLGRequest.js";
import SolutionOBStreamlineCustomerOnboarding from "./SolutionOBStreamlineCustomerOnboarding.js";
import SolutionOBStreamlineFinancialVerification from "./SolutionOBStreamlineFinancialVerification.js";
import SolutionOBStreamlineBankAccountVerification from "./SolutionOBStreamlineBankAccountVerification.js";
import SolutionOBAccelerateFinanceDecisioning from "./SolutionOBAccelerateFinanceDecisioning.js";
import SolutionOBPaymentFromBankAccount from "./SolutionOBPaymentFromBankAccount.js";
import SolutionBusinessAppsCashFlowManagement from "./SolutionBusinessAppsCashFlowManagement.js";
import SolutionBusinessAppsBankReconciliation from "./SolutionBusinessAppsBankReconciliation.js";
import SolutionBusinessAppsAnalyticsAndInsights from "./SolutionBusinessAppsAnalyticsAndInsights.js";
import SolutionBusinessAppsATMReplenishment from "./SolutionBusinessAppsATMReplenishment.js";
import ProductOBClientConnector from "./ProductOBClientConnector.js";
import ProductGuranteeLink from "./ProductGuranteeLink.js";
import Blog from "./Blog.js";
import BlogTransformationChallenge from "./blogs/BlogTransformationChallenge.js";
import BlogB2BIntegrationVsOpenBanking from "./blogs/BlogB2BIntegrationVsOpenBanking.js";
import BlogRedefiningFinance from "./blogs/BlogRedefiningFinance.js";
import BlogLetterOfGuaranteeFuture from "./blogs/BlogLetterOfGuaranteeFuture.js";

function App(props) {
  return (
    <Fragment>
      <GlobalStyle lang={props.lang === "en" ? "en" : "ar"}/>
      <ThemeProvider theme={light}>
        <Navigation direction={props.lang === "en" ? "ltr" : "rtl"} />

        <main>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/pfm/:lang" element={<Pfm />} />
            <Route path="/pfm/" element={<Pfm />} />

            <Route path="/for-fi" element={<ForFI />} />
            <Route path="/for-business" element={<ForBusiness />} />

            <Route path="/blog" element={<Blog />} />

            <Route path="/service-bt-transformation" element={<ServiceBTTransformation />} />
            <Route path="/service-customized-solutions" element={<ServiceCustomizedSolutions />} />

            <Route path="/solution-b2b-api-gateway" element={<SolutionB2BAPIGateway />} />
            <Route path="/solution-b2b-client-connector" element={<SolutionB2BClientConnector />} />
            <Route path="/solution-b2b2c-infrastructure" element={<SolutionB2B2CInfrastructure />} />


            <Route path="/solution-ob-ttp-enablement" element={<SolutionOBTPPEnablement />} />
            <Route path="/solution-ob-streamline-lg-issuance" element={<SolutionOBStreamlineLGIssuance />} />
            <Route path="/solution-ob-streamline-lg-request" element={<SolutionOBStreamlineLGRequest />} />
            <Route path="/solution-ob-streamline-customer-onboarding" element={<SolutionOBStreamlineCustomerOnboarding />} />
            <Route path="/solution-ob-streamline-financial-verification" element={<SolutionOBStreamlineFinancialVerification />} />
            <Route path="/solution-ob-streamline-bank-account-verification" element={<SolutionOBStreamlineBankAccountVerification />} />
            <Route path="/solution-ob-accelerate-finance-decisioning" element={<SolutionOBAccelerateFinanceDecisioning />} />
            <Route path="/solution-ob-payment-from-bank-account" element={<SolutionOBPaymentFromBankAccount />} />

            <Route path="/solution-business-apps-cash-flow-management" element={<SolutionBusinessAppsCashFlowManagement />} />
            <Route path="/solution-business-apps-bank-reconciliation" element={<SolutionBusinessAppsBankReconciliation />} />
            <Route path="/solution-business-apps-analytics-and-insights" element={<SolutionBusinessAppsAnalyticsAndInsights />} />
            <Route path="/solution-business-apps-atm-replenishment" element={<SolutionBusinessAppsATMReplenishment />} />


            <Route path="/product-guarantee-app" element={<ProductGuranteeApp />} />
            <Route path="/product-guarantee-link" element={<ProductGuranteeLink />} />
            <Route path="/product-ob-client-connector" element={<ProductOBClientConnector />} />
            <Route path="/product-finance-app" element={<ProductFinanceApp />} />
            <Route path="/finance-application" element={<ProductFinanceAppApplication />} />
            <Route path="/finance-application-end" element={<ProductFinanceAppApplicationEndy />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<GetInTouch />} />
            <Route path="/commingSoon" element={<GenericUnderConstruction />} />

            <Route path="/blog-transformation-challenge" element={<BlogTransformationChallenge />} />
            <Route path="/blog-b2b-vs-openbanking" element={<BlogB2BIntegrationVsOpenBanking />} />
            <Route path="/blog-finance-in-digital-era" element={<BlogRedefiningFinance />} />
            <Route path="/blog-letter-of-guarantee-future" element={<BlogLetterOfGuaranteeFuture />} />


            <Route path="/lg_request/*" element={<LeaproExistingUser />} />
            <Route path="*" element={<GenericNotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
