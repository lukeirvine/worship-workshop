import logo from './logo.svg';
import Hero from './components/hero/Hero';
import { Testemonials, Description, WorkshopDescriptions } from './Testemonials';
import './App.css';
import './FancyButton.css';
import { Table } from 'react-bootstrap';
import Footer from './components/footer/Footer';

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
                <a className="my-button nav-link">
                  <div className="bottom"></div>
                  <div className="top">
                    <div className="label">Sign Up Now</div>
                    <div className="my-button-border my-button-border-left"></div>
                    <div className="my-button-border my-button-border-top"></div>
                    <div className="my-button-border my-button-border-right"></div>
                    <div className="my-button-border my-button-border-bottom"></div>
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

function WshopTable() {
  return (
    <div>
      <Table bordered>
        <thead>
          <th>Time</th>
          <th>Fellowship Hall</th>
          <th>Youth Room</th>
          <th>Heubach Chapel</th>
        </thead>
        <tbody>
          <tr>
            <td className="table-time">2:00pm</td>
            <td className="table-time"></td>
            <td className="table-time"></td>
            <td className="table-time">Band Leading</td>
          </tr>
          <tr>
            <td className="shop-name">3:00pm</td>
            <td className="shop-name">Piano/Keys</td>
            <td className="shop-name">Electric Guitar</td>
            <td className="shop-name">Vocals</td>
          </tr>
          <tr>
            <td className="shop-name">4:00pm</td>
            <td className="shop-name">Piano/Keys</td>
            <td className="shop-name">Acoustic Guitar</td>
            <td className="shop-name">Vocals</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

function App() {

  return (
    <div className="app">
      <Hero 
        img="img/hero/vespers1.jpg"
        imgVerticalOffset="50% 50%"
        imgOpacity="0.7"
        title="Worship Workshop"
        subtitle="WWU Campus Ministries"
      />
      
      <div className="about-us-body">
          <h1 className="about-us-title" id="title-location">University Church</h1>
          <h1 className="about-us-title" id="title-date">Sunday, April 25, 2021</h1>
          <p className="about-us-text">
              {Description}
          </p>
          <FancyButton />
          <h1 className="about-us-title">Workshops</h1>
          <div className="table-container">
            <WshopTable />
          </div>
          <div className="wshop-desc-container">
            {Object.keys(WorkshopDescriptions).map(title => {
              return (
                <div className="wshop-desc-text-wrapper">
                  <h2 className="wshop-desc-title">{title}</h2>
                  <div className="wshop-desc-divider" />
                  <p className="wshop-desc-text">{WorkshopDescriptions[title]}</p>
                </div>
              )
            })}
          </div>
          <h1 className="about-us-title">Workshop Presenters</h1>
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
      <Footer />
    </div>
  );
}

export default App;
