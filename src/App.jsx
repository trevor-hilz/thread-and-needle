import './App.css';
import MainContainer from './containers/MainContainer';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <div>
        <Header />
      </div>
      <div>
        <MainContainer />
      </div>
      <div class='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
