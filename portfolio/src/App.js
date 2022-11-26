
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Projects from './components/Projects';
import Links from './components/Links';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Header-under"></div>
      <Profile/>
      <Projects/>
      <Links/>
    </div>
  );
}

export default App;
