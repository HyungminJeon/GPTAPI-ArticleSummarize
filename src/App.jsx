import MainPage from "./components/MainPage";
import Summary from "./components/Summary";
import TextMining from "./components/TextMining";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <MainPage />
        <Summary />
      </div>
    </main>
  );
};

export default App;
