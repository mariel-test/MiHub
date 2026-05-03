import Header from '../components/Header'
import Footer from '../components/Footer'
import PhotoOrInitials from '../components/PhotoOrInitials'

const JOBS = [
  {
    title: 'Support Team Lead | QA Engineering SR (AI)',
    company: 'Globant · My Nissan App Mexico — 500K+ usuarios activos',
    date: 'Jul 2021 – Dic 2025',
    bullets: [
      'Diseño y ejecución de planes de test en Mobile (iOS/Android), Web y API con Playwright — reducción del 60% en incidentes post-release.',
      'Validación de integridad de datos en migración bancaria UENO (AWS/S3/EKS), verificando balances de puntos y membresías.',
      'Implementación de estrategias REST/microservices con Postman y performance testing con JMeter integrado en CI/CD.',
      'Mentoría a engineers junior/mid en prácticas shift-left y estrategia de automatización.',
    ],
    stack: ['Playwright (TS)', 'Charles Proxy', 'BrowserStack', 'JMeter', 'AWS S3/EKS', 'PostgreSQL'],
  },
  {
    title: 'QA Lead | Release Manager',
    company: 'Comprando en Grupo',
    date: 'Dic 2020 – Jul 2021',
    bullets: [
      'Diseño de estrategia E2E para APIs REST/Webhook y microservicios Django desde cero, cubriendo integración Bitrix CRM ↔ Dynamics 365.',
      'Reducción del 95% del backlog acumulado en 30 días mediante triage ágil estructurado en Jira.',
    ],
    stack: ['Selenium (Python)', 'BDD/Gherkin', 'Django', 'Bitrix24'],
  },
  {
    title: 'QA Manual SR | Security & Risk Management',
    company: 'Claro (vía VATES Software)',
    date: 'Abr 2020 – Dic 2020',
    bullets: [
      'Testing de sistemas de cobranza automatizada y validación de transacciones financieras críticas con enfoque security-first.',
      'Hallazgo crítico: entorno de test conectado a producción — prevención de transferencias financieras reales.',
    ],
    stack: ['Selenium/Cypress', 'Docker', 'GitLab', 'Oracle', 'SOX'],
  },
  {
    title: 'QA Architect',
    company: 'Kolektor S.A.',
    date: 'Jul 2018 – Abr 2020',
    bullets: [
      'Testing de sistemas críticos de recaudación de ingresos bajo cumplimiento gubernamental.',
      'Debugging PL/SQL y validación de colas Kafka en entornos de alta concurrencia.',
      'Validación de servicios SOAP UI para integraciones intergubernamentales.',
    ],
    stack: ['PL/SQL', 'Kafka', 'SoapUI', 'Jira/Zephyr', 'Agile/Scrum'],
  },
  {
    title: 'IT Risk Auditor',
    company: 'Grant Thornton Argentina · Cliente: BANCOR',
    date: 'Jul 2018 – Jul 2019',
    bullets: [
      'Diseño de framework de gestión de riesgos IT logrando 100% de cumplimiento con regulaciones BCRA.',
      'Mapeo de riesgos tecnológicos vs. procesos de negocio; construcción de dashboard de control operativo para monitoreo ejecutivo.',
    ],
    stack: ['Control-M', 'BCRA Reg. 774', 'Risk Framework'],
  },
  {
    title: 'QA Lead — Core Banking Migration',
    company: 'IBM · Cliente: Tarjeta Naranja',
    date: 'Ago 2013 – Jul 2017',
    bullets: [
      'Liderazgo del QA de integridad de datos: validación E2E de procesos ETL en 5+ sistemas externos integrados con verificación de encriptación.',
      'Coordinación de UAT con 8 áreas de negocio; reducción del 40% en tiempo de procesamiento batch post-migración.',
    ],
    stack: ['COBOL', 'DB2 SQL', 'Control-M', 'CICS', 'JCL'],
  },
  {
    title: 'Lead QA Analyst — COBOL Legacy to SAP Migration',
    company: 'Banco de la Provincia de Córdoba',
    date: 'Oct 2012 – Ago 2013',
    bullets: [
      'Testing de productos bancarios, transacciones SAP Z y migración de sistemas legacy COBOL.',
      'Liderazgo de equipo de 3 testers en entorno Waterfall.',
    ],
    stack: ['COBOL', 'SAP Banking', 'DB2 SQL', 'Waterfall'],
  },
]

