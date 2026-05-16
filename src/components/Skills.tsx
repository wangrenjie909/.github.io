import { useState } from 'react';
import { skills, skillCategories } from '../data/projects';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredSkills = activeCategory === '全部'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-[#1a1a2e]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-4">
            专业技能
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            我的技能
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            掌握多种技术栈，能够独立完成从前端到后端的全栈开发
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('全部')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === '全部'
                ? 'bg-accent-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            全部
          </button>
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-accent-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-effect rounded-xl p-6 hover:border-accent-500/30 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-accent-400 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent-500 to-accent-400 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs text-gray-500 mt-2 block">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
