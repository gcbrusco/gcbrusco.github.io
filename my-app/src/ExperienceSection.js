import React from "react";
import "./App.css";
import Section from "./Section";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

function ExperienceSection() {
  return (
    <Section id="experience" imageSrc="/nyc.png" title="EXPERIENCE">
      <h3> INTERNSHIPS & PART-TIME </h3>
      When I was still pursuing my degree at Notre Dame, I interned at two
      companies: Engineering Tomorrow and Capital One. During the school year, I
      worked part-time for ET while also working as an Undergraduate Teaching
      assistant and GGL Discussion Leader. Three jobs plus a full Notre Dame
      courseload... not the best idea.{" "}
      <Tabs>
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="active-tab">
            Capital One{" "}
          </Tab>{" "}
          <Tab className="custom-tab" selectedClassName="active-tab">
            Engineering Tomorrow{" "}
          </Tab>{" "}
          <Tab className="custom-tab" selectedClassName="active-tab">
            Teaching Assistant{" "}
          </Tab>{" "}
        </TabList>{" "}
        <TabPanel>
          <ul>
            <li>
              {" "}
              Technology Development Program Intern 2022, Retail Bank Tech.{" "}
            </li>
            <li>
              {" "}
              Developed an iOS application using Swift and TypeScript to
              streamline the customer check-in process, aiming to reduce the 40%
              of total time customer wait time at bank locations.{" "}
            </li>
            <li>
              {" "}
              Planned to be deployed after internship across 334 Capital One
              branches, with an expected 2,000+ application launches per branch
              per month.
            </li>
          </ul>
        </TabPanel>{" "}
        <TabPanel>
          <ul>
            <li>
              {" "}
              Collaborated with professional engineers to create coursework for
              prospective engineering students covering a variety of topics,
              specializing in Arduino application development in C/C++.{" "}
            </li>
            <li>
              {" "}
              Spear-headed the Hybrid coursework re-model during Winter
              internship in 2020. Since then, the labwork created at ET has
              reached over 750K students across all 50 states.{" "}
            </li>
            <li>
              {" "}
              Worked as a college mentor to dozens of prospective engineering
              students, hosting Q&A sessions and providing guidance on the
              college application process.
            </li>
            <li>
              {" "}
              Re-joining ET as a Keynote Speaker for "Software Engineering Day"
              in January 2025.
            </li>
          </ul>
        </TabPanel>{" "}
        <TabPanel>
          <ul>
            <li>
              {" "}
              Undergraduate Teaching Assistant for CSE 34872 Programming
              Challenges.{" "}
            </li>
            <li>
              {" "}
              Course was a Computer Science elective at Notre Dame focused on
              data structures, algorithms, and problem-solving.
            </li>
            <li>
              {" "}
              Hosted office hours, graded assignments, and held review sessions.
            </li>
          </ul>
        </TabPanel>{" "}
      </Tabs>{" "}
      <h3> FULL-TIME </h3> A slender section for now, but I'm sure it will grow
      in time...{" "}
      <Tabs>
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="active-tab">
            Capital One{" "}
          </Tab>{" "}
          <Tab className="custom-tab" selectedClassName="active-tab">
            The Next Step...{" "}
          </Tab>{" "}
        </TabList>{" "}
        <TabPanel>
          <ul>
            <li>
              {" "}
              Supported design and development of a new customer portal,
              implementing a micro-frontend architecture with React-based
              frontend and AWS infrastructure.{" "}
            </li>
            <li>
              {" "}
              Developed a REST API using AWS Lambda, TypeScript, and Fastify to
              deliver identity services, leveraging OpenFGA for RBAC
              authorization and integrating Auth0 and an internal API for
              dual-identity authentication.
            </li>
            <li>
              {" "}
              Earned AWS Solutions Architect Certification and resolved
              vulnerabilities in AWS services, using an internal CI/CD pipeline
              for streamlined deployments.
            </li>
          </ul>
        </TabPanel>{" "}
        <TabPanel>... to be determined ... </TabPanel>{" "}
      </Tabs>{" "}
    </Section>
  );
}

export default ExperienceSection;
