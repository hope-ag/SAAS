import "./App.global.scss";
import Footer from "./app/components/Footer";
import Navbar from "./app/components/Navbar";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./app/pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
