import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Baby,
  Bird,
  BookOpen,
  Clock3,
  Compass,
  Cross,
  Crown,
  Droplets,
  ExternalLink,
  HandHeart,
  Heart,
  HeartHandshake,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Music2,
  Sparkles,
  Sun,
  Waves,
  X,
} from 'lucide-react'
import { church, faqTopics, meetings, ministries, pillars } from './data.js'

const iconMap = {
  bird: Bird,
  book: BookOpen,
  children: Baby,
  compass: Compass,
  cross: Cross,
  crown: Crown,
  hands: HeartHandshake,
  heart: HandHeart,
  home: Home,
  music: Music2,
  prayer: Heart,
  sparkles: Sparkles,
  water: Droplets,
  waves: Waves,
}

const whatsappUrl = (message) => {
  const number = church.whatsapp.replace(/\D/g, '')
  if (number.length < 12) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

function Brand({ light = false }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="#inicio" aria-label={`${church.name} — início`}>
      <span className="brand-mark" aria-hidden="true">
        <span /><span /><span /><span />
      </span>
      <span className="brand-copy">
        <strong>{church.name}</strong>
        <small>{church.city}</small>
      </span>
    </a>
  )
}

function ContactLink({ children, className = '', message, ...props }) {
  const url = whatsappUrl(message)
  return (
    <a
      className={className}
      href={url || '#contato'}
      target={url ? '_blank' : undefined}
      rel={url ? 'noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-controls="navLinks"
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={`nav-panel${open ? ' is-open' : ''}`} id="navLinks" aria-label="Navegação principal">
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#cultos" onClick={closeMenu}>Encontros</a>
          <a href="#sobre" onClick={closeMenu}>Quem somos</a>
          <a href="#ministerios" onClick={closeMenu}>Ministérios</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <ContactLink className="nav-cta" message="Olá! Quero planejar minha primeira visita à igreja." onClick={closeMenu}>
            Planeje sua visita <ArrowRight />
          </ContactLink>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light"><span /> Igreja Quadrangular em São Paulo</p>
          <h1 id="hero-title">Um lugar para <em>pertencer.</em><br />Uma fé para viver.</h1>
          <p className="hero-lead">Aqui você encontra uma comunidade que acolhe, caminha junto e acredita que a presença de Deus transforma histórias.</p>
          <div className="hero-actions">
            <ContactLink className="button button-primary" message="Olá! Quero planejar minha primeira visita à igreja.">
              Planejar minha visita <ArrowRight />
            </ContactLink>
            <a className="button button-ghost" href="#cultos">Ver horários <Clock3 /></a>
          </div>
          <ul className="hero-trust" aria-label="Informações rápidas">
            <li><Heart /> Todos são bem-vindos</li>
            <li><MapPin /> {church.city}, {church.state}</li>
          </ul>
        </div>
        <aside className="next-card" aria-label="Próximo encontro">
          <div className="next-card-top"><span className="live-dot" /> Próximo encontro</div>
          <p className="next-day">Domingo</p>
          <h2>Culto de Domingo</h2>
          <div className="next-times">
            <span><Sun /> 9h</span>
            <span><Moon /> 19h</span>
          </div>
          <a href="#cultos">Ver agenda completa <ArrowDown /></a>
        </aside>
      </div>
      <a className="scroll-cue" href="#cultos" aria-label="Ir para a agenda"><span>Descubra</span><ArrowDown /></a>
    </section>
  )
}

function SectionHeading({ eyebrow, title, italic, children }) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h2>{title}<br /><em>{italic}</em></h2>
      </div>
      <p>{children}</p>
    </div>
  )
}

