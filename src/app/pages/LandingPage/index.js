import React from "react";
import Hero from "../../components/Hero";
import Jumbotron from "../../components/Jumbotron";
import Section from "../../components/Section";
import style from "./LandingPage.module.scss";

function LandingPage() {
  const reverse = true;
  const curve = true;
  return (
    <article className={style.LandingPage}>
      <Hero />
      <Section
        heading='We Always deliver before deadlines'
        number='2'
        color='blue2'
      />
      <Section
        heading='We have custom made solutions, tailored for your needs'
        number='1'
        curve
        reverse
        color='white'
      />
      <Section
        heading='There is a touch of nature at every step'
        number='3'
        curve
        color='green'
      />

      <Section
        heading='Everything you want, in a single place'
        number='5'
        curve
        reverse
        color='white'
      />
      <Section
        heading='You are protected at every step'
        number='4'
        color='blue2'
        curve
      />
      <Section
        heading='You can find us on any platform'
        number='6'
        color='white'
        reverse
        curve
      />
      <Jumbotron />
    </article>
  );
}

export default LandingPage;
