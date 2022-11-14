// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <MainPage />
      <Footer className="App-footer" />
    </div>
  );
}

export default App;