function Schedule() {
  return (
    <section className="section schedule" id="cultos" aria-labelledby="cultos-title">
      <div className="container">
        <SectionHeading eyebrow="Encontre seu momento" title="Tem sempre um lugar" italic="esperando por você.">
          Escolha o melhor horário e venha como você está. Nossa equipe estará pronta para receber você e sua família.
        </SectionHeading>
        <div className="schedule-layout">
          <article className="schedule-feature" data-reveal>
            <div className="schedule-feature-head"><span className="schedule-number">01</span><Sun /></div>
            <div>
              <p className="schedule-kicker">Todo domingo</p>
              <h3>Culto de Domingo</h3>
              <p>Um encontro para toda a família, com louvor, Palavra e comunhão.</p>
            </div>
            <div className="feature-times">
              <div><small>Manhã</small><strong>9h</strong></div><span /><div><small>Noite</small><strong>19h</strong></div>
            </div>
            <ContactLink message="Olá! Quero confirmar os horários do culto de domingo.">
              Confirmar presença <ArrowRight />
            </ContactLink>
          </article>
          <div className="schedule-list" data-reveal>
            {meetings.map((meeting) => {
              const Icon = iconMap[meeting.icon]
              return (
                <article className="schedule-row" key={meeting.name}>
                  <div className="schedule-icon"><Icon /></div>
                  <div><span>{meeting.day}</span><h3>{meeting.name}</h3></div>
                  {meeting.action ? (
                    <ContactLink message="Olá! Quero saber a próxima data de Batismo e Ceia.">Agendar</ContactLink>
                  ) : <time dateTime={meeting.datetime}>{meeting.time}</time>}
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="sobre" aria-labelledby="sobre-title">
      <div className="container about-layout">
        <div className="about-intro" data-reveal>
          <p className="eyebrow eyebrow-light"><span /> Nossa essência</p>
          <h2 id="sobre-title">O evangelho inteiro para a <em>pessoa inteira.</em></h2>
          <p>Somos uma comunidade cristã construída sobre graça, verdade e relacionamentos reais. Cremos em uma fé que alcança cada área da vida.</p>
          <blockquote>“A presença de Deus se revela na fé vivida com simplicidade.”</blockquote>
          <a className="about-history-link" href="#nossa-historia">Conheça nossa história <ArrowDown /></a>
        </div>
        <div className="pillars" data-reveal aria-label="Os quatro pilares da fé Quadrangular">
          {pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon]
            return (
              <article className={`pillar pillar-${pillar.tone}`} key={pillar.number}>
                <div className="pillar-top"><span>{pillar.number}</span><Icon /></div>
                <small className="pillar-doctrine">{pillar.doctrine}</small>
                <h3>{pillar.title}</h3><p>{pillar.text}</p>
              </article>
            )
          })}
        </div>
      </div>

      <div className="container history-panel" id="nossa-historia" data-reveal>
        <div className="history-timeline" aria-label="Marcos históricos">
          <div><strong>1923</strong><span>Fundação em Los Angeles</span></div>
          <i aria-hidden="true" />
          <div><strong>1951</strong><span>Chegada ao Brasil</span></div>
        </div>

        <div className="history-content">
          <p className="eyebrow eyebrow-light"><span /> Nossa história</p>
          <h3>Uma igreja com propósito e uma mensagem para a vida inteira.</h3>
          <div className="history-copy-grid">
            <p><strong>A Igreja Quadrangular</strong> foi fundada em 1923 pela evangelista <strong>Aimee Semple McPherson</strong>, em Los Angeles, nos Estados Unidos. Seu nome nasce dos quatro pilares da fé: salvação em Jesus Cristo, batismo no Espírito Santo, cura divina e a segunda vinda de Cristo.</p>
            <p>No Brasil, a denominação chegou em <strong>1951</strong> com os missionários <strong>Harold e Ruth Williams</strong>, que fundaram a primeira igreja em São Paulo. Desde então, a Igreja Quadrangular se espalhou por todo o país, mantendo viva a mensagem dos quatro pilares.</p>
          </div>

          <div className="history-sacraments">
            <article>
              <span><Droplets /></span>
              <div><h4>Batismo</h4><p>Realizamos batismos regularmente para aqueles que desejam testemunhar publicamente sua fé em Jesus.</p></div>
            </article>
            <article>
              <span><HeartHandshake /></span>
              <div><h4>Ceia do Senhor</h4><p>A Ceia é aberta a membros e frequentadores que fazem parte da comunhão da igreja e compartilham da mesma fé.</p></div>
            </article>
          </div>

          <p className="history-closing">Nossa igreja em São Paulo segue essa tradição, acolhendo todas as pessoas com amor, verdade e disposição para caminhar junto.</p>
        </div>
      </div>
    </section>
  )
}

function Ministries() {
  return (
    <section className="section ministries" id="ministerios" aria-labelledby="ministerios-title">
      <div className="container">
        <SectionHeading eyebrow="Vida em comunidade" title="Há um espaço para" italic="cada fase da vida.">
          Conecte seus dons, construa amizades e descubra a alegria de servir junto.
        </SectionHeading>
        <div className="ministry-grid">
          {ministries.map((ministry) => {
            const Icon = iconMap[ministry.icon]
            const classes = ['ministry-card', ministry.featured && 'ministry-feature', ministry.dark && 'ministry-dark'].filter(Boolean).join(' ')
            return (
              <article className={classes} data-reveal key={ministry.title}>
                <span className="ministry-icon"><Icon /></span>
                <div><small>{ministry.eyebrow}</small><h3>{ministry.title}</h3><p>{ministry.text}</p></div>
                {ministry.featured && <a href="#contato" aria-label={`Saber mais sobre ${ministry.title}`}><ExternalLink /></a>}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function VisitBanner() {
  return (
    <section className="visit-banner" aria-labelledby="visit-title">
      <div className="visit-pattern" aria-hidden="true" />
      <div className="container visit-inner" data-reveal>
        <div>
          <p className="eyebrow eyebrow-light"><span /> Sua primeira visita</p>
          <h2 id="visit-title">Domingo pode ser o começo de uma nova história.</h2>
        </div>
        <ContactLink className="button button-light" message="Olá! Quero conhecer a igreja neste domingo.">
          Quero conhecer a igreja <ArrowRight />
        </ContactLink>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contato" aria-labelledby="contato-title">
      <div className="container contact-layout">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow"><span /> Pode chegar</p>
          <h2 id="contato-title">Sua primeira vez pode ser <em>leve e simples.</em></h2>
          <p>Avise que você vem e nossa equipe ajuda com localização, horários e tudo o que precisar.</p>
          <ol className="visit-steps">
            <li><span>1</span><div><strong>Venha como você está</strong><p>Não existe roupa certa ou experiência necessária.</p></div></li>
            <li><span>2</span><div><strong>Chegue alguns minutos antes</strong><p>Assim você conhece o espaço com tranquilidade.</p></div></li>
            <li><span>3</span><div><strong>Procure nossa equipe</strong><p>Vamos receber você e ajudar no que for preciso.</p></div></li>
          </ol>
        </div>
        <aside className="contact-card" data-reveal>
          <div className="contact-card-head"><span>Estamos em</span><MapPin /></div>
          <h3>{church.city}, {church.state}</h3>
          <p>{church.name} — {church.unit}. Peça a localização exata e veja a melhor rota para chegar.</p>
          <div className="contact-lines">
            <div><Clock3 /><span><small>Secretaria</small>Seg a sex, 8h às 17h · Sáb, 9h às 12h</span></div>
            <div><MessageCircle /><span><small>Atendimento</small>Fale com nossa equipe · resposta em até 2h</span></div>
          </div>
          <ContactLink className="button button-primary button-full" message="Olá! Pode me enviar a localização exata da igreja?">
            Pedir localização <MessageCircle />
          </ContactLink>
        </aside>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand"><Brand light /><p>Os quatro pilares da fé em um só lugar. Uma comunidade para viver a fé, construir amizades e encontrar propósito.</p></div>
        <div className="footer-links"><h3>Navegue</h3><a href="#cultos">Encontros</a><a href="#sobre">Quem somos</a><a href="#ministerios">Ministérios</a><a href="#contato">Contato</a></div>
        <div className="footer-links"><h3>Domingo</h3><p>Escola Dominical — 8h30</p><p>Celebração — 9h e 19h</p><a href="#cultos">Ver agenda completa</a></div>
        <div className="footer-social"><h3>Acompanhe</h3><div><a href="#" aria-label="Instagram">Ig</a><a href="#" aria-label="Facebook">Fb</a><a href="#" aria-label="YouTube">Yt</a></div></div>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} {church.name} — {church.city}. Todos os direitos reservados.</p><p>Planejamento: <strong>@emanuel.macedo</strong></p><p>Produto adaptável para múltiplos contextos.</p></div>
    </footer>
  )
}

function FaqWidget() {
  const initialMessage = { type: 'bot', text: 'Olá! Que bom ter você por aqui. Como posso ajudar?', options: ['horarios', 'primeiraVisita', 'endereco', 'pastor', 'batismo', 'ceia'] }
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([initialMessage])
  const [typing, setTyping] = useState(false)
  const widgetRef = useRef(null)
  const toggleRef = useRef(null)
  const closeRef = useRef(null)
  const bodyRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (open) closeRef.current?.focus()
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [open, messages, typing])

  useEffect(() => {
    const onPointerDown = (event) => {
      if (open && !widgetRef.current?.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(timeoutRef.current)
    }
  }, [open])

  const selectTopic = (key) => {
    const topic = faqTopics[key]
    if (!topic || typing) return

    if (topic.action === 'whatsapp') {
      const url = whatsappUrl('Olá! Vim pelo site e gostaria de mais informações sobre a igreja.')
      setMessages((current) => [...current, { type: 'user', text: topic.label }])
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer')
        setMessages((current) => [...current, { type: 'bot', text: 'Pronto! Abri nosso atendimento em uma nova aba.', options: ['horarios', 'endereco'] }])
      } else {
        setMessages((current) => [...current, { type: 'bot', text: 'Nosso contato direto será disponibilizado em breve. Enquanto isso, você pode conferir os horários e as informações de visita por aqui.', options: ['horarios', 'primeiraVisita', 'endereco'] }])
      }
      return
    }

    setMessages((current) => [...current, { type: 'user', text: topic.label }])
    setTyping(true)
    timeoutRef.current = window.setTimeout(() => {
      setTyping(false)
      setMessages((current) => [...current, { type: 'bot', text: topic.answer, options: topic.next }])
    }, 360)
  }

  return (
    <div className="chatbot-widget" ref={widgetRef}>
      <button
        className="chatbot-toggle"
        type="button"
        aria-controls="chatbotWindow"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        ref={toggleRef}
      >
        <span className="chatbot-label">Posso ajudar?</span>
        <span className="chatbot-icon"><MessageCircle /><span className="notif-badge" /></span>
      </button>
      <section className={`chatbot-window${open ? ' is-open' : ''}`} id="chatbotWindow" role="dialog" aria-label="Dúvidas frequentes" aria-hidden={!open} inert={!open}>
        <header className="chatbot-header">
          <span className="bot-avatar"><Heart /></span>
          <div><strong>Como podemos ajudar?</strong><small>Respostas rápidas</small></div>
          <button className="close-chat" type="button" aria-label="Fechar" onClick={() => setOpen(false)} ref={closeRef}><X /></button>
        </header>
        <div className="chatbot-body" ref={bodyRef} aria-live="polite">
          {messages.map((message, index) => (
            <div className={`chat-message ${message.type}`} key={`${message.type}-${index}`}>
              <p>{message.text}</p>
              {message.options && index === messages.length - 1 && (
                <div className="chat-options">
                  {message.options.map((key) => <button type="button" onClick={() => selectTopic(key)} key={key}>{faqTopics[key].label}</button>)}
                </div>
              )}
            </div>
          ))}
          {typing && <div className="typing" aria-label="Digitando"><span /><span /><span /></div>}
        </div>
        <footer className="chatbot-footer-msg"><span /> Atendimento acolhedor e confidencial</footer>
      </section>
    </div>
  )
}

function ReactApp() {
  useEffect(() => {
    if (!window.location.hash) return undefined
    const frame = window.requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView()
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const items = [...document.querySelectorAll('[data-reveal]')]
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -48px' })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Schedule />
        <About />
        <Ministries />
        <VisitBanner />
        <Contact />
      </main>
      <Footer />
      <FaqWidget />
      <ContactLink className="mobile-visit-bar" message="Olá! Quero planejar minha primeira visita à igreja."><MessageCircle /> Planejar minha visita</ContactLink>
    </>
  )
}

export default ReactApp
