import Icon from "@/components/ui/Icon";
import Image from "next/image";
import { publicAssetPath } from "@/lib/publicAssetPath";
import Link from "next/link";

const mainLinks: Array<[string, string]> = [
  ["Home", "/#home"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Projects", "/projects"],
];
const productLinks: Array<[string, string]> = [
  ["VITRUVIAN", "/#vitruvian"],
  ["HELIOS OPS", "/#helios"],
  ["HOMEBRIDGE", "/#homebridge"],
];
const serviceLinks: Array<[string, string]> = [
  ["Software & digital systems", "/services#software-digital-systems"],
  ["AI & intelligent automation", "/services#ai-automation"],
  ["Cloud & infrastructure", "/services#cloud-infrastructure"],
  ["Research & innovation", "/services#research-innovation"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="footer-main">
          <div className="footer-brand-col">
            <Link className="footer-logo-link" href="/" aria-label="Synexis Technologies home">
              <Image className="footer-emblem" src={publicAssetPath("/brand/synexis-dragon-emblem.webp")} alt="" width={48} height={50} />
              <span className="footer-brand-copy">
                <span className="footer-wordmark">SYNEXIS<span>TECHNOLOGIES</span></span>
                <span className="footer-tagline">Beyond the Expected.</span>
              </span>
            </Link>
            <p className="footer-location">Zimbabwe <b>·</b> Connected to the world</p>
          </div>
          <nav className="footer-column footer-explore" aria-label="Company navigation">
            <h2>Explore</h2>
            {mainLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </nav>
          <nav className="footer-column footer-services" aria-label="Services">
            <h2>Services</h2>
            {serviceLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </nav>
          <nav className="footer-column footer-products" aria-label="Products">
            <h2>Our products</h2>
            {productLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </nav>
          <div className="footer-contact">
            <p>Have something in mind?</p>
            <Link href="/contact">Let&apos;s talk <Icon name="arrow" /></Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Synexis Technologies. All rights reserved.</span>
          <Link href="/#home" className="back-top">Back to top <span>↑</span></Link>
        </div>
      </div>
    </footer>
  );
}
