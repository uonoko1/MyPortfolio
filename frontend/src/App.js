import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import { useEffect, useState } from 'react';
import Cube from './components/cube/Cube';
import ModalWork from './components/modalWork/ModalWork';
import { useClickContext } from './state/ClickContext';
import ModalMenu from './components/modalMenu/ModalMenu';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Resume from './pages/home/resume/Resume';

function Portfolio() {
  const { dataInfo, setDataInfo, modalMenu, setModalMenu } = useClickContext();

  const [cubes, setCubes] = useState([]);

  let gap = 50; // 立方体間のギャップ

  const calculateGrid = (width, height) => {
    const deviceArea = (width * 1) * (height * 1);
    let cubeWidth = 100;
    if (width < 600) {
      gap = 30;
      cubeWidth = 60;
    }
    const cubeCount = Math.floor(deviceArea / ((cubeWidth + gap) * (cubeWidth + gap)));

    const aspectRatio = width / height;
    const cols = Math.round(Math.sqrt(cubeCount * aspectRatio));
    const rows = Math.round(cubeCount / cols);

    return { cols, rows };
  };


  const getRandomSize = (width) => {
    if (width >= 600) {
      return Math.random() * (100 - 50) + 50;
    } else if (width < 600 && width >= 500) {
      return Math.random() * (80 - 40) + 40;
    } else if (width < 500) {
      return Math.random() * (70 - 35) + 35;
    }
  };

  const updateCubes = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const newCubes = [];
    const { cols, rows } = calculateGrid(screenWidth, screenHeight);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const size = getRandomSize(screenWidth);
        let xPosition;
        let yPosition;
        yPosition = row * (size + gap) + 100;
        if (screenWidth >= 600) {
          xPosition = col * (size + gap) + 120;
        } else if (screenWidth < 600 && screenWidth >= 500) {
          xPosition = col * (size + gap) + 50;
        } else {
          xPosition = col * (size + gap) + 30;
        }

        newCubes.push(
          <Cube
            key={`${row}-${col}`}
            size={size}
            xPosition={xPosition}
            yPosition={yPosition}
            position={"fixed"}
            data={"none"}
          />
        );
      }
    }
    setCubes(newCubes);
  };

  useEffect(() => {
    updateCubes();
    window.addEventListener('resize', updateCubes);
    return () => window.removeEventListener('resize', updateCubes);
  }, [])

  return (
    <div className="App">
      {dataInfo && <ModalWork />}
      {modalMenu && <ModalMenu />}
      {cubes}
      <Topbar />
      <Home />
    </div>
  )
}

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  )
}

function App() {
  return (
    <>
      <Router>
        <Content />
      </Router>
    </>
  );
}

export default App;
