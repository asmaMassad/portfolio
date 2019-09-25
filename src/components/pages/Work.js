import React from "react";
import Layout from "../layout/Layout";
import WorkCard from "./WorkCard";
import { CardColumns } from "react-bootstrap";

const Work = () => {
  return (
    <Layout className="container-fluid ">
      <h2 className="orange">Work</h2>
      <p className="lead">Here are some smaples of projects I've done</p>
      <CardColumns className="mt-5">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </CardColumns>
    </Layout>
  );
};

export default Work;
