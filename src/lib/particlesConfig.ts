import type { ISourceOptions } from "@tsparticles/engine";

export const getParticlesConfig = (isDark: boolean, isReducedMotion: boolean): ISourceOptions => {
  const particleColors = isDark
    ? ["#22D3EE", "#3B82F6", "#64748B"]
    : ["#2563EB", "#0891B2", "#64748B"];

  const linkColor = isDark ? "#22D3EE" : "#2563EB";
  const linkOpacity = isDark ? 0.15 : 0.08;
  const particleOpacityMin = isDark ? 0.25 : 0.18;
  const particleOpacityMax = isDark ? 0.45 : 0.30;

  return {
    fullScreen: { enable: false },
    fpsLimit: 60,
    detectRetina: true,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    particles: {
      color: {
        value: particleColors,
      },
      links: {
        color: linkColor,
        distance: 130,
        enable: true,
        opacity: linkOpacity,
        width: 1,
      },
      move: {
        direction: "none",
        enable: !isReducedMotion,
        outModes: {
          default: "out",
        },
        random: true,
        speed: isReducedMotion ? 0 : 0.35,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          width: 1200,
          height: 800,
        },
        value: 50,
      },
      opacity: {
        value: {
          min: particleOpacityMin,
          max: particleOpacityMax,
        },
      },
      size: {
        value: {
          min: 1,
          max: 2.5,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: isDark ? 0.3 : 0.18,
          },
        },
      },
    },
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 20,
            },
            links: {
              distance: 90,
            },
            move: {
              speed: isReducedMotion ? 0 : 0.25,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: false,
              },
            },
          },
        },
      },
      {
        maxWidth: 1024,
        options: {
          particles: {
            number: {
              value: 35,
            },
            links: {
              distance: 110,
            },
          },
        },
      },
    ],
  };
};

