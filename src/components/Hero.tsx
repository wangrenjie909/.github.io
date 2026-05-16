import { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = '全栈开发者 | 创新工程师';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-main overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-6">
              欢迎来到我的个人主页
            </span>
          </div>

          <h1 className="animate-slide-up font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ animationDelay: '0.4s' }}>
            你好，我是
            <br />
            <span className="text-gradient">张明</span>
          </h1>

          <div className="animate-slide-up mb-8" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              <span className="border-r-2 border-accent-400 pr-2">
                {displayText}
              </span>
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} border-r-2 border-accent-400 ml-1`} />
            </p>
          </div>

          <p className="animate-slide-up text-gray-400 text-lg max-w-2xl mx-auto mb-10" style={{ animationDelay: '0.8s' }}>
            热爱技术，专注于构建创新的数字解决方案。拥有丰富的全栈开发经验，致力于创造优雅、高效的代码。
          </p>

          <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '1s' }}>
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-accent-500/30 transition-all duration-300 flex items-center gap-2"
            >
              查看项目
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-accent-500 hover:text-accent-400 transition-all duration-300"
            >
              联系我
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Link to="#about" aria-label="Scroll down">
            <ChevronDown className="w-8 h-8 text-gray-500 hover:text-accent-400 transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
}
