import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
  const children = <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>;
  return <Layout pageTitle="About" children={children}></Layout>;
};

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
  </>
);

export default AboutPage;
