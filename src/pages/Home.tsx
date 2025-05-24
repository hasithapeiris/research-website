import React from "react";
import {
  ContactUs,
  Downloads,
  Footer,
  LiteratureSurvey,
  MainCarousel,
  MeetOurTeam,
  Methodology,
  Navbar,
  ProjectTimeline,
  ResearchGap,
  ResearchObjectives,
  ResearchProblemSolution,
  Technologies,
} from "../components";

const Home: React.FC = () => {
  return (
    <div>
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
      <Footer />
    </div>
  );
};

export default Home;
