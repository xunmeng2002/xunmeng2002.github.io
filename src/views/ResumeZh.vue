<template>
  <div class="resume-container">
    <!-- 头部信息 -->
    <div class="header">
      <div class="name">张开强</div>
      <div class="contact-bar">
        <span><i class="fas fa-envelope"></i> 150315803@qq.com</span>
        <span><i class="fas fa-map-marker-alt"></i> 上海</span>
        <span><i class="fas fa-phone-alt"></i> 18019749894</span>
        <a href="https://blog.csdn.net/xunmeng2002" target="_blank" rel="noopener"><i class="fab fa-blogger"></i> blog.csdn.net/xunmeng2002</a>
        <a href="https://github.com/xunmeng2002" target="_blank" rel="noopener"><i class="fab fa-github"></i> github.com/xunmeng2002</a>
      </div>
      <div class="page-links">
        <a href="/zh" class="page-link">中文主页</a>
        <a href="/resume-en" class="page-link">English Resume</a>
      </div>
    </div>

    <div class="content">
      <!-- 教育背景 -->
      <div class="section">
        <div class="section-title">教育背景</div>
        <div><strong>硕士 (2010.9 - 2013.7)</strong> · 西北大学 · 理论物理（计算核物理方向）</div>
        <div style="margin-top: 4px;"><strong>本科 (2006.9 - 2010.7)</strong> · 西北大学 · 物理学（基地班）</div>
      </div>

      <!-- 专业技能 -->
      <div class="section">
        <div class="section-title">专业技能</div>
        <div class="skills-grid">
          <span class="skill-badge">C++ / C# / Python</span>
          <span class="skill-badge">MySQL / SQLite / DuckDB</span>
          <span class="skill-badge">自研内存数据库(索引/事务/日志)</span>
          <span class="skill-badge">CTP / XTP / Step 协议</span>
          <span class="skill-badge">Tick/Bar回测 · 模拟撮合</span>
          <span class="skill-badge">CUDA / C++20协程</span>
          <span class="skill-badge">共享内存 / 无锁内存池</span>
          <span class="skill-badge">CMake / Zabbix / Blazor / WPF</span>
        </div>
      </div>

      <!-- 工作经验 -->
      <div class="section">
        <div class="section-title">工作经验</div>
        
        <div class="job-item">
          <div class="job-header">
            <span class="job-title">算法工程师 · <span class="job-company">芯上微装</span></span>
            <span class="job-date">2026/02 – 至今</span>
          </div>
          <div class="job-desc">
            <ul>
              <li>算法基础框架：设计基于StrideMemory的Tensor数据结构，支持CPU/GPU异构计算，零拷贝视图操作</li>
              <li>并行计算引擎：基于C++20协程与线程池，实现反射机制与配置文件驱动的DAG调度引擎</li>
            </ul>
          </div>
        </div>

        <div class="job-item">
          <div class="job-header">
            <span class="job-title">软件工程师 · <span class="job-company">上海倍努力信息科技有限公司</span></span>
            <span class="job-date">2025/08 – 2025/10</span>
          </div>
          <div class="job-desc">
            <ul>
              <li>监控客户端：基于Qt开发策略/账户/委托视图，解析Thrift协议实现实时数据展示</li>
              <li>行情服务：对接广交所L2镜像行情与易达API，统一适配为内部标准行情格式</li>
            </ul>
          </div>
        </div>

        <div class="job-item">
          <div class="job-header">
            <span class="job-title">软件工程师 · <span class="job-company">瑞达瑞控科技有限公司</span></span>
            <span class="job-date">2024/07 – 2025/05</span>
          </div>
          <div class="job-desc">
            <ul>
              <li>Rqs量化平台：负责行情、回测及API核心研发，实现Tick/Bar双模式回测与逐日结算</li>
              <li>多市场对接：封装CTP、中金所、国泰君安等行情API，提供统一的C++/Python接口</li>
            </ul>
          </div>
        </div>

        <div class="job-item">
          <div class="job-header">
            <span class="job-title">软件工程师（负责人） · <span class="job-company">上海澎博资讯有限公司</span></span>
            <span class="job-date">2016/05 – 2024/07</span>
          </div>
          <div class="job-desc">
            <ul>
              <li>证券资管柜台（负责人）：设计支持股票/期权的交易、风控、结算系统；开发Blazor管理后台与WPF客户端；实现Shell/Python全自动化运维</li>
              <li>外盘交易柜台（负责人）：对接CME、HKEX、TT，完成交易、查询及风控</li>
              <li>汇点风控（独立开发）：设计风控规则引擎与五层名单体系（黄/灰/黑/信任/白），反制客户端违规交易</li>
              <li>资产管理系统（核心开发）：基于算法手写内存数据库（支持主键/索引/事务）；实现STEP/XTP协议通信；引入Zabbix构建7x24h监控告警</li>
            </ul>
          </div>
        </div>

        <div class="job-item">
          <div class="job-header">
            <span class="job-title">软件工程师 · <span class="job-company">上海量投科技有限公司</span></span>
            <span class="job-date">2015/08 – 2016/05</span>
          </div>
          <div class="job-desc">
            <ul><li>大宗商品交易系统：实现C++/C#混合编程，对接CTP API；完成银证转账、IPO申购等交易客户端功能</li></ul>
          </div>
        </div>

        <div class="job-item">
          <div class="job-header">
            <span class="job-title">金融工程师 · <span class="job-company">森浦资讯信息技术有限公司</span></span>
            <span class="job-date">2014/08 – 2015/07</span>
          </div>
          <div class="job-desc">
            <ul><li>PMS资产管理系统：基于SHIBOR构建利率曲线与信用曲线，实现债券定价模型</li></ul>
          </div>
        </div>

        <div class="job-item">
          <div class="job-header">
            <span class="job-title">软件工程师 · <span class="job-company">北京金网安泰信息技术有限公司</span></span>
            <span class="job-date">2013/06 – 2014/07</span>
          </div>
          <div class="job-desc">
            <ul><li>大宗商品交易客户端的开发与维护（C#）</li></ul>
          </div>
        </div>
      </div>

      <!-- 开源项目 -->
      <div class="section">
        <div class="section-title">开源项目</div>
        <div class="project-item">
          <div class="project-title">
            📚 PersonalLib · C++20 高性能基础库
            <a href="https://github.com/xunmeng2002/PersonalLib" target="_blank">github.com/xunmeng2002/PersonalLib</a>
          </div>
          <div class="project-desc">
            专为高频/量化交易提供底层基础设施。包含四大模块：Core（日志/定时器/AOP/线程）、Network（跨平台TCP/共享内存，工厂模式自动适配Epoll/IOCP/Select，内置发布订阅与协议分帧）、TemplateLib（无锁环形缓冲区/对象池/队列，纯模板实现）、Serialization（JSON/Base64/CSV 及 GBK/UTF-8 编解码）。Protocol层统一I/O接口，业务与传输解耦，已应用于行情解码与回测系统。
          </div>
        </div>
        <div class="project-item">
          <div class="project-title">
            📁 内存数据库 – Mdb 
            <a href="https://github.com/xunmeng2002/Mdb" target="_blank">github.com/xunmeng2002/Mdb</a>
          </div>
          <div class="project-desc">
            自研高性能内存数据库，支持主键/唯一键/索引、表级读写锁及范围查询；通过日志同步机制实现与MariaDB/MySQL/SQLite/DuckDB的持久化交互，内置无锁对象池，加速数据库记录对象的分配与回收。
          </div>
        </div>
        <div class="project-item">
          <div class="project-title">
            📈 量化交易系统 – QuantTrading
            <a href="https://github.com/xunmeng2002/QuantTrading" target="_blank">github.com/xunmeng2002/QuantTrading</a>
          </div>
          <div class="project-desc">
            C++开发，集行情订阅（Ctp/深度行情）、Tick/Bar双模回测、模拟撮合引擎于一体；应用自研内存数据库实现行情持久化。
          </div>
        </div>
      </div>

      <!-- 核心优势 -->
      <div class="section">
        <div class="section-title">核心优势</div>
        <ul class="strength-list">
          <li>全栈金融技术 · 10年+交易系统</li>
          <li>底层性能优化(内存DB/共享内存/协程)</li>
          <li>独立交付能力 · 从0到1落地负责人</li>
        </ul>
        <div style="margin-top: 10px; font-size:0.86rem; color:#2c5068;">
          ✔ 行情、回测、交易、风控、结算全链路经验<br>
          ✔ 自研内存数据库、共享内存通信、协程调度<br>
          ✔ 多次担任项目负责人（证券资管柜台、外盘柜台、风控系统）
        </div>
      </div>

      <!-- 工作总结 -->
      <div class="section">
        <div class="section-title">工作总结</div>
        <div class="summary-text">
          一直任职于中小型的金融类软件公司，技术栈相对全面，具有独立解决问题的能力。参与的大多数项目是交易系统相关的，对交易、风控、账户管理等业务有较深入的理解。
        </div>
      </div>
      <hr>
      <div style="text-align: center; font-size: 0.7rem; padding: 10px 0 5px; color: #7f8c8d;">
        <i class="fas fa-code"></i> 纯静态简历 · 支持暗色跟随系统 · 部署于 Vercel/Netlify 零成本托管
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumeZh'
}
</script>

