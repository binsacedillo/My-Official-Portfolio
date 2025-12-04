import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault(); // Prevent right-click context menu
    };

    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'u') {
        event.preventDefault(); // Prevent Ctrl+U
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <footer className="bg-gray-900">
      <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center sm:justify-between flex-wrap">
          <div className="w-full flex-grow sm:w-auto sm:mr-4">
            <h2 className="text-xl font-bold text-white">PORTFOLIO OF ヴィンス ジオ アセディリョ<span className="text-base font-light pl-4">VINCE GIO ACEDILLO</span></h2>
            <p className="mt-2 text-gray-400">A collection of my projects and experience as an aspiring Full Stack Web Developer.</p>
          </div>
          <div className="w-full sm:w-auto mt-4 sm:mt-0 flex-grow-0">
            <ul className="flex justify-center sm:justify-end">
              <li className="mx-3">
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mx-3">
                <a href="#" className="text-gray-400 hover:text-white">
                  Projects
                </a>
              </li>
              <li className="mx-3">
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
