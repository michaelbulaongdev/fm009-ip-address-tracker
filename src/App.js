import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>IP Address Tracker</h1>
      <div>
        <input />
        <button>Search</button>
      </div>
      <div>
        <div>
          <p>IP Address</p>
          <p>ip</p>
        </div>
        <div>
          <p>Location</p>
          <p>place</p>
        </div>
        <div>
          <p>Timezone</p>
          <p>UTC</p>
        </div>
        <div>
          <p>ISP</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default App;
