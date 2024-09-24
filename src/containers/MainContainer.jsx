import Header from '../components/Header';
import PriceContainer from './PriceContainer';
import Slideshow from './Slideshow';
import Description from '../components/Description';
import Footer from '../components/Footer';

const MainContainer = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='PriceContainer'>
        <PriceContainer />
      </div>
      <div>
        <Slideshow />
      </div>
      <div>
        <Description />
      </div>
      <div class='Footer'>
        <Footer />
      </div>
    </div>
  );
};

export { MainContainer as default };
