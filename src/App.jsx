import React from 'react';
import { PRODUCTS, GKV_PRODUCTS } from './data/products.js';
import { REZ_LISTED, REZ_UNLISTED, REZ_SALE, REZ_STEPS, KASSEN } from './data/rezept.js';
import { FAQS, FACH_CARDS, FACTS, DEFAULT_PARTNERS } from './data/content.js';
import { LEGAL_FULL, LEGAL_SHORT } from './data/legal.js';
import { INTENTS_PRIVAT, INTENTS_FACH } from './data/intents.jsx';

import AudienceSwitch from './components/layout/AudienceSwitch.jsx';
import Header from './components/layout/Header.jsx';
import MobileMenu from './components/layout/MobileMenu.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import MilchpumpeBestellung from './components/sections/MilchpumpeBestellung.jsx';
import RezeptUpload from './components/sections/RezeptUpload.jsx';
import RezeptLaufzeit from './components/sections/RezeptLaufzeit.jsx';
import Sortiment from './components/sections/Sortiment.jsx';
import Krankenkasse from './components/sections/Krankenkasse.jsx';
import DasHaus from './components/sections/DasHaus.jsx';
import Ticker from './components/sections/Ticker.jsx';
import Partner from './components/sections/Partner.jsx';
import Kontakt from './components/sections/Kontakt.jsx';
import ShopPage from './components/pages/ShopPage.jsx';
import ProductPage from './components/pages/ProductPage.jsx';
import WiderrufModal from './components/modals/WiderrufModal.jsx';
import LegalModal from './components/modals/LegalModal.jsx';
import RezeptUploadModal from './components/modals/RezeptUploadModal.jsx';
import CheckoutModal from './components/modals/CheckoutModal.jsx';
import ProductDetailModal from './components/modals/ProductDetailModal.jsx';
import CartDrawer from './components/modals/CartDrawer.jsx';

// App: gesamter Zustand (Warenkorb, Filter, Formulare, Routing per #hash) und Handler.
// Die Komponenten erhalten alle Werte über das Objekt `v` aus renderVals().
export default class App extends React.Component {
  static defaultProps = { audienceDefault: 'privat', showTrustBar: true };

  defaultPartners = DEFAULT_PARTNERS;
  loadPartners(){ try { const s = JSON.parse(localStorage.getItem('kaasen-partners')||'null'); if (Array.isArray(s)) return s; } catch(e){} return this.defaultPartners; }
  state = { audience: 'privat', filter: 'Alle', faqFilter: 'Alle', openFaq: 0, cart: [], cartOpen: false, menuOpen: false, partners: this.loadPartners(), page: null, pFaq: 0, contactProduct: '', rezInfo: false, rezUpload: false, checkout: false, widerrufOpen: false, widerrufSent: false, legal: null, mpSent: false, mpOpen: false };
  legalTexts = LEGAL_SHORT;
  scrimRef = React.createRef();
  drawerRef = React.createRef();

