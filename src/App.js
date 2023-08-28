import { Provider } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { store } from "./Redux/App/store";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/card" element={<PrivateRouter/>}>
              <Route path="" element={<Card/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
