import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import styles from "./about.module.css";

const principles = [
  { number: "01", name: "Intellectual Independence", description: "Think independently. Question assumptions. Never outsource curiosity." },
  { number: "02", name: "Exploration", description: "Explore beyond conventional boundaries, disciplines and established ways of thinking." },
  { number: "03", name: "Creation", description: "Transform ideas, knowledge and imagination into tangible solutions." },
  { number: "04", name: "Nonconformity", description: "Challenge conventional limitations and pursue better alternatives through independent thinking and disciplined execution." },
  { number: "05", name: "Human Impact", description: "Ensure intellectual achievement translates into meaningful improvements in people\u2019s lives." },
];

const approach = [
  "Question established assumptions.",
  "Explore possibilities across disciplines.",
  "Turn knowledge into creation.",
  "Engineer practical solutions.",
  "Pursue meaningful human impact.",
];

const ambitions = [
  "Develop proprietary intellectual property.",
  "Build original technology products.",
  "Explore different technology-driven industries.",
  "Attract talented and independent thinkers.",
  "Conduct research and experimentation.",
  "Create solutions that positively affect businesses and communities.",
];

const products = [
  {
    id: "vitruvian",
    number: "01",
    name: "VITRUVIAN",
    category: "Business Operating Platform",
    description: "A modular business operating platform designed to help organisations manage and coordinate their business operations.",
    icon: "layers" as const,
  },
  {
    id: "helios",
    number: "02",
    name: "HELIOS OPS",
    category: "Solar Operations and CRM Platform",
    description: "A specialised platform designed for solar businesses to manage customers, projects, installations and operational workflows.",
    icon: "sun" as const,
  },
  {
    id: "homebridge",
    number: "03",
    name: "HOMEBRIDGE",
    category: "Student Accommodation & Rental Coordination Platform",
    description: "A Zimbabwe-first student accommodation marketplace in development, connecting students searching for housing with landlords offering accommodation.",
    icon: "home" as const,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="about-title">
          <div className={`page-width ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span /> The thinking behind Synexis</p>
              <h1 id="about-title">Built on Independent Thinking.<br /><em>Driven by Possibility.</em></h1>
              <p className={styles.heroLead}>Synexis Technologies is the vessel through which this philosophy takes form.</p>
              <a className={styles.scrollLink} href="#philosophy">Read our founding philosophy <span>&#8595;</span></a>
            </div>
            <div className={styles.heroVisual} aria-hidden="true">
              <span className={styles.heroVisualIndex}>ORIGIN / 01</span>
              <span className={styles.heroOrbit} />
              <Image className={styles.heroDragon} src="/brand/synexis-dragon-emblem.webp" alt="" width={300} height={314} priority />
              <span className={styles.heroVisualCaption}>INDEPENDENCE &middot; EXPLORATION &middot; CREATION</span>
            </div>
          </div>
          <div className={styles.heroFooter} aria-hidden="true"><span>Zimbabwe</span><span>Intellectual ambition, made tangible</span><span>01 &mdash; 05</span></div>
        </section>

        <section className={styles.philosophy} id="philosophy" aria-labelledby="philosophy-title">
          <div className={`page-width ${styles.philosophyGrid}`}>
            <aside className={styles.sectionMarker}>
              <span>01 / THE FOUNDATION</span>
              <i />
              <p>Ideas are a beginning.<br />Creation is the commitment.</p>
            </aside>
            <article className={styles.philosophyBody}>
              <p className={styles.eyebrow}><span /> Founding philosophy</p>
              <h2 id="philosophy-title">A company shaped by<br /><em>the freedom to think.</em></h2>
              <p>Synexis Technologies was born from a conviction that innovation begins with the freedom to think independently.</p>
              <p>Its foundation is rooted in intellectual curiosity, self-determination and the belief that meaningful progress comes from questioning established boundaries rather than accepting them unquestioningly.</p>
              <p>We believe that ideas should not remain confined to imagination. They should be explored, challenged, engineered and transformed into solutions that make a tangible difference.</p>
              <p>Our approach is not limited to a single discipline or industry. We embrace the intersection of technology, engineering, creativity and intelligent thinking to explore possibilities and develop solutions to real-world challenges.</p>
              <p>We are driven by the desire to build, to experiment, to challenge conventional approaches and to create things that have lasting value.</p>
              <p>For us, technology is more than a commercial pursuit. It is a medium through which knowledge becomes creation, creativity becomes innovation and innovation becomes meaningful human impact.</p>
              <blockquote>Synexis Technologies is the vessel through which this philosophy takes form.</blockquote>
              <p className={styles.closingLine}>We exist to explore what is possible, engineer what is necessary and create what comes next.</p>
              <span className={styles.signature}>Beyond the Expected.</span>
            </article>
          </div>
        </section>

        <section className={styles.principles} id="principles" aria-labelledby="principles-title">
          <div className="page-width">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}><span /> The foundation beneath the work</p>
              <h2 id="principles-title">Five principles.<br /><em>One independent mind.</em></h2>
              <p>These are not statements for display. They are the intellectual ground from which Synexis is intended to grow.</p>
            </div>
            <ol className={styles.principleList}>
              {principles.map((principle) => (
                <li className={styles.principle} key={principle.number}>
                  <span className={styles.principleNumber}>{principle.number}</span>
                  <h3>{principle.name}</h3>
                  <p>{principle.description}</p>
                  <span className={styles.principleMark} aria-hidden="true">&#8599;</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.approach} id="approach" aria-labelledby="approach-title">
          <div className={`page-width ${styles.approachGrid}`}>
            <div className={styles.approachIntro}>
              <p className={styles.eyebrow}><span /> How we think and work</p>
              <h2 id="approach-title">From question<br />to <em>consequence.</em></h2>
              <p>Curiosity matters when it moves. Our way of working carries an idea from inquiry toward practical creation and human impact.</p>
            </div>
            <ol className={styles.approachSteps}>
              {approach.map((step, index) => (
                <li key={step}><span>0{index + 1}</span><p>{step}</p><Icon name="arrow" /></li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.vision} id="vision" aria-labelledby="vision-title">
          <div className={`page-width ${styles.visionGrid}`}>
            <div className={styles.visionHeading}>
              <p className={styles.eyebrow}><span /> Long-term direction</p>
              <h2 id="vision-title">A broader horizon.<br /><em>A continuing ambition.</em></h2>
              <p>We intend Synexis to grow into more than a conventional software agency: a wider technology and innovation institution, built over time through disciplined exploration and creation.</p>
              <p className={styles.visionQualifier}>These are ambitions that guide our direction, not claims of work already completed.</p>
            </div>
            <div className={styles.ambitionPanel}>
              <p className={styles.ambitionLabel}>What we aspire to build toward</p>
              <ul>{ambitions.map((ambition, index) => <li key={ambition}><span>0{index + 1}</span>{ambition}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className={styles.ecosystem} id="ecosystem" aria-labelledby="ecosystem-title">
          <div className="page-width">
            <div className={styles.ecosystemHeading}>
              <div><p className={styles.eyebrow}><span /> Our product ecosystem</p><h2 id="ecosystem-title">One philosophy.<br /><em>Different expressions.</em></h2></div>
              <p>Our proprietary products carry this way of thinking into different contexts. Each begins with a distinct challenge; each is an expression of the desire to turn ideas into useful systems.</p>
            </div>
            <div className={styles.productList}>
              {products.map((product) => (
                <article className={styles.product} key={product.id}>
                  <span className={styles.productNumber}>{product.number}</span>
                  <span className={styles.productIcon}><Icon name={product.icon} /></span>
                  <div className={styles.productInfo}><p>{product.category}</p><h3>{product.name}</h3></div>
                  <p className={styles.productDescription}>{product.description}</p>
                  <Link href={`/#${product.id}`} aria-label={`Explore ${product.name} on the homepage`}><Icon name="arrow" /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <div className="page-width">
            <p className={styles.eyebrow}><span /> Synexis Technologies</p>
            <h2 id="closing-title">Explore what is possible.<br /><em>Create what comes next.</em></h2>
            <Link href="/#contact" className={styles.closingLink}>Start a conversation <Icon name="arrow" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
