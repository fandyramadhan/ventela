/* Entry rendered to static HTML at build time (see gen-static.mjs).
   Lets us author the page as real JSX components while handing the runtime DOM
   to the Webflow engine. */
import { renderToStaticMarkup } from 'react-dom/server';
import Navbar from './components/Navbar.jsx';
import Preloader from './components/Preloader.jsx';
import Hero from './components/Hero.jsx';
import Category from './components/Category.jsx';
import Promotion from './components/Promotion.jsx';
import Services from './components/Services.jsx';
import Work from './components/Work.jsx';
import Team from './components/Team.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';

export const html = renderToStaticMarkup(
  <>
    <Navbar />
    <Preloader />
    <Hero />
    <Category />
    <Promotion />
    <Services />
    <Work />
    <Team />
    <Faq />
    <Footer />
  </>
);