const SKILLS = [
  'Python', 'JavaScript', 'Playwright', 'Selenium', 'Pytest',
  'CI/CD', 'REST API', 'Postman', 'Docker', 'AWS',
  'Oracle', 'PostgreSQL', 'Conceptos de NoSQL',
  'Dashboard JIRA & Planning', 'Jenkins', 'GitLab CI', 'GitHub Actions',
]

const ACHIEVEMENTS = [
  { value: '60%', text: 'Reducción de defectos post-release · Globant/Nissan' },
  { value: '95%', text: 'Backlog eliminado en 30 días · Comprando en Grupo' },
  { value: '100%', text: 'Cumplimiento BCRA · Grant Thornton/BANCOR' },
]

export default function Profile() {
  return (
    <div className="page">
      <Header />
      <main className="page-content">

        {/* Header card */}
        <div style={s.topCard}>
          <div style={{ flex: 1 }}>
            <h1 style={s.name}>
              <span style={{ color: '#fff' }}>Mariel </span>
              <span style={{ color: '#7c3aed' }}>Ferreyra</span>
            </h1>
            <p style={s.role}>Senior QA Automation Engineer · AI Assisted</p>
            <div style={s.contact}>
              <span>mariel.ferreyra@gmail.com</span>
              <span>+54 351 615-7152</span>
              <span>linkedin.com/in/ferreyramariel</span>
              <span>Argentina · Open to Remote</span>
            </div>
          </div>
          <PhotoOrInitials size={140} />
        </div>

        {/* Summary */}
        <Section title="Perfil profesional">
          <p style={s.summary}>
            +10 años diseñando estrategias QA para sistemas críticos en Fintech, Banca, Automotriz y Supply Chain.
            Experta en automatización con Python/JavaScript (Playwright, Selenium, Appium) e integración CI/CD con Docker, Jenkins y GitHub Actions.
            Especialización actual en calidad de sistemas AI: evaluación de outputs LLM, testing de pipelines RAG y validación de agentes.
          </p>
        </Section>

        {/* Skills */}
        <Section title="Skills principales">
          <div style={s.tags}>
            {SKILLS.map(s => <span key={s} style={tag}>{s}</span>)}
          </div>
        </Section>

        {/* Achievements */}
        <Section title="Logros clave">
          <div style={s.achieveGrid}>
            {ACHIEVEMENTS.map(({ value, text }) => (
              <div key={value} style={s.achieveCard}>
                <span style={s.achieveNum}>{value}</span>
                <span style={s.achieveText}>{text}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section title="Experiencia profesional">
          {JOBS.map((job, i) => (
            <div key={i} style={s.job}>
              <div style={s.jobHeader}>
                <div>
                  <div style={s.jobTitle}>{job.title}</div>
                  <div style={s.jobCompany}>{job.company}</div>
                </div>
                <div style={s.jobDate}>{job.date}</div>
              </div>
              <ul style={s.bullets}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={s.bullet}>{b}</li>
                ))}
              </ul>
              <div style={s.tags}>
                {job.stack.map(t => <span key={t} style={stackTag}>{t}</span>)}
              </div>
            </div>
          ))}
        </Section>

        {/* Certs */}
        <Section title="Certificaciones">
          <div style={s.certs}>
            <div style={s.cert}>Diplomatura en Testing (ISTQB) · UTN</div>
            <div style={s.cert}>Systems Analyst / Engineering · UTN</div>
            <div style={s.cert}>LLM Eval: RAGAS, DeepEval · En desarrollo</div>
          </div>
        </Section>

        {/* Portfolio */}
        <Section title="Portfolio">
          <div style={s.portfolio}>
            <a href="https://github.com/mariel-test/QA-api-typescript" target="_blank" rel="noopener noreferrer" style={s.portLink}>
              API Automation (TypeScript) — github.com/mariel-test/QA-api-typescript
            </a>
            <a href="https://github.com/mariel-test/ecommerce-python-complete" target="_blank" rel="noopener noreferrer" style={s.portLink}>
              E-Commerce QA Full Stack (Python) — github.com/mariel-test/ecommerce-python-complete
            </a>
          </div>
        </Section>

      </main>
      <Footer
        prev={{ to: '/', label: 'Anterior' }}
        center={{ to: '/articulos', label: 'Articulos' }}
        next={{ to: '/articulos', label: 'Siguiente' }}
      />
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={sectionTitle}>{title}</div>
      {children}
    </div>
  )
}