<style scoped>
/* 简历专用样式 */
.resume-container {
  max-width: 1100px;
  margin: 2rem auto;
  background: white;
  border-radius: 32px;
  box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}
.header {
  background: linear-gradient(135deg, #0b2b3b 0%, #123e52 100%);
  padding: 2.4rem 2.8rem;
  color: white;
  position: relative;
}
.name {
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}
.contact-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.9;
}
.contact-bar a, .contact-bar span {
  color: #e0f0ff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.contact-bar a:hover {
  color: white;
  text-decoration: underline;
}
.contact-bar i {
  width: 18px;
  font-size: 1rem;
}
.page-links {
  position: absolute;
  top: 2rem;
  right: 2.8rem;
  display: flex;
  gap: 1rem;
}
.page-link {
  background: rgba(255,255,255,0.2);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 40px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: background 0.2s;
}
.page-link:hover {
  background: rgba(255,255,255,0.35);
  color: white;
}
.content {
  padding: 2rem 2.8rem;
}
.section {
  margin-bottom: 2rem;
}
.section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #0f3b4f;
  border-left: 5px solid #2c7da0;
  padding-left: 1rem;
  margin-bottom: 1rem;
}
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 0.5rem;
}
.skill-badge {
  background: #eef2fa;
  padding: 0.35rem 1rem;
  border-radius: 40px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #1e4a6e;
  border: 1px solid #dce5f0;
}
.job-item {
  margin-bottom: 1.6rem;
}
.job-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.4rem;
}
.job-title {
  font-weight: 700;
  font-size: 1rem;
  color: #0b2b3b;
}
.job-company {
  font-weight: 600;
  color: #2c7da0;
}
.job-date {
  font-size: 0.75rem;
  color: #5e7a93;
}
.job-desc ul {
  padding-left: 1.2rem;
  margin-top: 0.2rem;
}
.job-desc li {
  margin-bottom: 0.3rem;
  font-size: 0.88rem;
  color: #2c3e4e;
}
.project-item {
  background: #f8fafd;
  border-radius: 20px;
  padding: 1rem 1.3rem;
  margin-bottom: 1rem;
  border: 1px solid #e9edf2;
}
.project-title {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.project-title a {
  color: #2c7da0;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  background: #eef2fa;
  padding: 0.2rem 0.7rem;
  border-radius: 20px;
}
.project-desc {
  font-size: 0.86rem;
  color: #2a4055;
  line-height: 1.45;
}
.strength-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 0.6rem 0 0.2rem;
  list-style: none;
}
.strength-list li {
  background: white;
  border-radius: 30px;
  padding: 0.25rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid #dce5f0;
  color: #145c7a;
}
.summary-text {
  background: #f5f9fe;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border-left: 4px solid #2c7da0;
  color: #1e3a4b;
}
hr {
  margin: 1rem 0;
  border: none;
  border-top: 1px solid #e2e8f0;
}
@media (max-width: 700px) {
  .content {
    padding: 1.5rem;
  }
  .header {
    padding: 1.6rem;
  }
  .name {
    font-size: 2rem;
  }
  .contact-bar {
    gap: 1rem;
    font-size: 0.75rem;
  }
  .page-links {
    position: static;
    justify-content: flex-end;
    margin-top: 1rem;
  }
}
</style>
