import Icon from "@/components/ui/Icon";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const products = [
  { id: "vitruvian", solutionId: "vitruvian", number: "01", name: "VITRUVIAN", linkName: "Vitruvian", category: "Business Operating Platform", description: "A modular business operating platform designed to help organisations manage and coordinate their business operations.", icon: "layers" as const, mark: "V", label: "OPERATIONS, IN SYNC" },
  { id: "helios", solutionId: "helios-ops", number: "02", name: "HELIOS OPS", linkName: "Helios Ops", category: "Solar Operations & CRM Platform", description: "A specialised platform designed for solar businesses to manage customers, projects, installations and operational workflows.", icon: "sun" as const, mark: "H", label: "POWERING EVERY PROJECT" },
  { id: "homebridge", solutionId: "homebridge", number: "03", name: "HOMEBRIDGE", linkName: "HomeBridge", category: "Student Accommodation & Rental Coordination Platform", description: "A Zimbabwe-first student accommodation marketplace in development, connecting students searching for housing with landlords offering accommodation.", icon: "home" as const, mark: "H", label: "A MORE CONNECTED FUTURE" },
];

export default function FeaturedProducts() {
  return (
    <section className="products section-pad" id="solutions">
      <div className="page-width">
        <div className="section-topline"><SectionHeading eyebrow="Our solutions" title="Made by Synexis. Built to move business forward." description="A growing portfolio of proprietary platforms, designed to solve meaningful operational challenges." /><span className="section-index">02 / 04</span></div>
        <span className="anchor-target" id="projects" aria-hidden="true" />
        <div className="product-grid">{products.map((product) => (
          <article className={`product-card product-card--${product.id}`} id={product.id} key={product.id}>
            <div className="product-visual"><div className="product-visual__mesh" /><span className="product-mark">{product.mark}</span><span className="product-visual__icon"><Icon name={product.icon} /></span><span className="product-visual__label">{product.label}</span><span className="product-number">{product.number}</span></div>
            <div className="product-details"><p className="product-category">{product.category}</p><h3>{product.name}</h3><p className="product-description">{product.description}</p><Link href={`/solutions#${product.solutionId}`} className="product-link" aria-label={`Explore ${product.linkName}`}><span aria-hidden="true">Explore {product.linkName}</span><Icon name="arrow" /></Link></div>
          </article>
        ))}</div>
        <p className="product-footnote"><span className="status-dot" /> More solutions are taking shape.</p>
      </div>
    </section>
  );
}
