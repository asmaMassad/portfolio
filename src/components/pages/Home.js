import React, { useEffect, useRef } from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import { TweenMax } from "gsap";

const Home = () => {
  //style={{ border: "1px solid green" }}
  let astro = useRef(null);

  useEffect(() => {
    animateAstro();
  }, []);
  function animateAstro() {
    TweenMax.to(astro, 1.5, {
      x: 10,
      y: 10,
      repeat: -1,
      yoyo: true
    });
  }
  return (
    <Layout className="container-fluid ">
      <div className="row">
        <div className="col-4 mt-5">
          <img
            className="img"
            src={require("../../assets/img/astro.png")}
            alt="astro"
            ref={element => {
              astro = element;
            }}
          />
        </div>
        <div className="col-8 mt-5">
          <h3> I'm Asma Massad, a freelance developer & designer.</h3>
          <div>
            <p>
              I’m a telecommunications engineer currently working as a fullstack
              developer. I have a broad set of skills, including web & mobile
              apps development, mobile games design & dev, 2D animations and 3D
              modeling.
              <br />
              <br />
              I'm available for remote work, if you would like to{" "}
              <Link style={{ color: "#ff6a00" }} to="/contact">
                hire me
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <img
        className="img ml-auto mr-0 "
        src={require("../../assets/img/planet.png")}
        alt="planet"
      />
    </Layout>
  );
};

export default Home;
