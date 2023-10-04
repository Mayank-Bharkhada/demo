import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./Main";
import Home from "./Home";

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
