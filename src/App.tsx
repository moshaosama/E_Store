import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/header";
import Router_Pages from "./Components/Router";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <div>
          <Router_Pages />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
