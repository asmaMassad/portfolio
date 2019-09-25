import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

const Contact = () => {
  const contact = () => {
    return (
      <div>
        <h2 className="orange">Contact</h2>
        <div className="mt-3 ml-2">
          <i className="fa fa-envelope"></i> asma_massad@outlook
        </div>

        <div className="social-links mt-3">
          <Link to="#" className="github ">
            <i className="fa fa-github"></i>
          </Link>
          <Link to="#" className="linkedin">
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link to="#" className="facebook">
            <i className="fa fa-facebook"></i>
          </Link>
          <Link to="#" className="instagram">
            <i className="fa fa-instagram"></i>
          </Link>
        </div>
      </div>
    );
  };
  const contactForm = () => {
    //Your message has been sent. Thank you!
    return (
      <div>
        <div id="sendmessage">Please write a message</div>
        <div id="errormessage"></div>
        <form
          action="https://formspree.io/asma_massad@outlook.com"
          method="POST"
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              data-rule="minlen:4"
              data-msg="Please enter at least 4 chars"
            />
          </div>
          <div className="form-group ">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              data-rule="email"
              data-msg="Please enter a valid email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              data-rule="minlen:4"
              data-msg="Please enter at least 8 chars of subject"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              data-rule="required"
              data-msg="Please write something for us"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <Layout className="container-fluid ">
      <Container>
        <Row>
          <Col xs={6} sm={5} lg={4}>
            {contact()}
          </Col>
          <Col xs={6} sm={7} lg={8}>
            {contactForm()}
          </Col>
        </Row>
      </Container>
      <img
        className="img "
        src={require("../../assets/img/about.png")}
        alt="planet"
      />
    </Layout>
  );
};

export default Contact;
