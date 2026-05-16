import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: '工作经验', value: '5+年' },
  { icon: GraduationCap, label: '学历', value: '本科' },
  { icon: Users, label: '服务客户', value: '100+' },
  { icon: Award, label: '获得荣誉', value: '10+项' },
];

const experiences = [
  {
    year: '2024 - 至今',
    title: '高级全栈工程师',
    company: '科技创新公司',
    description: '负责核心产品的架构设计和开发，带领团队完成多个重要项目。',
  },
  {
    year: '2021 - 2024',
    title: '全栈工程师',
    company: '互联网大厂',
    description: '参与大型电商平台的开发，负责前端架构优化和性能提升。',
  },
  {
    year: '2019 - 2021',
    title: '前端工程师',
    company: '创业公司',
    description: '从0到1构建产品，积累了丰富的全栈开发经验。',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#16213e]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-4">
            关于我
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            专业背景
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            我是一名充满热情的全栈开发者，致力于创造高质量的数字产品
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-effect rounded-xl p-6 text-center hover:border-accent-500/50 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-white mb-6">
              个人简介
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                我毕业于顶尖大学的计算机科学专业，拥有五年以上的软件开发经验。
                在这段时间里，我参与并主导了多个大型项目的开发，涵盖电商、金融、教育等多个领域。
              </p>
              <p>
                我热爱技术，不断学习新技术和工具，始终保持对创新的追求。
                我相信技术可以改变世界，致力于用代码创造有价值的产品。
              </p>
              <p>
                除了技术，我也注重团队协作和沟通能力，善于与不同背景的人合作，共同完成目标。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-white">
              工作经历
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-700" />
              {experiences.map((exp, index) => (
                <div key={exp.year} className="relative pl-12">
                  <div className={`absolute left-2 w-5 h-5 rounded-full border-2 ${
                    index === 0 ? 'border-accent-500 bg-accent-500/20' : 'border-gray-600 bg-gray-800'
                  }`} />
                  <div className="glass-effect rounded-xl p-5 hover:border-accent-500/30 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-accent-400 font-medium">{exp.year}</span>
                      <span className="text-gray-500 text-sm">{exp.company}</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">{exp.title}</h4>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
