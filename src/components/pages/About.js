import React, { useRef } from "react";
import Layout from "../layout/Layout";
import ExpCard from "./ExpCard";
import SkillCard from "./SkillCard";
import AboutSideAnim from "./AboutSideAnim";
import aboutInfo from "../../assets/about.json";
import { Container, Row, Col } from "react-bootstrap";
import Media from "react-media";

const About = () => {
  const skills = aboutInfo.skills;
  const exp = aboutInfo.experience;

  let skillsRef = useRef(null);
  let expRef = useRef(null);

  const handleClick = ref => {
    ref.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
    setTimeout(adjustY, 400);
  };
  const adjustY = () => {
    window.scroll(0, window.pageYOffset - 190);
  };

  const queries = {
    large: "(min-width: 1000px)"
  };
  const about = () => {
    return (
      <div className="sub-header ">
        <ul style={{ listStyleType: "none", marginLeft: -50 }}>
          <li>
            <h2 className="orange">About</h2>
          </li>
          <li>
            <button
              className="scroll-btn"
              type="button"
              onClick={() => handleClick(skillsRef)}
            >
              >skills
            </button>
          </li>
          <li>
            <button
              className="scroll-btn"
              type="button"
              onClick={() => handleClick(expRef)}
            >
              >experience
            </button>
          </li>
        </ul>
      </div>
    );
  };

  const showSkills = () => {
    return (
      <div className="row">
        <div
          className="col border-bottom"
          id="skills"
          ref={element => {
            skillsRef = element;
          }}
        >
          <h3 className="mb-3 orange">Skills</h3>

          {skills.map((field, i) => (
            <div key={i} className="mb-3">
              <SkillCard field={field} />
            </div>
          ))}
        </div>
        <Media queries={queries}>
          {matches =>
            matches.large && (
              <div className="col border-bottom">
                <AboutSideAnim />
              </div>
            )
          }
        </Media>
      </div>
    );
  };

  const showExp = () => {
    return (
      <div
        className="mt-4"
        id="exp"
        ref={element => {
          expRef = element;
        }}
      >
        <h3 className="mb-3 orange"> Experience </h3>
        {exp.map((ex, i) => (
          <div key={i} className=" mb-3">
            <ExpCard ex={ex} />
          </div>
        ))}
      </div>
    );
  };
  return (
    <Layout className="container-fluid  ">
      <Container>
        <Row>
          <Col xs={4} sm={3} lg={2}>
            {about()}
          </Col>
          <Col xs={8} sm={9} lg={10}>
            {showSkills()}
            {showExp()}
          </Col>
        </Row>
      </Container>
      <div className="maxwidth">
        <img
          className="img  "
          src={require("../../assets/img/about.png")}
          alt="planet"
        />
      </div>
    </Layout>
  );
};
export default About;
