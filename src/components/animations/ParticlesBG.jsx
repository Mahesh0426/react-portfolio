// ParticlesBG.jsx
import React from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  // Callback to initialize the tsParticles engine
  const particlesInit = async (engine) => {
    // Load the slim package (or whichever package you need)
    await loadSlim(engine);
  };

  // Callback fired once the particles container is loaded
  const particlesLoaded = (container) => {
    console.log("Particles container loaded:", container);
  };

  const options = {
    background: {
      color: {
        value: "#1E2F97",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        push: {
          distance: 200,
          duration: 15,
        },
        grab: {
          distance: 150,
        },
      },
    },
    particles: {
      color: { value: "#FFFFFF" },
      links: {
        color: "#FFFFFF",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 150,
      },
      opacity: {
        value: 1.0,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id={props.id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default ParticlesComponent;
