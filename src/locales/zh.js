// src/locales/zh.js
export default {
  nav: {
    about: '关于',
    skills: '技术',
    projects: '开源',
    experience: '经历',
    strengths: '优势',
    resume: '完整简历',
    langSwitch: 'English'
  },
  hero: {
    badge: '🚀 量化系统 · 金融技术专家',
    name: '张开强',
    title: '10+年交易系统架构 · 自研内存数据库作者',
    desc: '专注于高性能金融交易系统、底层性能优化与全栈技术落地。',
    stats: [
      { number: '10+年', label: '金融IT经验' },
      { number: '5+', label: '核心项目负责人' },
      { number: '2', label: '自研开源项目' }
    ],
    avatarChar: '张',
    contacts: [
      { icon: 'fas fa-map-marker-alt', text: '上海 · 中国', link: null },
      { icon: 'fas fa-envelope', text: '150315803@qq.com', link: null },
      { icon: 'fas fa-phone', text: '18019749894', link: null },
      { icon: 'fab fa-blogger', text: 'CSDN博客', link: 'https://blog.csdn.net/xunmeng2002' },
      { icon: 'fab fa-github', text: 'github.com/xunmeng2002', link: 'https://github.com/xunmeng2002' }
    ]
  },
  about: {
    title: '关于我',
    content: [
      '从理论物理转向量化金融，十多年来一直深耕交易系统研发。相信「简单清晰的技术能解决复杂的金融业务」，热爱底层性能优化，追求极致的系统延迟与吞吐。',
      '曾在多家金融科技公司担任核心系统负责人，独立设计并交付了证券资管柜台、外盘柜台、风控系统等关键设施。目前专注于高性能计算、内存数据库以及算法交易框架的构建。',
      '<strong>格言：</strong> 代码是逻辑的诗篇，系统是工程的交响。'
    ]
  },
  skills: {
    title: '技术栈 · 专业领域',
    categories: [
      { name: '⚙️ 语言与数据库', tags: ['C++20/17', 'C#', 'Python', 'MySQL/SQLite/DuckDB', '自研内存DB'] },
      { name: '📈 量化/金融', tags: ['CTP/XTP/STEP', 'Tick/Bar回测', '模拟撮合', '风控引擎', '行情解码'] },
      { name: '⚡ 高性能计算', tags: ['CUDA', '协程', '共享内存', 'OpenCV', 'DAG调度'] },
      { name: '🛠️ 工具/全栈', tags: ['CMake', 'Zabbix', 'Blazor/WPF', 'Qt', 'Thrift'] }
    ]
  },
  projects: {
    title: '✨ 开源项目',
    list: [
      {
        icon: '📚',
        title: 'PersonalLib · C++20 高性能基础库',
        desc: '专为高频/量化交易提供底层基础设施。',
        features: [
          '四大模块：Core（日志/定时器/AOP/线程）、Network（跨平台TCP/共享内存，自动适配Epoll/IOCP/Select，内置发布订阅与协议分帧）',
          'TemplateLib：无锁环形缓冲区、对象池、队列（纯模板实现）',
          'Serialization：JSON/Base64/CSV 及 GBK/UTF-8 编解码',
          'Protocol层统一I/O接口，解耦业务与传输，已用于行情解码与回测系统'
        ],
        link: 'https://github.com/xunmeng2002/PersonalLib'
      },
      {
        icon: '🗄️',
        title: '内存数据库 · Mdb',
        desc: '十多年经验沉淀的高性能内存数据库，已在多个生产系统使用。',
        features: ['主键、唯一键、索引、表级读写锁', '基于主键/索引的范围查询', '日志同步至 MariaDB/MySQL/SQLite/DuckDB', '无锁对象池加速记录分配回收'],
        link: 'https://github.com/xunmeng2002/Mdb'
      },
      {
        icon: '📊',
        title: 'QuantTrading · 量化系统',
        desc: '多市场、多策略的专业量化交易框架。',
        features: ['行情：Ctp实时/深度行情，K线生成，持久化', '回测：Tick/Bar双模，逐日结算，多格式导出', '模拟交易：订单撮合引擎 + 内存数据库'],
        link: 'https://github.com/xunmeng2002/QuantTrading'
      }
    ]
  },
  experience: {
    title: '📌 核心履历',
    items: [
      { title: '算法工程师 · 芯上微装', date: '2026/02 – 至今', desc: 'Tensor异构计算框架、C++20协程DAG调度引擎，CPU/GPU零拷贝视图。' },
      { title: '软件负责人 · 上海澎博资讯', date: '2016/05 – 2024/07', desc: '证券资管柜台、外盘柜台、风控系统负责人；自研内存数据库，Blazor/WPF客户端。' },
      { title: '软件工程师 · 瑞达瑞控科技', date: '2024/07 – 2025/05', desc: 'Rqs量化平台核心研发，Tick/Bar回测引擎，统一C++/Python API。' },
      { title: '金融/软件工程师 · 森浦/量投/金网安泰', date: '2013 – 2016', desc: '债券定价模型、大宗商品交易系统、C#客户端开发。' }
    ]
  },
  strengths: {
    title: '🎯 核心优势',
    cards: [
      { icon: 'fas fa-chart-line', title: '全栈金融技术', desc: '行情·回测·交易·风控·结算，股票/期货/期权/外盘全覆盖' },
      { icon: 'fas fa-tachometer-alt', title: '底层性能优化', desc: '自研内存数据库、共享内存、协程调度、CUDA加速' },
      { icon: 'fas fa-building', title: '独立交付能力', desc: '多次从0到1落地核心柜台、风控系统' }
    ]
  },
  quote: '一直任职于中小型金融软件公司，技术栈全面，独立解决问题能力强，对交易系统业务理解深入。',
  footer: '张开强 · 基于 Vue + Vite 部署在 Vercel'
}