import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  { icon: "code" as const, title: "Engineering Excellence", text: "We value clarity, craft and care at every stage of the engineering process." },
  { icon: "spark" as const, title: "Practical Innovation", text: "We focus innovation on real needs, useful outcomes and lasting value." },
  { icon: "systems" as const, title: "Adaptable Solutions", text: "We design with change in mind, so systems can evolve as your organisation does." },
  { icon: "network" as const, title: "Long-Term Partnerships", text: "We build trusted relationships through open collaboration and shared ambition." },
];

export default function WhySynexis() {
  return (
    <section className="principles section-pad" id="principles">
      <div className="page-width principles-grid">
        <div className="principles-intro"><SectionHeading eyebrow="Why Synexis" title="The way forward is built together." description="Good technology starts with good questions. Our principles keep us grounded in what matters most." /><span className="principles-note"><span className="status-dot" /> Built around your next opportunity</span></div>
        <div className="principle-list">{principles.map((item, index) => (
          <article className="principle-item" key={item.title}><span className="principle-number">0{index + 1}</span><span className="principle-icon"><Icon name={item.icon} /></span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="principle-plus" aria-hidden="true">+</span></article>
        ))}</div>
      </div>
    </section>
  );
}
