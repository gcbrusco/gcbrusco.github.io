import React from "react";
import "./App.css";
import Section from "./Section";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

function EducationSection() {
  return (
    <Section id="education" imageSrc="/nd.png" title="EDUCATION">
      <h3> UNDERGRADUATE </h3>I graduated with Cum Laude Honors from{" "}
      <b> University of Notre Dame </b> in May 2023, majoring in Computer
      Science.During my time at Notre Dame, I mainly involved with three
      programs: Engineers Without Borders, God and the Good Life, and Study
      Abroad.{" "}
      <Tabs>
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="active-tab">
            Engineers Without Borders{" "}
          </Tab>{" "}
          <Tab className="custom-tab" selectedClassName="active-tab">
            God and the Good Life{" "}
          </Tab>{" "}
          <Tab className="custom-tab" selectedClassName="active-tab">
            University of Galway{" "}
          </Tab>{" "}
          <Tab className="custom-tab" selectedClassName="active-tab">
            Volunteering{" "}
          </Tab>{" "}
        </TabList>{" "}
        <TabPanel>
          <ul>
            <li>
              {" "}
              3-year member of the Engineers Without Borders, a club of
              engineers working to improve communities both foreign and
              domestic.{" "}
            </li>{" "}
            <li>
              {" "}
              Developed a web application for the City of South Bend that helps
              residents estimate potential tax savings from implementing Green
              Stormwater Infrastructure (GSI). The app features a questionnaire
              and an interactive map, allowing users to calculate the square
              footage of their property. Based on the South Bend GSI guidelines,
              it then provides an estimate of how much they could save on taxes.{" "}
            </li>{" "}
          </ul>{" "}
        </TabPanel>{" "}
        <TabPanel>
          <ul>
            <li>
              {" "}
              Served as a discussion leader for PHIL 10111: God and the Good
              Life, facilitating weekly discussions with a group of 15 students.{" "}
            </li>{" "}
            <li>
              {" "}
              Led conversations on key philosophy concepts and their connections
              to current events.{" "}
            </li>{" "}
            <li>
              {" "}
              Truly a highlight of my Notre Dame career, CS and philosphy are
              more related than you might think ...{" "}
              <a href="https://hbr.org/2024/04/why-engineers-should-study-philosophy">
                click here
              </a>{" "}
              if you need more proof...
            </li>{" "}
          </ul>{" "}
        </TabPanel>{" "}
        <TabPanel>
          {" "}
          <ul>
            <li> Studied abroad in Galway, Ireland in Spring 2022. </li>{" "}
            <li>
              {" "}
              Have you ever thought to yourself - who am I when nobody is
              watching? I answered that question for myself after being dropped
              in a foreign country, knowing absolutely no one... BEST EXPERIENCE
              OF MY LIFE.{" "}
            </li>{" "}
            <li>
              {" "}
              Took computer science courses, joined the NUIG swim team, and
              gallavanted around Ireland.
            </li>{" "}
          </ul>{" "}
        </TabPanel>{" "}
        <TabPanel>
          {" "}
          <ul>
            <li>
              {" "}
              Volunteered at the Robinson Community Center in South Bend, IN.{" "}
            </li>{" "}
            <li>
              {" "}
              Hosted a weekly Technology Class to teach senior citizens how to
              use the iPads that their grandkids bought them.{" "}
            </li>{" "}
          </ul>{" "}
        </TabPanel>{" "}
      </Tabs>{" "}
      <h3> HIGH SCHOOL </h3>I graduated from the <b>Holy Child</b> in Rye, NY in
      2019. Some of the best years of my life, no doubt.{" "}
      <Tabs>
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="active-tab">
            The Arts{" "}
          </Tab>{" "}
          <Tab className="custom-tab" selectedClassName="active-tab">
            Athletics{" "}
          </Tab>{" "}
          <Tab className="custom-tab" selectedClassName="active-tab">
            Engineering & Design Program{" "}
          </Tab>{" "}
          <Tab className="custom-tab" selectedClassName="active-tab">
            Johns Hopkins Program{" "}
          </Tab>{" "}
        </TabList>{" "}
        <TabPanel>
          <ul>
            <li> Lead role in Les Miserables Musical. </li>{" "}
            <li> 4 year participant the HC Art Show. </li>{" "}
            <li> Honorable Mention for a National Art Contest. </li>{" "}
          </ul>{" "}
        </TabPanel>{" "}
        <TabPanel>
          <ul>
            <li> Varsity Cross Country Team </li> <li> Golf Team </li>{" "}
          </ul>{" "}
        </TabPanel>{" "}
        <TabPanel>
          <ul>
            <li>
              {" "}
              2 - year program that explores several disciplines of engineering.{" "}
            </li>{" "}
            <li>
              {" "}
              Visited several companies on - site including Google, Pfizer,
              SalesForce, Dannon, L 'Oréal, etc.{" "}
            </li>{" "}
            <li>
              {" "}
              Senior Independent Project: Protyped a drone for speed -
              enforcement use.{" "}
            </li>{" "}
          </ul>{" "}
        </TabPanel>{" "}
        <TabPanel>
          <ul>
            <li>
              Engineering Innovation Pre - College Program in Baltimore,
              Maryland.{" "}
            </li>{" "}
            <li> Completed college - level "Intro to Engineering" course. </li>{" "}
          </ul>{" "}
        </TabPanel>{" "}
      </Tabs>{" "}
      <h3> FUTURE PLANS </h3> . . . to be determined . . .{" "}
    </Section>
  );
}

export default EducationSection;
