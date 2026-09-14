/* ==========================================================================
   YADAR Consulting - Interactive Functionality & Bilingual Engine
   ========================================================================== */

// Email Configuration (Runs 100% in browser via Live Server Port 5500 - No Node.js required!)
const FORM_CONFIG = {
  RECIPIENT_EMAIL: "marksho8lkdp@gmail.com",
  DEV_PORT: 5500
};

// Bilingual Translation Dictionary
const i18n = {
  en: {
    dir: "ltr",
    lang: "en",
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      methodology: "Methodology",
      contact: "Contact",
      requestCta: "Request Consultation",
      tagline: "Strategic & Management Advisory"
    },
    hero: {
      badge: "Institutional Excellence & Advisory",
      title: "Modern Solutions",
      titleHighlight: "Strategic Impact.",
      subtitle: "Empowering visionary organizations through bespoke Administrative Consulting, Human Capital Transformation, and Data-Driven Market Research.",
      getStarted: "Explore Services",
      bookConsultation: "Book Consultation",
      previewBadge: "Core Advisory Pillars",
      stat1Val: "100+",
      stat1Label: "Projects",
      stat2Val: "98%",
      stat2Label: "Satisfaction",
      stat3Val: "100%",
      stat3Label: "Strategic Focus"
    },
    about: {
      tag: "Who We Are",
      mainTitle: "Driving Institutional Innovation Since 2023",
      leadPara: "YADAR Consulting is an elite management and institutional consulting firm dedicated to guiding organizations toward agile governance, sustainable growth, and workforce excellence.",
      secondPara: "We partner with visionary enterprises and government entities to design resilient organizational architectures, optimize operational lifecycles, and execute data-backed market strategies that deliver enduring value.",
      highlight1Title: "Strategic Governance",
      highlight1Desc: "Precision structural design aligned with executive goals.",
      highlight2Title: "Data Intelligence",
      highlight2Desc: "Deep market studies empowering decisive executive leadership."
    },
    services: {
      tag: "Our Expertise",
      title: "Comprehensive Consulting Services",
      subtitle: "Tailored strategic advisory across three foundational pillars to elevate organizational competitiveness and operational resilience.",
      filterAll: "All Services",
      filterAdmin: "Administrative",
      filterHR: "Human Resources",
      filterMarketing: "Marketing & Research",
      learnMore: "Learn More",
      modalCta: "Inquire About This Service",
      items: [
        {
          id: "admin",
          category: "admin",
          number: "01",
          title: "Administrative Consulting",
          desc: "Strengthening organizational stability, streamlining cross-functional operations, and enabling high-conviction executive decision-making.",
          subservices: [
            "Organizational Structure Development",
            "Operational Process Improvement",
            "Administrative Planning and Strategy Building",
            "Change Management and Organizational Transformation",
            "Executive Decision‑Making Support"
          ]
        },
        {
          id: "hr",
          category: "hr",
          number: "02",
          title: "Human Resources Consulting",
          desc: "Fostering thriving workplace cultures, optimizing talent acquisition, and building high-performance compensation and evaluation frameworks.",
          subservices: [
            "HR Policies and Procedures Development",
            "Job Structure and Organizational Design",
            "Job Analysis and Evaluation",
            "Compensation and Benefits System Design",
            "Performance Development and Recruitment Planning",
            "Workforce Planning",
            "Culture Development",
            "Performance Management",
            "Recruitment & Selection Solutions"
          ]
        },
        {
          id: "marketing",
          category: "marketing",
          number: "03",
          title: "Marketing & Market Research Services",
          desc: "Unlocking commercial expansion through rigorous field studies, multi-channel digital strategies, and measurable promotional execution.",
          subservices: [
            "Field Surveys, Market Studies, and Market Analysis",
            "Digital Marketing",
            "Marketing Analysis, Planning, and Execution",
            "Design and Implementation of Promotional & Advertising Campaigns"
          ]
        }
      ]
    },
    methodology: {
      tag: "How We Deliver",
      title: "Our Consultative Methodology",
      subtitle: "A structured, milestone-driven framework designed to ensure seamless transformation and sustainable performance.",
      step1Title: "Diagnostic & Assessment",
      step1Desc: "In-depth audit of current structures, operational bottlenecks, and market opportunities.",
      step2Title: "Strategy & Blueprint",
      step2Desc: "Crafting customized frameworks, governance roadmaps, and actionable implementation milestones.",
      step3Title: "Execution & Change",
      step3Desc: "Guiding leaders and teams through structured transformation and institutional alignment.",
      step4Title: "Impact & Optimization",
      step4Desc: "Measuring KPIs, institutionalizing new capabilities, and ensuring enduring results."
    },
    contact: {
      tag: "Get in Touch",
      title: "Let's Build Strategic Excellence Together",
      desc: "Connect with our senior advisory team to discuss your organizational goals, request a formal proposal, or schedule an executive consultation.",
      emailLabel: "Email Inquiries",
      phoneLabel: "Advisory Hotline",
      locationLabel: "Headquarters",
      locationVal: "Riyadh & GCC Operations",
      whatsappBoxTitle: "Instant WhatsApp Consultation",
      whatsappBoxDesc: "Direct chat with our principal consultants for rapid response.",
      whatsappBtn: "Chat on WhatsApp",
      formTitle: "Request a Consultation",
      formSubtitle: "Fill out the form below and an advisor will respond within 24 hours.",
      fullName: "Full Name",
      companyName: "Organization / Company",
      emailAddress: "Official Email Address",
      phoneNumber: "Phone Number",
      serviceOfInterest: "Service of Interest",
      selectPlaceholder: "Select a consulting pillar...",
      optAdmin: "Administrative Consulting",
      optHR: "Human Resources Consulting",
      optMarketing: "Marketing & Market Research",
      optAll: "Integrated Advisory (Multiple Pillars)",
      projectBrief: "Project Scope or Brief",
      projectPlaceholder: "Describe your strategic goals, current challenges, or desired timeline...",
      submitBtn: "Submit Consultation Request",
      submittingBtn: "Submitting Request...",
      toastSuccess: "Thank you! Your consultation request has been received. Our team will contact you shortly.",
      toastError: "Unable to send request right now. Please try again or reach out via WhatsApp."
    },
    footer: {
      desc: "YADAR Consulting provides strategic administrative, human capital, and market advisory services tailored to drive sustainable institutional growth across the Middle East.",
      quickLinks: "Quick Links",
      servicesCol: "Services",
      contactCol: "Direct Contact",
      rights: "YADAR Consulting. All rights reserved."
    }
  },
  ar: {
    dir: "rtl",
    lang: "ar",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      methodology: "منهجيتنا",
      contact: "تواصل معنا",
      requestCta: "طلب استشارة",
      tagline: "استشارات إدارية ومؤسسية استراتيجية"
    },
    hero: {
      badge: "التميز المؤسسي والاستشارات الاستراتيجية",
      title: "حلول حديثة",
      titleHighlight: "لأثر استراتيجي مستدام.",
      subtitle: "تمكين المنظمات الرائدة من خلال حزمة متكاملة من الاستشارات الإدارية، وتطوير رأس المال البشري، وبحوث السوق المبنية على البيانات.",
      getStarted: "استكشف خدماتنا",
      bookConsultation: "احجز استشارتك الآن",
      previewBadge: "ركائزنا الاستشارية",
      stat1Val: "+100",
      stat1Label: "مشروع استشاري",
      stat2Val: "98%",
      stat2Label: "رضا العملاء",
      stat3Val: "100%",
      stat3Label: "تركيز استراتيجي"
    },
    about: {
      tag: "من نحن",
      mainTitle: "نقود الابتكار والتميز المؤسسي منذ 2023",
      leadPara: "شركة يُدار (YADAR) للاستشارات هي بيت خبرة استشاري متخصص في تمكين المنظمات نحو حوكمة رشيقة، ونمو تشغيلي مستدام، وكفاءة عالية لرأس المال البشري.",
      secondPara: "نعمل كشريك استراتيجي مع منشآت الأعمال والقطاعات الواعدة لتصميم هياكل تنظيمية مرنة، ورفع كفاءة العمليات التشغيلية، وصياغة استراتيجيات تسويقية مدروسة تحقق عائداً ملموساً وقيمة دائمة.",
      highlight1Title: "حوكمة استراتيجية",
      highlight1Desc: "تصميم تنظيمي دقيق متوافق مع الأهداف والرؤى المستقبلية.",
      highlight2Title: "بيانات وتحليلات دقيقة",
      highlight2Desc: "دراسات سوقية وميدانية معمقة تدعم اتخاذ القرارات التنفيذية الحكيمة."
    },
    services: {
      tag: "مجالات خبرتنا",
      title: "خدماتنا الاستشارية المتكاملة",
      subtitle: "حلول استشارية متخصصة ترتكز على ثلاثة محاور رئيسية لتعزيز تنافسية المنشآت واستدامة أدائها المؤسسي.",
      filterAll: "جميع الخدمات",
      filterAdmin: "الاستشارات الإدارية",
      filterHR: "الموارد البشرية",
      filterMarketing: "التسويق وبحوث السوق",
      learnMore: "تفاصيل الخدمة",
      modalCta: "طلب هذه الخدمة الآن",
      items: [
        {
          id: "admin",
          category: "admin",
          number: "01",
          title: "الاستشارات الإدارية",
          desc: "ترسيخ البناء المؤسسي للمنظمة، ورفع كفاءة سلاسل العمليات التشغيلية، وتقديم الدعم الاستراتيجي لصناع القرار التنفيذي.",
          subservices: [
            "تطوير الهياكل التنظيمية",
            "تحسين العمليات التشغيلية",
            "التخطيط الإداري وبناء الاستراتيجيات",
            "إدارة التغيير والتحول المؤسسي",
            "دعم اتخاذ القرارات التنفيذية"
          ]
        },
        {
          id: "hr",
          category: "hr",
          number: "02",
          title: "استشارات الموارد البشرية",
          desc: "بناء ثقافة مؤسسية محفزة، واستقطاب وتمكين الكفاءات، وهندسة أنظمة تعويضات وتقييم أداء متطورة.",
          subservices: [
            "تطوير سياسات وإجراءات الموارد البشرية",
            "الهياكل الوظيفية والتصميم التنظيمي",
            "تحليل وتقييم الوظائف",
            "تصميم أنظمة التعويضات والمزايا",
            "تطوير الأداء وتخطيط الاستقطاب",
            "تخطيط القوى العاملة",
            "تطوير الثقافة المؤسسية",
            "إدارة وقياس الأداء",
            "حلول الاستقطاب والاختيار"
          ]
        },
        {
          id: "marketing",
          category: "marketing",
          number: "03",
          title: "خدمات التسويق وبحوث السوق",
          desc: "دعم التوسع التجاري من خلال دراسات مسحية ميدانية دقيقة، واستراتيجيات تسويق رقمي فاعلة، وحملات ترويجية عالية التأثير.",
          subservices: [
            "المسوحات الميدانية والدراسات وتحليل السوق",
            "التسويق الرقمي",
            "تحليل وتخطيط وتنفيذ التسويق",
            "تصميم وتنفيذ الحملات الإعلانية والترويجية"
          ]
        }
      ]
    },
    methodology: {
      tag: "كيف نعمل",
      title: "منهجية العمل الاستشاري",
      subtitle: "نموذج عمل منظم ومرحلي يضمن كفاءة التحول المؤسسي وتحقيق أعلى مستويات الأثر والاستدامة.",
      step1Title: "التشخيص والتقييم الشامل",
      step1Desc: "فحص معمق للوضع الراهن، وتحديد فجوات الأداء، وفرص النمو الواعدة.",
      step2Title: "بناء الاستراتيجية وخارطة الطريق",
      step2Desc: "صياغة المبادرات والحلول المصممة خصيصاً مع مؤشرات أداء دقيقة.",
      step3Title: "التنفيذ وإدارة التغيير",
      step3Desc: "مرافقة القيادات وفرق العمل لتطبيق المخرجات وتحقيق التوافق المؤسسي.",
      step4Title: "قياس الأثر واستدامة الأداء",
      step4Desc: "متابعة النتائج، وترسيخ الممارسات الجديدة لضمان الاستمرارية والريادة."
    },
    contact: {
      tag: "تواصل معنا",
      title: "لنبدأ معاً رحلة التميز الاستراتيجي",
      desc: "فريقنا الاستشاري مستعد لمناقشة أهدافكم المؤسسية وتقديم الحلول الملائمة لمنظمتكم بكل احترافية.",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "هاتف الاستشارات",
      locationLabel: "المقر الرئيسي",
      locationVal: "المملكة العربية السعودية ودول الخليج",
      whatsappBoxTitle: "استشارة مباشرة عبر واتساب",
      whatsappBoxDesc: "تواصل فوري مع مستشارينا لتلبية استفساراتكم الاستراتيجية بسرعة.",
      whatsappBtn: "محادثة عبر واتساب",
      formTitle: "طلب استشارة استراتيجية",
      formSubtitle: "يرجى تعبئة النموذج التالي وسيقوم مستشارنا بالتواصل معكم خلال 24 ساعة.",
      fullName: "الاسم الكريم",
      companyName: "الجهة / المنشأة",
      emailAddress: "البريد الإلكتروني الرسمي",
      phoneNumber: "رقم الجوال",
      serviceOfInterest: "الخدمة المطلوبة",
      selectPlaceholder: "اختر المجال الاستشاري...",
      optAdmin: "الاستشارات الإدارية",
      optHR: "استشارات الموارد البشرية",
      optMarketing: "خدمات التسويق وبحوث السوق",
      optAll: "استشارات متكاملة (أكثر من مسار)",
      projectBrief: "نبذة عن نطاق العمل أو الهدف المطلوب",
      projectPlaceholder: "اذكر باختصار أبرز التحديات أو التطلعات الاستراتيجية لمنظمتكم...",
      submitBtn: "إرسال طلب الاستشارة",
      submittingBtn: "جاري الإرسال...",
      toastSuccess: "شكراً لكم! تم استلام طلب الاستشارة بنجاح، وسيتواصل معكم فريقنا الاستشاري قريباً.",
      toastError: "تعذر إرسال الطلب حالياً، يرجى المحاولة مرة أخرى أو التواصل عبر واتساب."
    },
    footer: {
      desc: "يُدار (YADAR) للاستشارات تقدم حلولاً استراتيجية متكاملة في التطوير الإداري، ورأس المال البشري، وبحوث التسويق لقيادة التحول والنمو المستدام.",
      quickLinks: "روابط سريعة",
      servicesCol: "المسارات الاستشارية",
      contactCol: "بيانات التواصل",
      rights: "شركة يدار للاستشارات. جميع الحقوق محفوظة."
    }
  }
};

