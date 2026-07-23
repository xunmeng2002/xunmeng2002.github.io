<template>
  <div class="resume-container">
    <div class="header">
      <div class="name">Kaiqiang Zhang</div>
      <div class="contact-bar">
        <span><i class="fas fa-envelope"></i> 150315803@qq.com</span>
        <span><i class="fas fa-map-marker-alt"></i> Shanghai, China</span>
        <span><i class="fas fa-phone-alt"></i> +86 18019749894</span>
        <a href="https://blog.csdn.net/xunmeng2002" target="_blank"><i class="fab fa-blogger"></i> CSDN Blog</a>
        <a href="https://github.com/xunmeng2002" target="_blank"><i class="fab fa-github"></i> github.com/xunmeng2002</a>
      </div>
      <div class="page-links">
        <a href="/en" class="page-link">English Home</a>
        <a href="/resume-zh" class="page-link">中文简历</a>
      </div>
    </div>

    <div class="content">
      <div class="section">
        <div class="section-title">Education</div>
        <div><strong>M.S. (2010.9 – 2013.7)</strong> · Northwest University · Theoretical Physics (Computational Nuclear Physics)</div>
        <div style="margin-top: 4px;"><strong>B.S. (2006.9 – 2010.7)</strong> · Northwest University · Physics (Base Class)</div>
      </div>

      <div class="section">
        <div class="section-title">Technical Skills</div>
        <div class="skills-grid">
          <span class="skill-badge">C++ / C# / Python</span>
          <span class="skill-badge">MySQL / SQLite / DuckDB</span>
          <span class="skill-badge">In-Memory DB (Index/Transaction/Log)</span>
          <span class="skill-badge">CTP / XTP / Step Protocols</span>
          <span class="skill-badge">Tick/Bar Backtesting & Simulated Matching</span>
          <span class="skill-badge">CUDA / C++20 Coroutines</span>
          <span class="skill-badge">Shared Memory / Lock-free Pool</span>
          <span class="skill-badge">CMake / Zabbix / Blazor / WPF</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Work Experience</div>
        
        <div class="job-item">
          <div class="job-header">
            <span class="job-title">Algorithm Engineer · <span class="job-company">XinShang Micro Assembly</span></span>
            <span class="job-date">Feb 2026 – Present</span>
          </div>
          <div class="job-desc">
            <ul>
              <li>Tensor computing framework with StrideMemory, zero-copy views, heterogeneous CPU/GPU.</li>
              <li>DAG scheduler using C++20 coroutines, thread pool, reflection and config-driven.</li>
            </ul>
          </div>
        </div>

        <div class="job-item">
          <div class="job-header">
            <span class="job-title">Software Engineer · <span class="job-company">Shanghai BeiNuoLi Info Tech</span></span>
            <span class="job-date">Aug 2025 – Oct 2025</span>
          </div>
          <div class="job-desc">
            <ul>
              <li>Qt-based monitoring client: strategy/account/order views, Thrift protocol parsing.</li>
              <li>Market data service: adapt GZE L2 and Yida API to internal standard format.</li>
            </ul>
          </div>
        </div>

        <div class="job-item">
          <div class="job-header">
            <span class="job-title">Software Engineer · <span class="job-company">RuiDa RuiKong Tech</span></span>
            <span class="job-date">Jul 2024 – May 2025</span>
          </div>
          <div class="job-desc">
            <ul>
              <li>Core R&D for Rqs quant platform: market data, backtesting (Tick/Bar dual modes), daily settlement.</li>
              <li>Unified C++/Python API for CTP, CFFEX, GTJA market feeds.</li>
            </ul>
          </div>
        </div>

        <div class="job-item">
          <div class="job-header">
            <span class="job-title">Lead Software Engineer · <span class="job-company">Shanghai Pengbo Info</span></span>
            <span class="job-date">May 2016 – Jul 2024</span>
          </div>
          <div class="job-desc">
            <ul>
              <li>Securities AM desk (lead): trading/risk/settlement for stocks/options; Blazor admin & WPF client; full automation with Shell/Python.</li>
              <li>Foreign exchange desk (lead): integration with CME, HKEX, TT.</li>
              <li>Risk control system (solo): rule engine with 5-tier list (yellow/grey/black/trust/white).</li>
              <li>Asset management system: in-memory DB with primary keys/indexes/transactions; STEP/XTP; Zabbix monitoring.</li>
            </ul>
          </div>
        </div>

        <div class="job-item">
          <div class="job-header">
            <span class="job-title">Software Engineer · <span class="job-company">Shanghai Liangtou Tech</span></span>
            <span class="job-date">Aug 2015 – May 2016</span>
          </div>
          <div class="job-desc">
            <ul><li>Commodity trading system: C++/C# mixed, CTP API, bank-securities transfer, IPO subscription.</li></ul>
          </div>
        </div>

        <div class="job-item">
          <div class="job-header">
            <span class="job-title">Financial Engineer · <span class="job-company">SENPU Info Tech</span></span>
            <span class="job-date">Aug 2014 – Jul 2015</span>
          </div>
          <div class="job-desc">
            <ul><li>PMS asset management: bond pricing models based on SHIBOR interest rate and credit curves.</li></ul>
          </div>
        </div>

        <div class="job-item">
          <div class="job-header">
            <span class="job-title">Software Engineer · <span class="job-company">Beijing Jinwang Antai</span></span>
            <span class="job-date">Jun 2013 – Jul 2014</span>
          </div>
          <div class="job-desc">
            <ul><li>Commodity trading client development and maintenance (C#).</li></ul>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Open Source Projects</div>
        <div class="project-item">
          <div class="project-title">
            📚 PersonalLib · C++20 High-Performance Foundation Library
            <a href="https://github.com/xunmeng2002/PersonalLib" target="_blank">github.com/xunmeng2002/PersonalLib</a>
          </div>
          <div class="project-desc">
            Low-latency infrastructure for HFT/quant trading. Four modules: Core (logging/timer/AOP/threading), Network (cross-platform TCP/shared memory with Epoll/IOCP/Select adapters, pub-sub, protocol framing), TemplateLib (lock-free ring buffer/object pool/queue, pure templates), Serialization (JSON/Base64/CSV, GBK/UTF-8 encoding). Protocol layer unifies I/O, decouples business from transport; used in market data decoding and backtesting.
          </div>
        </div>
        <div class="project-item">
          <div class="project-title">
            📁 In-Memory DB – Mdb 
            <a href="https://github.com/xunmeng2002/Mdb" target="_blank">github.com/xunmeng2002/Mdb</a>
          </div>
          <div class="project-desc">
            High-performance in-memory DB with primary/unique keys, indexes, table-level locks, range queries. Log sync to MariaDB/MySQL/SQLite/DuckDB. Lock-free object pool.
          </div>
        </div>
        <div class="project-item">
          <div class="project-title">
            📈 Quant Trading System – QuantTrading
            <a href="https://github.com/xunmeng2002/QuantTrading" target="_blank">github.com/xunmeng2002/QuantTrading</a>
          </div>
          <div class="project-desc">
            C++ quant framework: market data (CTP/depth), Tick/Bar backtesting, simulated matching engine. Uses in-memory DB for market data persistence.
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Core Strengths</div>
        <ul class="strength-list">
          <li>Full-Stack FinTech · 10+ Years Trading Systems</li>
          <li>Low-Level Optimization (In-Memory DB, Shared Memory, Coroutines)</li>
          <li>Independent Delivery · 0-to-1 Project Lead</li>
        </ul>
        <div style="margin-top: 10px; font-size:0.86rem; color:#2c5068;">
          ✔ End-to-end experience: market data, backtesting, trading, risk, settlement<br>
          ✔ Self-developed in-memory DB, shared memory communication, coroutine scheduling<br>
          ✔ Led securities AM desk, foreign exchange desk, risk control system
        </div>
      </div>

      <div class="section">
        <div class="section-title">Summary</div>
        <div class="summary-text">
          Always worked in small to medium-sized FinTech companies. Broad technical stack, strong problem-solving skills, deep understanding of trading system business (trading, risk, account management).
        </div>
      </div>
      <hr>
      <div style="text-align: center; font-size: 0.7rem; padding: 10px 0 5px; color: #7f8c8d;">
        <i class="fas fa-code"></i> Static Resume · Deployed on Vercel/Netlify
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumeEn'
}
</script>

