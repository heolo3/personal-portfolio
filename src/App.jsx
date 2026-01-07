import { useState, useEffect } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false); // Dark mode state

  // On mount, check for saved preference or system preference
  useEffect(() => {
    // Check for saved preference or system preference
    const savedPreference = localStorage.getItem('darkMode');
    if (savedPreference) {
      setIsDark(JSON.parse(savedPreference));
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Update localStorage and HTML class on isDark change
  useEffect(() => {
    // Update localStorage and DOM
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark); // Toggle dark mode

  const bgColor = isDark ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900';
  const textColor = isDark ? 'text-gray-300' : 'text-gray-700';

  const projects = [
    {
      title: 'Personal Portfolio Site',
      description: 'A modern web application built with React, TailwindCSS, and Node.js',
      tags: ['React', 'Node.js', 'TailwindCSS'],
    },
    {
      title: 'Task Manager API Built with Node',
      description: 'Task managment API for managing user accounts and registered tasks',
      tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    },
    {
      title: 'Project 3',
      description: 'Coming soon....',
      tags: [],
    },
  ];

  const skills = ['React', 'JavaScript', 'CSS', 'TailwindCSS', 'Node.js', 'SQL', 'MongoDB', 'Express'];

  return (
    <div className={`w-full min-h-screen ${bgColor} transition-colors duration-200`}>
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />

      {/* About Me Section */}
      <Section id="about" title="About Me" isDark={isDark}>
        <p className={`text-lg leading-relaxed ${textColor} mb-8`}>
          Hello! I'm a passionate developer with experience in building web applications.
          I enjoy solving problems and creating elegant solutions. When I'm not coding,
          you cna find me spending time with partner, playing with my Dog (Blue!), cooking,
          or working out.
        </p>
        <div className="mt-12">
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
            Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" title="Portfolio" isDark={isDark}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              isDark={isDark}
            />
          ))}
        </div>
      </Section>

      {/* Links Section */}
      <Section id="links" title="Links" isDark={isDark}>
        <div>
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
            Connect with Me!
          </h3>
          <p className={textColor}>Feel free to reach out through any of the platforms below!</p>
        </div>
        <div className="flex flex-wrap gap-8 justify-start">
          <LinkButton href="https://github.com/heolo3" label="GitHub" />
          <LinkButton href="http://linkedin.com/in/nelsong14" label="LinkedIn" />
        </div>
      </Section>

      {/* Other Section */}
      <Section id="other" title="Other" isDark={isDark}>
        <div className="space-y-10">
          <div>
            <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
              What I'm Reading
            </h3>
            <p className={textColor}>Check out what I've read recently!</p>
          </div>

          <div>
            <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
              Recommended Courses
            </h3>
            <p className={textColor}>Check out what course content I've utilized recently!</p>
          </div>
        </div>
      </Section>

      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
