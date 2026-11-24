import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import InquiryForm from "./InquiryForm";
import styles from "./contact.module.css";

const conversations = [
  { number: "01", title: "Business & technology", detail: "Discuss a business challenge, a technology direction or a possible engagement." },
  { number: "02", title: "Products & platforms", detail: "Explore the intent and evolving direction behind Synexis products." },
  { number: "03", title: "Partnerships", detail: "Consider a strategic collaboration or a shared opportunity." },
  { number: "04", title: "Research & innovation", detail: "Exchange ideas about experimentation, engineering and emerging technology." },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="contact-title">
          <div className={`page-width ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span /> Start a conversation</p>
              <h1 id="contact-title">Every meaningful idea<br /><em>starts somewhere.</em></h1>
              <p className={styles.heroLead}>
                Whether you&apos;re exploring a business solution, discussing a partnership or simply have an idea worth exploring, we&apos;d like to hear from you.
              </p>
              <Link className={styles.heroLink} href="#contact-form">Tell us what&apos;s on your mind <span aria-hidden="true">&#8595;</span></Link>
            </div>
            <div className={styles.heroVisual} aria-hidden="true">
              <span className={styles.visualLabel}>IDEAS BEGIN WITH A QUESTION</span>
              <div className={styles.visualOrbit}><i /><i /><i /></div>
              <div className={styles.visualCore}><Icon name="network" /><span>OPEN<br />DIALOGUE</span></div>
              <span className={`${styles.visualNode} ${styles.visualNodeOne}`}>IDEA</span>
              <span className={`${styles.visualNode} ${styles.visualNodeTwo}`}>QUESTION</span>
              <span className={`${styles.visualNode} ${styles.visualNodeThree}`}>POSSIBILITY</span>
              <span className={styles.visualCaption}>LISTEN · EXPLORE · BUILD</span>
            </div>
          </div>
          <div className={styles.heroMeta} aria-hidden="true"><span>Synexis Technologies</span><span>Good work starts with a conversation</span><span>01 — 04</span></div>
        </section>

        <section className={styles.inquiry} id="contact-form" aria-labelledby="inquiry-title">
          <div className={`page-width ${styles.inquiryGrid}`}>
            <aside className={styles.inquiryAside}>
              <p className={styles.eyebrow}><span /> Get in touch</p>
              <h2 id="inquiry-title">Tell us where<br /><em>you want to begin.</em></h2>
              <p>Share a little about the challenge, idea or opportunity you have in mind. The more context you provide, the better we can understand the conversation you want to start.</p>
              <div className={styles.deliveryNotice}>
                <span className={styles.noticeMark} aria-hidden="true">i</span>
                <p>Form delivery is not configured yet. You can check your details here, but this form will not send a message.</p>
              </div>
              <span className={styles.asideIndex}>A GOOD FIRST STEP <i /> 01</span>
            </aside>
            <div className={styles.formPanel}>
              <div className={styles.formHeading}>
                <span>CONTACT / INQUIRY</span>
                <span>All fields marked <b>*</b> are required</span>
              </div>
              <InquiryForm />
            </div>
          </div>
        </section>

        <section className={styles.conversations} aria-labelledby="conversation-types-title">
          <div className="page-width">
            <div className={styles.conversationHeading}>
              <div>
                <p className={styles.eyebrow}><span /> What would you like to explore?</p>
                <h2 id="conversation-types-title">Different starting points.<br /><em>One open conversation.</em></h2>
              </div>
              <p>We welcome thoughtful conversations across the work Synexis is doing and the ideas still taking shape.</p>
            </div>
            <div className={styles.conversationGrid}>
              {conversations.map((item) => (
                <article className={styles.conversationCard} key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <i aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <div className={`page-width ${styles.closingInner}`}>
            <div>
              <p className={styles.eyebrow}><span /> The first step is a question</p>
              <h2 id="closing-title">Have something<br /><em>worth building?</em></h2>
              <p>Let&apos;s explore what&apos;s possible.</p>
            </div>
            <Link className={styles.closingLink} href="#contact-form">Start a conversation <Icon name="arrow" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
