// ParticlesBG.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBG = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles Engine Loaded:", engine);
    await loadSlim(engine); // load the slim version
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log("Particles Container Loaded:", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // Add a simple background gradient

        fpsLimit: 60,

        // Particle styles
        particles: {
          // Use an array for random colors
          color: { value: ["#ff0000", "#00ff00", "#0000ff"] },
          shape: {
            // change shape from "circle" to "star"
            type: "star",
          },
          number: {
            value: 50,
          },
          opacity: {
            // each particle randomly between 0.3 and 0.8
            value: { min: 0.3, max: 0.8 },
          },
          size: {
            // each particle randomly between 1 and 8
            value: { min: 1, max: 8 },
          },
          move: {
            enable: true,
            speed: 2,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
        },

        // Interactivity
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // or "bubble", "grab", etc.
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },

        // Optimize for Retina Screens
        detectRetina: true,
      }}
      style={{
        // Make sure the canvas covers its parent container
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default ParticlesBG;
