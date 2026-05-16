import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div>
      <Hero />
      <About />
      <Skills />

      <section className="py-24 bg-[#16213e]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-4">
              精选项目
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              我的作品
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              以下是我参与开发的部分项目，展示了我的技术能力和项目经验
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-accent-500 hover:text-accent-400 transition-all duration-300"
            >
              查看更多项目
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
