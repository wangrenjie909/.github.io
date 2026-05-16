import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('全部');

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  const filteredProjects = activeFilter === '全部'
    ? projects
    : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-gradient-main pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-4">
            项目展示
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            我的项目
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            探索我参与开发的各类项目，涵盖不同技术栈和行业领域
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveFilter('全部')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === '全部'
                ? 'bg-accent-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            全部 ({projects.length})
          </button>
          {allTags.map((tag) => {
            const count = projects.filter((p) => p.tags.includes(tag)).length;
            return (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === tag
                    ? 'bg-accent-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {tag} ({count})
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">暂无符合条件的项目</p>
          </div>
        )}
      </div>

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
