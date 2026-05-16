import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: '邮箱',
    content: 'zhangming@example.com',
    link: 'mailto:zhangming@example.com',
  },
  {
    icon: Phone,
    title: '电话',
    content: '+86 138-xxxx-xxxx',
    link: 'tel:+86138xxxxxxxx',
  },
  {
    icon: MapPin,
    title: '地址',
    content: '北京市朝阳区科技园区',
    link: null,
  },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-main pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-4">
            联系我
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            保持联系
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            有任何问题或合作意向？欢迎随时与我联系
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-white font-semibold mb-6">联系方式</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors ${
                      info.link ? 'cursor-pointer' : ''
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">{info.title}</div>
                      <div className="text-white">{info.content}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">社交媒体</h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-lg bg-gray-800 hover:bg-accent-500/20 flex items-center justify-center text-gray-400 hover:text-accent-400 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">工作时间</h3>
              <p className="text-gray-400 text-sm">
                周一至周五: 9:00 - 18:00
                <br />
                周末: 预约制
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
