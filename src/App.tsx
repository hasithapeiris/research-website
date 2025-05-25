import "./App.css";
import {
  CallToAction,
  ContactUs,
  Downloads,
  LiteratureSurvey,
  MainCarousel,
  MeetOurTeam,
  Methodology,
  Navbar,
  ProjectTimeline,
  ResearchGap,
  ResearchObjectives,
  ResearchProblemSolution,
  ScrollToTop,
  Technologies,
} from "./components";

const App: React.FC = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <MainCarousel />
      <LiteratureSurvey />
      <ResearchGap />
      <ResearchProblemSolution />
      <ResearchObjectives />
      <Methodology />
      <Technologies />
      <ProjectTimeline />
      <Downloads />
      <MeetOurTeam />
      <ContactUs />
      <CallToAction />
    </div>
  );
};

export default App;
