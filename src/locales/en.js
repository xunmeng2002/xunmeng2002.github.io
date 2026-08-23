// src/locales/en.js
export default {
  nav: {
    logo: 'Kaiqiang Zhang',
    about: 'About',
    skills: 'Skills',
    projects: 'Open Source',
    experience: 'Experience',
    strengths: 'Strengths',
    resume: 'Full Resume',
    langSwitch: '中文'
  },
  hero: {
    badge: '🚀 Quantitative Systems · FinTech Expert',
    name: 'Kaiqiang Zhang',
    title: '10+ Years Trading System Architecture · In-Memory DB Author',
    desc: 'Specializing in high-performance financial trading systems, low-level optimization, and full-stack delivery.',
    stats: [
      { number: '10+ yrs', label: 'FinTech Experience' },
      { number: '5+', label: 'Lead Projects' },
      { number: '4', label: 'Open Source' }
    ],
    avatarChar: 'KZ',
    contacts: [
      { icon: 'fas fa-map-marker-alt', text: 'Shanghai, China', link: null },
      { icon: 'fas fa-envelope', text: '150315803@qq.com', link: null },
      { icon: 'fas fa-phone', text: '+86 18019749894', link: null },
      { icon: 'fab fa-blogger', text: 'CSDN Blog', link: 'https://blog.csdn.net/xunmeng2002' },
      { icon: 'fab fa-github', text: 'github.com/xunmeng2002', link: 'https://github.com/xunmeng2002' }
    ]
  },
  about: {
    title: 'About Me',
    content: [
      'Transitioned from theoretical physics to quantitative finance, spent over a decade deeply involved in trading system development. I believe that "simple and clear technology can solve complex financial business". Passionate about low-level performance optimization, pursuing extreme system latency and throughput.',
      'Led core system roles at multiple FinTech companies, independently designed and delivered securities asset management desks, foreign exchange trading desks, and risk control systems. Currently focused on high-performance computing, in-memory databases, and algorithmic trading frameworks.',
      '<strong>Motto:</strong> Code is the poetry of logic, systems are the symphony of engineering.'
    ]
  },
  skills: {
    title: 'Tech Stack · Expertise',
    categories: [
      { name: '⚙️ Languages & Databases', tags: ['C++20/17', 'C#', 'Python', 'MySQL/SQLite/DuckDB', 'In-Memory DB'] },
      { name: '📈 Quant/Finance', tags: ['CTP/XTP/STEP', 'Tick/Bar Backtesting', 'Simulated Matching', 'Risk Engine', 'Market Data'] },
      { name: '⚡ High-Performance Computing', tags: ['CUDA', 'Coroutines', 'Shared Memory', 'OpenCV', 'DAG Scheduling'] },
      { name: '🛠️ Tools & Full-Stack', tags: ['CMake', 'Zabbix', 'Blazor/WPF', 'Qt', 'Thrift'] }
    ]
  },
  projects: {
    title: '✨ Open Source Projects',
    list: [
      {
        icon: '📚',
        title: 'Spark · C++20 High-Performance Foundation Library',
        desc: 'Low-latency infrastructure for HFT/quant trading.',
        features: [
          '✓ Modules: Core (logging/timer/AOP/threading), Network (cross-platform TCP/shared memory, Epoll/IOCP/Select adapters, pub-sub, protocol framing)',
          '✓ TemplateLib: lock-free ring buffer, object pool, queue (pure templates)',
          '✓ Serialization: JSON/Base64/CSV, GBK/UTF-8 encoding/decoding',
          '✓ Protocol layer unifies I/O, decouples business from transport; used in market data decoding & backtesting'
        ],
        link: 'https://github.com/xunmeng2002/Spark'
      },
      {
        icon: '🗄️',
        title: 'DBAdapters · Unified Database Access Layer',
        desc: 'Spark-based DB access layer; the persistence foundation for Mdb / QuantTrading.',
        features: [
          '✓ Unified interface across four DBs: SQLite / DuckDB / MySQL / MariaDB',
          '✓ TableSchema → TypedTable abstraction, no hand-written SQL',
          '✓ AsyncDBWriter: async persistence, batch flush, auto-reconnect',
          '✓ DuckDB vectorized bulk reads with NULL sentinels'
        ],
        link: 'https://github.com/xunmeng2002/DBAdapters'
      },
      {
        icon: '🧠',
        title: 'In-Memory Database · Mdb',
        desc: 'High-performance in-memory DB refined over a decade, used in production systems.',
        features: [
          '✓ Primary/unique keys, indexes, table-level read-write locks',
          '✓ Range queries based on primary keys/indexes',
          '✓ Async sync to MariaDB/MySQL/SQLite/DuckDB via DBAdapters',
          '✓ Lock-free object pool for fast allocation'
        ],
        link: 'https://github.com/xunmeng2002/Mdb'
      },
      {
        icon: '📊',
        title: 'QuantTrading · Quantitative System',
        desc: 'Multi-market, multi-strategy professional quant trading framework.',
        features: [
          '✓ MdOffer market-data service: CTP real-time/depth, K-line generation, in-memory DB + async persistence',
          '✓ BackTest: Parquet Tick/Bar replay, daily settlement',
          '✓ SimExchange simulated trading: four matching engines + in-memory DB'
        ],
        link: 'https://github.com/xunmeng2002/QuantTrading'
      }
    ]
  },
  experience: {
    title: '📌 Core Experience',
    items: [
      { title: 'Algorithm Engineer · XinShang Micro Assembly', date: 'Feb 2026 – Present', desc: 'Tensor heterogeneous computing framework, C++20 coroutine DAG scheduler, zero-copy views.' },
      { title: 'Lead Software Engineer · Shanghai Pengbo Info', date: 'May 2016 – Jul 2024', desc: 'Securities asset management desk, foreign exchange desk, risk control system lead; self-developed in-memory DB; Blazor/WPF clients.' },
      { title: 'Software Engineer · RuiDa RuiKong Tech', date: 'Jul 2024 – May 2025', desc: 'Rqs quant platform core dev: Tick/Bar backtesting, unified C++/Python API.' },
      { title: 'Fin/Software Engineer · Senpu/Liangtou/Jinwang', date: '2013 – 2016', desc: 'Bond pricing models, commodity trading systems, C# client development.' }
    ]
  },
  strengths: {
    title: '🎯 Core Strengths',
    cards: [
      { icon: 'fas fa-chart-line', title: 'Full-Stack FinTech', desc: 'Market data · Backtesting · Trading · Risk · Settlement, across stocks/futures/options/forex' },
      { icon: 'fas fa-tachometer-alt', title: 'Low-Level Optimization', desc: 'In-memory DB, shared memory, coroutines, CUDA acceleration' },
      { icon: 'fas fa-building', title: 'Independent Delivery', desc: '0-to-1 lead for core desks and risk systems' }
    ]
  },
  quote: 'Always worked in small to medium-sized FinTech companies. Broad technical stack, strong problem-solving skills, deep understanding of trading system business.',
  footer: 'Kaiqiang Zhang · Static Personal Website · Deployed on Vercel'
}