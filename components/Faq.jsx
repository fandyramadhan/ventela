export default function Faq() {
  const faqs = [
    {
      q: "What makes Ventela different?",
      a: "Ventela is a local footwear brand from Bandung, Indonesia, crafting premium vulcanized shoes with high-quality materials at honest, accessible prices.",
    },
    {
      q: "How do I find my right size?",
      a: "Ventela shoes generally fit true to size. If you're between sizes or prefer a roomier fit, we recommend sizing up. Please check the size chart on each product page before ordering.",
    },
    {
      q: "What materials are Ventela shoes made of?",
      a: "We use premium canvas, suede, and leather uppers paired with a durable vulcanized rubber outsole — built for everyday comfort and long-lasting wear.",
    },
    {
      q: "Do you ship across Indonesia?",
      a: "Yes. We ship nationwide across Indonesia through trusted couriers, and you can also find us on Shopee and Tokopedia. International shipping is available on request.",
    },
    {
      q: "What is your return and warranty policy?",
      a: "Unworn items can be exchanged or returned within 7 days of delivery. Every pair is covered by a quality warranty against manufacturing defects.",
    },
  ];

  return (
    <section className="section py-150 bg-secondary">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-contain align-center">
          <div className="section-header">
            <div className="title-section text-center max-800">
              Frequently Asked Questions
            </div>
          </div>
          <div className="list-faq">
            {faqs.map((faq) => (
              <div
                data-delay={0}
                data-hover="false"
                className="faq-item w-dropdown"
                key={faq.q}>
                <div className="question-block top w-dropdown-toggle">
                  <div className="question-inner">
                    <div className="wrapper-title-faq">
                      <div className="title-question">{faq.q}</div>
                    </div>
                    <div className="wrapper-icon-accordion">
                      <img
                        loading="lazy"
                        src="/assets/69f5c74d5f761bc3c5c2399a_Vector__1_.svg"
                        alt=""
                        className="icon-plus"
                      />
                    </div>
                  </div>
                </div>
                <nav className="answer-block w-dropdown-list">
                  <div className="what-answer-block">
                    <p className="answer-text">{faq.a}</p>
                  </div>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
