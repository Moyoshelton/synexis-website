import Icon from "@/components/ui/Icon";
import Link from "next/link";

const audiences = ["Businesses", "Government institutions", "Corporate organisations", "International partners", "Technology collaborators"];

export default function PartnershipCTA() {
  return (
    <section className="partnership section-pad" id="contact">
      <div className="page-width partnership-panel">
        <div className="partnership-glow" aria-hidden="true" />
        <div className="partnership-copy"><p className="eyebrow"><span className="eyebrow-mark" /> Let&apos;s build what&apos;s next</p><h2>Have a challenge<br />worth <em>solving?</em></h2><p>We welcome conversations with organisations looking for a thoughtful technology partner—across Zimbabwe and beyond.</p><Link className="button button--light" href="/contact">Start a conversation <Icon name="arrow" /></Link></div>
        <div className="partnership-side"><p className="partnership-side__title">We&apos;re open to working with</p><ul>{audiences.map((audience) => <li key={audience}><span><Icon name="check" /></span>{audience}</li>)}</ul><div className="partnership-side__ornament"><span /><span /><span /><span /><span /></div></div>
      </div>
    </section>
  );
}
