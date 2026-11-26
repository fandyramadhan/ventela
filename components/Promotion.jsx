export default function Promotion() {
  return (
    <section id="promotion" className="promo-section">
      <img
        src="/assets/ventela-assets/img-promotion.webp"
        loading="lazy"
        alt=""
        className="promo-image"
      />
      <div className="promo-content">
        {/* Inner wrapper is what slides up from below (revealed on scroll). */}
        <div className="promo-content-inner">
          <h2 className="promo-title">
            Insane Price.
            <br />
            Same Quality.
          </h2>
          <p className="promo-desc">
            Your favorite local kicks are now at a price that shouldn&apos;t be
            real. But it is. But only today.
          </p>
          <a
            data-wf--button-primary--variant="base"
            data-wf-component-id="b2b81b9c-c543-191e-71a5-465a72836c0f"
            data-wf-variant-state="base"
            href="#footer"
            className="button-primary w-inline-block">
            <div>Claim the Deal</div>
            <div className="button-arrow-wrap">
              <img
                src="/assets/69f188de1bd6afbe8c3d081c_Frame_1.svg"
                loading="lazy"
                alt=""
                className="arrow-black-icon relative"
              />
              <img
                src="/assets/69f188de1bd6afbe8c3d081c_Frame_1.svg"
                loading="lazy"
                alt=""
                className="arrow-black-icon absolute"
              />
              <img
                loading="lazy"
                src="/assets/69edbd6066b79a6cd8c49dbb_Frame.svg"
                alt=""
                className="arrow-white-icon relative"
              />
              <img
                loading="lazy"
                src="/assets/69edbd6066b79a6cd8c49dbb_Frame.svg"
                alt=""
                className="arrow-white-icon absolute"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
