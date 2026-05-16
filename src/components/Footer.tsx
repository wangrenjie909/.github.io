import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#16213e] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-primary-400 flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-serif text-xl font-semibold text-white">
                Portfolio
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              热爱技术，专注于构建创新的数字解决方案。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">
                  首页
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">
                  项目
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">
                  联系
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">联系信息</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-accent-400" />
                <span>zhangming@example.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-accent-400" />
                <span>北京市朝阳区</span>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="#github"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#linkedin"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 张明. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
