import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import styles from "./solutions.module.css";

const products = [
  {
    id: "vitruvian",
    number: "01",
    name: "VITRUVIAN",
    category: "Business Operating Platform",
    description:
      "A modular business operating platform designed to bring business operations, workflows and management into one configurable environment.",
    icon: "layers" as const,
    themes: ["Business operations", "Workflow management", "Modular architecture", "Configurable business systems"],
    visualLabel: "A CONFIGURABLE OPERATING ENVIRONMENT",
    visualType: "modules",
  },
  {
    id: "helios-ops",
    number: "02",
    name: "HELIOS OPS",
    category: "Solar Operations & CRM Platform",
    description:
      "A dedicated operations platform for solar businesses, connecting customer management, projects, installations, teams and operational workflows.",
    icon: "sun" as const,
    themes: ["Customer and project management", "Solar installation workflows", "Team and inventory management", "Operational visibility"],
    note: "A foundation for future solar intelligence capabilities.",
    visualLabel: "CUSTOMERS · PROJECTS · INSTALLATIONS",
    visualType: "solar",
  },
  {
    id: "homebridge",
    number: "03",
    name: "HOMEBRIDGE",
    category: "Student Accommodation & Rental Coordination Platform",
    description:
      "A Zimbabwe-first student accommodation marketplace in development, connecting students searching for housing with landlords offering accommodation.",
    icon: "home" as const,
    themes: ["Student accommodation discovery", "Landlord property management", "Student applications and viewing coordination", "Tenancy offers and acceptance", "Student and landlord dashboards"],
    visualLabel: "STUDENTS ↔ ACCOMMODATION",
    visualType: "homebridge",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="solutions-title">
          <div className={`page-width ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span /> Proprietary products in development</p>
              <h1 id="solutions-title">Technology built to<br /><em>solve real problems.</em></h1>
              <p className={styles.heroLead}>
                From business operations to renewable energy and accommodation, Synexis develops technology platforms designed to address practical challenges and unlock new possibilities.
              </p>
              <p className={styles.heroNote}>A portfolio of independently developed products.</p>
              <Link className={styles.heroLink} href="#portfolio">Explore the portfolio <span aria-hidden="true">&#8595;</span></Link>
            </div>
            <div className={styles.heroVisual} aria-hidden="true">
              <span className={styles.visualLabel}>A PORTFOLIO OF IDEAS, ENGINEERED</span>
              <div className={styles.visualOrbit}><i /><i /><i /></div>
              <div className={styles.visualCore}><Icon name="systems" /><span>PRODUCT<br />SYSTEMS</span></div>
              <span className={`${styles.visualNode} ${styles.visualNodeOne}`}><Icon name="layers" /><small>BUSINESS</small></span>
              <span className={`${styles.visualNode} ${styles.visualNodeTwo}`}><Icon name="sun" /><small>ENERGY</small></span>
              <span className={`${styles.visualNode} ${styles.visualNodeThree}`}><Icon name="home" /><small>HOUSING</small></span>
              <span className={styles.visualCaption}>PRACTICAL NEEDS · DISTINCT PLATFORMS</span>
            </div>
          </div>
          <div className={styles.heroMeta} aria-hidden="true"><span>Synexis Technologies</span><span>Products shaped around real-world challenges</span><span>01 — 03</span></div>
        </section>

        <section className={styles.portfolio} id="portfolio" aria-labelledby="portfolio-title">
          <div className="page-width">
            <div className={styles.portfolioHeading}>
              <div>
                <p className={styles.eyebrow}><span /> Three platforms, distinct contexts</p>
                <h2 id="portfolio-title">Ideas take shape<br /><em>in different environments.</em></h2>
              </div>
              <p>Each product starts with a particular operational need. Together, they reflect Synexis’ interest in building useful technology across industries.</p>
            </div>

            <div className={styles.productList}>
              {products.map((product, index) => (
                <article className={`${styles.product} ${index % 2 === 1 ? styles.productReverse : ""}`} id={product.id} key={product.id}>
                  <div className={`${styles.productVisual} ${styles[product.visualType]}`} aria-hidden="true">
                    <div className={styles.visualTopline}><span>{product.number} / PRODUCT SYSTEM</span><Icon name={product.icon} /></div>
                    <div className={styles.diagram}>
                      {product.visualType === "modules" && (
                        <div className={styles.moduleDiagram}>
                          <div className={styles.moduleCenter}><Icon name="systems" /><span>OPERATIONS</span></div>
                          <span>WORKFLOWS</span><span>MANAGEMENT</span><span>INTEGRATIONS</span><span>INSIGHT</span>
                        </div>
                      )}
                      {product.visualType === "solar" && (
                        <div className={styles.solarDiagram}>
                          <div className={styles.sunCore}><Icon name="sun" /></div>
                          <i /><i /><i />
                          <span className={styles.solarLabelOne}>CUSTOMER</span><span className={styles.solarLabelTwo}>PROJECT</span><span className={styles.solarLabelThree}>INSTALL</span>
                        </div>
                      )}
                      {product.visualType === "homebridge" && (
                        <div className={styles.bridgeDiagram}>
                          <div className={styles.bridgeSide}><Icon name="spark" /><span>STUDENT</span></div>
                          <div className={styles.bridgeLink}><i /><i /><i /><i /></div>
                          <div className={styles.bridgeSide}><Icon name="home" /><span>LANDLORD</span></div>
                          <small>DISCOVER · APPLY · COORDINATE</small>
                        </div>
                      )}
                    </div>
                    <span className={styles.visualBottomline}>{product.visualLabel}</span>
                  </div>
                  <div className={styles.productCopy}>
                    <p className={styles.productIndex}><span>{product.number}</span><i /> SYNEXIS PRODUCT</p>
                    <p className={styles.productCategory}>{product.category}</p>
                    <h3>{product.name}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                    <p className={styles.capabilityLabel}>PLATFORM FOCUS</p>
                    <ul className={styles.focusList}>
                      {product.themes.map((theme) => <li key={theme}><span aria-hidden="true" />{theme}</li>)}
                    </ul>
                    {product.note && <p className={styles.productNote}>{product.note}</p>}
                  </div>
                </article>
              ))}
            </div>
            <p className={styles.developmentNote}><span /> Product capabilities and availability evolve as development progresses.</p>
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <div className={`page-width ${styles.closingInner}`}>
            <div>
              <p className={styles.eyebrow}><span /> Made with purpose</p>
              <h2 id="closing-title">Built around<br /><em>real-world challenges.</em></h2>
              <p>We believe meaningful innovation begins with understanding a problem and having the ambition to engineer a better way forward.</p>
            </div>
            <Link href="/#contact" className={styles.closingLink}>Start a conversation <Icon name="arrow" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
