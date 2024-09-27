import Header from '../components/Header';
import Logo from '../components/Logo';

const HeaderContainer = () => {
  return (
    <div className='HeaderContainer'>
      <Logo />
      <Header />
    </div>
  );
};

export { HeaderContainer as default };
