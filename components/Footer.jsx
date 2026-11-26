export default function Footer() {
  return (
    <section id="footer" data-wf--footer--variant="base" data-wf-component-id="5383efa6-ca06-6c8a-7007-a579f95545ee" data-wf-variant-state="base" className="footer">
      <div className="footer-contain">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-top-left-text">
              <div role="heading" aria-level={2} className="heading-3 title-footer">LET’S WALK TOGETHER</div>
              <div className="footer-social">
                <a href="https://instagram.com/ventela.indonesia" target="_blank" className="socmed-text">
                  Instagram
                </a>
                <a href="https://tiktok.com/@ventela.indonesia" target="_blank" className="socmed-text">
                  TikTok
                </a>
                <a href="https://shopee.co.id" target="_blank" className="socmed-text">
                  Shopee
                </a>
                <a href="https://tokopedia.com" target="_blank" className="socmed-text">
                  Tokopedia
                </a>
              </div>
            </div>
            <div className="footer-nav-list">
              <a href="#hero" aria-current="page" className="footer-nav w--current">
                Home
              </a>
              <a href="#about" className="footer-nav">Category</a>
              <a href="#project" className="footer-nav">Collaboration</a>
              <a href="#footer" className="footer-nav">Contact</a>
            </div>
          </div>
          <div className="form-block w-form">
            <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form" data-wf-page-id="69e9e66c20e59c8516b7fe05" data-wf-element-id="5383efa6-ca06-6c8a-7007-a579f955460a" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
              <div className="input-field">
                <label htmlFor="name" className="input-label">(name)</label>
                <input className="text-field w-input" maxLength={256} name="name" data-name="Name" placeholder="Name" type="text" id="name" required />
              </div>
              <div className="input-field">
                <label htmlFor="Email" className="input-label">(Email)</label>
                <input className="text-field w-input" maxLength={256} name="Email" data-name="Email" placeholder="Email" type="email" id="Email" required />
              </div>
              <div className="input-field">
                <label htmlFor="Phone-Number" className="input-label">
                  (Phone number)
                </label>
                <input className="text-field w-input" maxLength={256} name="Phone-Number" data-name="Phone Number" placeholder="Phone Number" type="tel" id="Phone-Number" required />
              </div>
              <div className="input-field">
                <label htmlFor="Message" className="input-label">(message)</label>
                <textarea id="Message" name="Message" maxLength={5000} data-name="Message" placeholder="Message" required className="text-field textarea w-input" defaultValue={""} />
              </div>
              <input type="submit" data-wait="Please wait..." className="submit-button w-button" defaultValue="send message" />
            </form>
            <div className="success-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div className="footer-logo-wrap">
          <div className="footer-wordmark">VENTELA</div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-text-wrap left">
            <div className="paragraph-large text-grey">HQ</div>
            <div className="paragraph-large text-white">
              Jl. Soekarno-Hatta No. 590, Bandung, Jawa Barat, Indonesia 40286
            </div>
          </div>
          <div className="footer-bottom-text-wrap">
            <div className="paragraph-large text-grey">Made in</div>
            <div className="paragraph-large text-white">Bandung, Indonesia</div>
          </div>
          <div className="footer-bottom-text-wrap">
            <div className="paragraph-large text-grey">Contact Us</div>
            <a href="mailto:cs@ventela.co.id" className="paragraph-large text-white">
              cs@ventela.co.id
            </a>
          </div>
          <div className="footer-bottom-text-wrap">
            <div className="paragraph-large text-grey">WhatsApp</div>
            <a href="https://wa.me/62811200590" target="_blank" className="paragraph-large text-white">
              +62 811-2000-590
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
