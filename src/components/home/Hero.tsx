import Icon from "@/components/ui/Icon";
import Image from "next/image";
import { publicAssetPath } from "@/lib/publicAssetPath";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner page-width">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" />Technology built for what&apos;s next</p>
          <h1 id="hero-title">Engineering<br /><span>Beyond the</span><br /><em>Expected.</em></h1>
          <p className="hero-description">We design and build intelligent digital solutions that help businesses operate smarter, innovate faster and embrace the future.</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#solutions">Explore Our Solutions <Icon name="arrow" /></a>
            <a className="button button--text" href="#contact">Discuss a Project <span className="button-arrow"><Icon name="arrow" /></span></a>
          </div>
          <div className="hero-note"><span className="status-dot" /><span>Zimbabwe <b>·</b> Building for a connected world</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract illustration of connected technology systems">
          <div className="art-orbit art-orbit--one" /><div className="art-orbit art-orbit--two" /><div className="art-orbit art-orbit--three" />
          <div className="art-core"><span className="core-ring" /><Image className="core-emblem" src={publicAssetPath("/brand/synexis-dragon-emblem.webp")} alt="" width={68} height={71} /></div>
          <div className="art-node art-node--top"><span className="node-icon"><Icon name="spark" /></span><span className="node-line" /></div>
          <div className="art-node art-node--right"><span className="node-icon"><Icon name="systems" /></span><span className="node-line" /></div>
          <div className="art-node art-node--left"><span className="node-icon"><Icon name="code" /></span><span className="node-line" /></div>
          <div className="art-node art-node--bottom"><span className="node-icon"><Icon name="network" /></span><span className="node-line" /></div>
          <span className="art-caption art-caption--top">INTELLIGENT SYSTEMS <i /></span>
          <span className="art-caption art-caption--bottom"><i /> BUILT TO CONNECT</span>
          <span className="art-cross art-cross--one">+</span><span className="art-cross art-cross--two">+</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span />Scroll to explore</a>
    </section>
  );
}
