import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import styles from "./services.module.css";

const pillars = [
  {
    id: "software-digital-systems",
    number: "01",
    icon: "code" as const,
    title: "Software &\nDigital Systems",
    introduction:
      "Software is one way to make an idea useful: designed around the people, workflows and systems it needs to serve.",
    capabilities: [
      "Custom software development",
      "Web applications and business platforms",
      "Enterprise systems and workflow solutions",
      "Product design and development",
      "Systems integration",
    ],
  },
  {
    id: "ai-automation",
    number: "02",
    icon: "spark" as const,
    title: "Artificial Intelligence &\nIntelligent Automation",
    introduction:
      "Explore where AI, data and automation can support better decisions and reduce friction in existing processes.",
    capabilities: [
      "AI-powered applications",
      "Intelligent process automation",
      "Predictive analytics and machine learning",
      "Data-driven decision systems",
      "AI integration into existing systems",
    ],
  },
  {
    id: "cloud-infrastructure",
    number: "03",
    icon: "cloud" as const,
    title: "Cloud, Infrastructure\n& IT Systems",
    introduction:
      "Consider the foundations, operations and integrations that support dependable technology systems.",
    capabilities: [
      "Cloud infrastructure and deployment",
      "DevOps and operational automation",
      "Server and systems administration",
      "Infrastructure architecture",
      "Technical integration and IT solutions",
    ],
  },
  {
    id: "research-innovation",
    number: "04",
    icon: "compass" as const,
    title: "Research, Engineering\n& Innovation",
    introduction:
      "Make room to investigate open questions, test an idea and engineer a path toward what could come next.",
    capabilities: [
      "Technology research and experimentation",
      "Prototyping and proof of concepts",
      "Emerging technology exploration",
      "Engineering-led problem solving",
      "Development of proprietary intellectual property",
    ],
  },
];

