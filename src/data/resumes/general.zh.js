export default {
  name: '张开强',
  contacts: [
    { icon: 'fas fa-envelope', text: '150315803@qq.com' },
    { icon: 'fas fa-map-marker-alt', text: '上海' },
    { icon: 'fas fa-phone-alt', text: '18019749894' },
    { icon: 'fab fa-blogger', text: 'blog.csdn.net/xunmeng2002', link: 'https://blog.csdn.net/xunmeng2002' },
    { icon: 'fab fa-github', text: 'github.com/xunmeng2002', link: 'https://github.com/xunmeng2002' }
  ],
  pageLinks: [
    { label: '中文主页', to: '/zh' },
    { label: 'English Resume', to: '/resume-en' }
  ],
  sections: [
    {
      kind: 'lines',
      title: '教育背景',
      lines: [
        { strong: '硕士 (2010.9 - 2013.7)', text: ' · 西北大学 · 理论物理（计算核物理方向）' },
        { strong: '本科 (2006.9 - 2010.7)', text: ' · 西北大学 · 物理学（基地班）' }
      ]
    },
    {
      kind: 'tags',
      title: '专业技能',
      tags: [
        'C++ / C# / Python',
        'MySQL / SQLite / DuckDB',
        '自研内存数据库(索引/事务/日志)',
        'CTP / XTP / Step 协议',
        'Tick/Bar回测 · 模拟撮合',
        'CUDA / C++20协程',
        '共享内存 / 无锁内存池',
        'PyTorch 深度学习（CNN/RNN/注意力）',
        'RNN 股票价格预测实战',
        'CMake / Zabbix / Blazor / WPF'
      ]
    },
    {
      kind: 'jobs',
      title: '工作经验',
      jobs: [
        {
          title: '算法工程师',
          company: '芯上微装',
          date: '2026/02 – 至今',
          bullets: [
            '算法基础框架：设计基于StrideMemory的Tensor数据结构，支持CPU/GPU异构计算，零拷贝视图操作',
            '并行计算引擎：基于C++20协程与线程池，实现反射机制与配置文件驱动的DAG调度引擎'
          ]
        },
        {
          title: '软件工程师',
          company: '上海倍努力信息科技有限公司',
          date: '2025/08 – 2025/10',
          bullets: [
            '监控客户端：基于Qt开发策略/账户/委托视图，解析Thrift协议实现实时数据展示',
            '行情服务：对接广交所L2镜像行情与易达API，统一适配为内部标准行情格式'
          ]
        },
        {
          title: '软件工程师',
          company: '瑞达瑞控科技有限公司',
          date: '2024/07 – 2025/05',
          bullets: [
            'Rqs量化平台：负责行情、回测及API核心研发，实现Tick/Bar双模式回测与逐日结算',
            '多市场对接：封装CTP、中金所、国泰君安等行情API，提供统一的C++/Python接口'
          ]
        },
        {
          title: '软件工程师（负责人）',
          company: '上海澎博资讯有限公司',
          date: '2016/05 – 2024/07',
          bullets: [
            '证券资管柜台（负责人）：设计支持股票/期权的交易、风控、结算系统；开发Blazor管理后台与WPF客户端；实现Shell/Python全自动化运维',
            '外盘交易柜台（负责人）：对接CME、HKEX、TT，完成交易、查询及风控',
            '汇点风控（独立开发）：设计风控规则引擎与五层名单体系（黄/灰/黑/信任/白），反制客户端违规交易',
            '资产管理系统（核心开发）：基于算法手写内存数据库（支持主键/索引/事务）；实现STEP/XTP协议通信；引入Zabbix构建7x24h监控告警'
          ]
        },
        {
          title: '软件工程师',
          company: '上海量投科技有限公司',
          date: '2015/08 – 2016/05',
          bullets: [
            '大宗商品交易系统：实现C++/C#混合编程，对接CTP API；完成银证转账、IPO申购等交易客户端功能'
          ]
        },
        {
          title: '金融工程师',
          company: '森浦资讯信息技术有限公司',
          date: '2014/08 – 2015/07',
          bullets: [
            'PMS资产管理系统：基于SHIBOR构建利率曲线与信用曲线，实现债券定价模型'
          ]
        },
        {
          title: '软件工程师',
          company: '北京金网安泰信息技术有限公司',
          date: '2013/06 – 2014/07',
          bullets: [
            '大宗商品交易客户端的开发与维护（C#）'
          ]
        }
      ]
    },
    {
      kind: 'projects',
      title: '开源项目',
      projects: [
        {
          icon: '📚',
          name: 'Spark · C++20 高性能基础库',
          link: 'https://github.com/xunmeng2002/Spark',
          desc: '专为高频/量化交易提供底层基础设施。包含四大模块：Core（日志/定时器/AOP/线程）、Network（跨平台TCP/共享内存，工厂模式自动适配Epoll/IOCP/Select，内置发布订阅与协议分帧）、TemplateLib（无锁环形缓冲区/对象池/队列，纯模板实现）、Serialization（JSON/Base64/CSV 及 GBK/UTF-8 编解码）。Protocol层统一I/O接口，业务与传输解耦，已应用于行情解码与回测系统。'
        },
        {
          icon: '🗄️',
          name: 'DBAdapters · 统一数据库访问层',
          link: 'https://github.com/xunmeng2002/DBAdapters',
          desc: '基于 Spark 的多数据库访问层，作为 Mdb / QuantTrading 等项目的持久化底座。四种数据库（SQLite/DuckDB/MySQL/MariaDB）统一接口、一致读写；TableSchema → TypedTable 三层抽象，业务无需手写 SQL；AsyncDBWriter 异步写库，内存变更批量落盘、断线自动重连；DuckDB 向量化批量读取。'
        },
        {
          icon: '🧠',
          name: '内存数据库 – Mdb',
          link: 'https://github.com/xunmeng2002/Mdb',
          desc: '自研高性能内存数据库，支持主键/唯一键/索引、表级读写锁及范围查询；持久化层基于 DBAdapters，异步同步至 MariaDB/MySQL/SQLite/DuckDB，内置无锁对象池，加速数据库记录对象的分配与回收。'
        },
        {
          icon: '🧭',
          name: '向量数据库 – Beacon',
          link: 'https://gitee.com/xunmeng2002/Beacon',
          desc: '自研 C++20 内存向量数据库，为 RAG 提供毫秒级 Top-K 相似检索：扁平连续存储 + AVX2/标量双路径点积（余弦/内积度量，库本体零第三方依赖）；HNSW 近似检索（启发式选边、ef 可调）与节点级增量删除/更新，暴力检索作精确对照；软删除/就地更新、读写锁并发、版本化二进制持久化；pybind11 导出 Python 模块，已落地「文档切片 → bge 向量化 → Beacon 检索 → LLM 问答」RAG 示例，并与 hnswlib 完成 10 万×128 维召回率/延迟对比。'
        },
        {
          icon: '📈',
          name: '量化交易系统 – QuantTrading',
          link: 'https://github.com/xunmeng2002/QuantTrading',
          desc: 'C++开发的专业量化系统：行情服务 MdOffer（CTP实时/深度行情，K线生成，内存库 + 异步持久化）、历史回测 BackTest（Parquet Tick/Bar 重放，逐日结算）、模拟交易 SimExchange（四种撮合引擎 + 内存数据库）。'
        }
      ]
    },
    {
      kind: 'strengths',
      title: '核心优势',
      highlights: [
        '全栈金融技术 · 10年+交易系统',
        '底层性能优化(内存DB/共享内存/协程)',
        '独立交付能力 · 从0到1落地负责人',
        '深度学习实践 · PyTorch（CNN/RNN/注意力）'
      ],
      details: [
        '行情、回测、交易、风控、结算全链路经验',
        '自研内存数据库、共享内存通信、协程调度',
        '多次担任项目负责人（证券资管柜台、外盘柜台、风控系统）'
      ]
    },
    {
      kind: 'prose',
      title: '工作总结',
      text: '一直任职于中小型的金融类软件公司，技术栈相对全面，具有独立解决问题的能力。参与的大多数项目是交易系统相关的，对交易、风控、账户管理等业务有较深入的理解。近期系统学习深度学习（PyTorch），动手实践回归、CNN、RNN，了解注意力机制，并基于 RNN 完成股票价格预测。'
    }
  ],
  footerNote: '纯静态简历 · 支持暗色跟随系统 · 部署于 Vercel/Netlify 零成本托管'
}
