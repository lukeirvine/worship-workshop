import logo from './logo.svg';
import Hero from './components/hero/Hero';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="bio-container">
        <div className="bio-img-wrapper">
          <img className="bio-img" src="img/mugs/audrey.jpg"/>
        </div>
        <div className="bio-text-container">
          <h2 className="bio-header">Audrey Turner</h2>
          <p className="bio-subtitle">Workshops: Band Leading & Vocals</p>
          <p className="bio-text">
            Luke Irvine is a Senior Computer Science major.
          </p>
        </div>
      </div>
      <div className="bio-container">
        <div className="bio-img-wrapper">
          <img className="bio-img" src="img/mugs/luke.jpg"/>
        </div>
        <div className="bio-text-container">
          <h2 className="bio-header">Luke Irvine</h2>
          <p className="bio-subtitle">Workshops: Piano/Keys</p>
          <p className="bio-text">
            Luke Irvine is a Senior Computer Science major.
          </p>
        </div>
      </div>
      <div className="bio-container">
        <div className="bio-img-wrapper">
          <img className="bio-img" src="img/mugs/jake.jpg"/>
        </div>
        <div className="bio-text-container">
          <h2 className="bio-header">Jake Langford</h2>
          <p className="bio-subtitle">Workshops: Electric/Acoustic Guitar</p>
          <p className="bio-text">
            Luke Irvine is a Senior Computer Science major.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
