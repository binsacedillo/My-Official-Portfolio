import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * RandomTextAnimation Component
 * 
 * Displays a text animation that shuffles letters before revealing the final text.
 * 
 * Animation Timeline (ISO 9241-171 compliant):
 * - 0-2.5s: Letters shuffle randomly and build up to full text (50ms per letter)
 * - 2.5-3.5s: Text remains settled and readable (1000ms delay)
 * - 3.5s+: Final text displays permanently
 * 
 * Accessibility: Respects `prefers-reduced-motion` media query for users who need 
 * reduced motion for vestibular concerns or motion sickness.
 */
const RandomTextAnimation = ({ text }) => {
  const [animatedText, setAnimatedText] = useState('');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Shuffle a string randomly
  function shuffleString(string) {
    let shuffledString = '';
    let stringArray = string.split('');
    while (stringArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * stringArray.length);
      shuffledString += stringArray[randomIndex];
      stringArray.splice(randomIndex, 1);
    }
    return shuffledString;
  }

  useEffect(() => {
    // Check if user prefers reduced motion (ISO 9241-171: Accessibility)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReduced = mediaQuery.matches;
    setPrefersReducedMotion(isReduced);

    // Listen for changes to user's motion preference
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    if (isReduced) {
      // Skip animation and display text immediately for accessibility
      setAnimatedText(text);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    // Shuffle the letters of the text
    let shuffledText = shuffleString(text);
    let currentIndex = 0;

    const animationInterval = setInterval(() => {
      // Get the next letter from the shuffled text
      const nextLetter = shuffledText.charAt(currentIndex);
      currentIndex++;

      // Display the next letter in the animatedText
      setAnimatedText((prevText) => prevText + nextLetter);

      // If all letters have been displayed, stop the animation and display the original text
      if (currentIndex >= shuffledText.length) {
        clearInterval(animationInterval);
        setTimeout(() => {
          setAnimatedText(text);
        }, 1000); // Wait for 1 second before displaying the original text
      }
    }, 50); // Display each letter every 50 milliseconds

    // Clean up the animation interval when the component unmounts
    return () => {
      clearInterval(animationInterval);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [text]);

  // Apply motion-reduce class if user prefers reduced motion (Visual feedback)
  const containerClass = prefersReducedMotion ? 'motion-reduce:animate-none' : '';

  return <span className={containerClass}>{animatedText}</span>;
};

RandomTextAnimation.propTypes = {
  text: PropTypes.string.isRequired,
};

export default RandomTextAnimation;
