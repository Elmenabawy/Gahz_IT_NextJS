"use client";
import { useEffect, useState } from "react";

type Brand = { name: string; logo?: string; bg?: string };
const clients: Brand[] = [
  { name: "Etisalat" },
  { name: "Avenor Creative", logo: "/partners/avenor.jpg", bg: "#131313" },
  { name: "Alfa Plus" },
  { name: "Al Eman Tech" },
  { name: "Abousamra Travel", logo: "/partners/abousamra.jpg", bg: "#ffffff" }
];
const partners: Brand[] = [{ name: "Mostmer" }];

const services = [
  ["💻", "صيانة الكمبيوتر واللاب توب", "تشخيص الأعطال، تغيير القطع، تسريع الأجهزة وتثبيت الويندوز والبرامج."],
  ["🌐", "الشبكات والإنترنت", "توزيع الشبكة، تغطية الواي فاي، وحل مشاكل الفصل وضعف السرعة."],
  ["📹", "الطابعات والكاميرات", "صيانة وتشغيل الطابعات، تركيب كاميرات المراقبة وضبط المشاهدة من الموبايل."],
  ["🖥️", "السيرفرات", "Windows Server وActive Directory وسيرفرات الملفات وNAS والنسخ الاحتياطي."],
  ["🏢", "تأسيس الشركات", "تجهيز البنية التقنية للمقر الجديد من الشبكة والأجهزة حتى السيرفر وحسابات الموظفين."],
  ["🛠️", "الدعم الفني للشركات", "مسؤول IT خارجي لمتابعة الأعطال بدل توظيف متخصص بدوام كامل."],
  ["🔧", "الصيانة الدورية", "زيارات منتظمة لفحص الأجهزة والشبكة وتقليل فرص حدوث الأعطال."]
] as const;

const plans = [
  ["أساسية", "للمكاتب الصغيرة", ["زيارة شهرية", "فحص الأجهزة والشبكة", "دعم عبر واتساب"]],
  ["متقدمة", "للشركات المتوسطة", ["زيارتان شهريًا", "أولوية في حل الأعطال", "إدارة السيرفر والنسخ الاحتياطي"]],
  ["شاملة", "للشركات الكبيرة", ["زيارات حسب الحاجة", "مسؤول IT مخصص", "تقارير شهرية"]]
] as const;

