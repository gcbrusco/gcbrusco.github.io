import React from "react";
import "./App.css";
import Section from "./Section";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

function AboutSection() {
  return (
    <Section id="my-story" imageSrc="/nyc.png" title="MY STORY">
      <div>
        Whether you followed the link on my resume or happen to stumble upon
        this site via deep stalking: <b> ✨welcome!✨</b>
        <br></br>
        <br></br>
        <b>IN SHORT... </b>My name is <b>Gina</b>, I'm a born-and-raised{" "}
        <b>New Yorker</b> with deep Italian roots. I come from a large, loud
        family of seven, where almost all of my relatives live in either New
        York or Italy. So, yes. I am one of those "fogetaboutit" New York
        Italians with an exaggerated use of hand gestures. I graduated from the{" "}
        <b>University of Notre Dame</b> in 2023 and now currently live and work
        full-time in <b>New York City</b>. For privacy reasons, I won't specify
        which neighborhood, but I can tell you that I spend 99% of my free time
        gallavanting in Central Park.
        <br></br>
        <br></br>
        <b>Now go ahead and take a gander at the site!</b> <br></br>
        The general design of this site has not been changed since 2020 -- hence
        the skyline doodles, a by-product of COVID-induced boredom. Feel free to
        leave me feedback :)
      </div>
    </Section>
  );
}

export default AboutSection;
