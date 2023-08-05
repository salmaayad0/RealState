import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Rasdenices from './components/Rasdenices/Rasdenices';
import Companies from './components/companies/Companies';
import Contact from './components/contactUs/Contact';
import Footer from './components/footer/Footer';
import Start from './components/getStarted/Start';
import Value from './components/value/Value';

function App() {
  return (
    <>
      <main className='app'>
        <div>
          <div className='white-gradient' />
          <Header />
          <Hero />
        </div>

        <Companies />
        <Rasdenices />
        <Value />
        <Contact />
        <Start />
        <Footer />
      </main>
    </>
  );
}

export default App;
