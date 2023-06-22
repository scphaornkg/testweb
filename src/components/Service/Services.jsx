import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { SiMicrosoftoffice } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">skills</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={BiCodeAlt}
            title={"algorithm"}
            disc={`I started learning algorithms in C language since F1, and did a lot of practice on LeetCode, which helped me win the GMCC Global Silver Award in F4.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={SiMicrosoftoffice}
            title={"Microsoft office"}
            disc={`So far, I have successfully passed all of the 2019 exams for Microsoft PowerPoint, Word, and Excel, and have obtained the Expert 2019 certification.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"web designer"}
            disc={`HTML and CSS are also one of my specialties. I developed web pages and maintained servers for the programming class that I participated in.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
