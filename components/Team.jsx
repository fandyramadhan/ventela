export default function Team() {
  const shoes = [
    {
      name: "Ventela Public Low",
      category: "Low Cut Canvas",
      image: "/assets/ventela-assets/collection/collection-1.jpeg",
    },
    {
      name: "Ventela Photez High",
      category: "High Cut Canvas",
      image: "/assets/ventela-assets/collection/collection-2.jpeg",
    },
    {
      name: "Ventela V-22",
      category: "Premium Leather",
      image: "/assets/ventela-assets/collection/collection-3.jpeg",
    },
    {
      name: "Ventela Republic",
      category: "Vulcanized Classic",
      image: "/assets/ventela-assets/collection/collection-4.jpeg",
    },
    {
      name: "Ventela Slip-On",
      category: "Slip-On Canvas",
      image: "/assets/ventela-assets/collection/collection-5.jpeg",
    },
    {
      name: "Ventela Suede Low",
      category: "Suede Low Cut",
      image: "/assets/ventela-assets/collection/collection-6.webp",
    },
  ];

  return (
    <section className="section py-150 black">
      <div className="master-scroll">
        <div className="images-scroll-block">
          {/* Grid background, pinned (sticky) for the whole scroll like the title. */}
          <div className="team-grid-sticky" aria-hidden="true">
            <img
              src="/assets/ventela-assets/grid-ventela.webp"
              loading="lazy"
              alt=""
              className="team-grid-image"
            />
          </div>
          <div className="text-master-scroll-center">
            <div className="wrapper-header-our-work">
              <div
                data-wf--tag-section--variant="white"
                data-wf-component-id="fc824446-05af-a8c5-c45c-861c814618e5"
                data-wf-variant-state="3166fbc8-0483-b967-9edf-440204dfadc7"
                className="tag-section w-variant-3166fbc8-0483-b967-9edf-440204dfadc7">
                <div>Collection</div>
              </div>
              <div role="heading" aria-level={2} className="title-section text-center text-white team">
                WEAR LOCAL,
                <span className="text-mint">WALK LOUDER</span>, PAY SMARTER
              </div>
            </div>
          </div>
          <div className="master-scroll-images">
            {shoes.map((shoe, i) => (
              <div
                className={`team-card-wrap${i % 2 === 1 ? " align-right" : ""}`}
                key={shoe.name}>
                <div className="team-card">
                  <div className="team-card-image-wrap">
                    <img
                      src={shoe.image}
                      loading="lazy"
                      width="337.875"
                      height="344.25"
                      alt={shoe.name}
                      className="team-card-image"
                    />
                  </div>
                  <div className="team-card-text">
                    <div className="paragraph-large text-black font-medium">
                      {shoe.name}
                    </div>
                    <div className="paragraph-small">{shoe.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
