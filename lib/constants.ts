import type {
  Certification,
  Education,
  Experience,
  Metadata,
  Navigation,
  Profile,
  Project,
  Sections,
  Skills,
  SocialLink,
} from "./types";

// プロフィール情報
export const PROFILE: Profile = {
  name: process.env.NEXT_PUBLIC_PROFILE_NAME || "山田太郎",
  title: "情報系大学生",
  age: process.env.NEXT_PUBLIC_PROFILE_AGE || "21",
  location: process.env.NEXT_PUBLIC_PROFILE_LOCATION || "千葉県浦安市舞浜1-13",
  email: process.env.NEXT_PUBLIC_PROFILE_EMAIL || "sample@example.com",
  phone: process.env.NEXT_PUBLIC_PROFILE_PHONE || "090-1234-5678",
  description:
    "情報系の大学でプログラミングを学んでいます。新しい技術に興味を持ち、実践的なプロジェクトを通じてスキルを向上させています。",
  bio: "趣味はプログラミング、読書です。新しい技術を学ぶことが大好きで、大学の授業以外でも独学でWeb開発やモバイルアプリ開発に挑戦しています。",
  image: process.env.NEXT_PUBLIC_PROFILE_IMAGE || "/profile-image.jpg",
};

// スキル情報
export const SKILLS: Skills = {
  main: ["TypeScript", "Next.js", "React", "Python", "Java", "HTML/CSS"],
  categories: [
    {
      title: "プログラミング言語",
      skills: [
        { name: "Python", level: 75, description: "大学授業、研究" },
        { name: "Java", level: 50, description: "オブジェクト指向、データ構造" },
        { name: "JavaScript", level: 75, description: "Web開発、DOM操作、非同期処理" },
        { name: "HTML/CSS", level: 90, description: "マークアップ、スタイリング、レスポンシブ" },
      ],
    },
    {
      title: "Web開発",
      skills: [
        { name: "Vue.js", level: 70, description: "コンポーネント設計、状態管理" },
        { name: "Next.js", level: 70, description: "コンポーネント設計、状態管理" },
      ],
    },
    {
      title: "学習中・興味のある技術",
      skills: [{ name: "React Native", level: 40, description: "モバイルアプリ開発" }],
    },
    {
      title: "大学での学習",
      skills: [
        { name: "データ構造", level: 80, description: "配列、リスト、スタック、キュー" },
        { name: "アルゴリズム", level: 75, description: "ソート、探索、動的プログラミング" },
        { name: "データベース", level: 70, description: "正規化、クエリ最適化" },
        { name: "ネットワーク", level: 65, description: "TCP/IP、HTTP、セキュリティ" },
      ],
    },
    {
      title: "開発ツール",
      skills: [
        { name: "VS Code", level: 85, description: "エディタ、拡張機能、デバッグ" },
        { name: "GitHub", level: 75, description: "リポジトリ管理、プルリクエスト" },
        { name: "Chrome DevTools", level: 70, description: "デバッグ、パフォーマンス分析" },
        { name: "Figma", level: 60, description: "UI/UXデザイン、プロトタイピング" },
      ],
    },
    {
      title: "その他のスキル",
      skills: [
        { name: "数学", level: 80, description: "線形代数、統計学、離散数学" },
        { name: "英語", level: 75, description: "技術文書読解、コミュニケーション" },
        { name: "プレゼンテーション", level: 70, description: "技術発表、資料作成" },
        { name: "チームワーク", level: 85, description: "グループワーク、プロジェクト管理" },
      ],
    },
  ],
  learningGoals: ["機械学習", "モバイルアプリ開発", "競技プログラミング"],
};

// 職歴情報
export const EXPERIENCE: Experience[] = [
  // {
  //   title: "WEBエンジニア",
  //   company: "LINEヤフー株式会社",
  //   period: "2026 - 現在",
  //   description: "Web開発",
  // },
];

// 学歴情報
export const EDUCATION: Education[] = [
  {
    degree: "情報工学学士（在学中）",
    school: "和歌山大学 システム工学科",
    year: "2022 - 2026（予定）",
  },
  {
    degree: "情報工学修士（入学予定）",
    school: "和歌山大学大学院 システム工学研究科",
    year: "2026 - 2028（予定）",
  },
];

