import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Rasdenices from './components/Rasdenices/Rasdenices';
import Companies from './components/companies/Companies';

function App() {
  return (
    <>
    <div className='app'>
      <div>
        <div className='white-gradient' />
      <Header />
      <Hero />
      </div>

      <Companies />
      <Rasdenices />
    </div>
    </>
  );
}

export default App;
