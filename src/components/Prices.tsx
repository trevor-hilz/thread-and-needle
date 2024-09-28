const Prices = () => {
  return (
    <div className='Prices'>
      Select which services you want
      <div>
        <input type='checkbox' name='eyes' id='eyes' value='eyes' />
        <label htmlFor='eyes'>Eyes 1 hour</label>
      </div>
      <div>
        <input type='checkbox' name='eyebrows' id='eyebrows' value='eyebrows' />
        <label htmlFor='eyebrows'>Eyebrows 1 hour</label>
      </div>
      <div>
        <input type='checkbox' name='lips' id='lips' value='lips' />
        <label htmlFor='lips'>Lips 1 hour</label>
      </div>
    </div>
  );
};

export { Prices as default };
