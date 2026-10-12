export default {
  name: 'Kaiqiang Zhang',
  contacts: [
    { icon: 'fas fa-envelope', text: '150315803@qq.com' },
    { icon: 'fas fa-map-marker-alt', text: 'Shanghai, China' },
    { icon: 'fas fa-phone-alt', text: '+86 18019749894' },
    { icon: 'fab fa-blogger', text: 'CSDN Blog', link: 'https://blog.csdn.net/xunmeng2002' },
    { icon: 'fab fa-github', text: 'github.com/xunmeng2002', link: 'https://github.com/xunmeng2002' }
  ],
  pageLinks: [
    { label: 'English Home', to: '/en' },
    { label: '中文简历', to: '/resume-zh' }
  ],
  sections: [
    {
      kind: 'lines',
      title: 'Education',
      lines: [
        { strong: 'M.S. (2010.9 – 2013.7)', text: ' · Northwest University · Theoretical Physics (Computational Nuclear Physics)' },
        { strong: 'B.S. (2006.9 – 2010.7)', text: ' · Northwest University · Physics (Base Class)' }
      ]
    },
    {
      kind: 'tags',
      title: 'Technical Skills',
      tags: [
        'C++ / C# / Python',
        'MySQL / SQLite / DuckDB',
        'In-Memory DB (Index/Transaction/Log)',
        'CTP / XTP / Step Protocols',
        'Tick/Bar Backtesting & Simulated Matching',
        'CUDA / C++20 Coroutines',
        'Shared Memory / Lock-free Pool',
        'PyTorch Deep Learning (CNN/RNN/Attention)',
        'RNN Stock Price Prediction',
        'CMake / Zabbix / Blazor / WPF'
      ]
    },
    {
      kind: 'jobs',
      title: 'Work Experience',
      jobs: [
        {
          title: 'Algorithm Engineer',
          company: 'XinShang Micro Assembly',
          date: 'Feb 2026 – Present',
          bullets: [
            'Tensor computing framework with StrideMemory, zero-copy views, heterogeneous CPU/GPU.',
            'DAG scheduler using C++20 coroutines, thread pool, reflection and config-driven.'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'Shanghai BeiNuoLi Info Tech',
          date: 'Aug 2025 – Oct 2025',
          bullets: [
            'Qt-based monitoring client: strategy/account/order views, Thrift protocol parsing.',
            'Market data service: adapt GZE L2 and Yida API to internal standard format.'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'RuiDa RuiKong Tech',
          date: 'Jul 2024 – May 2025',
          bullets: [
            'Core R&D for Rqs quant platform: market data, backtesting (Tick/Bar dual modes), daily settlement.',
            'Unified C++/Python API for CTP, CFFEX, GTJA market feeds.'
          ]
        },
        {
          title: 'Lead Software Engineer',
          company: 'Shanghai Pengbo Info',
          date: 'May 2016 – Jul 2024',
          bullets: [
            'Securities AM desk (lead): trading/risk/settlement for stocks/options; Blazor admin & WPF client; full automation with Shell/Python.',
            'Foreign exchange desk (lead): integration with CME, HKEX, TT.',
            'Risk control system (solo): rule engine with 5-tier list (yellow/grey/black/trust/white).',
            'Asset management system: in-memory DB with primary keys/indexes/transactions; STEP/XTP; Zabbix monitoring.'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'Shanghai Liangtou Tech',
          date: 'Aug 2015 – May 2016',
          bullets: [
            'Commodity trading system: C++/C# mixed, CTP API, bank-securities transfer, IPO subscription.'
          ]
        },
        {
          title: 'Financial Engineer',
          company: 'SENPU Info Tech',
          date: 'Aug 2014 – Jul 2015',
          bullets: [
            'PMS asset management: bond pricing models based on SHIBOR interest rate and credit curves.'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'Beijing Jinwang Antai',
          date: 'Jun 2013 – Jul 2014',
          bullets: [
            'Commodity trading client development and maintenance (C#).'
          ]
        }
      ]
    },
    {
      kind: 'projects',
      title: 'Open Source Projects',
      projects: [
        {
          icon: '📚',
          name: 'Spark · C++20 High-Performance Foundation Library',
          link: 'https://github.com/xunmeng2002/Spark',
          desc: 'Low-latency infrastructure for HFT/quant trading. Four modules: Core (logging/timer/AOP/threading), Network (cross-platform TCP/shared memory with Epoll/IOCP/Select adapters, pub-sub, protocol framing), TemplateLib (lock-free ring buffer/object pool/queue, pure templates), Serialization (JSON/Base64/CSV, GBK/UTF-8 encoding). Protocol layer unifies I/O, decouples business from transport; used in market data decoding and backtesting.'
        },
        {
          icon: '🗄️',
          name: 'DBAdapters · Unified Database Access Layer',
          link: 'https://github.com/xunmeng2002/DBAdapters',
          desc: 'Spark-based DB access layer, the persistence foundation for Mdb / QuantTrading. Unified interface across SQLite/DuckDB/MySQL/MariaDB; TableSchema → TypedTable abstraction with no hand-written SQL; AsyncDBWriter for async persistence, batch flush and auto-reconnect; DuckDB vectorized bulk reads.'
        },
        {
          icon: '🧠',
          name: 'In-Memory DB – Mdb',
          link: 'https://github.com/xunmeng2002/Mdb',
          desc: 'High-performance in-memory DB with primary/unique keys, indexes, table-level locks, range queries. Persistence layer built on DBAdapters, async-synced to MariaDB/MySQL/SQLite/DuckDB. Lock-free object pool.'
        },
        {
          icon: '🧭',
          name: 'Vector Database – Beacon',
          link: 'https://gitee.com/xunmeng2002/Beacon',
          desc: 'Self-developed C++20 in-memory vector database for RAG: flat contiguous storage with AVX2/scalar dual-path dot products (cosine/inner product, zero third-party deps); HNSW approximate search (heuristic edge selection, tunable ef) with node-level incremental delete/update, brute-force search as exact baseline; soft delete/in-place update, reader-writer locking, versioned binary persistence; pybind11 Python module; end-to-end RAG demo (chunking → bge embeddings → Beacon Top-K → LLM answering), benchmarked against hnswlib at 100k × 128 dims.'
        },
        {
          icon: '📈',
          name: 'Quant Trading System – QuantTrading',
          link: 'https://github.com/xunmeng2002/QuantTrading',
          desc: 'C++ professional quant system: MdOffer market-data service (CTP real-time/depth, K-line generation, in-memory DB + async persistence), BackTest (Parquet Tick/Bar replay, daily settlement), SimExchange simulated trading (four matching engines + in-memory DB).'
        }
      ]
    },
    {
      kind: 'strengths',
      title: 'Core Strengths',
      highlights: [
        'Full-Stack FinTech · 10+ Years Trading Systems',
        'Low-Level Optimization (In-Memory DB, Shared Memory, Coroutines)',
        'Independent Delivery · 0-to-1 Project Lead',
        'Deep Learning Practice · PyTorch (CNN/RNN/Attention)'
      ],
      details: [
        'End-to-end experience: market data, backtesting, trading, risk, settlement',
        'Self-developed in-memory DB, shared memory communication, coroutine scheduling',
        'Led securities AM desk, foreign exchange desk, risk control system'
      ]
    },
    {
      kind: 'prose',
      title: 'Summary',
      text: 'Always worked in small to medium-sized FinTech companies. Broad technical stack, strong problem-solving skills, deep understanding of trading system business (trading, risk, account management). Recently systematically studied deep learning (PyTorch) with hands-on practice on regression, CNN and RNN, familiar with attention mechanisms, and built an RNN-based stock price prediction model.'
    }
  ],
  footerNote: 'Static Resume · Deployed on Vercel/Netlify'
}
