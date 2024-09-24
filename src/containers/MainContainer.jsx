import Header from '../components/Header';
import PriceContainer from './PriceContainer';
import Slideshow from './Slideshow';

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
    </div>
  );
};

export { MainContainer as default };
