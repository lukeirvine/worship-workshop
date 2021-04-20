import logo from './logo.svg';
import Hero from './components/hero/Hero';
import Testemonials from './Testemonials';
import './App.css';

function FancyButton() {

  const handleClick = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeFNPIVK3gNQe9iLLKmSohIIX3Ne48_yQcQwUZaB987yyUBxA/viewform?usp=sf_link";
  }

  return (
    <div className="signup-btn-container">
      <section id="intro" onClick={handleClick}>
        <div id="intro-content" className="center-content">
          <div className="center-content-inner">
            <div className="content-section content-section-margin">
              <div className="content-section-grid clearfix">
                <a className="button nav-link">
                  <div className="bottom"></div>
                  <div className="top">
                    <div className="label">Sign Up</div>
                    <div className="button-border button-border-left"></div>
                    <div className="button-border button-border-top"></div>
                    <div className="button-border button-border-right"></div>
                    <div className="button-border button-border-bottom"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function App() {

  return (
    <div className="app">
      <FancyButton />
      <div className="about-us-body">
          <div className="all-testemonials-container">
              {Testemonials.map(item => {
                  return (
                      <div className="testemonials-container">
                          <div className="testemonial-img-wrapper">
                              <img
                                  className="testemonial-img"
                                  src={item.img}
                                  style={{objectPosition: "50%" + item.verticalOffset}}
                              />
                          </div>
                          <div className="testemonial-text-wrapper">
                              <h2 className="testemonial-title">{item.title}</h2>
                              <p className="testemonial-subtitle">{item.subtitle}</p>
                              {item.text.map(paragraph => {
                                  return (
                                      <p className="testemonial-text">
                                          {paragraph}
                                      </p>
                                  )
                              })}
                          </div>
                      </div>
                  )
              })}
          </div>
      </div>

    </div>
  );
}

export default App;
