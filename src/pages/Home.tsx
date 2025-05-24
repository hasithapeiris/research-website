import React from "react";
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
      <CallToAction />
    </div>
  );
};

export default Home;