// プロジェクト情報
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "プロトレ",
    description: "プログラミング初心者向けのプログラミング勉強アプリ",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "TypeScript", "Ruby on Rails", "AWS"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    longDescription:
      "プログラミング単語をフラッシュカード形式で勉強できる。また、学習記録も管理できる。",
  },
  {
    id: 2,
    title: "和大DE話題",
    description: "新入生歓迎会用のスタンプラリーアプリ",
    image: "/api/placeholder/400/300",
    technologies: ["Vue.js", "Firebase"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    longDescription:
      "新入生歓迎会用のスタンプラリーアプリ。スタンプを集めることで、新入生同士が交流できる。",
  },
  {
    id: 3,
    title: "ねこあるき",
    description: "大学の授業で作成した散歩して猫を集めるアプリ",
    image: "/api/placeholder/400/300",
    technologies: ["JavaScript", "HTML/CSS", "Firebase"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    longDescription: "人生初のチームでのWEBアプリケーション開発の成果です。",
  },
  {
    id: 4,
    title: "jsbooster",
    description: "早い実装方法を提案するVSCode拡張機能",
    image: "/api/placeholder/400/300",
    technologies: ["TypeScript", "VSCode", "Extension"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    longDescription: "先輩の研究を基にして開発したVSCode拡張機能です。",
  },
];

// 資格・認定情報
export const CERTIFICATIONS: Certification[] = [
  { name: "TOEIC 625点", issuer: "ETS", year: "2023" },
];

// ソーシャルリンク
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
    icon: "Github",
    description: "ソースコードとプロジェクト",
  },
  {
    name: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
    icon: "Linkedin",
    description: "プロフェッショナルネットワーク",
  },
  {
    name: "Twitter",
    href: process.env.NEXT_PUBLIC_TWITTER_URL || "#",
    icon: "Twitter",
    description: "最新の考え方や情報",
  },
];

// ナビゲーション
export const NAVIGATION: Navigation[] = [
  { name: "ホーム", href: "/" },
  { name: "自己紹介", href: "/about" },
  { name: "プロジェクト", href: "/projects" },
  { name: "スキル", href: "/skills" },
  { name: "お問い合わせ", href: "/contact" },
];

// セクション別のテキスト
export const SECTIONS: Sections = {
  hero: {
    skillsLabel: "主な技術スタック",
    ctaPrimary: "プロジェクトを見る",
    ctaSecondary: "お問い合わせ",
  },
  about: {
    title: "自己紹介",
    subtitle: "私の経歴とスキルについて詳しく紹介します",
    experienceTitle: "職歴",
    educationTitle: "学歴",
    skillsTitle: "スキル",
    personalInfoTitle: "個人情報",
  },
  projects: {
    title: "プロジェクト",
    subtitle: "これまでに開発したプロジェクトの一部をご紹介します",
    featuredTitle: "注目プロジェクト",
    otherTitle: "その他のプロジェクト",
  },
  skills: {
    title: "スキル",
    subtitle: "技術スキルと経験について詳しく紹介します",
    certificationsTitle: "資格・認定",
    learningTitle: "現在学習中・興味のある技術",
    learningDescription:
      "大学での学習を通じて、プログラミングの基礎から応用まで幅広く学んでいます。特にAI・機械学習、モバイルアプリ開発、競技プログラミングに興味があります。",
  },
  contact: {
    title: "お問い合わせ",
    subtitle: "プロジェクトのコラボレーションなど、お気軽にお問い合わせください",
    formTitle: "メッセージを送る",
    formDescription: "以下のフォームからお問い合わせください",
    contactInfoTitle: "連絡先情報",
    contactInfoDescription: "お仕事の依頼があれば、お気軽にご連絡ください",
    socialTitle: "ソーシャルメディア",
    socialDescription: "SNSでも最新情報を発信しています",
    faqTitle: "よくある質問",
    faqs: [
      {
        question: "求人の依頼はできますか？",
        answer: "はい、求人の依頼はできます。お気軽にご連絡ください。",
      },
      {
        question: "プロジェクトのコラボレーションは可能ですか？",
        answer:
          "はい、一緒にプロジェクトに取り組むことができます。オンラインでの打ち合わせも可能です。",
      },
      {
        question: "大学での研究に関する質問はできますか？",
        answer: "大学での研究に関する質問にお答えします。",
      },
      {
        question: "大学での学習について聞けますか？",
        answer: "大学での学習内容や進路について、お気軽にご相談ください。経験をお話しします。",
      },
    ],
  },
};

// メタデータ
export const METADATA: Metadata = {
  title: "Portfolio - 情報系大学生",
  description:
    "情報系の大学でプログラミングを学ぶ大学生のポートフォリオサイト。学習内容やプロジェクトを紹介します。",
  keywords: ["ポートフォリオ", "大学生", "プログラミング", "学習", "プロジェクト"],
  author: "大学生",
};
