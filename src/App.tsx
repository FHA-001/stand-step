import { type ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import PrioritiesPage from '@/pages/PrioritiesPage';
import SciencePage from '@/pages/SciencePage';
import TechnologyPage from '@/pages/TechnologyPage';
import EngineeringPage from '@/pages/EngineeringPage';
import PerspectivesPage from '@/pages/PerspectivesPage';
import CommitteesPage from '@/pages/CommitteesPage';
import CommitteeDetailPage from '@/pages/CommitteeDetailPage';
import PeoplePage from '@/pages/PeoplePage';
import ProjectsPage from '@/pages/ProjectsPage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import KnowledgeHubPage from '@/pages/KnowledgeHubPage';
import GetInvolvedPage from '@/pages/GetInvolvedPage';
import NewsEventsPage from '@/pages/NewsEventsPage';
import ContactPage from '@/pages/ContactPage';

const queryClient = new QueryClient();

function AppContent() {
  useEffect(() => { document.title = 'STAND & STEP — Knowledge into action'; const description = document.querySelector('meta[name="description"]') || document.createElement('meta'); description.setAttribute('name', 'description'); description.setAttribute('content', 'An institutional platform connecting expertise to practical development action across Northern Nigeria.'); document.head.appendChild(description); }, []);
  return <><Header /><main><Switch><Route path="/" component={HomePage} /><Route path="/about" component={AboutPage} /><Route path="/priorities/science" component={SciencePage} /><Route path="/priorities/technology" component={TechnologyPage} /><Route path="/priorities/engineering" component={EngineeringPage} /><Route path="/priorities/perspectives" component={PerspectivesPage} /><Route path="/priorities" component={PrioritiesPage} /><Route path="/committees/:slug" component={CommitteeDetailPage} /><Route path="/committees" component={CommitteesPage} /><Route path="/people" component={PeoplePage} /><Route path="/projects/:slug" component={ProjectDetailPage} /><Route path="/projects" component={ProjectsPage} /><Route path="/knowledge-hub" component={KnowledgeHubPage} /><Route path="/get-involved" component={GetInvolvedPage} /><Route path="/news-events" component={NewsEventsPage} /><Route path="/contact" component={ContactPage} /><Route component={NotFound} /></Switch></main><Footer /></>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) { const [location] = useLocation(); return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>; }
function App() { return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><RoutedErrorBoundary><AppContent /></RoutedErrorBoundary></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>; }
export default App;