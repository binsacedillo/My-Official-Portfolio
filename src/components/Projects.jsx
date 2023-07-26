import '../styles/projects.css';
import newswebsite from '../images/newswebsite.png';
import japwebsite from '../images/japaneselangwebsite.jpg';

const ProjectSection = () => {
  const projects = [
    {
      title: 'News Website',
      description: 'A simple responsive news website that uses a responsive nav bar and react-responsive-carousel for the breaking news section and simple list of latest news and a load more button to show more news and you can revert it back to see less and a search box and to finish it all up is a simple responsive footer.',
      image: newswebsite,
      link: 'https://github.com/binsacedillo/newsWebsite',
    },
    {
      title: 'Japanese Language Learning Website',
      description: 'A simple responsive Japanese Language Learning website that uses a responsive nav bar and react-router-dom for the nav links that links to other pages and a translation button that changes the texts in the nav bar from English to Japanese.',
      image: japwebsite,
      link: 'https://github.com/binsacedillo/JapLanguageLearningWebsite',
    },
    {
      title: 'Project 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image: 'project3.png',
      link: 'https://example.com/project3',
    },
  ];

  return (
    <div className="mt-8 px-4">
      <section id="projects" className="section">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded shadow-md border border-gray-200 transition-transform duration-300 transform sm:hover:scale-105"
              style={{ textDecoration: 'none' }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <img
                src={project.image}
                alt={project.title}
                className="w-full mb-4 border border-gray-200 rounded"
              />
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-button"
              >
                View Project Source Code
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
