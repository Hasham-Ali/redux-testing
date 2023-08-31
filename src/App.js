import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux Testing Updown Counter</h2>

        <div className='counter'>
          <button className='plus' title='dicrement'><span>+</span></button>
          <input type='text' name='quantity' className='quantity' value="0"></input>
          <button className='minus'title=''><span>-</span></button>
        </div>
      </header>
    </div>
  );
}

export default App;
