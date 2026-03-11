import "server-only";

export type StylePipelineId =
  | "creative-expansion"
  | "precision-reconstruction"
  | "local-retouch";

export interface StylePipeline {
  id: StylePipelineId;
  name: string;
  code: string;
  description: string;
  useCases: string[];
  modelStack: string;
}

// TODO: 后续可以改成从真实 CMS / 数据库获取
export async function getStylePipelines(): Promise<StylePipeline[]> {
  return [
    {
      id: "creative-expansion",
      name: "创意发散流",
      code: "FLOW-Δ01",
      description:
        "Gemini Vision 解析现实意象，再通过 SDXL 进行高维度风格与构图扩展，适合前期概念迭代与世界观搭建。",
      useCases: ["概念设计", "IP 世界观气质探索", "情绪板生成"],
      modelStack: "Gemini Vision + SDXL",
    },
    {
      id: "precision-reconstruction",
      name: "精准还原流",
      code: "FLOW-Σ02",
      description:
        "以 Flux Redux 作为高保真生成核心，结合 Florence 物体识别与 ControlNet 进行结构与构图锁定，适合产品 / 建筑等刚需场景。",
      useCases: ["电商与产品精修", "建筑结构与立面推演", "品牌主视觉统一"],
      modelStack: "Flux Redux + Florence + ControlNet",
    },
    {
      id: "local-retouch",
      name: "局部修复流",
      code: "FLOW-Ω03",
      description:
        "由 Qwen-VL 做精细视觉理解与区域语义标注，再通过 Inpainting 完成细节级别的补绘与纠错，适合运营物料与局部风格统一。",
      useCases: ["运营海报微调", "人像与细节修复", "跨批次风格校正"],
      modelStack: "Qwen-VL + Inpainting",
    },
  ];
}

export type ProductId =
  | "onionman-extension"
  | "ai-divination-miniapp"
  | "enterprise-daily-bot";

export interface ProductShowcaseItem {
  id: ProductId;
  title: string;
  label: string;
  role: string;
  description: string;
  techStack: string[];
  impact: string;
}

export async function getProductShowcase(): Promise<ProductShowcaseItem[]> {
  return [
    {
      id: "onionman-extension",
      title: "洋葱侠 AI 小助手 · 浏览器插件",
      label: "OnionMan Browser Extension",
      role: "提示词路由与交互设计",
      description:
        "为非技术用户设计的一层“语义翻译膜”：前端以自然语言表单承载复杂 Prompt，后端由 Gemini 完成意图识别与模型参数映射，显著降低 AIGC 使用门槛。",
      techStack: ["Chrome Extension", "Gemini API", "Prompt Orchestration"],
      impact:
        "在内测环境中，将“可用大模型产出”从少数同事扩展到团队多数成员，实际提示词复杂度由我一人维护。",
    },
    {
      id: "ai-divination-miniapp",
      title: "AI 占卜小程序 · 互动体验",
      label: "Prototype: Prompt-as-Product",
      role: "体验编排与工作流落地",
      description:
        "以“占卜”作为隐喻，将复杂的 N8N 工作流与多轮对话折叠成一次轻盈的交互；强调的是情绪价值与氛围营造，而非答案的绝对正确性。",
      techStack: ["WeChat Mini Program", "N8N", "LLM Orchestration"],
      impact:
        "用于验证“Prompt 即产品”的假设：用户记住的是体验仪式，而非底层模型参数。",
    },
    {
      id: "enterprise-daily-bot",
      title: "企业日报分析机器人",
      label: "Daily Insight Agent",
      role: "数据结构设计与智能摘要",
      description:
        "接入飞书 / 钉钉的日报流，将碎片化文本按项目、风险与机会要素重组，并借助大模型生成可跟进的任务清单与管理摘要。",
      techStack: ["Feishu / DingTalk", "LLM", "Data Cleaning Pipeline"],
      impact:
        "帮助团队从“填日报”转向“看洞察”：管理者只需几分钟即可把握关键风险点与节奏。",
    },
  ];
}

export interface DevToolItem {
  id: string;
  title: string;
  label: string;
  description: string;
  impact: string;
  link?: string;
}

export async function getDevTools(): Promise<DevToolItem[]> {
  return [
    {
      id: "comfyui-onionman-nodes",
      title: "ComfyUI-Onionman-Nodes",
      label: "业务导向节点库",
      description:
        "将真实项目中的高频操作与参数组合抽象成一组“半成品”节点，减少重复连线，让更多时间花在图像本身。",
      impact: "工作流复杂度主观体感降低约 30%，新人上手成本显著下降。",
      link: "https://github.com/onionman/comfyui-onionman-nodes",
    },
    {
      id: "comfyui-modelscope-bridge",
      title: "ComfyUI-ModelScope-Bridge",
      label: "混合云算力桥",
      description:
        "为本地 ComfyUI 搭了一座“云上出口”：可以无感切换到云端模型与算力，在笔电上也能调用大模型与重型管线。",
      impact: "让个人工作站可以在不更换硬件的情况下，尝试更多大体量模型与实验。",
      link: "https://github.com/onionman/comfyui-modelscope-bridge",
    },
  ];
}

export interface GalleryItem {
  id: string;
  category: "game-assets" | "art-style" | "architecture";
  title: string;
  tag: string;
  imageUrl: string;
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return [
    {
      id: "pirate-mascot",
      category: "game-assets",
      title: "Q 版海盗 · 吉祥物草图",
      tag: "游戏资产 / 角色",
      imageUrl: "https://placehold.co/600x800/0a0a0a/ededed?text=Game+Asset",
    },
    {
      id: "ink-landscape",
      category: "art-style",
      title: "山海 / 水墨气韵实验",
      tag: "中国水墨 / 风格",
      imageUrl: "https://placehold.co/600x800/0a0a0a/ededed?text=Ink+Style",
    },
    {
      id: "thick-paint-portrait",
      category: "art-style",
      title: "厚涂人像 · 光与噪点",
      tag: "欧美厚涂 / 人像",
      imageUrl: "https://placehold.co/600x800/0a0a0a/ededed?text=Thick+Paint",
    },
    {
      id: "immersive-architecture",
      category: "architecture",
      title: "沉浸式空间装置",
      tag: "建筑与空间",
      imageUrl:
        "https://placehold.co/600x800/0a0a0a/ededed?text=Immersive+Space",
    },
    {
      id: "starscape",
      category: "architecture",
      title: "星空幻想 · 观景平台",
      tag: "数字建筑 / 星空",
      imageUrl: "https://placehold.co/600x800/0a0a0a/ededed?text=Starscape",
    },
  ];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  description: string;
}

export async function getTimeline(): Promise<TimelineItem[]> {
  return [
    {
      id: "arch-school",
      period: "201x – 20xx",
      title: "建筑学专业 & 建筑设计师",
      description:
        "在构造、空间与城市尺度中训练“结构感”：从剖面图和节点详图里学会什么是可实现的想象力。",
    },
    {
      id: "game-design",
      period: "20xx – 20xx",
      title: "游戏 AI 平面设计师",
      description:
        "为游戏项目制作角色立绘、道具与氛围图，也开始尝试用 LoRA 把“美术风格”固化为可重复调用的资产。",
    },
    {
      id: "aigc-rnd",
      period: "Now",
      title: "互联网 AIGC 研发 / 解决方案",
      description:
        "在真实业务场景中落地大模型：从工作流 Orchestration、插件与小程序，到团队内部的 AI 赋能产品。",
    },
  ];
}

