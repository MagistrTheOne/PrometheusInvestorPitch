export const kpis = [
  { 
    label: "TCO", 
    value: "−30–50%", 
    note: "при локальном inference" 
  },
  { 
    label: "P95 Latency", 
    value: "≤ 120 мс", 
    note: "RU‑DC, Edge" 
  },
  { 
    label: "Суверенность", 
    value: "100%", 
    note: "совместимо с ФЗ‑152" 
  },
];

export const models = [
  { 
    name: "Svarog", 
    role: "RU‑EN LLM", 
    status: "готов к развёртыванию",
    description: "Многоязычная языковая модель для русского и английского языков"
  },
  { 
    name: "Radon‑MCAI", 
    role: "мета‑сознание, агенты", 
    status: "R&D→pilot",
    description: "Мета-сознательная архитектура для агентных систем"
  },
  { 
    name: "Oracle850B‑MoE", 
    role: "флагман MoE", 
    status: "pilot",
    description: "Mixture of Experts модель с 850B параметров"
  },
];

export const roadmap = [
  { 
    q: "2025 Q4", 
    item: "Пилоты в индустрии/гос" 
  },
  { 
    q: "2026 H1", 
    item: "Промышленная эксплуатация" 
  },
  { 
    q: "2026 H2", 
    item: "Экспортные поставки" 
  },
];

export const platformFeatures = [
  "Оркестратор агентов, RAG, инструментальная шина",
  "Наблюдаемость, трейсинг, SLA/аварийные сценарии", 
  "Гибридное развёртывание: RU‑облака / on‑prem"
];

export const securityFeatures = [
  "Деперсонификация, аудит доступа, журналирование",
  "Резервирование/бэкапы, плоды испытаний",
  "Реестр ПО: ОКПД2 62.01.29.000"
];

export const contactInfo = {
  telegram: "https://t.me/MagistrTheOne",
  address: "Краснодар",
  responsible: "MagistrTheOne"
};

export const investmentScenarios = [
  {
    title: "SEED ($500K)",
    description: "Базовое финансирование",
    features: [
      "Svarog в продакшен",
      "2 пилота в госсекторе", 
      "12 мес R&D",
      "ROI через 18 мес"
    ],
    metrics: {
      models: "1 модель",
      clients: "2 пилота",
      timeline: "18 мес",
      revenue: "$1M ARR"
    }
  },
  {
    title: "SERIES A ($2M)",
    description: "Масштабирование",
    features: [
      "Все 3 модели готовы",
      "10 корпоративных клиентов",
      "6 мес до выхода на рынок",
      "ROI через 12 мес"
    ],
    metrics: {
      models: "3 модели",
      clients: "10+ клиентов",
      timeline: "12 мес",
      revenue: "$5M ARR"
    }
  },
  {
    title: "SERIES B ($5M)",
    description: "Глобальная экспансия",
    features: [
      "Глобальная экспансия",
      "50+ enterprise клиентов",
      "Немедленный запуск",
      "ROI через 6 мес"
    ],
    metrics: {
      models: "3 модели + экспорт",
      clients: "50+ клиентов",
      timeline: "6 мес",
      revenue: "$15M ARR"
    }
  }
];
