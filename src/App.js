import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Particles from "react-particles-js";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";

const App = () => {
  const particlesParams = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 200
        }
      },
      line_linked: {
        enable: true,
        opacity: 0.02
      },
      move: {
        speed: 0.5
      },
      size: {
        value: 1
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05
        }
      }
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        push: {
          particles_nb: 1
        }
      }
    },
    retina_detect: true
  }; //
  return (
    <div className="App">
      <Particles params={particlesParams} className="particles" />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/work" exact component={Work} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
