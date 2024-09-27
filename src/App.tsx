import MainContainer from './containers/MainContainer';
import Footer from './components/Footer';
import HeaderContainer from './containers/HeaderContainer';

const App = () => {
  return (
    // <div>
    <div className='App'>
      <HeaderContainer />
      <MainContainer />
      <Footer />
    </div>
  );
};

export { App as default };
