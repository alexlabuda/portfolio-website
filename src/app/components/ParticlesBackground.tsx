'use client';

import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const particlesLoaded = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !particlesLoaded.current) {
      // Load particles.js
      const loadParticles = async () => {
        try {
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
            const heroSection = document.querySelector('.relative.bg-gradient-primary');
            if (heroSection) {
              heroSection.insertBefore(particlesContainer, heroSection.firstChild);
            }
          }

          // Instead of loading an external script, include the particles code directly
          // This simplifies deployment and avoids path issues
          if (!(window as any).particlesJS) {
            // Define particlesJS directly in the component
            // This is a simplified version of the particles.js library focused on what we need
            (window as any).particlesJS = function(tag_id: string, params: any) {
              // Create a canvas element inside the particles-js div
              const container = document.getElementById(tag_id);
              if (!container) return;
              
              // Create canvas element
              const canvas = document.createElement('canvas');
              canvas.className = 'particles-js-canvas-el';
              canvas.style.width = '100%';
              canvas.style.height = '100%';
              container.appendChild(canvas);
              
              // Set size
              const width = container.offsetWidth;
              const height = container.offsetHeight;
              canvas.width = width;
              canvas.height = height;
              
              // Get context
              const ctx = canvas.getContext('2d');
              if (!ctx) return;
              
              // Create particles
              const particles: any[] = [];
              const particleCount = params.particles.number.value;
              
              for (let i = 0; i < particleCount; i++) {
                particles.push({
                  x: Math.random() * width,
                  y: Math.random() * height,
                  radius: Math.random() * params.particles.size.random ? Math.random() * params.particles.size.value : params.particles.size.value,
                  color: params.particles.color.value,
                  vx: (Math.random() - 0.5) * params.particles.move.speed,
                  vy: (Math.random() - 0.5) * params.particles.move.speed,
                  opacity: params.particles.opacity.value
                });
              }
              
              // Animation function
              function animate() {
                if (!ctx) return;
                ctx.clearRect(0, 0, width, height);
                
                // Update and draw particles
                for (let i = 0; i < particles.length; i++) {
                  const p = particles[i];
                  
                  // Move particles
                  if (params.particles.move.enable) {
                    p.x += p.vx;
                    p.y += p.vy;
                    
                    // Bounce off edges
                    if (p.x < 0 || p.x > width) p.vx = -p.vx;
                    if (p.y < 0 || p.y > height) p.vy = -p.vy;
                  }
                  
                  // Draw particle
                  ctx.beginPath();
                  ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                  ctx.fillStyle = p.color;
                  ctx.globalAlpha = p.opacity;
                  ctx.fill();
                }
                
                // Draw connections
                if (params.particles.line_linked.enable) {
                  for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                      const p1 = particles[i];
                      const p2 = particles[j];
                      const dx = p1.x - p2.x;
                      const dy = p1.y - p2.y;
                      const distance = Math.sqrt(dx * dx + dy * dy);
                      
                      if (distance < params.particles.line_linked.distance) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = params.particles.line_linked.color;
                        ctx.globalAlpha = params.particles.line_linked.opacity * (1 - distance / params.particles.line_linked.distance);
                        ctx.lineWidth = params.particles.line_linked.width;
                        ctx.stroke();
                      }
                    }
                  }
                }
                
                requestAnimationFrame(animate);
              }
              
              // Add interactivity
              if (params.interactivity.events.onhover.enable) {
                container.addEventListener('mousemove', (e) => {
                  if (!ctx) return;
                  const rect = canvas.getBoundingClientRect();
                  const mouseX = e.clientX - rect.left;
                  const mouseY = e.clientY - rect.top;
                  
                  if (params.interactivity.events.onhover.mode === 'grab') {
                    for (let i = 0; i < particles.length; i++) {
                      const p = particles[i];
                      const dx = mouseX - p.x;
                      const dy = mouseY - p.y;
                      const distance = Math.sqrt(dx * dx + dy * dy);
                      
                      if (distance < params.interactivity.modes.grab.distance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouseX, mouseY);
                        ctx.strokeStyle = params.particles.line_linked.color;
                        ctx.globalAlpha = params.interactivity.modes.grab.line_linked.opacity * (1 - distance / params.interactivity.modes.grab.distance);
                        ctx.lineWidth = params.particles.line_linked.width;
                        ctx.stroke();
                      }
                    }
                  }
                });
              }
              
              if (params.interactivity.events.onclick.enable) {
                container.addEventListener('click', (e) => {
                  if (!ctx) return;
                  const rect = canvas.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const clickY = e.clientY - rect.top;
                  
                  if (params.interactivity.events.onclick.mode === 'push') {
                    for (let i = 0; i < params.interactivity.modes.push.particles_nb; i++) {
                      particles.push({
                        x: clickX,
                        y: clickY,
                        radius: Math.random() * params.particles.size.random ? Math.random() * params.particles.size.value : params.particles.size.value,
                        color: params.particles.color.value,
                        vx: (Math.random() - 0.5) * params.particles.move.speed * 2,
                        vy: (Math.random() - 0.5) * params.particles.move.speed * 2,
                        opacity: params.particles.opacity.value
                      });
                    }
                  }
                });
              }
              
              // Handle window resize
              if (params.interactivity.events.resize) {
                window.addEventListener('resize', () => {
                  canvas.width = container.offsetWidth;
                  canvas.height = container.offsetHeight;
                });
              }
              
              // Start animation
              animate();
            };
          }

          // Initialize particles with inline configuration
          initParticles();
          particlesLoaded.current = true;
        } catch (error) {
          console.error('Failed to initialize particles:', error);
        }
      };

      // Function to initialize particles with config
      const initParticles = () => {
        if (!(window as any).particlesJS) return;
        
        // Check if we're on a mobile device
        const isMobile = window.innerWidth < 768;
        
        // Adjust particle settings based on device type
        const particleCount = isMobile ? 40 : 120; // Fewer particles on mobile
        const particleSize = isMobile ? 3 : 4.5; // Smaller particles on mobile
        const moveSpeed = isMobile ? 1 : 2; // Slower movement on mobile
        const lineOpacity = isMobile ? 0.15 : 0.25; // Less visible lines on mobile
        const lineDistance = isMobile ? 120 : 150; // Shorter connection distance on mobile
        
        (window as any).particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": particleCount,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#6750A4" // Deep Purple matching our theme
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
              "value": particleSize,
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
              "distance": lineDistance,
              "color": "#6750A4",
              "opacity": lineOpacity,
              "width": isMobile ? 0.8 : 1.2
            },
            "move": {
              "enable": true,
              "speed": moveSpeed,
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
                "distance": isMobile ? 100 : 150,
                "line_linked": {
                  "opacity": isMobile ? 0.7 : 1
                }
              },
              "push": {
                "particles_nb": isMobile ? 3 : 6
              }
            }
          },
          "retina_detect": true
        });
      };

      loadParticles();
    }
    
    // Update particles on window resize
    const handleResize = () => {
      // Re-initialize particles when window size changes between mobile/desktop breakpoints
      const wasMobile = window.innerWidth < 768;
      setTimeout(() => {
        const isMobile = window.innerWidth < 768;
        if (wasMobile !== isMobile) {
          // Only reinitialize if crossing the mobile/desktop threshold
          if (typeof window !== 'undefined') {
            const initParticles = () => {
              if (!(window as any).particlesJS) return;
              
              // Check if we're on a mobile device
              const isMobile = window.innerWidth < 768;
              
              // Adjust particle settings based on device type
              const particleCount = isMobile ? 40 : 120; // Fewer particles on mobile
              const particleSize = isMobile ? 3 : 4.5; // Smaller particles on mobile
              const moveSpeed = isMobile ? 1 : 2; // Slower movement on mobile
              const lineOpacity = isMobile ? 0.15 : 0.25; // Less visible lines on mobile
              const lineDistance = isMobile ? 120 : 150; // Shorter connection distance on mobile
              
              (window as any).particlesJS('particles-js', {
                "particles": {
                  "number": {
                    "value": particleCount,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#6750A4" // Deep Purple matching our theme
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
                    "value": particleSize,
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
                    "distance": lineDistance,
                    "color": "#6750A4",
                    "opacity": lineOpacity,
                    "width": isMobile ? 0.8 : 1.2
                  },
                  "move": {
                    "enable": true,
                    "speed": moveSpeed,
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
                      "distance": isMobile ? 100 : 150,
                      "line_linked": {
                        "opacity": isMobile ? 0.7 : 1
                      }
                    },
                    "push": {
                      "particles_nb": isMobile ? 3 : 6
                    }
                  }
                },
                "retina_detect": true
              });
            };
            
            initParticles();
          }
        }
      }, 250); // Small timeout to avoid too many reinitializations during resize
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    
    // Cleanup function
    return () => {
      particlesLoaded.current = false;
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <div id="particles-container" className="absolute inset-0 z-0">
      {/* The particles-js div will be dynamically created */}
    </div>
  );
} 