<style scoped>
/* 与 ResumeZh 样式完全相同，可直接复用 */
.resume-container { max-width: 1100px; margin: 2rem auto; background: white; border-radius: 32px; box-shadow: 0 20px 35px -12px rgba(0,0,0,0.12); overflow: hidden; }
.header { background: linear-gradient(135deg, #0b2b3b 0%, #123e52 100%); padding: 2.4rem 2.8rem; color: white; position: relative; }
.name { font-size: 2.8rem; font-weight: 700; margin-bottom: 0.5rem; }
.contact-bar { display: flex; flex-wrap: wrap; gap: 1.8rem; margin-top: 1rem; font-size: 0.9rem; opacity: 0.9; }
.contact-bar a, .contact-bar span { color: #e0f0ff; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; }
.contact-bar a:hover { color: white; text-decoration: underline; }
.contact-bar i { width: 18px; }
.page-links { position: absolute; top: 2rem; right: 2.8rem; display: flex; gap: 1rem; }
.page-link { background: rgba(255,255,255,0.2); color: white; padding: 0.3rem 1rem; border-radius: 40px; text-decoration: none; font-size: 0.85rem; font-weight: 500; transition: background 0.2s; }
.page-link:hover { background: rgba(255,255,255,0.35); color: white; }
.content { padding: 2rem 2.8rem; }
.section { margin-bottom: 2rem; }
.section-title { font-size: 1.3rem; font-weight: 700; color: #0f3b4f; border-left: 5px solid #2c7da0; padding-left: 1rem; margin-bottom: 1rem; }
.skills-grid { display: flex; flex-wrap: wrap; gap: 0.7rem; margin-top: 0.5rem; }
.skill-badge { background: #eef2fa; padding: 0.35rem 1rem; border-radius: 40px; font-size: 0.8rem; font-weight: 500; color: #1e4a6e; border: 1px solid #dce5f0; }
.job-item { margin-bottom: 1.6rem; }
.job-header { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; margin-bottom: 0.4rem; }
.job-title { font-weight: 700; font-size: 1rem; color: #0b2b3b; }
.job-company { font-weight: 600; color: #2c7da0; }
.job-date { font-size: 0.75rem; color: #5e7a93; }
.job-desc ul { padding-left: 1.2rem; margin-top: 0.2rem; }
.job-desc li { margin-bottom: 0.3rem; font-size: 0.88rem; color: #2c3e4e; }
.project-item { background: #f8fafd; border-radius: 20px; padding: 1rem 1.3rem; margin-bottom: 1rem; border: 1px solid #e9edf2; }
.project-title { font-weight: 700; font-size: 1rem; margin-bottom: 0.4rem; display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.project-title a { color: #2c7da0; text-decoration: none; font-size: 0.85rem; font-weight: 500; background: #eef2fa; padding: 0.2rem 0.7rem; border-radius: 20px; }
.project-desc { font-size: 0.86rem; color: #2a4055; line-height: 1.45; }
.strength-list { display: flex; flex-wrap: wrap; gap: 0.8rem; margin: 0.6rem 0 0.2rem; list-style: none; }
.strength-list li { background: white; border-radius: 30px; padding: 0.25rem 1rem; font-size: 0.8rem; font-weight: 500; border: 1px solid #dce5f0; color: #145c7a; }
.summary-text { background: #f5f9fe; padding: 1rem 1.5rem; border-radius: 20px; font-size: 0.9rem; border-left: 4px solid #2c7da0; color: #1e3a4b; }
hr { margin: 1rem 0; border: none; border-top: 1px solid #e2e8f0; }
@media (max-width: 700px) { .content { padding: 1.5rem; } .header { padding: 1.6rem; } .name { font-size: 2rem; } .contact-bar { gap: 1rem; font-size: 0.75rem; } .page-links { position: static; justify-content: flex-end; margin-top: 1rem; } }
</style>