import emailIcon from '../../public/assets/email-icon.png';

const Header = () => {
  return (
    <div className='Header'>
      <div>(214) 578 - 5159</div>
      <div>info@needleink.com</div>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='mailto:info@needleink.com'
      >
        <img src={emailIcon} alt='Email Icon' className='Instagram' />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/kenzelise/'
      >
        <img
          src='https://static-00.iconduck.com/assets.00/instagram-icon-2048x2048-77ljf1sd.png'
          alt='Instagram Link'
          className='Instagram'
        />
      </a>
    </div>
  );
};

export { Header as default };