// Application State
let currentLang = "en";
let currentFilter = "all";

// DOM Loaded Initialization
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initLanguage();
  renderServices();
  initModalEvents();
  initContactForm();
  initMobileMenu();
});

// 1. Navbar Scroll Effect
function initNavbarScroll() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// 2. Language Toggle
function initLanguage() {
  const langToggleBtn = document.getElementById("lang-toggle-btn");
  if (!langToggleBtn) return;

  langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    applyLanguage(currentLang);
  });
}

function applyLanguage(lang) {
  const data = i18n[lang];
  document.documentElement.setAttribute("dir", data.dir);
  document.documentElement.setAttribute("lang", data.lang);

  // Update Language Button Label
  const langLabel = document.getElementById("lang-btn-label");
  if (langLabel) {
    langLabel.textContent = lang === "en" ? "العربية" : "English";
  }

  // Update Static Elements with [data-i18n]
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    const val = getNestedTranslation(data, key);
    if (val) {
      elem.textContent = val;
    }
  });

  // Update Placeholders with [data-i18n-ph]
  document.querySelectorAll("[data-i18n-ph]").forEach(elem => {
    const key = elem.getAttribute("data-i18n-ph");
    const val = getNestedTranslation(data, key);
    if (val) {
      elem.setAttribute("placeholder", val);
    }
  });

  // Re-render dynamic service cards
  renderServices();
}

