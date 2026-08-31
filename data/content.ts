export const TELEGRAM = 'https://t.me/lissovyi';

export const nav = [
  { href: '#about', label: 'Про мене' },
  { href: '#projects', label: 'Проєкти' },
  { href: '#work', label: 'Працювати зі мною' },
  { href: '#speaking', label: 'Виступи' }
];

export const experience = [
  { name: 'Mission Possible', role: 'Head of Marketing & Communications', text: 'Відповідаю за маркетинг і комунікації української startup-екосистеми та акселератора для tech-фаундерів.', tags: ['Marketing', 'Brand', 'Communications', 'Community'] },
  { name: 'Фонд Сергія Притули', role: 'Head of Digital', text: '1 рік — communications manager. 1,5 року — Head of Digital Сергія Притули. Паралельно 2,5 роки очолював комунікації Центру готовності цивільних у Києві та Україні.', tags: ['Digital', 'Communications', 'Fundraising'] },
  { name: 'Мрія / Мінцифра', role: 'SMM Manager', text: 'Працював із комунікаціями державного освітнього застосунку Мрія.', tags: ['GovTech', 'Social Media', 'Communications'] },
  { name: 'Develux', role: 'SMM & Paid Ads Manager', text: '1,5 року маркетингу в IT.', tags: ['SMM', 'Paid Ads', 'Tech'] },
  { name: 'Projector Institute', role: 'Викладач', text: 'Три роки викладаю SMM і маркетинг. Через мої курси, лекції та менторство пройшли 100+ людей.', tags: ['Education', 'Marketing', 'SMM'] },
  { name: 'До цього — агенція', role: 'Marketing / SMM', text: 'Два роки агенційного життя. Серед клієнтів — UDP, Wirex R&D та Ajax.', tags: ['Agency', 'Clients', 'SMM'] }
];

export type Project = {
  n: string; meta: string; title: string; text: string; note: string; cta: string; href: string; image: string;
  logo?: string;
  screen?: { src: string; alt: string };
};

export const projects: Project[] = [
  { n: '01', meta: 'PERSONAL BRAND / LINKEDIN', title: 'LinkedIn Growth Sprint', text: 'Двомісячна програма, де я працюю з людьми над позиціонуванням, контентом, нетворком і LinkedIn як карʼєрним активом.', note: 'Зараз триває другий потік.', cta: 'Хочу в наступний ↗', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeM2EQM4BVZT3D8r7L36MIpqsv0SnrIEEGA7WM49tFrvpG9rg/viewform', image: 'assets/images/linkedin-sprint-cover.png' },
  { n: '02', meta: 'PODCAST / MARKETING', title: 'sip&talk', text: 'Подкаст про маркетинг та людей у ньому. Робимо його разом із другом Максимом. Нам рік, позаду два сезони, попереду — третій.', note: 'Говоримо з людьми, які роблять маркетинг, комунікації та бізнес.', cta: 'Дивитися на YouTube ↗', href: 'https://www.youtube.com/@sip_talk_podcast', image: 'assets/images/sip-talk-cover.png', logo: 'assets/images/sip-talk-logo.png' },
  { n: '03', meta: 'TELEGRAM / COMMUNITY', title: 'Слей вакансії', text: 'Три роки тому я створив канал, щоб допомагати друзям-роботодавцям знаходити друзів-спеціалістів. Тепер нас уже 5000.', note: 'Вакансії, карʼєра, маркетинг, LinkedIn, кейси, факапи, люди, івенти й хороші штуки з інтернету.', cta: 'Заслеїти карʼєру ↗', href: 'https://t.me/slayworkk', image: 'assets/decor/ascii-cat.png', screen: { src: 'assets/images/slay-channel.png', alt: 'Скріншот Telegram-каналу Слей вакансії' } }
];

export const statements = [
  'Хейт — це податок на публічність.',
  'Personal brand — це не коли CEO почав писати пости.',
  'Комʼюніті не будується контент-планом.',
  'LinkedIn потрібен не тільки тоді, коли ви шукаєте роботу.',
  'Особистий бренд — твій найбільший актив.'
];

export const services = [
  { n: '01', small: 'Консультація', title: 'Є задача? Давайте розберемо.', body: ['60–90 хвилин на конкретний запит.', 'Маркетинг, комунікації, позиціонування, контент, запуск, LinkedIn, personal brand або карʼєра. Ви приходите із запитаннями. Я приходжу не тільки з відповідями, а й з новими запитаннями.'], cta: 'Записатися ↗' },
  { n: '02', small: 'Стратегічна сесія', title: 'Коли треба зібрати все докупи.', body: ['Для команд і брендів, яким потрібно зібрати докупи маркетинг, позиціонування, комунікації або контент.', 'До зустрічі я занурююсь у контекст. На зустрічі — розбираємо. Після — у вас залишається зрозумілий напрямок, а не Miro на 700 стікерів.'], cta: 'Обговорити ↗' },
  { n: '03', small: 'Менторство', title: '1:1.', body: ['Працюю з маркетологами, комунікаційниками та іншими спеціалістами над карʼєрою, позиціонуванням, LinkedIn, personal brand і конкретними робочими задачами.', 'Без універсальної програми. Бо універсальних карʼєр теж немає.'], cta: 'Хочу на менторство ↗' },
  { n: '04', small: 'Лекції та воркшопи', title: 'Розповім те, що знаю і люблю', body: ['Для команд, компаній, шкіл, конференцій та інших місць, де збираються люди й слухають інших людей.', 'Можу прийти з лекцією, воркшопом, Q&A або корпоративним навчанням.'], cta: 'Запросити ↗' },
  { n: '05', small: 'Проєктна робота', title: 'Іноді заходжу глибше.', body: ['Іноді заходжу в окремі маркетингові та комунікаційні проєкти як консультант або стратег.', 'Якщо задача цікава — розкажіть.'], cta: 'Розповісти про проєкт ↗' }
];

export const topics = [
  'Personal brand',
  'LinkedIn як карʼєрний актив',
  'Community-centered marketing',
  'Маркетинг і комунікації для стартапів',
  'Карʼєра та професійна видимість',
  'Контент, який люди справді хочуть споживати'
];

export const socials = [
  { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/andrii-lisovyi-450849228/' },
  { label: 'Instagram ↗', href: 'https://www.instagram.com/_lesikkk/' },
  { label: 'Telegram ↗', href: 'https://t.me/slayworkk' },
  { label: 'TikTok ↗', href: 'https://www.tiktok.com/@_lesikkk' }
];
