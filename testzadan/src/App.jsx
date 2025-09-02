import { useState } from "react";

import "./App.css";

const services = [
  { id: 1, title: "Косметология:  уходы, инъекции, лифтинг", img: "/OTD.png" },
  { id: 2, title: "Коррекция фигуры и силуэта" },
  { id: 3, title: "SPA и европейские массажи" },
  { id: 4, title: "Велнесс-программы и флоатация" },
  { id: 5, title: "Beauty-услуги: волосы, ногти, макияж" },
  { id: 6, title: "Тайские и балийские массажи" },
];

const App = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="app">
      {/* Видео */}
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="../public/Angel_bg2.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>

      {/* Верхняя панель */}
      <header className="header">
        <div className="header-top">
          <div className="top-line">
            <div className="info-group">
              <span className="yandex">
                <img src="/yandex.png" alt="Logo" className="logo" />
                <div>
                  Рейтинг • 4.9
                  <br />
                  <div className="OTZ">135 отзывов</div>
                </div>
              </span>

              <span className="salon">
                Салон красоты премиального
                <br />
                уровня в Ставрополе
              </span>
            </div>

            <img className="logoo" src="/Logoo.png" alt="Logo" />

            <div className="contact">
              <div className="contact-icons">
                <div className="icon-circle">
                  <img
                    className="whatsapp"
                    src="/whatsapp.png"
                    alt="WhatsApp"
                  />
                </div>
                <div className="icon-circle">
                  <img
                    className="telegram"
                    src="/Telegram.png"
                    alt="Telegram"
                  />
                </div>
              </div>

              <div className="contact-info">
                <span className="phone">+7 910 004-46-36</span>
                <span className="hours">Пн-Вс, с 10:00–22:00</span>
              </div>

              <button className="btn-primary">
                Запись на приём
                <img className="checkmark" src="/Galochka.png" alt="Галочка" />
              </button>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <nav className="nav">
            <a href="#">ВСЕ УСЛУГИ</a>
            <a href="#">О ЦЕНТРЕ</a>
            <a href="#">КОСМЕТОЛОГИЯ</a>
            <a href="#">SPA & THAI</a>
            <a href="#">ВЕЛНЕСС-ТЕРАПИЯ</a>
            <a href="#">SPA & РЕЛАКС</a>
            <a href="#">КОРРЕКЦИЯ ФИГУРЫ</a>
            <a href="#">ЖУРНАЛ</a>
            <a href="#">СЕРТИФИКАТЫ</a>
            <a href="#">КОНТАКТЫ</a>
          </nav>
        </div>
      </header>

      {/* Основной контент */}
      <main className="main">
        <section className="hero">
          <h1>
            Ангел Concept — <br />
            центр премиального ухода <br />и косметологии в Ставрополе
          </h1>
          <p>
            Место, где вы выбираете заботу о себе как стиль <br />
            жизни. Эстетично, профессионально и легко
          </p>
          <button className="btn-secondary">
            ПОДРОБНЕЕ ОБ УСЛУГАХ
            <img src="/ikonka.png" alt="Галочка" />
          </button>
        </section>

        <section className="services">
          {services.map((s) => (
            <div key={s.id} className="service-wrapper">
              {s.id === 1 ? (
                <div
                  className={`service-card special-card ${
                    active === s.id ? "active" : ""
                  }`}
                  onClick={() => setActive(s.id)}
                >
                  <div className="special-content">
                    <div className="text-block">
                      <div className="service-id">{s.id}</div>
                      <p className="service-title">{s.title}</p>
                    </div>
                    {s.img && (
                      <img className="service-img" src={s.img} alt={s.title} />
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className={`service-card ${active === s.id ? "active" : ""}`}
                  onClick={() => setActive(s.id)}
                >
                  <div className="circle">{s.id}</div>
                  {active === s.id && s.img && (
                    <img src={s.img} alt={s.title} />
                  )}
                  <p>{s.title}</p>
                </div>
              )}
              <div
                className={`external-line ${active === s.id ? "active" : ""}`}
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
