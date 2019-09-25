import React, { useEffect, useRef } from "react";
import { TweenMax } from "gsap";

const AboutSideAnim = () => {
  let astro = useRef(null);
  let skills = useRef(null);

  useEffect(() => {
    animateAstro();
    animateSkills();
  }, []);

  function animateAstro() {
    TweenMax.to(astro, 1.5, {
      y: 5,
      repeat: -1,
      yoyo: true
    });
  }
  function animateSkills() {
    TweenMax.to(skills, 1, {
      scaleX: 0.98,
      scaleY: 0.98,
      repeat: -1,
      yoyo: true
    });
  }

  return (
    <div className="parent">
      <img
        className="img mt-2 image1"
        src={require("../../assets/img/about-side1.png")}
        alt="planet"
        ref={element => {
          astro = element;
        }}
      />
      <img
        className="img mt-2 image2"
        src={require("../../assets/img/about-side2.png")}
        alt="planet"
        ref={element => {
          skills = element;
        }}
      />
    </div>
  );
};
export default AboutSideAnim;
