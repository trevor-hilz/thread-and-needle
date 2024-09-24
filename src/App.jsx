import './App.css';
import MainContainer from './containers/MainContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className='App'>
        <MainContainer />
      </div>
      <div class='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
