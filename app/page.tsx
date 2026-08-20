'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Menu, X, Plus } from 'lucide-react';
import { useState } from 'react';
import { experience, projects, services } from '@/data/content';

const statements = [
  'Увага — це ще не стратегія.',
  'Хороша комунікація починається задовго до першого написаного слова.',
  'Дистрибуція — частина ідеї, а не те, про що варто думати після.',
  'Бренд і performance не повинні жити в паралельних світах.',
  'LinkedIn — це не онлайн-CV. Це карʼєрний актив.'
];

function ArrowLink({children, href='#contact'}:{children:React.ReactNode; href?:string}) {
  return <a className="arrow-link" href={href}>{children}<ArrowUpRight size={18}/></a>
}

export default function Home(){
  const [menu,setMenu]=useState(false);
  const [open,setOpen]=useState<number | null>(0);
  return <main>
    <header className="header shell">
      <a href="#top" className="wordmark">ANDRII LISOVYI</a>
      <nav className="desktop-nav">
        <a href="#about">Про мене</a><a href="#projects">Проєкти</a><a href="#work">Працювати зі мною</a>
      </nav>
      <ArrowLink href="#contact">Написати</ArrowLink>
      <button className="menu-btn" aria-label="Меню" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      {menu && <div className="mobile-menu"><a href="#about" onClick={()=>setMenu(false)}>Про мене</a><a href="#projects" onClick={()=>setMenu(false)}>Проєкти</a><a href="#work" onClick={()=>setMenu(false)}>Працювати зі мною</a></div>}
    </header>

    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="kicker">Київ → маркетинг → стартапи → інтернет</div>
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.65}}>Я будую маркетинг, який <em>помічають</em>, — і системи, завдяки яким він працює.</motion.h1>
        <p>Я Андрій Лісовий — маркетинг- і комунікаційний лідер із Києва. Зараз очолюю маркетинг та комунікації в Mission Possible і працюю з амбітними українськими tech-фаундерами.</p>
        <div className="hero-actions"><a className="button orange" href="#projects">Дивитися, що я роблю <ArrowDown size={17}/></a><a className="button ghost" href="#work">Попрацювати разом <ArrowUpRight size={17}/></a></div>
      </div>
      <motion.div className="hero-photo" initial={{opacity:0,scale:.98}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}}>
        <Image src="/images/andrii-hero.jpg" alt="Андрій Лісовий" fill priority sizes="(max-width: 800px) 100vw, 46vw"/>
        <div className="photo-tag">Зараз: будую Mission Possible</div>
      </motion.div>
    </section>

    <section className="proof strip"><div className="shell proof-grid"><div><b>7+ років</b><span>у маркетингу та комунікаціях</span></div><div><b>100+ людей</b><span>навчав на курсах, лекціях та менторстві</span></div><div><b>100+ консультацій</b><span>про маркетинг, контент, LinkedIn і карʼєру</span></div></div></section>

    <section className="section shell about" id="about">
      <div className="section-label">01 / ПРО МЕНЕ</div>
      <div className="about-grid"><h2>Трохи про мене</h2><div className="about-copy"><p>Останні 7+ років я працюю з маркетингом, комунікаціями та контентом у дуже різних середовищах — від технологічних компаній і стартапів до державних проєктів, освіти та одного з найбільших благодійних фондів України.</p><p>Найцікавіше для мене — не окремий канал чи інструмент. Мені цікаво зрозуміти, чому людям взагалі має бути не байдуже, а потім побудувати позиціонування, історії, контент і систему, які допомагають утримувати цю увагу.</p><p className="quote">Люблю ясні думки, сильні ідеї та маркетинг, який поважає увагу людей.</p></div></div>
    </section>

    <section className="section dark" id="experience"><div className="shell">
      <div className="section-label light">02 / ДОСВІД</div><h2 className="wide-title">Місця, де я допомагав щось будувати</h2>
      <div className="experience-list">{experience.map((x,i)=><article className="experience-row" key={x.name}>
        <div className="logo-chip"><img alt={`${x.name} logo`} src={`https://www.google.com/s2/favicons?domain=${x.domain}&sz=128`}/></div>
        <div><div className="exp-index">0{i+1}</div><h3>{x.name}</h3><strong>{x.role}</strong>{x.text && <p>{x.text}</p>}<div className="tags">{x.tags.map(t=><span key={t}>{t}</span>)}</div></div>
      </article>)}</div>
    </div></section>

    <section className="section shell" id="projects"><div className="section-label">03 / ВИБРАНІ ПРОЄКТИ</div><h2 className="wide-title">Дещо, чим я пишаюся</h2>
      <div className="project-list">{projects.map((p,i)=><article className="project-row" key={p.title}><span className="project-n">{p.n}</span><div><h3>{p.title}</h3><p>{p.text}</p><small>{p.meta}</small></div><ArrowUpRight className="project-arrow"/></article>)}</div>
    </section>

    <section className="manifesto"><div className="shell"><div className="section-label light">04 / МАНІФЕСТ</div><h2>Кілька речей, у які я вірю</h2>{statements.map((s,i)=><div className="statement" key={s}><span>0{i+1}</span><p>{s}</p></div>)}</div></section>

    <section className="section shell work" id="work"><div className="section-label">05 / ПРАЦЮВАТИ ЗІ МНОЮ</div><div className="work-intro"><h2>Можемо попрацювати разом</h2><p>Я не будую навколо себе агенцію і не беру десятки проєктів паралельно. Але регулярно працюю з командами та людьми там, де можу принести найбільше користі: стратегія, позиціонування, комунікації, контент і професійна видимість.</p></div>
      <div className="service-list">{services.map((s,i)=><article className={`service ${open===i?'active':''}`} key={s.n}><button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}><span>{s.n}</span><h3>{s.title}</h3><Plus className="plus"/></button><div className="service-body"><p>{s.intro}</p><p>{s.details}</p><ArrowLink>Обговорити задачу</ArrowLink></div></article>)}</div>
      <div className="unsure"><b>Не знаєте, який формат вам потрібен?</b><p>Напишіть кілька речень про задачу — я скажу, чи можу бути корисним і як саме.</p><ArrowLink>Написати мені</ArrowLink></div>
    </section>

    <section className="orange-section"><div className="shell split"><div><div className="section-label">06 / LINKEDIN & ОСВІТА</div><h2>LinkedIn, але з користю</h2></div><div><p>Я багато працюю з LinkedIn — але не вчу «як набрати 10 000 підписників за місяць». Мені цікавіше, як перетворити платформу на професійний актив: побудувати видимість, репутацію, потрібне коло людей і зрештою — нові можливості.</p><p>Через мої курси, лекції, воркшопи та менторство пройшли 100+ маркетологів і професіоналів.</p><ArrowLink>Матеріали про LinkedIn</ArrowLink></div></div></section>

    <section className="section shell"><div className="section-label">07 / САЙД-КВЕСТИ</div><h2 className="wide-title">Що ще живе у вкладках браузера</h2><div className="side-grid"><div><span>01</span><h3>sip&talk</h3><p>Подкаст про маркетинг, комунікації, бізнес і людей за ними.</p></div><div><span>02</span><h3>People on Mission</h3><p>Розмови з фаундерами про шлях, рішення, помилки й те, що залишається за межами красивих startup stories.</p></div><div><span>03</span><h3>Слей вакансії</h3><p>Моє Telegram-комʼюніті про роботу, карʼєру та можливості в маркетингу.</p></div><div><span>04</span><h3>Гайди та експерименти</h3><p>Час від часу збираю все, що знаю про певну тему, у 30 сторінок замість одного допису.</p></div></div></section>

    <section className="speaking dark"><div className="shell split"><div><div className="section-label light">08 / ВИСТУПИ</div><h2>Можемо зустрітися на сцені</h2></div><div><p>Виступаю на конференціях, освітніх подіях, корпоративних зустрічах і подкастах. Найчастіше — про маркетинг, комунікації, LinkedIn, особистий бренд і те, як не перетворити все це на набір шаблонів.</p><ArrowLink>Запросити мене виступити</ArrowLink></div></div></section>

    <section className="personal shell section"><div className="section-label">09 / ПОЗА РОБОТОЮ</div><div className="split"><h2>Коли вкладка Slack закрита</h2><p>Живу в Києві. Люблю міста, каву, хороше кіно, подорожі, дивні інтернет-кролячі нори й розмови, які починаються з маркетингу, а через сорок хвилин опиняються десь зовсім в іншому місці.</p></div><div className="photo-dump"><div className="portrait-crop"><Image src="/images/andrii-hero.jpg" alt="Андрій поза роботою" fill sizes="50vw"/></div><div className="orange-card">KYIV<br/>INTERNET<br/>COFFEE<br/>IDEAS<span>↗</span></div></div></section>

    <section className="contact" id="contact"><div className="shell"><div className="section-label">10 / CONTACT</div><h2>Є щось цікаве?</h2><p>Проєкт, виступ, подкаст, маркетингова задача, консультація або просто хороша причина познайомитися — пишіть.</p><div className="contact-actions"><a href="#contact" className="mega-link">Написати мені <ArrowUpRight/></a><a href="#contact" className="mega-link secondary">LinkedIn <ArrowUpRight/></a></div><small>Відповідаю сам. Ніяких sales-менеджерів :)</small></div></section>

    <footer className="footer shell"><div><b>Andrii Lisovyi</b><span>Маркетинг & комунікації</span></div><div><span>Зроблено в Києві з невиправдано великою увагою до відступів.</span><span>© Andrii Lisovyi, 2026</span></div></footer>
  </main>
}
