import Prices from '../components/Prices';
import logo from '../images/logo.jpg';

const PriceContainer = () => {
  return (
    <div className='PriceContainer'>
      <div>
        <img className='logo' src={logo} alt='Company Logo' height='200px' />
      </div>
      <div>
        <Prices />
      </div>
    </div>
  );
};

export { PriceContainer as default };
