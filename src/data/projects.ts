export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export const projects: Project[] = [
  {
    id: '1',
    title: '电商管理系统',
    description: '基于 React 和 Node.js 开发的全栈电商管理平台，支持商品管理、订单处理、用户管理等核心功能。采用微服务架构，具有良好的扩展性和稳定性。',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20ecommerce%20dashboard%20interface%20with%20charts%20and%20analytics&image_size=landscape_16_9',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: '智能客服机器人',
    description: '基于人工智能的智能客服系统，支持自然语言处理、多轮对话和情感分析。集成多种渠道，包括网页、APP和社交媒体。',
    tags: ['Python', 'TensorFlow', 'NLP', 'WebSocket'],
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20chatbot%20interface%20with%20conversation%20bubbles%20and%20futuristic%20design&image_size=landscape_16_9',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: '数据可视化平台',
    description: '企业级数据可视化解决方案，支持多种图表类型和实时数据展示。提供丰富的API接口，易于与现有系统集成。',
    tags: ['Vue.js', 'D3.js', 'PostgreSQL', 'Docker'],
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20dashboard%20with%20colorful%20charts%20and%20graphs&image_size=landscape_16_9',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    title: '移动端社交应用',
    description: '跨平台社交应用，支持图片分享、实时聊天和位置服务。采用Flutter开发，具有流畅的用户体验和精美的UI设计。',
    tags: ['Flutter', 'Firebase', 'Dart', 'iOS/Android'],
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20social%20app%20interface%20with%20feed%20and%20profile%20design&image_size=landscape_16_9',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '5',
    title: '在线教育平台',
    description: '综合性在线学习平台，支持视频课程、直播教学和在线测验。具有完善的学习进度追踪和证书颁发系统。',
    tags: ['Next.js', 'TypeScript', 'AWS', 'Stripe'],
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=online%20education%20platform%20with%20video%20player%20and%20course%20cards&image_size=landscape_16_9',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '6',
    title: '物联网监控系统',
    description: '工业级物联网解决方案，支持设备管理、数据采集和远程控制。实时监控设备状态，提供预警和报警功能。',
    tags: ['Go', 'MQTT', 'Redis', 'InfluxDB'],
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=IoT%20dashboard%20with%20device%20monitoring%20and%20real-time%20data&image_size=landscape_16_9',
    demoUrl: '#',
    githubUrl: '#',
  },
];

export const skills: Skill[] = [
  { name: 'React', category: '前端框架', level: 95 },
  { name: 'TypeScript', category: '编程语言', level: 90 },
  { name: 'Node.js', category: '后端技术', level: 88 },
  { name: 'Vue.js', category: '前端框架', level: 85 },
  { name: 'Python', category: '编程语言', level: 82 },
  { name: 'Next.js', category: '前端框架', level: 80 },
  { name: 'MongoDB', category: '数据库', level: 85 },
  { name: 'PostgreSQL', category: '数据库', level: 80 },
  { name: 'Docker', category: 'DevOps', level: 75 },
  { name: 'AWS', category: '云服务', level: 70 },
];

export const skillCategories = ['前端框架', '编程语言', '后端技术', '数据库', 'DevOps', '云服务'];
