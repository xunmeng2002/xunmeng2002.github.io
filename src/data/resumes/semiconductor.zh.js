import contacts from './contact.zh.js'

export default {
  name: '张开强',
  contacts,
  pageLinks: [
    { label: '中文主页', to: '/zh' },
    { label: '通用版', to: '/resume-zh' },
    { label: 'English Resume', to: '/resume-en' }
  ],
  sections: [
    {
      kind: 'prose',
      title: '求职意向',
      text: '半导体设备算法工程师（机器视觉检测 / 图像算法工程化方向）。12 年 C++ 工程与实时系统经验，当前在半导体检测设备产线负责视觉算法框架的工程化落地。'
    },
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
        'C++20 / CUDA / Python',
        'HALCON / OpenCV 机器视觉',
        '张量计算：步长寻址(shape + strides + offset) · 零拷贝视图 · CPU/CUDA 异构',
        'DAG 流水线调度：拓扑排序 · 线程池 · 算子插件化 · Recipe 配方',
        '缺陷检测链路：预处理包络 · 工艺区域分割 · 三路边缘 · 动态阈值 · 两级配准 · 误报过滤',
        '半导体数据格式：KLARF · Wafer_Result.xml · OTF',
        '实时与资源工程：无锁队列 · 共享内存 · 对象池 · 执行期内存护栏',
        'PyTorch 深度学习（CNN/RNN/注意力）',
        '自研内存数据库（索引 / 事务 / 日志）',
        'CMake · WPF · Electron + Vue3'
      ]
    },
    {
      kind: 'jobs',
      title: '工作经历',
      jobs: [
        {
          title: '算法工程师',
          company: '芯上微装',
          date: '2026/02 – 至今',
          bullets: [
            '视觉算法框架（C++20 / CUDA）：负责张量的 CPU/CUDA 后端实现与算子层，含张量工厂、工具层与 CUDA 阈值算子；以步长寻址实现零拷贝视图与广播，统一 CPU/GPU 异构搬运接口',
            'DAG 流水线调度引擎：拓扑排序 + 入度依赖计数 + 线程池并行，算子注册（插件化）与 Recipe 配方驱动，流水线可由配置文件组装',
            'AOI 缺陷检测离线调参工作台（WPF + HALCON HDevEngine）：跑产线同一份 HALCON 过程库以保证结果同源；按算子拆分检测链路，界面可自由选择、组合过滤算法，便于快速查看调参结果；支持处方（config + 模板图）加载、批量重跑与 OTF 导出，并加执行期内存护栏解决大图（4220×16697）黑屏',
            '晶圆缺陷检出复盘工具（Electron + Vue3 + TypeScript）：把 OTF 检出与 Wafer_Result.xml 坐标逐 die 对照真值表做敏感性分析；自研坐标域算法——缺陷匹配与换位补偿、聚类去重、KPI 统计、并集导出',
            '算法测试系统与数据平台：版本包 / 用例 / 数据集下发，以子进程执行算法并回收 result.json 汇总评测；FastAPI 微服务 + MinIO 做数据集与版本管理'
          ]
        },
        {
          title: '软件工程师',
          company: '上海倍努力信息科技有限公司',
          date: '2025/08 – 2025/10',
          bullets: [
            '行情与监控客户端：对接广交所 L2 镜像行情与易达 API，Qt 客户端解析 Thrift 协议实时展示策略 / 账户 / 委托'
          ]
        },
        {
          title: '软件工程师',
          company: '瑞达瑞控科技有限公司',
          date: '2024/07 – 2025/05',
          bullets: [
            '量化平台核心研发：Tick/Bar 双模式回测与逐日结算；封装 CTP、中金所、国泰君安行情 API，提供统一的 C++/Python 接口'
          ]
        },
        {
          title: '软件工程师（负责人）',
          company: '上海澎博资讯有限公司',
          date: '2016/05 – 2024/07',
          bullets: [
            '资产管理系统（核心开发）：手写内存数据库（主键 / 索引 / 事务）、STEP/XTP 协议通信、Zabbix 7×24h 监控告警',
            '证券资管柜台与外盘柜台（负责人）：股票 / 期权的交易、风控、结算系统；对接 CME、HKEX、TT；独立开发风控规则引擎与五层名单体系'
          ]
        },
        {
          title: '软件工程师',
          company: '上海量投科技有限公司',
          date: '2015/08 – 2016/05',
          bullets: [
            '大宗商品交易系统：C++/C# 混合编程，对接 CTP API'
          ]
        },
        {
          title: '金融工程师',
          company: '森浦资讯信息技术有限公司',
          date: '2014/08 – 2015/07',
          bullets: [
            'PMS 资产管理系统：基于 SHIBOR 构建利率曲线与信用曲线，实现债券定价模型'
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
      title: '项目经历',
      projects: [
        {
          icon: '🧩',
          name: '半导体视觉算法公共库 — alg_common（团队仓）',
          desc: 'C++20 + CUDA + HALCON 的视觉算法公共库：张量（CPU/CUDA 双后端）、DAGEngine 流水线调度、插件化算子、Recipe 配方。本人负责张量的 CPU/CUDA 后端实现、张量工厂与工具层，以及 CUDA 阈值算子。'
        },
        {
          icon: '🧮',
          name: 'Tensor — 自研 N 维张量库',
          desc: 'N 维张量库：shape + strides + offset 步长寻址、零拷贝视图；Expand 以 stride = 0 实现广播视图；CPU / CUDA 双后端同一套接口；逐元素算子的标量与就地版本双后端齐备。约 2750 行，提交记录全部为本人，已在图像算法层投入使用。'
        },
        {
          icon: '🔬',
          name: 'DefectTuning — 缺陷检测离线调参工作台',
          desc: 'WPF + HALCON HDevEngine，把产线检测算法搬到离线跑并保证与产线结果同源：按算子拆分检测链路，界面可自由选择与组合过滤算法，分阶段查看每步过滤效果并逐阶段比对；支持处方加载、批量重跑、OTF 导出与执行期内存护栏。'
        },
        {
          icon: '🔎',
          name: 'defect_tools — 晶圆缺陷检出复盘工具',
          desc: 'Electron + Vue3 + TypeScript：把 OTF 检出与 Wafer_Result.xml 坐标逐 die 对照真值表做检出敏感性分析。自研坐标域算法包括缺陷匹配与换位补偿、聚类去重、KPI 统计与并集导出；页面含配置生成、单次验证、多次比较与图片复核（T/F/H/U 四态标注）。'
        },
        {
          icon: '🗂',
          name: 'amies-data-platform — 算法测试与数据平台',
          desc: 'FastAPI 微服务 + Vue3 的半导体数据平台：数据集 / Item / File 管理与 MinIO 存储；其中算法测试系统负责版本包、用例与数据集下发，以子进程执行算法并回收 result.json 汇总评测结果。'
        }
      ]
    },
    {
      kind: 'strengths',
      title: '核心优势',
      highlights: [
        '算法工程化落地 · Python 原型 → C++ 实时',
        '异构计算与实时性（CUDA / 无锁 / 共享内存 / 内存池）',
        '机器视觉检测链路实操（HALCON · OTF / KLARF / Wafer_Result.xml）',
        '12 年 C++ 工程经验 · 独立交付负责人'
      ],
      details: [
        '半导体视觉：张量底座 → DAG 调度 → 插件算子的完整工程化落地',
        '设备算法所需的实时性与资源控制：无锁队列、共享内存、执行期内存护栏',
        '故障排查方法论可迁移：交易系统的静默失败 / 时间戳漂移 / 内存与落库对账排查，与设备漂移、噪声排查同构'
      ]
    },
    {
      kind: 'prose',
      title: '个人总结',
      text: '12 年 C++ 工程与实时系统研发经验。2013–2024 在金融交易系统做底层——内存数据库、通信协议、风控规则引擎与实时调度；2026 年起转入半导体设备算法。当前在芯上微装负责视觉算法框架的工程化落地，并围绕 AOI 缺陷检测搭建离线调参、检出复盘与算法测试三套工具，贯通 OTF / Wafer_Result.xml / KLARF 数据链。长项是把算法做进设备：做得稳、跑得快、可复现、可调参。'
    }
  ],
  footerNote: '纯静态简历 · 部署于 Vercel/Netlify 零成本托管'
}
