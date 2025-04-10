/**
 * Simple shader effect for the backdrop
 */

/**
 * Initializes a shader effect on the given element
 * @param element - The HTML element to apply the shader effect to
 */
export function initShaderEffect(element: HTMLElement): void {
  if (!element) return;
  
  // Simple animation effect
  let animationFrame: number;
  const animate = () => {
    const time = Date.now() * 0.001;
    const hue = (time * 10) % 360;
    element.style.background = `radial-gradient(circle at ${50 + Math.sin(time) * 10}% ${50 + Math.cos(time) * 10}%, 
                               hsl(${hue}, 70%, 60%, 0.2), 
                               transparent 80%)`;
    
    animationFrame = requestAnimationFrame(animate);
  };
  
  // Start animation
  animate();
  
  // Clean up on page unload
  window.addEventListener('unload', () => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  });
} 