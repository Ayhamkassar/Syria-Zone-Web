import React, { useEffect } from "react";

const Home: React.FC = () => {
  const features = [
    { title: "متاجر خاصة للبائعين", desc: "إدارة المنتجات والطلبات والمبيعات والإحصائيات." },
    { title: "بحث ذكي", desc: "اعثر على المنتجات بسهولة ضمن فئات واضحة." },
    { title: "نظام طلبات متكامل", desc: "متابعة حالة الطلب خطوة بخطوة." },
    { title: "تقارير كاملة", desc: "إحصائيات كاملة عن أداء المتجر." },
    { title: "دعم كافة طرق التواصل", desc: "واتساب، رقم الهاتف وغيرها." },
    { title: "أسعار واضحة وشفافة", desc: "كل شيء ظاهر للزبون بدون تعقيد." },
  ];

  // بيانات سياسة الخصوصية
  const privacyPolicy = [
    { title: "جمع البيانات", desc: "نقوم بجمع البيانات التالية عند استخدامك للتطبيق: المعلومات الشخصية مثل الاسم، البريد الإلكتروني، رقم الهاتف، ومعلومات الاستخدام مثل المنتجات التي تشاهدها، الطلبات التي تقدمها." },
    { title: "استخدام البيانات", desc: "نستخدم البيانات لجعل تجربة التسوق أفضل، تحسين الخدمات، والتواصل مع المستخدمين عند الحاجة." },
    { title: "مشاركة البيانات", desc: "نحن لا نبيع أو نشارك بياناتك الشخصية مع أطراف خارجية، إلا عند الضرورة لتقديم الخدمة أو الالتزام بالقوانين." },
    { title: "الأمان", desc: "نتخذ جميع الإجراءات الأمنية لحماية بياناتك من الوصول أو التعديل أو الكشف غير المصرح به." },
    { title: "التعديلات على السياسة", desc: "قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم إعلامك بأي تغييرات جوهرية عند الدخول للتطبيق." },
  ];

  // بيانات الشروط والأحكام
  const terms = [
    { title: "الحساب", desc: "يجب أن يكون لديك حساب صالح لاستخدام التطبيق. أنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة المرور." },
    { title: "استخدام التطبيق", desc: "يُمنع استخدام التطبيق لأي أغراض غير قانونية أو مضرة. يجب الالتزام بالقوانين السورية أثناء البيع والشراء." },
    { title: "البائعين", desc: "البائع مسؤول عن المنتجات المعروضة ومحتوى وصفها. يجب ألا تنتهك حقوق الملكية الفكرية للآخرين." },
    { title: "الزبائن", desc: "يجب على الزبائن تقديم معلومات صحيحة أثناء الطلب والالتزام بشروط الدفع والتوصيل." },
    { title: "المسؤولية", desc: "SyriaZone غير مسؤول عن أي خسارة مباشرة أو غير مباشرة نتيجة استخدام التطبيق، بما في ذلك المنتجات المقدمة من البائعين." },
    { title: "التعديلات", desc: "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. استمرارك في استخدام التطبيق بعد التعديلات يعني موافقتك عليها." },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div className="container" style={{ paddingTop: "80px" }}>
      {/* مقدمة */}
      <h1>مرحبا في سوريا-زون </h1>
      <p>
        منصة إلكترونية تجمع البائعين والزبائن في مكان واحد، لتسهيل الشراء
        والبيع داخل سوريا بطريقة حديثة، سريعة، وآمنة.
      </p>

      {/* مميزات التطبيق */}
      <h1 style={{ marginTop: "60px" }}>مميزات التطبيق</h1>
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* سياسة الخصوصية */}
      <h1 style={{ marginTop: "60px" }}>سياسة الخصوصية</h1>
      <div className="features-grid">
        {privacyPolicy.map((item, i) => (
          <div className="feature-card" key={i}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* الشروط والأحكام */}
      <h1 style={{ marginTop: "60px" }}>الشروط والأحكام</h1>
      <div className="features-grid">
        {terms.map((item, i) => (
          <div className="feature-card" key={i}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* زر تحميل التطبيق */}
      <div className="download-buttons" style={{ marginTop: "60px", marginBottom: "40px" }}>
        <a href="#" target="_blank" rel="noopener noreferrer">Google Play</a>
        <a href="#" target="_blank" rel="noopener noreferrer">App Store</a>
      </div>
    </div>
  );
};

export default Home;