function getNestedTranslation(obj, path) {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}

// 3. Render Services Cards & Filtering
function renderServices() {
  const grid = document.getElementById("services-grid-container");
  if (!grid) return;

  const servicesData = i18n[currentLang].services.items;
  const filtered = currentFilter === "all" 
    ? servicesData 
    : servicesData.filter(s => s.category === currentFilter);

  grid.innerHTML = "";

  // Icons map for the 3 pillars
  const iconMap = {
    admin: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`,
    hr: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`,
    marketing: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>`
  };

  filtered.forEach(srv => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.setAttribute("data-category", srv.category);

    const subservicePills = srv.subservices
      .map(item => `
        <div class="subservice-pill-item">
          <span class="check-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
          </span>
          <span>${item}</span>
        </div>
      `)
      .join("");

    card.innerHTML = `
      <div class="service-card-number">${srv.number}</div>
      <div class="service-icon-box">
        ${iconMap[srv.category] || iconMap.admin}
      </div>
      <h3 class="service-card-title">${srv.title}</h3>
      <p class="service-card-desc">${srv.desc}</p>
      
      <div class="subservices-list">
        ${subservicePills}
      </div>

      <div class="service-card-footer">
        <button class="btn-learn-more" onclick="openServiceModal('${srv.id}')">
          <span>${i18n[currentLang].services.learnMore}</span>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
        <span class="service-count-badge">${srv.subservices.length} ${currentLang === 'en' ? 'Programs' : 'برامج متخصصة'}</span>
      </div>
    `;

    grid.appendChild(card);
  });

  // Filter Buttons binding
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderServices();
    };
  });
}

// 4. Modal Drawer for Service Details
function initModalEvents() {
  const modal = document.getElementById("service-modal-overlay");
  const closeBtn = document.getElementById("modal-close-btn");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }
}

window.openServiceModal = function(serviceId) {
  const modal = document.getElementById("service-modal-overlay");
  if (!modal) return;

  const service = i18n[currentLang].services.items.find(s => s.id === serviceId);
  if (!service) return;

  document.getElementById("modal-badge").textContent = service.number + " / " + (currentLang === 'en' ? 'Pillar' : 'المسار الاستشاري');
  document.getElementById("modal-title").textContent = service.title;
  document.getElementById("modal-desc").textContent = service.desc;

  const listContainer = document.getElementById("modal-subservices-list");
  listContainer.innerHTML = service.subservices.map(sub => `
    <div class="modal-subservice-card">
      <span style="color: var(--color-primary); font-size: 1.1rem;">✦</span>
      <span>${sub}</span>
    </div>
  `).join("");

  const ctaBtn = document.getElementById("modal-cta-btn");
  if (ctaBtn) {
    ctaBtn.textContent = i18n[currentLang].services.modalCta;
    ctaBtn.onclick = () => {
      modal.classList.remove("active");
      const serviceSelect = document.getElementById("contact-service-select");
      if (serviceSelect) {
        if (serviceId === "admin") serviceSelect.value = "admin";
        else if (serviceId === "hr") serviceSelect.value = "hr";
        else if (serviceId === "marketing") serviceSelect.value = "marketing";
      }
      const contactSec = document.getElementById("contact");
      if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
    };
  }

  modal.classList.add("active");
};

// 5. Contact & Consultation Form Handling (Direct Delivery without Node)
function initContactForm() {
  const form = document.getElementById("consultation-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const companyInput = document.getElementById("contact-company");
    const emailInput = document.getElementById("contact-email");
    const phoneInput = document.getElementById("contact-phone");
    const serviceSelect = document.getElementById("contact-service-select");
    const messageInput = document.getElementById("contact-message");
    const submitBtn = document.getElementById("btn-submit-contact");

    const name = nameInput ? nameInput.value.trim() : "";
    const company = companyInput ? companyInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const serviceText = (serviceSelect && serviceSelect.selectedIndex >= 0)
      ? serviceSelect.options[serviceSelect.selectedIndex].text
      : (serviceSelect ? serviceSelect.value : "");
    const message = messageInput ? messageInput.value.trim() : "";

    const btnSpan = submitBtn ? submitBtn.querySelector("span") : null;
    const originalBtnText = btnSpan ? btnSpan.textContent : (submitBtn ? submitBtn.textContent : "");

    // Button loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.75";
      submitBtn.style.cursor = "not-allowed";
      if (btnSpan) {
        btnSpan.textContent = i18n[currentLang]?.contact?.submittingBtn || (currentLang === "ar" ? "جاري الإرسال..." : "Submitting Request...");
      }
    }

    try {
      // Dispatches directly via FormSubmit AJAX — works on Live Server (Port 5500) without Node.js!
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(FORM_CONFIG.RECIPIENT_EMAIL)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Client Name / الاسم": name,
          "Company / الجهة": company || "Individual / فردي",
          "Email / البريد الإلكتروني": email,
          "Phone / رقم الجوال": phone,
          "Consulting Pillar / المسار الاستشاري": serviceText,
          "Project Scope / نطاق العمل": message || "No additional scope provided",
          "_subject": `[YADAR] New Consultation Request from ${name} (${company || 'Individual'})`,
          "_replyto": email,
          "_template": "table"
        })
      });

      const result = await response.json();
      console.log("[FormSubmit Response]:", result);

      if (response.ok && (result.success === "true" || result.success === true || result.message)) {
        showToast(i18n[currentLang].contact.toastSuccess, false);
        form.reset();
      } else {
        throw new Error(result.message || "Failed to dispatch email");
      }
    } catch (err) {
      console.error("[Submission Error]:", err);
      // If network issue, show informative message
      showToast(i18n[currentLang].contact.toastError || "Error sending request. Please try again.", true);
    } finally {
      // Restore button state
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
        if (btnSpan) {
          btnSpan.textContent = originalBtnText;
        }
      }
    }
  });
}

function showToast(message, isError = false) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }

  const iconColor = isError ? "#f87171" : "#4ade80";
  const iconPath = isError
    ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>'
    : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>';

  toast.innerHTML = `
    <svg width="20" height="20" fill="none" stroke="${iconColor}" viewBox="0 0 24 24">
      ${iconPath}
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 5000);
}

// 6. Mobile Hamburger Menu Toggle
function initMobileMenu() {
  const toggle = document.getElementById("mobile-nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-open");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("mobile-open");
      });
    });
  }
}
