import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  { id: "custom-software", number: "01", icon: "code" as const, title: "Custom Software Development", text: "Purpose-built software designed around your workflows, users and business goals." },
  { id: "automation", number: "02", icon: "spark" as const, title: "Artificial Intelligence & Automation", text: "Apply intelligent tools and automation to reduce friction and create new possibilities." },
  { id: "business-systems", number: "03", icon: "systems" as const, title: "Business Systems & Digital Transformation", text: "Connect the systems, processes and information that move your organisation forward." },
  { id: "cloud-infrastructure", number: "04", icon: "cloud" as const, title: "Cloud & Infrastructure Solutions", text: "Build a reliable, considered foundation for the services your organisation depends on." },
  { id: "technology-consulting", number: "05", icon: "compass" as const, title: "Technology Consulting", text: "Make confident technology decisions with clear, independent technical guidance." },
];

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="page-width">
        <div className="section-topline"><SectionHeading eyebrow="What we do" title="Capability for every next step." description="From the first conversation to long-term evolution, we bring the right expertise to your most important technology challenges." /><span className="section-index">01 / 04</span></div>
        <div className="service-grid">{services.map((service) => (
          <article className="service-card" id={service.id} key={service.number}>
            <div className="service-card__top"><span className="service-icon"><Icon name={service.icon} /></span><span className="service-number">{service.number}</span></div>
            <h3>{service.title}</h3><p>{service.text}</p>
            <span className="service-card__line" aria-hidden="true" />
          </article>
        ))}</div>
      </div>
    </section>
  );
}