const stages = [
  { number: "01", name: "Understand", detail: "Frame the challenge, context and intended outcome." },
  { number: "02", name: "Explore", detail: "Examine options, constraints and opportunities." },
  { number: "03", name: "Engineer", detail: "Shape a considered response to the problem." },
  { number: "04", name: "Deliver", detail: "Move the agreed work into practical use." },
  { number: "05", name: "Evolve", detail: "Learn from use and identify what should follow." },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.servicePage}>
        <section className={styles.hero} aria-labelledby="services-title">
          <div className={`page-width ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span /> Technology, across disciplines</p>
              <h1 id="services-title">A wider view of<br /><em>what technology can do.</em></h1>
              <p className={styles.heroLead}>
                Synexis brings software, intelligent systems, infrastructure and engineering into a broader technology practice.
              </p>
              <Link className={styles.heroLink} href="#capabilities">Explore our capabilities <span aria-hidden="true">&#8595;</span></Link>
            </div>
            <div className={styles.heroVisual} aria-hidden="true">
              <span className={styles.visualLabel}>CAPABILITY / 01—04</span>
              <span className={styles.visualOrbit} />
              <span className={styles.visualCore}><i /><i /><i /><i /></span>
              <span className={`${styles.visualNode} ${styles.nodeOne}`}><Icon name="code" /></span>
              <span className={`${styles.visualNode} ${styles.nodeTwo}`}><Icon name="spark" /></span>
              <span className={`${styles.visualNode} ${styles.nodeThree}`}><Icon name="cloud" /></span>
              <span className={`${styles.visualNode} ${styles.nodeFour}`}><Icon name="compass" /></span>
              <span className={styles.visualCaption}>SOFTWARE · INTELLIGENCE · INFRASTRUCTURE · ENGINEERING</span>
            </div>
          </div>
          <div className={styles.heroMeta} aria-hidden="true"><span>Synexis Technologies</span><span>Independent thinking, applied across technology</span><span>01 — 04</span></div>
        </section>

        <section className={styles.introduction} aria-labelledby="breadth-title">
          <div className={`page-width ${styles.introGrid}`}>
            <aside className={styles.introAside}>
              <span>THE BROADER PRACTICE</span>
              <i />
              <p>Different disciplines.<br />Connected ways forward.</p>
            </aside>
            <div className={styles.introCopy}>
              <p className={styles.eyebrow}><span /> A wider technology company</p>
              <h2 id="breadth-title">Software is part of the picture.<br /><em>Possibility is the wider field.</em></h2>
              <p>
                We work across software development, artificial intelligence, intelligent systems, cloud infrastructure, engineering and technological research. The right combination depends on the challenge in front of us.
              </p>
              <p>
                These capability areas describe the breadth of our work and direction. Scope, maturity and delivery readiness vary by area; we clarify them in conversation before proposing an engagement.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.capabilities} id="capabilities" aria-labelledby="capabilities-title">
          <div className="page-width">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.eyebrow}><span /> Four connected capability pillars</p>
                <h2 id="capabilities-title">A range of disciplines.<br /><em>One considered approach.</em></h2>
              </div>
              <p>Some challenges call for a focused intervention. Others call for multiple disciplines to work together.</p>
            </div>
            <div className={styles.pillarGrid}>
              {pillars.map((pillar) => (
                <article className={styles.pillar} id={pillar.id} key={pillar.number}>
                  <div className={styles.pillarTop}>
                    <span className={styles.pillarNumber}>{pillar.number} <i /></span>
                    <span className={styles.pillarIcon}><Icon name={pillar.icon} /></span>
                  </div>
                  <h3>{pillar.title.split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h3>
                  <p className={styles.pillarIntro}>{pillar.introduction}</p>
                  <p className={styles.listLabel}>CAPABILITY AREAS</p>
                  <ul>{pillar.capabilities.map((capability) => <li key={capability}><span aria-hidden="true" />{capability}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.integration} aria-labelledby="integration-title">
          <div className={`page-width ${styles.integrationGrid}`}>
            <div className={styles.integrationCopy}>
              <p className={styles.eyebrow}><span /> Connected disciplines</p>
              <h2 id="integration-title">Complex problems<br />rarely fit <em>one category.</em></h2>
              <p>
                A business challenge may involve software, data, infrastructure and the way people work. We consider the whole context, then bring relevant capabilities together around the problem.
              </p>
              <p className={styles.integrationNote}>The combination is shaped by the challenge, not by a fixed package.</p>
            </div>
            <div className={styles.convergence} aria-label="Four capability areas brought together around a shared challenge">
              <span className={styles.convergenceLabel}>A SHARED CHALLENGE</span>
              <div className={styles.convergenceCore}><span>THE<br />PROBLEM</span></div>
              <span className={`${styles.convergenceTag} ${styles.tagOne}`}><Icon name="code" /> Software</span>
              <span className={`${styles.convergenceTag} ${styles.tagTwo}`}><Icon name="spark" /> Intelligence</span>
              <span className={`${styles.convergenceTag} ${styles.tagThree}`}><Icon name="cloud" /> Infrastructure</span>
              <span className={`${styles.convergenceTag} ${styles.tagFour}`}><Icon name="compass" /> Engineering</span>
              <span className={styles.convergenceFoot}>DISCIPLINES IN RELATION</span>
            </div>
          </div>
        </section>

        <section className={styles.approach} aria-labelledby="approach-title">
          <div className="page-width">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.eyebrow}><span /> From first question to continued progress</p>
                <h2 id="approach-title">Understand. Explore. Engineer.<br /><em>Deliver. Evolve.</em></h2>
              </div>
              <p>A clear sequence keeps the work grounded in the problem and open to what is learned along the way.</p>
            </div>
            <ol className={styles.stageList}>
              {stages.map((stage) => (
                <li key={stage.number}>
                  <span className={styles.stageNumber}>{stage.number}</span>
                  <span className={styles.stageRule} aria-hidden="true" />
                  <h3>{stage.name}</h3>
                  <p>{stage.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.contact} id="engagement" aria-labelledby="contact-title">
          <div className={`page-width ${styles.contactInner}`}>
            <div>
              <p className={styles.eyebrow}><span /> Start with the challenge</p>
              <h2 id="contact-title">Bring us the question.<br /><em>We can explore the next step.</em></h2>
              <p>Tell us what you are working through. We will discuss the context, the relevant capabilities and a realistic way forward.</p>
            </div>
            <Link href="/#contact" className={styles.contactLink}>Discuss a challenge <Icon name="arrow" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
