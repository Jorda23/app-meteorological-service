import "./assets/css/App.css";
import { WeatherPanel } from "./components/WeatherPanel";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WeatherPanel />
      </Provider>
    </div>
  );
}

export default App;
