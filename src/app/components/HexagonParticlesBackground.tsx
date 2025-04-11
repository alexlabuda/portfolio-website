'use client';

import { useEffect, useRef } from 'react';

export default function HexagonParticlesBackground() {
  const particlesLoaded = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !particlesLoaded.current) {
      // Load particles.js
      const loadParticles = async () => {
        try {
          // Create particles container if it doesn't exist
          if (!document.getElementById('project-particles-js')) {
            const particlesContainer = document.createElement('div');
            particlesContainer.id = 'project-particles-js';
            particlesContainer.style.position = 'fixed';
            particlesContainer.style.top = '0';
            particlesContainer.style.left = '0';
            particlesContainer.style.width = '100%';
            particlesContainer.style.height = '100%';
            particlesContainer.style.zIndex = '-1';
            particlesContainer.style.pointerEvents = 'none';
            
            document.body.prepend(particlesContainer);
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
              const width = window.innerWidth;
              const height = window.innerHeight;
              canvas.width = width;
              canvas.height = height;
              
              // Get context
              const ctx = canvas.getContext('2d');
              if (!ctx) return;
              
              // Helper function to draw a hexagon
              function drawHexagon(x: number, y: number, size: number) {
                if (!ctx) return;
                
                ctx.beginPath();
                for (let i = 0; i < 6; i++) {
                  const angle = (Math.PI / 3) * i;
                  const pointX = x + size * Math.cos(angle);
                  const pointY = y + size * Math.sin(angle);
                  
                  if (i === 0) {
                    ctx.moveTo(pointX, pointY);
                  } else {
                    ctx.lineTo(pointX, pointY);
                  }
                }
                ctx.closePath();
                ctx.fill();
              }
              
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
                  opacity: params.particles.opacity.value,
                  rotation: Math.random() * Math.PI // Add rotation for hexagons
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
                    
                    // Slightly rotate the hexagon
                    p.rotation += 0.002;
                    
                    // Bounce off edges or wrap around
                    if (params.particles.move.out_mode === "bounce") {
                      if (p.x < 0 || p.x > width) p.vx = -p.vx;
                      if (p.y < 0 || p.y > height) p.vy = -p.vy;
                    } else { // "out" mode
                      if (p.x < 0) p.x = width;
                      else if (p.x > width) p.x = 0;
                      if (p.y < 0) p.y = height;
                      else if (p.y > height) p.y = 0;
                    }
                  }
                  
                  // Draw hexagon
                  ctx.fillStyle = p.color;
                  ctx.globalAlpha = p.opacity;
                  
                  // Save context, translate to particle center, rotate, draw hexagon, restore context
                  ctx.save();
                  ctx.translate(p.x, p.y);
                  ctx.rotate(p.rotation);
                  drawHexagon(0, 0, p.radius);
                  ctx.restore();
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
                  
                  // Handle hover effect
                  if (params.interactivity.events.onhover.mode === 'bubble') {
                    for (let i = 0; i < particles.length; i++) {
                      const p = particles[i];
                      const dx = mouseX - p.x;
                      const dy = mouseY - p.y;
                      const distance = Math.sqrt(dx * dx + dy * dy);
                      
                      if (distance < params.interactivity.modes.bubble.distance) {
                        // Enlarge the hexagon on hover
                        const ratio = 1 - distance / params.interactivity.modes.bubble.distance;
                        p.radius = Math.max(p.radius, p.radius * (1 + ratio));
                        // Also increase rotation speed on hover
                        p.rotation += 0.01 * ratio;
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
                        opacity: params.particles.opacity.value,
                        rotation: Math.random() * Math.PI
                      });
                    }
                  }
                });
              }
              
              // Handle window resize
              if (params.interactivity.events.resize) {
                window.addEventListener('resize', () => {
                  const newWidth = window.innerWidth;
                  const newHeight = window.innerHeight;
                  canvas.width = newWidth;
                  canvas.height = newHeight;
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
        
        // Hexagon style particles for project page
        (window as any).particlesJS('project-particles-js', {
          "particles": {
            "number": {
              "value": 32,
              "density": {
                "enable": true,
                "value_area": 1200
              }
            },
            "color": {
              "value": "#8b5cf6" // Purple for our theme
            },
            "shape": {
              "type": "polygon",
              "stroke": {
                "width": 0,
                "color": "#000000"
              }
            },
            "opacity": {
              "value": 0.10,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.05,
                "sync": false
              }
            },
            "size": {
              "value": 60,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "size_min": 30,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "enable": true,
              "speed": 0.8,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 300,
                "size": 100,
                "duration": 2,
                "opacity": 0.25,
                "speed": 3
              },
              "push": {
                "particles_nb": 3
              }
            }
          },
          "retina_detect": true
        });
      };

      loadParticles();
    }

    // Cleanup
    return () => {
      const particlesContainer = document.getElementById('project-particles-js');
      if (particlesContainer) {
        particlesContainer.remove();
      }
    };
  }, []);

  return null;
} 