  componentDidMount() { this.openMp = () => { this.setState({ shop: false, detail: null }); setTimeout(() => { const el = document.getElementById('kMilchpumpe'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }, 60); }; document.addEventListener('click', (e) => { const a = e.target && e.target.closest && e.target.closest('a[href="#kMilchpumpe"]'); if (!a) return; e.preventDefault(); this.openMp(); }, true); document.addEventListener('toggle', (e) => { const d = e.target; if (!d || d.tagName !== 'DETAILS' || !d.open) return; const n = d.getAttribute('name'); if (!n) return; document.querySelectorAll('details[name="' + n + '"]').forEach(o => { if (o !== d && o.open) o.open = false; }); }, true);
    const root = this.__hostRef && this.__hostRef.current;
    const scope = document;
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('k-in'); io.unobserve(e.target); }});
    },{ threshold: 0, rootMargin: '0px 0px -8% 0px' });
    scope.querySelectorAll('section').forEach(s=>io.observe(s));
    this.__io = io; this.__onHash = () => this.readHash(); window.addEventListener('hashchange', this.__onHash); this.readHash();
  }
  componentWillUnmount(){ if(this.__io) this.__io.disconnect(); if(this.__onHash) window.removeEventListener('hashchange', this.__onHash); }
  get productPages(){ return Object.assign({}, window.KAASEN_PAGES || {}, { emagina: { name:'Emagina', cat:'Schwangerschaft · smart', bannerBg:'#fbf389', smart:true, claim:'Die sanfte Vorbereitung des Beckenbodens auf die Geburt — ab der 20. Schwangerschaftswoche.', headline:'Stark und flexibel in die Geburt.', intro:'Emagina kombiniert eine Ballonsonde mit einer App. Sie trainieren Wahrnehmung und Entspannung des Beckenbodens und bereiten das Gewebe durch progressive Dehnung auf die Geburt vor.', features:['Ballonsonde mit App-Anleitung','Wahrnehmung, Entspannung und progressive Dehnung','Ab der 20. Schwangerschaftswoche'], screens:[{t:'Wahrnehmung',d:'Den Beckenboden bewusst spüren und ansteuern.'},{t:'Entspannung',d:'Loslassen üben — wichtig für die Geburt.'},{t:'Dehnung',d:'Schrittweise und sanft, angeleitet in der App.'}], fits:[{t:'Erstgebärende',d:'Zur gezielten Vorbereitung auf die Geburt.'},{t:'Ab der 20. SSW',d:'Begleitend über die zweite Schwangerschaftshälfte.'},{t:'Nach der Geburt',d:'Unterstützt auch die Rückbildung.'}], hmv:'nicht gelistet', diagnoses:'Geburtsvorbereitung (Kostenübernahme fraglich — wir prüfen das für Sie)', faqs:[{q:'Übernimmt die Krankenkasse Emagina?',a:'Emagina ist nicht im Hilfsmittelverzeichnis gelistet. Es kann ärztlich verordnet werden, die Übernahme ist fraglich — wir prüfen das gerne für Sie.'},{q:'Ab wann kann ich Emagina nutzen?',a:'Ab der 20. Schwangerschaftswoche, nach Rücksprache mit Ihrer Ärztin, Ihrem Arzt oder Ihrer Hebamme.'}] }, maple: { name:'MAPLe', cat:'Fachpersonen · B2B', bannerBg:'#a6b2ff', smart:true, claim:'Diagnostik- und Therapiesystem für Praxen und Kliniken — Kauf oder Leasing.', headline:'Beckenboden-Diagnostik auf 24 Messpunkten.', intro:'MAPLe misst die Aktivität der Beckenbodenmuskulatur über eine Sonde mit 24 Messpunkten. So sehen Sie, welche Muskelbereiche arbeiten — und können gezielt mit Biofeedback und Elektrostimulation therapieren.', features:['24-Punkt-EMG-Sonde','Biofeedback und Elektrostimulation','Kauf oder Leasing für Praxis und Klinik'], screens:[{t:'Diagnostik',d:'Muskelaktivität ortsgenau auf 24 Punkten.'},{t:'Therapie',d:'Biofeedback und Elektrostimulation in einem System.'},{t:'Dokumentation',d:'Befunde und Verlauf für Ihre Patientinnen und Patienten.'}], fits:[{t:'Physiotherapie',d:'Für Praxen mit Schwerpunkt Beckenboden.'},{t:'Gynäkologie & Urologie',d:'Zur Diagnostik von Funktionsstörungen.'},{t:'Kliniken',d:'Für Reha und Geburtshilfe.'}], hmv:'Praxisgerät (kein Hilfsmittel)', diagnoses:'Diagnostik und Therapie von Beckenbodenfunktionsstörungen', faqs:[{q:'Kann ich MAPLe vorab testen?',a:'Ja. Vereinbaren Sie eine Demo — wir zeigen Ihnen das System in Ihrer Praxis oder online.'},{q:'Kaufen oder leasen?',a:'Beides ist möglich. Wir erstellen Ihnen ein individuelles Angebot.'}] } }); }
  slugOf(name){ const pp = this.productPages; for (const k in pp) if (pp[k].name === name) return k; return null; }
  readHash(){ const h = location.hash || ''; if (h === '#shop') { this.setState({ page: null, shop: true }, () => window.scrollTo(0,0)); return; } if (this.state.shop) { this.setState({ shop: false }, () => setTimeout(() => { const el = h.length > 1 && document.getElementById(h.slice(1)); if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 80); }, 80)); } if (this.legalTexts[h.slice(1)]) { this.setState({ legal: h.slice(1), widerrufOpen: false }); return; } if (h.indexOf('#produkt/') === 0) { if (!window.KAASEN_PAGES) { setTimeout(() => this.readHash(), 150); return; } const slug = h.slice(9); const pg = this.productPages[slug]; if (pg) { this.setState({ page: slug, pFaq: 0, contactProduct: pg.name }, () => { window.scrollTo(0,0); setTimeout(() => window.scrollTo(0,0), 50); }); } } else if (h.indexOf('#k') === 0 && this.state.page) { this.setState({ page: null }, () => setTimeout(() => { const el = document.getElementById(h.slice(1)); if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 80); }, 60)); } }
  productVals(){ const slug = this.state.page; const pg = slug ? this.productPages[slug] : null; const src = pg ? (this.productData.find(p => p.name === pg.name) || {}) : {}; const num = (a) => (a||[]).map((x,i) => Object.assign({ n: String(i+1) }, typeof x === 'string' ? { t:x } : x)); const pf = this.state.pFaq; return { showLanding: !pg && !this.state.shop, shopDisplay: this.state.shop ? 'block' : 'none', shopProducts: this.productData.filter(p => p.badge === 'Verkauf').map(p => { const priced = /€/.test(p.price||''); return Object.assign({}, p, { hasImg: !!p.img, noImg: !p.img, btn: 'Mehr erfahren', add: () => this.setState({ detail: p.name }) }); }), detailOpen: !!this.state.detail, d: (() => { const x = this.productData.find(q => q.name === this.state.detail); if (!x) return {}; const priced = /€/.test(x.price||''); return Object.assign({}, x, { hasImg: !!x.img, noImg: !x.img, priced, unpriced: !priced, priceLabel: priced ? x.price : 'Preis auf Anfrage', kasse: ['Emy by Fizimed','Perifit Care+','restifem Stützpessar','Emagina','TheraPee','Apelvo','Pelvic Tool','Acticore'].includes(x.name) || (this.rezListed||[]).concat(this.rezUnlisted||[]).includes(x.name) }); })(), closeDetail: () => this.setState({ detail: null }), detailBuy: () => { const x = this.productData.find(q => q.name === this.state.detail); this.setState({ detail: null }); if (x) this.add(x); }, detailAsk: () => { const n = this.state.detail; this.setState({ detail: null, contactProduct: n, shop: false }, () => setTimeout(() => { const el = document.getElementById('kKontakt'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }, 80)); }, detailRezept: () => { this.setState({ detail: null, shop: false }, () => setTimeout(() => { const el = document.getElementById('kRezept'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }, 80)); }, showProduct: !!pg, productDisplay: pg ? 'block' : 'none', partnersOld: false, buyNow: () => { if (/€/.test(src.price||'')) this.add(src); else location.hash = '#p-kontakt'; }, pp: pg ? Object.assign({}, pg, { priceLabel: /€/.test(src.price||'') ? src.price : 'Preis folgt', img: src.img, fit: src.fit || 'contain', pad: src.pad || '0', features: num(pg.features), steps: num(pg.steps), screens: pg.screens || [], analog: !pg.smart, funcKicker: pg.smart ? 'App-Einblick' : 'Funktionsweise', funcTitle: pg.smart ? 'So sieht das Training in der App aus.' : 'So funktioniert ' + pg.name + '.' }) : {}, toc: [['Kurz erklärt','#p-kurz'],['Funktion','#p-funktion'],['Eignung','#p-eignung'],['Versorgung','#p-versorgung'],['Kontakt','#p-kontakt'],['FAQ','#p-faq']].map(([label,href]) => ({ label, href })), careSteps: window.KAASEN_CARE || [], productNames: Object.keys(this.productPages).map(k => this.productPages[k].name).concat(['Anderes Produkt']), contactProduct: this.state.contactProduct, setContactProduct: (e) => this.setState({ contactProduct: e && e.target ? e.target.value : e }), pFaqs: (pg ? pg.faqs : []).map((f,i) => ({ q:f.q, a:f.a, sign: pf===i?'−':'+', max: pf===i?'300px':'0px', toggle:()=>this.setState({ pFaq: pf===i?-1:i }) })) }; }
  componentDidUpdate() {
    if (this.__io) document.querySelectorAll('section:not(.k-in)').forEach(s=>this.__io.observe(s));
    const o = this.state.cartOpen;
    const d = this.drawerRef.current; if (d) d.style.transform = o ? 'translateX(0)' : 'translateX(105%)';
    const s = this.scrimRef.current; if (s) { s.style.opacity = o ? '1' : '0'; s.style.pointerEvents = o ? 'auto' : 'none'; }
  }

  parsePrice(str){ const m = String(str).match(/([\d.]+),(\d{2})/); return m ? Number(m[1].replace('.','')) + Number(m[2])/100 : 0; }
  money(n){ return n.toFixed(2).replace('.',',') + ' €'; }

  add = (p) => this.setState(s => {
    const c = s.cart.slice(); const i = c.findIndex(l => l.name === p.name);
    if (i > -1) c[i] = Object.assign({}, c[i], { qty: c[i].qty + 1 });
    else c.push({ name: p.name, price: p.price, amount: this.parsePrice(p.price), qty: 1 });
    return { cart: c, cartOpen: true };
  });
  setQty = (name, d) => this.setState(s => ({ cart: s.cart.map(l => l.name===name ? Object.assign({},l,{qty:l.qty+d}) : l).filter(l=>l.qty>0) }));

  intentPrivat = INTENTS_PRIVAT;
  intentFach = INTENTS_FACH;

  productData = PRODUCTS.map(p => ({ ...p }));

  loadFaqs(){ try { const s = JSON.parse(localStorage.getItem('kaasen-faqs')||'null'); if (Array.isArray(s)) return s.filter(f => f.visible !== false); } catch(e){} return this.faqData; }
  faqData = FAQS;

  fachCards = FACH_CARDS;

  factData = FACTS;

  rezSteps = REZ_STEPS;

  rezListed = REZ_LISTED;
  rezUnlisted = REZ_UNLISTED;
  rezSale = REZ_SALE;
  legalFull = LEGAL_FULL;
  kassen = KASSEN;

  renderVals(){ 
    const { audience, filter, openFaq, cart } = this.state;
    const isFach = audience === 'fach';
    const count = cart.reduce((n,l)=>n+l.qty,0);
    const sum = cart.reduce((n,l)=>n+l.amount*l.qty,0);
    const intents = isFach ? this.intentFach : this.intentPrivat;

    const cats = isFach
      ? ['Alle','Fachpersonen','Beckenboden','Männergesundheit']
      : ['Alle','Milchpumpen','Schwangerschaft','Beckenboden','Kinder','Männergesundheit','Zubehör'];
    const chip = (label) => { const on = filter === label; return { label, select:()=>this.setState({filter:label}), bg: on?'#141c5c':'transparent', color: on?'#fbf389':'#141c5c' }; };
    const filtered = this.productData.filter(p => p.badge !== 'Verkauf' || filter !== 'Alle').filter(p => filter === 'Alle' || p.cat === filter || (p.also||[]).includes(filter));
    const gkv = GKV_PRODUCTS;
    const partners = this.state.partners.filter(p => p.visible !== false);

    const faqCats = ['Alle','Allgemein','Milchpumpen','Beckenbodentrainer','Kostenübernahme'];
    const faqFilter = this.state.faqFilter;
    const faqChip = (label) => { const on = faqFilter === label; return { label, select:()=>this.setState({faqFilter:label,openFaq:-1}), bg: on?'#141c5c':'#ffffff', color: on?'#fbf389':'#141c5c', border: on?'#141c5c':'#ffffff' }; };
    const filteredFaqs = this.loadFaqs().filter(f => faqFilter === 'Alle' || f.cat === faqFilter);

    return {
      scrimRef: this.scrimRef, drawerRef: this.drawerRef,
      isFach,
      setPrivat: () => this.setState({ audience: 'privat', filter: 'Alle' }),
      setFach: () => this.setState({ audience: 'fach', filter: 'Alle' }),
      privatBg: !isFach ? '#fbf389' : 'transparent',
      privatColor: !isFach ? '#141c5c' : 'rgba(247,244,236,.7)',
      fachBg: isFach ? '#fbf389' : 'transparent',
      fachColor: isFach ? '#141c5c' : 'rgba(247,244,236,.7)',
      openCart: () => this.setState({ cartOpen: true }),
      closeCart: () => this.setState({ cartOpen: false }),
      toggleMenu: () => this.setState({ menuOpen: !this.state.menuOpen }),
      closeMenu: () => this.setState({ menuOpen: false }),
      menuTransform: this.state.menuOpen ? 'translateX(0)' : 'translateX(105%)',
      menuOpacity: this.state.menuOpen ? '1' : '0',
      menuPointer: this.state.menuOpen ? 'auto' : 'none',
      hasCart: count > 0, cartEmpty: count === 0, cartCount: count,
      cartCountLabel: count === 1 ? '1 Position' : count + ' Positionen',
      cartTotal: this.money(sum),
      cartLines: cart.map(l => ({ name:l.name, price:l.price, qty:l.qty, inc:()=>this.setQty(l.name,1), dec:()=>this.setQty(l.name,-1), remove:()=>this.setQty(l.name,-l.qty) })),
      intents,
      filters: cats.map(chip),
      products: filtered.map(p => Object.assign({}, p, { hasImg: !!p.img, noImg: !p.img, note: gkv.includes(p.name) ? 'Kostenübernahme durch die Krankenkasse möglich' : '', add: () => { if (p.name === 'Leihmilchpumpe') { this.openMp(); return; } const sl = this.slugOf(p.name); if (sl) location.hash = '#produkt/' + sl; else this.setState({ detail: p.name }); }, cta: this.slugOf(p.name) ? p.cta : 'Mehr erfahren', add0: null })),
      hasPartners: partners.length > 0,
      partners: partners.map(p => ({ name: p.name, url: p.url || '#', logo: p.logo, hasLogo: !!p.logo, noLogo: !p.logo })),
      faqs: filteredFaqs.map((f,i)=>({ q:f.q, a:f.a, sign: openFaq===i?'−':'+', max: openFaq===i?'300px':'0px', toggle:()=>this.setState({openFaq: openFaq===i?-1:i}) })),
      faqFilters: faqCats.map(faqChip),
      fachCards: this.fachCards,
      toTop: () => window.scrollTo({ top: 0, behavior: 'smooth' }), goCheckout: () => this.setState({ checkout: true }), closeCheckout: () => this.setState({ checkout: false }), checkoutOpen: this.state.checkout, goUpload: () => this.setState({ rezUpload: true }), closeUpload: () => this.setState({ rezUpload: false }), rezUploadOpen: this.state.rezUpload, rezListed: this.rezListed, rezUnlisted: this.rezUnlisted, rezSale: this.rezSale, rezProducts: this.rezListed.concat(this.rezUnlisted, ['TheraPee','Anderes Hilfsmittel']), toggleRezInfo: () => this.setState({ rezInfo: !this.state.rezInfo }), rezInfoSign: this.state.rezInfo ? '−' : '+', rezInfoMax: this.state.rezInfo ? '320px' : '0px', openWiderruf: () => this.setState({ widerrufOpen: true, widerrufSent: false }), closeWiderruf: () => this.setState({ widerrufOpen: false }), sendWiderruf: () => this.setState({ widerrufSent: true }), mpSubmit: () => this.setState({ mpSent: true }), mpOpen: this.state.mpOpen ? 'true' : 'false', mpToggle: () => this.setState(s => ({ mpOpen: !s.mpOpen })), mpBtn: this.state.mpOpen ? 'Schließen' : 'Jetzt online bestellen', mpRot: this.state.mpOpen ? '180deg' : '0deg', mpRows: this.state.mpOpen ? '1fr' : '0fr', mpOp: this.state.mpOpen ? 1 : 0, mpY: this.state.mpOpen ? '0px' : '-16px', mpReset: () => this.setState({ mpSent: false }), mpForm: !this.state.mpSent, mpSent: this.state.mpSent, mpFields: [{l:'Vorname * (Mutter)',t:'text'},{l:'Nachname * (Mutter)',t:'text'},{l:'Straße * (Wohnort)',t:'text'},{l:'Hausnummer *',t:'text'},{l:'PLZ *',t:'text'},{l:'Stadt *',t:'text'},{l:'E-Mail *',t:'email'},{l:'Telefon *',t:'tel'},{l:'Alternative Rufnummer',t:'tel'}], mpFields2: [{l:'Krankenhaus',t:'text'},{l:'Abteilung',t:'text'},{l:'Zimmernummer',t:'text'},{l:'Krankenversicherung * (z. B. AOK NordWest)',t:'text'},{l:'Versichertennummer',t:'text'},{l:'Geburtsdatum (Mutter)',t:'date'}], widerrufOpen: this.state.widerrufOpen, widerrufForm: !this.state.widerrufSent, widerrufSent: this.state.widerrufSent, legalOpen: !!this.state.legal, legalTitle: this.state.legal ? (this.legalFull[this.state.legal] || this.legalTexts[this.state.legal]).title : '', legalDraft: !(this.state.legal && this.legalFull[this.state.legal]), legalLines: this.state.legal ? (this.legalFull[this.state.legal] || this.legalTexts[this.state.legal]).lines.map(s => { const h2 = s.indexOf('## ') === 0, h1 = !h2 && s.indexOf('# ') === 0; return { t: s.replace(/^#+ /, ''), w: (h1||h2) ? '700' : '400', c: (h1||h2) ? '#141c5c' : 'rgba(40,40,40,.8)', s: h1 ? '19px' : (h2 ? '15.5px' : '14.5px'), mt: h1 ? '14px' : (h2 ? '6px' : '0') }; }) : [], closeLegal: () => { this.setState({ legal: null }); try { history.replaceState(null, '', location.pathname + location.search); } catch(e){} },
      rezSteps: this.rezSteps,
      kassen: this.kassen,
      ...this.productVals()
    };
  }

  render() {
    const v = this.renderVals();
    return (
    <div className="max-w-full overflow-x-clip flex flex-col">
      <AudienceSwitch v={v} />
      <Header v={v} />
      <MobileMenu v={v} />
      {v.showLanding && (
        <>
          <Hero v={v} />
          <MilchpumpeBestellung v={v} />
          <RezeptUpload v={v} />
          <RezeptLaufzeit v={v} />
          <Sortiment v={v} />
          <Krankenkasse v={v} />
          <DasHaus v={v} />
          <Ticker v={v} />
          <Partner v={v} />
          <Kontakt v={v} />
        </>
      )}
      <ShopPage v={v} />
      <ProductPage v={v} />
      <Footer v={v} />
      <WiderrufModal v={v} />
      <LegalModal v={v} />
      <RezeptUploadModal v={v} />
      <CheckoutModal v={v} />
      {v.detailOpen && (
        <>
          <ProductDetailModal v={v} />
        </>
      )}
      <CartDrawer v={v} />
    </div>
    );
  }
}
