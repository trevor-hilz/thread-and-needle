import Prices from '../components/Prices';
import Slideshow from '../components/Slideshow';
import Description from '../components/Description';

const Body = () => {
  return (
    <div>
      <div className='BodyContainer'>
        <Slideshow />
        <Prices />
      </div>
      <div>
        <Description />
      </div>
    </div>
  );
};

export { Body as default };
