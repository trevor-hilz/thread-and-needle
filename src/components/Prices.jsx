const Prices = () => {
  return (
    <div className='Prices'>
      <h1>Services Available</h1>
      <input type='checkbox' id='Eyes' name='Eyes'></input>
      <label for='Eyes'>Eyes</label>
      <input type='checkbox' id='Eyebrows' name='Eyebrows'></input>
      <label for='Eyebrows'>Eyebrows</label>
      <input type='checkbox' id='Lips' name='Lips'></input>
      <label for='Lips'>Lips</label>
      <div>
        <button className='BookButton'>Book Now!</button>
      </div>
    </div>
  );
};

export { Prices as default };
