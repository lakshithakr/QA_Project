import QAComponent from "./Component/QAComponent/QAComponent";
import SlideBar from "./Component/SlideBar/SlideBar";
import Home from "./Component/Home/Home";
import QAList from "./Component/QAList/QAList";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
        <Routes>
          <Route path="/" element={<><SlideBar/> <Home/></>}/>
          <Route path='/question' element={<><SlideBar/> <Home/><QAComponent/></>}/>
          <Route path='/history' element={<><SlideBar/> <Home/><QAList/></>}/>
        </Routes>
      </div>
    </div>
    </Router>



  );
}

export default App;
