export default function Navbar() {
  return (
    <div
      data-animation="default"
      className="navbar w-nav"
      data-easing2="ease"
      data-wf-component-id="662696ba-d2eb-3f03-9a45-a27c10bab08e"
      data-easing="ease"
      data-wf-variant-state="base"
      data-collapse="medium"
      role="banner"
      data-duration={400}>
      <div className="w-layout-blockcontainer navbar-container w-container">
        <div className="navbar-wrapper">
          <div className="navbar-card">
            <a
              href=""
              aria-current="page"
              className="brand-logo-wrap w-inline-block w--current">
              <img
                loading="lazy"
                src="/assets/ventela-assets/logo-ventela.webp"
                alt=""
                className="brand-logo"
              />
            </a>
            <div className="navbar-toggle">
              <img
                src="/assets/69f60e5e67eb03f0f360f5f7_Frame_2147235303.svg"
                loading="lazy"
                alt=""
                className="navbar-toggle-line"
              />
              <img
                src="/assets/69f60e5e89cc2fd7cdd62ca1_Frame_2147239181.svg"
                loading="lazy"
                alt=""
                className="navbar-toggle-close"
              />
            </div>
          </div>
          <div className="navbar-dropdown">
            <div className="navbar-dropdown-text-content">
              <div className="navbar-dorpdown-text-wrap">
                <a href="#hero" className="nav-link">
                  INDEX
                </a>
              </div>
              <div className="navbar-dorpdown-text-wrap">
                <a href="#about" className="nav-link">
                  ABOUT US
                </a>
              </div>
              <div className="navbar-dorpdown-text-wrap">
                <a href="#service" className="nav-link">
                  SERVICE
                </a>
              </div>
              <div className="navbar-dorpdown-text-wrap">
                <a href="#project" className="nav-link">
                  PROJECT
                </a>
              </div>
            </div>
            <div className="button-wrap">
              <a
                data-wf--button-primary--variant="full-width"
                data-wf-component-id="b2b81b9c-c543-191e-71a5-465a72836c0f"
                data-wf-variant-state="50d04ef0-97b5-0747-be79-2ab6cc3b238c"
                href="#footer"
                className="button-primary w-variant-50d04ef0-97b5-0747-be79-2ab6cc3b238c w-inline-block">
                <div>Contact Us</div>
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
        </div>
      </div>
    </div>
  );
}
