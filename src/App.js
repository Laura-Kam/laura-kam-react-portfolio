// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import MainPage from "./pages";
import Nav from "./components/Navigation";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <div className="App">
      <Nav className="App-nav" setCurrentPage={setCurrentPage} />
      <Header className="App-header" />
      {/* <AboutMe /> */}
      <PortfolioContainer />
      <Footer className="App-footer" />
    </div>
  );
}

export default App;
