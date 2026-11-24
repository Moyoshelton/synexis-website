import Icon from "@/components/ui/Icon";
import Image from "next/image";
import { publicAssetPath } from "@/lib/publicAssetPath";
import Link from "next/link";

const navigation: Array<[string, string]> = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

function Links({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      <Link href="/#home" className="nav-link">Home</Link>
      {navigation.map(([label, href]) => <Link className="nav-link" href={href} key={href}>{label}</Link>)}
      {mobile && <Link className="button button--primary mobile-talk" href="/contact">Let&apos;s Talk <Icon name="arrow" /></Link>}
    </>
  );
}

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Synexis Technologies home">
          <Image className="brand-emblem" src={publicAssetPath("/brand/synexis-dragon-emblem.webp")} alt="" width={44} height={46} preload />
          <span className="brand-name">SYNEXIS<span>TECHNOLOGIES</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation"><Links /></nav>
        <Link className="button button--small button--outline header-cta" href="/contact">Let&apos;s Talk <Icon name="arrow" /></Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><span className="menu-lines" aria-hidden="true"><i /><i /></span></summary>
          <nav className="mobile-nav" aria-label="Mobile navigation"><Links mobile /></nav>
        </details>
      </div>
    </header>
  );
}