const sectionTitle = {
  fontSize: '1.2rem',
  fontWeight: 700,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '#888',
  marginBottom: 20,
  paddingBottom: 10,
  borderBottom: '1px solid #2a2a2a',
}

const tag = {
  display: 'inline-block',
  background: '#1e1256',
  color: '#a78bfa',
  fontSize: '1.1rem',
  padding: '7px 18px',
  borderRadius: 20,
  margin: '5px 5px 0 0',
}

const stackTag = {
  display: 'inline-block',
  background: '#1a1a1a',
  color: '#999',
  fontSize: '1rem',
  padding: '5px 14px',
  borderRadius: 20,
  border: '1px solid #2a2a2a',
  margin: '4px 4px 0 0',
}

const s = {
  topCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 28,
    marginBottom: 40,
    padding: '28px',
    background: '#181818',
    borderRadius: 12,
    flexWrap: 'wrap',
  },
  photo: {
    width: 110,
    height: 110,
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center top',
    border: '3px solid #7c3aed',
    flexShrink: 0,
  },
  name: {
    fontSize: 'clamp(32px, 5vw, 52px)',
    fontWeight: 900,
    marginBottom: 8,
  },
  role: {
    fontSize: '1.1rem',
    color: '#4ffbdf',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  contact: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px 20px',
    fontSize: '1.05rem',
    color: '#888',
  },
  summary: {
    fontSize: '1.2rem',
    lineHeight: 1.85,
    color: '#ccc',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  achieveGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 16,
  },
  achieveCard: {
    background: '#181818',
    borderRadius: 8,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  achieveNum: {
    fontSize: 'clamp(28px, 4vw, 42px)',
    fontWeight: 900,
    color: '#4ffbdf',
  },
  achieveText: {
    fontSize: '1.05rem',
    color: '#888',
    lineHeight: 1.5,
  },
  job: {
    marginBottom: 32,
    paddingBottom: 32,
    borderBottom: '1px solid #222',
  },
  jobHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  jobTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#fff',
    marginBottom: 4,
  },
  jobCompany: {
    fontSize: '1.1rem',
    color: '#888',
  },
  jobDate: {
    fontSize: '1rem',
    color: '#7c3aed',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  bullets: {
    listStyle: 'none',
    marginBottom: 10,
  },
  bullet: {
    fontSize: '1.1rem',
    color: '#ccc',
    lineHeight: 1.8,
    paddingLeft: 18,
    marginBottom: 6,
    position: 'relative',
  },
  certs: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  cert: {
    fontSize: '1.1rem',
    color: '#ccc',
    paddingLeft: 16,
    borderLeft: '2px solid #7c3aed',
    lineHeight: 1.7,
  },
  portfolio: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  portLink: {
    fontSize: '1.1rem',
    color: '#a78bfa',
    lineHeight: 1.7,
  },
}
