'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function ParticlesBackground() {
  const particlesLoaded = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !particlesLoaded.current) {
      // Load particles.js
      const loadParticles = async () => {
        try {
          // Check if particlesJS is already loaded
          if (!(window as any).particlesJS) {
            // Create particles container if it doesn't exist
            if (!document.getElementById('particles-js')) {
              const particlesContainer = document.createElement('div');
              particlesContainer.id = 'particles-js';
              particlesContainer.style.position = 'absolute';
              particlesContainer.style.top = '0';
              particlesContainer.style.left = '0';
              particlesContainer.style.width = '100%';
              particlesContainer.style.height = '100%';
              particlesContainer.style.zIndex = '1';
              
              // Insert the container as the first child of the hero section
              const heroSection = document.querySelector('.relative.bg-gradient-to-r');
              if (heroSection) {
                heroSection.insertBefore(particlesContainer, heroSection.firstChild);
              }
            }
            
            // Load particles.js script with error handling to try both possible paths
            const loadScript = (src: string): Promise<void> => {
              return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
                document.body.appendChild(script);
              });
            };

            try {
              // Try the primary path first
              await loadScript('/js/particles.js');
            } catch (err) {
              // If primary path fails, try the nested path
              console.warn('Failed to load particles.js from primary path, trying alternate path');
              await loadScript('/portfolio-website/public/js/particles.js');
            }

            // After particles.js is loaded, initialize with inline config
            if ((window as any).particlesJS) {
              // Initialize with inline configuration
              initParticles();
              particlesLoaded.current = true;
            }
          } else {
            // If particlesJS is already loaded, just initialize it
            initParticles();
            particlesLoaded.current = true;
          }
        } catch (error) {
          console.error('Failed to load particles.js:', error);
        }
      };

      // Function to initialize particles with config
      const initParticles = () => {
        (window as any).particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 120,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#7c3aed" // Indigo color matching your theme
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              }
            },
            "opacity": {
              "value": 0.3,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 4.5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#7c3aed",
              "opacity": 0.25,
              "width": 1.2
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 150,
                "line_linked": {
                  "opacity": 1
                }
              },
              "push": {
                "particles_nb": 6
              }
            }
          },
          "retina_detect": true
        });
      };

      loadParticles();
    }
    
    // Cleanup function
    return () => {
      particlesLoaded.current = false;
    };
  }, []);

  return (
    <div id="particles-container" className="absolute inset-0 z-0">
      {/* The particles-js div will be dynamically created */}
    </div>
  );
} 