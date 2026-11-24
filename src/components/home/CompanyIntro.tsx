import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

const themes = ["Innovation with intention", "Engineering that delivers", "Partnership for the long term"];

export default function CompanyIntro() {
  return (
    <section className="intro section-pad" id="about">
      <div className="page-width intro-grid">
        <div className="intro-main">
          <SectionHeading eyebrow="Who we are" title="Technology with purpose. Engineering with perspective." />
          <p className="intro-copy">Synexis Technologies is a technology and software engineering company helping businesses and institutions turn complex challenges into practical digital solutions.</p>
          <p className="intro-copy intro-copy--muted">We bring together thoughtful engineering, intelligent technology and a clear understanding of how organisations work. The result is a trusted partner for progress—today and over the long term.</p>
          <a className="inline-link" href="#contact">Get to know Synexis <Icon name="arrow" /></a>
        </div>
        <div className="intro-aside">
          <div className="intro-orbit" aria-hidden="true"><span /><span /><span /><span /><div><Icon name="network" /></div></div>
          <p className="aside-kicker">Our focus</p>
          <ul>{themes.map((theme) => <li key={theme}><span><Icon name="check" /></span>{theme}</li>)}</ul>
          <span className="aside-index">01 <i /> 03</span>
        </div>
      </div>
    </section>
  );
}