export default function Home() {
  const phrases = ["سيب أعطال الـ IT علينا", "خلّي شغلك مايقفش", "شبكتك في أمان", "مقرّك جاهز من أول يوم"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  useEffect(() => { const id = setInterval(() => setPhraseIndex(p => (p + 1) % phrases.length), 2800); return () => clearInterval(id); }, []);

  return <main>
    <nav className="navbar"><div className="container nav-inner">
      <div className="brand"><img src="/logo.png" alt="شعار جاهز GAHEZ IT" className="brand-logo" /><div className="logo"><span>جاهز</span><small>GAHEZ IT</small></div></div>
      <div className="nav-links"><a href="#services">الخدمات</a><a href="#clients">عملاؤنا</a><a href="#process">طريقة العمل</a><a href="#plans">الباقات</a><a href="#contact">تواصل معنا</a></div>
      <a href="https://wa.me/201095398671" className="nav-button" target="_blank">واتساب</a>
    </div></nav>

    <section className="hero"><div className="hero-grid"/><div className="container hero-content">
      <div className="hero-badge"><span className="status-dot"/> دعم فني للشركات والمكاتب</div>
      <h1>خليك مركز في شغلك...<br/><span className="gradient-text" key={phraseIndex}>{phrases[phraseIndex]}</span></h1>
      <p className="hero-description">دعم فني وصيانة IT للشركات والمكاتب في المنصورة والدقهلية. أجهزة، شبكات، سيرفرات، طابعات وكاميرات تحت مسؤولية واحدة.</p>
      <div className="hero-buttons"><a href="https://wa.me/201095398671" target="_blank" className="button whatsapp">💬 كلمنا على واتساب</a><a href="tel:01095398671" className="button outline">اتصل الآن <span dir="ltr">01095398671</span></a></div>
      <div className="hero-stats"><div><strong>IT</strong><span>دعم متكامل</span></div><div><strong>24/7</strong><span>دعم ومتابعة</span></div><div><strong>+10</strong><span>سنوات خبرة</span></div></div>
    </div><div className="hero-orb orb-one"/><div className="hero-orb orb-two"/></section>

    <section id="services" className="section"><div className="container"><div className="section-heading"><span>خدماتنا</span><h2>كل احتياجات الـ IT في مكان واحد</h2><p>من إصلاح جهاز واحد إلى تأسيس البنية التحتية لشركة كاملة.</p></div><div className="services-grid">
      {services.map(([icon,title,description], i) => <article className="service-card" key={title}><div className="service-number">0{i+1}</div><div className="service-icon">{icon}</div><h3>{title}</h3><p>{description}</p><span className="card-arrow">←</span></article>)}
    </div></div></section>

    <section id="clients" className="section partners-section"><div className="container"><div className="section-heading"><span>عملاؤنا</span><h2>أكثر من 10 سنوات خبرة</h2><p>نفتخر بخدمة عملاء من مجالات مختلفة.</p></div><div className="partners-grid">
      {clients.map(p => <div className="partner-card" key={p.name} style={p.bg ? { background: p.bg } : undefined}>{p.logo ? <img src={p.logo} alt={p.name} className="partner-logo" loading="lazy" /> : <span className="partner-name">{p.name}</span>}</div>)}
    </div><h3 className="partners-subtitle">شركاؤنا</h3><div className="partners-grid">
      {partners.map(p => <div className="partner-card" key={p.name} style={p.bg ? { background: p.bg } : undefined}>{p.logo ? <img src={p.logo} alt={p.name} className="partner-logo" loading="lazy" /> : <span className="partner-name">{p.name}</span>}</div>)}
    </div></div></section>

    <section id="process" className="section process-section"><div className="container"><div className="section-heading"><span>طريقة العمل</span><h2>من المشكلة للحل في 3 خطوات</h2></div><div className="process-grid">
      {[["01","كلّمنا","ابعتلنا المشكلة على واتساب واحكيلنا التفاصيل."],["02","المعاينة","نحدد سبب المشكلة ونوضح لك الحل والتكلفة."],["03","التنفيذ","نبدأ بعد موافقتك ونتأكد أن كل شيء يعمل بشكل سليم."]].map(([n,t,d]) => <div className="process-card" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
    </div></div></section>

    <section id="plans" className="section"><div className="container"><div className="section-heading"><span>الباقات</span><h2>اختار مستوى الدعم المناسب لشغلك</h2></div><div className="plans-grid">
      {plans.map(([title,subtitle,features],i) => <div key={title} className={`plan-card ${i===1?"featured":""}`}>{i===1&&<div className="popular">الأكثر طلبًا</div>}<h3>{title}</h3><p>{subtitle}</p><ul>{features.map(f=><li key={f}><span>✓</span>{f}</li>)}</ul><a href="https://wa.me/201095398671" target="_blank">اطلب الباقة</a></div>)}
    </div><p className="plans-note">أسعار الباقات حسب عدد الأجهزة وحجم الشبكة. تواصل معنا لعرض مناسب لاحتياجات شركتك.</p></div></section>

    <section className="section pricing-section"><div className="container"><div className="section-heading"><span>الأسعار</span><h2>أسعار واضحة بدون مفاجآت</h2></div><div className="pricing-grid">
      <div className="price-card"><div className="price-icon">🔍</div><h3>رسم الزيارة</h3><strong>200 <small>جنيه</small></strong><p>فحص الجهاز مجانًا. ولو وافقت على الإصلاح، رسم الزيارة بيتخصم من الفاتورة.</p></div>
      <div className="price-card"><div className="price-icon">⚡</div><h3>الخدمات المتكررة</h3><strong>سعر ثابت</strong><p>تثبيت ويندوز، ضبط راوتر، تركيب كاميرا، صيانة طابعة وغيرها بأسعار معروفة قبل التنفيذ.</p></div>
      <div className="price-card"><div className="price-icon">🏢</div><h3>المشاريع</h3><strong>عرض مخصص</strong><p>السيرفرات وتأسيس الشركات يتم تسعيرها بعد معاينة المكان وتحديد احتياجات المشروع.</p></div>
    </div></div></section>

    <section id="contact" className="cta-section"><div className="container"><div className="cta-box"><div><span>جاهز نساعدك؟</span><h2>خلي الـ IT علينا وركز في شغلك.</h2><p>المنصورة والدقهلية والمناطق المحيطة.</p></div><a href="https://wa.me/201095398671" target="_blank" className="button whatsapp">💬 ابدأ محادثة</a></div></div></section>

    <footer><div className="container footer-inner"><div className="brand"><img src="/logo.png" alt="شعار جاهز GAHEZ IT" className="brand-logo" /><div className="logo"><span>جاهز</span><small>GAHEZ IT</small></div></div><div><p>المنصورة والدقهلية</p><a href="tel:01095398671" dir="ltr">01095398671</a></div><p className="copyright">© {new Date().getFullYear()} Gahez IT. All rights reserved.</p></div></footer>
    <a href="https://wa.me/201095398671" target="_blank" className="floating-whatsapp">💬 واتساب</a>
  </main>;
}
