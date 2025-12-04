import PropTypes from 'prop-types';
import profilePicture from '../images/aboutme.png';
import '../styles/aboutme.css';

const aboutMeData = {
  title: 'About Me',
  paragraphs: [
    "Hi there, I'm Vince Gio N. Acedillo, a motivated student aspiring to become a Full Stack Web Developer. I'm always seeking to expand my knowledge beyond the browser. My main focus is on the modern JavaScript ecosystem, and I strive to continuously improve my abilities and gain practical, hands-on experience in the ever-evolving world of web technology.",
    "I have a solid background in key languages like HTML and CSS, and I'm currently sharpening my skills in React and Next.js, powered by Vite. In addition to front-end styling with Tailwind CSS, I have acquired decent knowledge of database connections, and I am actively applying these full-stack concepts through new projects.",
    "My goal is to continue learning and mastering the industry-relevant skills necessary to turn my theoretical knowledge into functional, data-driven web solutions. I'm excited to embark on this journey with an unwavering passion for growth and development.",
  ],
};

const Paragraph = ({ text }) => <p className="text-lg mb-4">{text}</p>;

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

const AboutMe = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{aboutMeData.title}</h2>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/3 md:flex-shrink-0">
            <div className="image-container">
              <img
                className="rounded-full mx-auto md:mx-0 mb-6 profile-picture"
                src={profilePicture}
                alt="Profile Picture"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            {aboutMeData.paragraphs.map((text, index) => (
              <Paragraph key={index} text={text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
