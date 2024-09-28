import Prices from '../components/Prices';
import Slideshow from '../components/Slideshow';
import Description from '../components/Description';
import Logo from '../components/Logo';
import Title from '../components/Title';

const Body = () => {
  return (
    <div>
      <div className='Title'>
        <Title />
      </div>
      <div className='BodyContainer'>
        <Logo />
        <Slideshow />
      </div>
      <div className='Prices'>
        <Prices />
      </div>
      <div>
        <Description />
      </div>
    </div>
  );
};

export { Body as default };
