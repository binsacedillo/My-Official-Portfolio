import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import image1 from '../images/me.jpg';
import RandomTextAnimation from './RandomTextAnimation';

const Portfolio = () => {
  const handleButtonClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4 px-8 flex flex-col items-center justify-center h-screen">
        <div id="header-texts" className="sm:text-center">
          <div className="flex flex-col mb-2 lg:flex-row lg:mb-4 items-center">
            <div className="zoom-image-container mb-4 lg:mr-5 lg:mb-0">
              <img src={image1} alt="Developer Picture" className="zoom-image" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl lg:text-6xl font-bold" style={{ color: '#FFCB74' }}>
                <RandomTextAnimation text="ヴィンス ジオ アセディリョ" />
              </h1>
              <h1 className="text-xl lg:text-xl font-medium">
                VINCE GIO ACEDILLO
              </h1>
              <p className="text-sm">
                STUDENT FULL STACK WEB DEVELOPER
              </p>
              <div className="flex justify-center sm:justify-start mt-4">
                <a
                  href="https://www.facebook.com/binsAced"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 text-white hover:text-yellow-400"
                >
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a
                  href="https://github.com/binsacedillo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>
              <button
                className="text-white bg-yellow-600 px-4 py-2 rounded mt-4 hover:bg-yellow-800 transform transition-transform hover:scale-105"
                onClick={handleButtonClick}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Portfolio;
