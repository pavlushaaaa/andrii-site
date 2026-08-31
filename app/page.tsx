'use client';

import { useState } from 'react';
import { TELEGRAM, nav, experience, projects, statements, services, topics, socials } from '@/data/content';

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  return <>
    <header className="header shell">
      <a href="#top" className="wordmark">ANDRII LISOVYI</a>
      <nav className="desktop-nav">{nav.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}</nav>
      <a className="arrow-link head-cta" href={TELEGRAM} target="_blank" rel="noopener">Написати ↗</a>
      <button className="menu-btn" aria-label="Меню" onClick={() => setMenu(!menu)}>{menu ? '×' : '☰'}</button>
    </header>
    <div className={`mobile-menu ${menu ? 'open' : ''}`}>{nav.map(l => <a key={l.href} href={l.href} onClick={() => setMenu(false)}>{l.label}</a>)}</div>

    <main>
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <h1>Building Personal Brands <span>&</span> Community-Centered Marketing for People and Teams <em>ツ</em></h1>
          <p>Андрій Лісовий — маркетолог та експерт із комунікацій, розвитку персональних брендів і побудови комʼюніті.</p>
          <a className="text-cta" href="#projects">Подивитися, що я роблю ↓</a>
        </div>
        <div className="hero-photo"><img src="assets/images/andrii-hero.jpg" alt="Андрій Лісовий" /><div className="photo-caption"><span>ANDRII LISOVYI</span><span>MARKETING & COMMS</span></div></div>
        <img className="hero-star" src="assets/decor/chrome-star-cutout.png" alt="" />
      </section>

      <section className="proof"><div className="shell proof-grid"><div><b>7+ років</b><span>у маркетингу та комунікаціях</span></div><div><b>100+ людей</b><span>пройшли через мої курси, лекції та менторство</span></div><div><b>100+ консультацій</b><span>про маркетинг, контент, LinkedIn і карʼєру</span></div></div></section>

      <section className="section shell about" id="about">
        <div className="section-label">01 / ПРО МЕНЕ</div>
        <div className="about-grid">
          <div className="about-title-wrap"><h2>Привіт,<br />я Андрій.</h2><img className="about-smiley" src="assets/decor/chrome-smiley.png" alt="" /></div>
          <div className="about-copy">
            <p className="lead">Всю свою карʼєру я працюю в маркетингу та комунікаціях.</p>
            <p>Встиг попрацювати в агенції, IT, фонді, GovTech, освіті та стартап-екосистемі. Був у команді Фонду Сергія Притули, Develux, Мрії / Мінцифри. Три роки викладаю у Projector.</p>
            <p>Зараз очолюю маркетинг і комунікації Mission Possible.</p>
            <p>А ще паралельно будую власні проєкти навколо речей, які люблю найбільше: маркетингу, людей, карʼєри, контенту та інтернету.</p>
          </div>
        </div>
      </section>

      <section className="section dark experience" id="experience"><div className="shell">
        <div className="section-label light">02 / ДОСВІД</div>
        <div className="experience-head"><h2 className="wide-title">Де я встиг<br />попрацювати</h2><img className="experience-art" src="assets/decor/ascii-horse-3.png" alt="" /></div>
        <div className="experience-list">
          {experience.map((x, i) => <article className="experience-row" key={x.name}>
            <span className="exp-index">0{i + 1}</span>
            <div className="exp-main"><h3>{x.name}</h3><strong>{x.role}</strong><p>{x.text}</p></div>
            <div className="tags">{x.tags.map(t => <span key={t}>{t}</span>)}</div>
          </article>)}
        </div>
      </div></section>

      <section className="section projects shell" id="projects">
        <div className="section-label">03 / МОЇ ПРОЄКТИ</div>
        <div className="projects-head"><h2 className="wide-title">Мої проєкти:</h2></div>
        <div className="project-stack">
          {projects.map((p, i) => <article className={`project-card project-card-${i + 1}`} key={p.title}>
            <div className="project-copy">
              <div className="project-meta"><span>{p.n}</span><span>{p.meta}</span></div>
              {p.logo ? <><img className="sip-logo" src={p.logo} alt={p.title} /><h3 className="sr-only">{p.title}</h3></> : <h3>{p.title}</h3>}
              <p>{p.text}</p>
              <p className="project-note">{p.note}</p>
              <a className="arrow-link" target="_blank" rel="noopener" href={p.href}>{p.cta}</a>
            </div>
            <div className={`project-visual${p.screen ? ' slay-visual' : ''}`}>
              {p.screen
                ? <><img className="slay-bg" src={p.image} alt="" /><img className="slay-screen" src={p.screen.src} alt={p.screen.alt} /></>
                : <img src={p.image} alt="" />}
            </div>
          </article>)}
        </div>
      </section>

      <section className="manifesto"><div className="shell manifesto-inner">
        <div className="section-label">04 / ЯК Я ДИВЛЮСЯ НА МАРКЕТИНГ</div>
        <div className="manifesto-head"><h2>Кілька тейків,<br />за які готовий<br />відповідати.</h2><img className="manifesto-art" src="assets/decor/heat-star.png" alt="" /></div>
        <div className="statement-list">{statements.map((s, i) => <div className="statement" key={s}><span>0{i + 1}</span><p>{s}</p></div>)}</div>
      </div></section>

      <section className="section shell work" id="work">
        <div className="section-label">05 / ПРАЦЮВАТИ ЗІ МНОЮ</div>
        <div className="work-intro"><h2>Як зі мною можна попрацювати?</h2></div>
        <div className="work-layout">
          <div className="service-list">
            {services.map((s, i) => <article className={`service ${open === i ? 'active' : ''}`} key={s.n}>
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}><span>{s.n}</span><div><small>{s.small}</small><h3>{s.title}</h3></div><b className="plus">+</b></button>
              <div className="service-body">{s.body.map(p => <p key={p}>{p}</p>)}<a className="arrow-link" href={TELEGRAM} target="_blank" rel="noopener">{s.cta}</a></div>
            </article>)}
          </div>
          <aside className="work-art"><img className="cherries" src="assets/decor/cherries.png" alt="" /><span>GOOD WORK<br />NEEDS<br />GOOD PEOPLE ツ</span></aside>
        </div>
      </section>

      <section className="speaking dark" id="speaking"><div className="shell speaking-grid">
        <div className="speaking-copy">
          <div className="section-label light">06 / PUBLIC SPEAKING</div>
          <h2>Виступаю на конференціях, корпоративних подіях, у школах, курсах, подкастах.</h2>
          <a className="arrow-link orange-link" href={TELEGRAM} target="_blank" rel="noopener">Запросити виступити ↗</a>
        </div>
        <div className="topics">
          <div className="topics-label">Найчастіше говорю про:</div>
          {topics.map((t, i) => <div className="topic" key={t}><span>0{i + 1}</span><b>{t}</b></div>)}
        </div>
      </div></section>

      <section className="contact" id="contact"><div className="shell contact-inner">
        <div className="section-label">08 / CONTACT</div>
        <h2>Якщо дочитали<br />аж сюди —<br /><em>можемо й познайомитися.</em></h2>
        <p>Консультація, проєкт, лекція, подкаст, колаба або просто хороша причина написати.</p>
        <div className="contact-actions"><a href={TELEGRAM} target="_blank" rel="noopener" className="mega-link">Написати мені ↗</a></div>
        <div className="social-row">{socials.map(s => <a key={s.href} href={s.href} target="_blank" rel="noopener">{s.label}</a>)}</div>
        <img className="contact-spikes" src="assets/decor/chrome-spikes.png" alt="" />
      </div></section>
    </main>

    <footer className="footer">
      <div className="shell footer-inner">
        <div><b>ANDRII LISOVYI</b><span>Building Personal Brands & Community-Centered Marketing for People and Teams ツ</span></div>
        <div><span>Kyiv, Ukraine.</span><span>© Andrii Lisovyi, 2026</span></div>
      </div>
    </footer>
  </>;
}
