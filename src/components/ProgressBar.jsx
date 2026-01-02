// ProgressBar.js
import { useState, useEffect } from 'react';
import TopLoadingBar from 'react-top-loading-bar';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start the progress bar simulation when the component mounts
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 10;
        return nextProgress > 100 ? 100 : nextProgress;
      });
    }, 500);

    // Add an event listener to detect when the page has finished loading
    window.onload = () => {
      clearInterval(interval); // Stop the progress bar simulation
      setProgress(100); // Set the progress to 100% when the page is fully loaded
    };

    return () => {
      clearInterval(interval);
      window.onload = null; // Clean up the event listener on unmount
    };
  }, []);

  return (
    <TopLoadingBar
      progress={progress}
      color="gold"
      height={3}
    />
  );
};

export default ProgressBar;
