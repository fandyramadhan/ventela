export default function Category() {
  const cards = [
    {
      title: "Luxury Collection",
      base: "/assets/ventela-assets/ventela-v22.webp",
      model: "/assets/ventela-assets/ventela-v22-model.webp",
    },
    {
      title: "Low Cut",
      base: "/assets/ventela-assets/ventela-republic.webp",
      model: "/assets/ventela-assets/ventela-republic-model.webp",
    },
    {
      title: "Kids",
      base: "/assets/ventela-assets/ventela-kids.webp",
      model: "/assets/ventela-assets/ventela-kids-model.webp",
    },
  ];

  return (
    <section id="about" className="section py-150 category-section">
      {/* Sticky title — the cards below scroll up and cover it (parallax). */}
      <div className="category-sticky">
        <div className="category-label">SHOP BY</div>
        <div className="category-bigtitle-wrap">
          <div className="category-bigtitle">category</div>
        </div>
      </div>

      <div className="category-cards-container">
        <div className="category-card-list">
          {cards.map((card) => (
            <div className="category-card" key={card.title}>
              <div className="category-card-media">
                <img
                  src={card.base}
                  loading="lazy"
                  alt={card.title}
                  className="category-card-img is-base"
                />
                <img
                  src={card.model}
                  loading="lazy"
                  alt={`${card.title} — worn`}
                  className="category-card-img is-model"
                />
              </div>
              <div className="category-card-title">{card.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
