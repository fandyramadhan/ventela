export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <img
        src="/assets/ventela-assets/grid-ventela.webp"
        loading="lazy"
        alt=""
        className="hero-grid-image"
      />
      <div className="section-contain-hero">
        <div className="hero-top-content">
          <div className="hero-title-wrap">
            <div className="title-hero is-desktop top">VENTELA</div>
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <a
                    href="project/nova-tech/index.html"
                    className="card-project-hero w-inline-block">
                    <img
                      src="/assets/ventela-assets/ventela-v22-hero.webp"
                      loading="lazy"
                      width={100}
                      height={110}
                      alt="Hero Card Project"
                      sizes="100px"
                      className="card-project-hero-image"
                    />
                    <div className="card-project-hero-content">
                      <div className="card-project-hero-text">
                        <div className="paragraph-extra-small">New Arrival</div>
                        <div className="card-project-hero-title">
                          Ventela V-22
                        </div>
                      </div>
                      <div className="card-project-arrow">
                        <img
                          src="/assets/69f188de1bd6afbe8c3d081c_Frame_1.svg"
                          loading="lazy"
                          width="2.689453125"
                          height="5.37890625"
                          alt="Arrow Icon"
                          className="vector"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="title-hero is-mobile">VENTELA SHOES</div>
          </div>
          <div className="hero-title-wrap">
            <div className="service-hero-list">
              <div className="service-hero-item">
                <img
                  src="/assets/69f5b9d295e1ca01d1437bef_mask.svg"
                  loading="lazy"
                  width="13.629630088806152"
                  height="13.63200569152832"
                  alt=""
                  className="mask"
                />
                <div>Premium Vulcanized Shoes</div>
              </div>
              <div className="service-hero-item">
                <img
                  src="/assets/69f5b9d295e1ca01d1437bef_mask.svg"
                  loading="lazy"
                  width="13.629630088806152"
                  height="13.63200569152832"
                  alt=""
                  className="mask"
                />
                <div>Local Product</div>
              </div>
              <div className="service-hero-item">
                <img
                  src="/assets/69f5b9d295e1ca01d1437bef_mask.svg"
                  loading="lazy"
                  width="13.629630088806152"
                  height="13.63200569152832"
                  alt=""
                  className="mask"
                />
                <div>100% Quality Guarantee</div>
              </div>
              <div className="button-hero">
                <a
                  data-wf--button-primary--variant="base"
                  data-wf-component-id="b2b81b9c-c543-191e-71a5-465a72836c0f"
                  data-wf-variant-state="base"
                  href="#footer"
                  className="button-primary w-inline-block">
                  <div>Buy Now</div>
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
            <div className="title-hero is-desktop title-hero-bottom">SHOES</div>
          </div>
          <div className="hero-top-sosmed-wrap">
            <div className="paragraph-extra-large">©2026</div>
            <div className="sosmed-hero-wrap">
              <a
                href="https://instagram.com"
                target="_blank"
                className="paragraph-extra-large text-link">
                Tiktok
              </a>
              <div className="paragraph-extra-large">/</div>
              <a
                href="https://behance.com"
                target="_blank"
                className="paragraph-extra-large text-link">
                Instagram
              </a>
              <div className="paragraph-extra-large">/</div>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="paragraph-extra-large text-link">
                Threads
              </a>
            </div>
          </div>
          <div className="hero-video-wrap">
            {/* Decorative cards stacked behind the video card. Revealed one by
                one after the hero intro animation finishes (see layout.jsx). */}
            <div
              className="hero-back-card hero-back-card-1"
              aria-hidden="true"
            />
            <div
              className="hero-back-card hero-back-card-2"
              aria-hidden="true"
            />
            <div
              data-poster-url="/assets/69f6fa00a42430cbe5653e13_magnific_make-the-object-look-at-t_2909993891_poster.0000000.jpg"
              data-video-urls="/assets/ventela-assets/video-hero.mp4"
              data-autoplay="true"
              data-loop="true"
              data-wf-ignore="true"
              className="hero-video w-background-video w-background-video-atom">
              <video
                id="df63139e-6d47-9380-1c0b-182f217bcf51-video"
                autoPlay
                loop
                style={{
                  backgroundImage:
                    'url("/assets/69f6fa00a42430cbe5653e13_magnific_make-the-object-look-at-t_2909993891_poster.0000000.jpg")',
                }}
                muted
                playsInline
                data-wf-ignore="true"
                data-object-fit="cover">
                <source
                  src="/assets/ventela-assets/video-hero.mp4"
                  data-wf-ignore="true"
                />
                <source
                  src="/assets/69f6fa00a42430cbe5653e13_magnific_make-the-object-look-at-t_2909993891_webm.webm"
                  data-wf-ignore="true"
                />
              </video>
              <div aria-live="polite">
                <button
                  type="button"
                  data-w-bg-video-control="true"
                  aria-controls="df63139e-6d47-9380-1c0b-182f217bcf51-video"
                  className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button w-background-video--control">
                  <span className="play-state">
                    <img
                      src="/assets/69f6fb23deef48ba7fb168f0_Frame_2147239182.svg"
                      loading="lazy"
                      alt=""
                      className="image"
                    />
                  </span>
                  <span hidden className="play-state">
                    <img
                      src="/assets/69f6fb231e3bd20e31244c3d_Polygon_1.svg"
                      loading="lazy"
                      alt=""
                      className="image"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom-contain">
          <div className="hero-bottom-image-wrapper">
            <div
              data-poster-url="/assets/69f70e22693451ed5f04499e_magnific_create-a-video-from-the-i_2910276929_poster.0000000.jpg"
              data-video-urls="/assets/ventela-assets/video-hero.mp4,/assets/69f70e22693451ed5f04499e_magnific_create-a-video-from-the-i_2910276929_webm.webm"
              data-autoplay="true"
              data-loop="true"
              data-wf-ignore="true"
              className="hero-bottom-image w-background-video w-background-video-atom">
              <video
                id="39f088d6-485c-8d2d-1613-e8335b9be1fe-video"
                autoPlay
                loop
                style={{
                  backgroundImage:
                    'url("/assets/69f70e22693451ed5f04499e_magnific_create-a-video-from-the-i_2910276929_poster.0000000.jpg")',
                }}
                muted
                playsInline
                data-wf-ignore="true"
                data-object-fit="cover">
                <source
                  src="/assets/ventela-assets/video-hero.mp4"
                  data-wf-ignore="true"
                />
                <source
                  src="/assets/69f70e22693451ed5f04499e_magnific_create-a-video-from-the-i_2910276929_webm.webm"
                  data-wf-ignore="true"
                />
              </video>
              <div aria-live="polite">
                <button
                  type="button"
                  data-w-bg-video-control="true"
                  aria-controls="39f088d6-485c-8d2d-1613-e8335b9be1fe-video"
                  className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button w-background-video--control">
                  <span className="play-state">
                    <img
                      src="/assets/69f6fb23deef48ba7fb168f0_Frame_2147239182.svg"
                      loading="lazy"
                      alt=""
                      className="image"
                    />
                  </span>
                  <span hidden className="play-state">
                    <img
                      src="/assets/69f6fb231e3bd20e31244c3d_Polygon_1.svg"
                      loading="lazy"
                      alt=""
                      className="image"
                    />
                  </span>
                </button>
              </div>
            </div>
            <div className="trusted-customer-wrap">
              <div className="people-image-list">
                <img
                  src="/assets/69f213ea7fcd4a25485490d5_image.webp"
                  loading="lazy"
                  width={74}
                  height={74}
                  alt=""
                  className="people-image"
                />
                <img
                  src="/assets/69f213ea67e7b67eeea76c8e_image__1_.webp"
                  loading="lazy"
                  width={74}
                  height={74}
                  alt=""
                  className="people-image _2"
                />
                <img
                  src="/assets/69f213ea0a27ee03981387e3_image__2_.webp"
                  loading="lazy"
                  width={74}
                  height={74}
                  alt=""
                  className="people-image _3"
                />
                <div className="amount-circle bg-white">
                  <div>+10</div>
                </div>
              </div>
              <div className="pargraph-reguler text-white">
                Trusted by customer
              </div>
            </div>
            <div className="hero-bottom-text-wrap">
              <div className="paragraph-extra-large hero-bottom">
                We build brands, websites, and digital experiences with clarity,
                precision, and impact.
              </div>
              <a
                data-wf--button-primary--variant="base"
                data-wf-component-id="b2b81b9c-c543-191e-71a5-465a72836c0f"
                data-wf-variant-state="base"
                href="#footer"
                className="button-primary w-inline-block">
                <div>Book a call</div>
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
            <div className="overlay-hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
