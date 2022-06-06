
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import TextGame from "./Pages/TextGame"
import ExaminationApp from "./Pages/ExaminationApplication"
import WeatherApp from "./Pages/WeatherApplication"
import QuizApp from "./Pages/WebQuiz"


function App() {

  const [height, setHeight] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setHeight(position)
  }

  console.log(height)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  console.log(height)
  return (

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage height={height} />} />
          <Route path="/TextGame" element={<TextGame />} />
          <Route path="/Examination" element={<ExaminationApp />} />
          <Route path="/Weather" element={<WeatherApp />} />
          <Route path="/Quiz" element={<QuizApp />} />

        </Routes>
      </Router>


  );
}

export default App;
