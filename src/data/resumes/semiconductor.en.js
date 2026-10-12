import contacts from './contact.en.js'

export default {
  name: 'Kaiqiang Zhang',
  contacts,
  pageLinks: [
    { label: 'English Home', to: '/en' },
    { label: 'English Resume', to: '/resume-en' },
    { label: '中文半导体版', to: '/resume-zh-semi' }
  ],
  sections: [
    {
      kind: 'prose',
      title: 'Objective',
      text: 'Semiconductor equipment algorithm engineer (machine vision inspection / image algorithm engineering). 12 years of C++ engineering and real-time systems experience; currently responsible for the engineering rollout of the vision algorithm framework on a semiconductor inspection equipment production line.'
    },
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
        'C++20 / CUDA / Python',
        'HALCON / OpenCV Machine Vision',
        'Tensor Computing: stride addressing (shape + strides + offset) · zero-copy views · CPU/CUDA heterogeneous',
        'DAG Pipeline Scheduling: topological sort · thread pool · config-driven algorithm graphs · Recipe',
        'Defect Detection Chain: preprocessing envelope · process-region segmentation · three-path edges · dynamic thresholding · two-stage registration · false-positive filtering',
        'Semiconductor Data Formats: KLARF · Wafer_Result.xml · OTF',
        'Real-Time & Resource Engineering: lock-free queues · shared memory · object pools · runtime memory guardrails',
        'PyTorch Deep Learning (Transformer / CNN / RNN)',
        'Self-Developed In-Memory DB (index / transaction / log)',
        'CMake · WPF · Electron + Vue3'
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
            'Vision algorithm framework (C++20 / CUDA): owned the CPU/CUDA tensor backends and the operator layer, including the tensor factory, the utility layer and a CUDA threshold operator; implemented zero-copy views and broadcasting through stride addressing, and unified the heterogeneous CPU/GPU transfer interface.',
            'DAG pipeline scheduling engine: topological sort + in-degree dependency counting + a parallel thread pool; the inspection flow is assembled into a graph from operators and dependencies declared in a config file, driven by a Recipe.',
            'AOI defect inspection offline tuning workbench (WPF + HALCON HDevEngine): runs the same HALCON procedure library as the production line so results stay identical; splits the detection chain by operator so filters can be freely selected and combined in the UI for fast inspection of tuning results; supports recipe loading (config + template images), batch re-runs and OTF export, with a runtime memory guardrail that fixed black screens on large images (4220×16697).',
            'Wafer defect detection review tool (Electron + Vue3 + TypeScript): compares OTF detections against the truth table die by die using Wafer_Result.xml coordinates for detection sensitivity analysis; self-developed coordinate-domain algorithms cover defect matching with shift compensation, cluster deduplication, KPI statistics and union export.',
            'Algorithm test system and data platform: distributes version packages, test cases and datasets, executes algorithms in subprocesses and collects result.json for aggregated evaluation; FastAPI microservices + MinIO for dataset and version management.'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'Shanghai BeiNuoLi Info Tech',
          date: 'Aug 2025 – Oct 2025',
          bullets: [
            'Market data and monitoring client: integrated GZE L2 mirrored feeds and the Yida API; the Qt client parses Thrift to display strategies / accounts / orders in real time.'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'RuiDa RuiKong Tech',
          date: 'Jul 2024 – May 2025',
          bullets: [
            'Core R&D on the quant platform: Tick/Bar dual-mode backtesting with daily settlement; wrapped the CTP, CFFEX and GTJA market data APIs behind a unified C++/Python interface.'
          ]
        },
        {
          title: 'Lead Software Engineer',
          company: 'Shanghai Pengbo Info',
          date: 'May 2016 – Jul 2024',
          bullets: [
            'Asset management system (core developer): hand-written in-memory database (primary keys / indexes / transactions), STEP/XTP protocol communication, Zabbix 24x7 monitoring and alerting.',
            'Securities asset management desk and foreign exchange desk (lead): trading, risk and settlement systems for stocks / options; integration with CME, HKEX and TT; independently built the risk rule engine and the five-tier list system.'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'Shanghai Liangtou Tech',
          date: 'Aug 2015 – May 2016',
          bullets: [
            'Commodity trading system: C++/C# mixed-language development, integration with the CTP API.'
          ]
        },
        {
          title: 'Financial Engineer',
          company: 'SENPU Info Tech',
          date: 'Aug 2014 – Jul 2015',
          bullets: [
            'PMS asset management system: built interest rate and credit curves on SHIBOR and implemented bond pricing models.'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'Beijing Jinwang Antai',
          date: 'Jun 2013 – Jul 2014',
          bullets: [
            'Development and maintenance of commodity trading clients (C#).'
          ]
        }
      ]
    },
    {
      kind: 'projects',
      title: 'Projects',
      projects: [
        {
          icon: '🧩',
          name: 'Vision Algorithm Common Library — alg_common (XinShang Micro Assembly)',
          desc: 'A C++20 + CUDA + HALCON vision algorithm common library: tensors (CPU/CUDA backends, already in use in the image algorithm layer), config-driven algorithm graphs (the DAG is assembled from a config file), Recipe management and memory management.'
        },
        {
          icon: '🧮',
          name: 'Tensor — Self-Developed N-Dimensional Tensor Library (Compile-Time Generics)',
          links: ['https://gitee.com/xunmeng2002/Tensor', 'https://github.com/xunmeng2002/Tensor'],
          desc: 'An N-dimensional tensor library designed and implemented independently, a separate implementation from the Tensor inside alg_common. Compile-time generics via template<typename T> with 10 explicit instantiations; stride addressing (shape + strides + offset) with zero-copy views; Expand implements broadcasting through stride = 0; one interface across the CPU / CUDA backends, with scalar and in-place variants of the element-wise operators on both. ~2,750 lines.'
        },
        {
          icon: '🔬',
          name: 'DefectTuning — Offline Defect Inspection Tuning Workbench',
          desc: 'WPF + HALCON HDevEngine; runs the production detection algorithm offline while keeping results identical to the line: splits the detection chain by operator so filters can be freely selected and combined in the UI, showing the effect of each filtering stage and comparing stage by stage; supports recipe loading, batch re-runs, OTF export and a runtime memory guardrail.'
        },
        {
          icon: '🔎',
          name: 'defect_tools — Wafer Defect Detection Review Tool',
          desc: 'Electron + Vue3 + TypeScript: compares OTF detections against the truth table die by die using Wafer_Result.xml coordinates for detection sensitivity analysis. Self-developed coordinate-domain algorithms cover defect matching with shift compensation, cluster deduplication, KPI statistics and union export; the UI covers config generation, single-run validation, multi-run comparison and image review (four-state T/F/H/U annotation).'
        },
        {
          icon: '🗂',
          name: 'amies-data-platform — Algorithm Testing and Data Platform',
          desc: 'A semiconductor data platform built with FastAPI microservices + Vue3: dataset / item / file management backed by MinIO; its algorithm test system distributes version packages, test cases and datasets, executes algorithms in subprocesses and collects result.json for aggregated evaluation.'
        }
      ]
    },
    {
      kind: 'projects',
      title: 'AI Practice',
      projects: [
        {
          icon: '🤖',
          name: 'Transformer — Self-Implemented decoder-only GPT Language Model',
          links: ['https://gitee.com/xunmeng2002/Transformer', 'https://github.com/xunmeng2002/Transformer'],
          desc: 'A decoder-only Transformer written from scratch on the GPT architecture (without nn.Transformer): causal multi-head self-attention, feed-forward layers, pre-norm residual blocks, weight tying between the output projection and the token embedding, and GPT-2-style re-initialization. Scale derived from measured local CPU throughput (d=256 / 4 layers / 4 heads / 7.4M params); trained and perplexity-evaluated on 7.59M characters from six novels on hand: automatic source-encoding detection, a sentencepiece 16k vocabulary, book-disjoint train/validation split to prevent leakage, reaching val loss 6.0088 / ppl 407.01 after 5 epochs, with the bottleneck traced to corpus scale (36x Chinchilla over-parameterization). The project went through four rounds of code review and remediation.'
        },
        {
          icon: '🧭',
          name: 'Beacon — Self-Developed In-Memory Vector Database (C++20)',
          links: ['https://gitee.com/xunmeng2002/Beacon', 'https://github.com/xunmeng2002/Beacon'],
          desc: 'Built from first principles with zero third-party dependencies in the library itself: flat contiguous storage with AVX2 / scalar dual-path dot products; HNSW hierarchical small-world graph approximate search (tunable ef, heuristic edge selection) with node-level incremental delete / update that reconnects neighbours to preserve connectivity, and brute-force search kept as an exact baseline; versioned persistence format where the index segment acts as a verifiable cache and falls back to lazy rebuild when corrupted; shared_mutex reader-writer locking supports concurrent search. Benchmarked against hnswlib at 100k × 128 dims: recall 0.331 vs 0.301; exported to Python via pybind11, completing an end-to-end pipeline of document chunking → bge embeddings → Beacon retrieval → LLM answering.'
        }
      ]
    },
    {
      kind: 'strengths',
      title: 'Core Strengths',
      highlights: [
        'Algorithm Engineering Rollout · Python Prototype → Real-Time C++',
        'Heterogeneous Computing & Real-Time (CUDA / lock-free / shared memory / memory pools)',
        'Hands-On Machine Vision Inspection Chain (HALCON · OTF / KLARF / Wafer_Result.xml)',
        '12 Years of C++ Engineering · Independent Delivery Lead',
        'Deep Learning Models Implemented from Scratch · PyTorch (hand-written Transformer → training → evaluation)'
      ],
      details: [
        'Semiconductor vision: full engineering rollout from the tensor foundation → DAG scheduling → operators',
        'The real-time and resource control equipment algorithms demand: lock-free queues, shared memory, runtime memory guardrails',
        'A transferable troubleshooting methodology: silent failures / timestamp drift / memory-and-persistence reconciliation in trading systems map onto drift and noise hunting in equipment'
      ]
    },
    {
      kind: 'prose',
      title: 'Summary',
      text: '12 years of C++ engineering and real-time system development. From 2013 to 2024 I worked on the lower layers of financial trading systems — in-memory databases, communication protocols, risk rule engines and real-time scheduling; since 2026 I have moved into semiconductor equipment algorithms. At XinShang Micro Assembly I own the engineering rollout of the vision algorithm framework and have built three tools around AOI defect inspection — offline tuning, detection review and algorithm testing — spanning the OTF / Wafer_Result.xml / KLARF data chain. My strength is getting algorithms into equipment: stable, fast, reproducible and tunable.'
    }
  ],
  footerNote: 'Static Resume · Deployed on Vercel/Netlify'
}
