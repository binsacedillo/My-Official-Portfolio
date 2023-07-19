import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const RandomTextAnimation = ({ text }) => {
  const [animatedText, setAnimatedText] = useState('');

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
    };
  }, [text]);

  return <>{animatedText}</>;
};

RandomTextAnimation.propTypes = {
  text: PropTypes.string.isRequired,
};

export default RandomTextAnimation;
