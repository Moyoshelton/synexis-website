import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import styles from "./projects.module.css";

const proprietaryProducts = [
  {
    number: "01",
    name: "Vitruvian",
    category: "Business Operating Platform",
    description:
      "A modular business operating platform designed to bring business operations, workflows and management into one configurable environment.",
    icon: "layers" as const,
    identity: "vitruvian",
    visualLabel: "OPERATIONS · IN RELATION",
  },
  {
    number: "02",
    name: "Helios Ops",
    category: "Solar Operations & CRM Platform",
    description:
      "A dedicated operations platform for solar businesses, connecting customer management, projects, installations, teams, inventory and operational workflows.",
    icon: "sun" as const,
    identity: "helios",
    visualLabel: "CUSTOMERS · PROJECTS · INSTALLATIONS",
  },
  {
    number: "03",
    name: "HomeBridge",
    category: "Student Accommodation & Rental Coordination Platform",
    description:
      "A Zimbabwe-first student accommodation marketplace in development, connecting students searching for housing with landlords offering accommodation.",
    icon: "home" as const,
    identity: "homebridge",
    visualLabel: "STUDENTS · ACCOMMODATION",
  },
];

const developedSolutions = [
  {
    number: "04",
    name: "Ledger",
    category: "Loan Management System",
    description:
      "A digital loan management solution designed to organise lending records, repayment schedules, interest calculations and financial tracking.",
    icon: "systems" as const,
    identity: "ledger",
    visualLabel: "RECORDS · SCHEDULES · TRACKING",
  },
  {
    number: "05",
    name: "Viv's Health Pot",
    category: "Agriculture & Poultry Management",
    description:
      "A digital solution exploring the management of poultry and horticultural operations.",
    icon: "layers" as const,
    identity: "healthPot",
    visualLabel: "POULTRY · HORTICULTURE",
  },
  {
    number: "06",
    name: "MeritMatrix",
    category: "School Management System",
    description:
      "A digital school management platform designed to support administrative and operational activities within primary and secondary educational institutions.",
    icon: "network" as const,
    identity: "meritMatrix",
    visualLabel: "SCHOOL · ADMINISTRATION",
  },
];

type Project = (typeof proprietaryProducts)[number] | (typeof developedSolutions)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.projectCard}>
      <div className={`${styles.projectVisual} ${styles[project.identity]}`} aria-hidden="true">
        <span className={styles.visualIndex}>{project.number} / PROJECT</span>
        <span className={styles.visualOrbit}><i /><i /><i /></span>
        <span className={styles.visualCore}><Icon name={project.icon} /></span>
        <span className={styles.visualLabel}>{project.visualLabel}</span>
      </div>
      <div className={styles.projectDetails}>
        <p className={styles.projectCategory}>{project.category}</p>
        <h3>{project.name}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
      </div>
      <span className={styles.cardRule} aria-hidden="true" />
    </article>
  );
}

function PortfolioSection({
  id,
  eyebrow,
  title,
  description,
  projects,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  projects: Project[];
}) {
  return (
    <section className={styles.portfolioSection} id={id} aria-labelledby={`${id}-title`}>
      <div className="page-width">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}><span /> {eyebrow}</p>
            <h2 id={`${id}-title`}>{title}</h2>
          </div>
          <p>{description}</p>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="projects-title">
          <div className={`page-width ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span /> Our work</p>
              <h1 id="projects-title">Ideas engineered<br /><em>into solutions.</em></h1>
              <p className={styles.heroLead}>
                Across business operations, renewable energy, education, agriculture and digital marketplaces, we explore challenges and build technology designed to make a difference.
              </p>
              <Link className={styles.heroLink} href="#portfolio">Explore selected work <span aria-hidden="true">&#8595;</span></Link>
            </div>
            <div className={styles.heroVisual} aria-hidden="true">
              <span className={styles.visualTopline}>THOUGHT · ENGINEERING · POSSIBILITY</span>
              <span className={styles.heroOrbit}><i /><i /><i /></span>
              <span className={styles.heroCore}><Icon name="compass" /><span>IDEAS<br />IN MOTION</span></span>
              <span className={`${styles.heroNode} ${styles.heroNodeOne}`}>QUESTION</span>
              <span className={`${styles.heroNode} ${styles.heroNodeTwo}`}>EXPLORE</span>
              <span className={`${styles.heroNode} ${styles.heroNodeThree}`}>ENGINEER</span>
              <span className={styles.visualBottomline}>PRACTICAL NEEDS · DISTINCT SOLUTIONS</span>
            </div>
          </div>
          <div className={styles.heroMeta} aria-hidden="true"><span>Synexis Technologies</span><span>Selected products and developed solutions</span><span>01 — 06</span></div>
        </section>

        <div id="portfolio">
          <PortfolioSection
            id="proprietary-products"
            eyebrow="Section A / Proprietary products"
            title="Built within Synexis."
            description="Three proprietary products shaped around distinct operational challenges and areas of opportunity."
            projects={proprietaryProducts}
          />
          <PortfolioSection
            id="developed-solutions"
            eyebrow="Section B / Other developed solutions"
            title="Technology for varied contexts."
            description="A separate group of developed digital solutions spanning finance, agriculture and education."
            projects={developedSolutions}
          />
        </div>

        <section className={styles.closing} aria-labelledby="closing-title">
          <div className={`page-width ${styles.closingInner}`}>
            <div>
              <p className={styles.eyebrow}><span /> Start with the challenge</p>
              <h2 id="closing-title">Have a challenge<br /><em>worth solving?</em></h2>
              <p>We&apos;re interested in ideas that challenge conventional thinking and create opportunities for meaningful innovation.</p>
            </div>
            <Link className={styles.closingLink} href="/contact">Start a conversation <Icon name="arrow" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
