import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import LiveGT from './pages/livegt/LiveGT';
import { useEffect, useState } from 'react';
import Cube from './components/cube/Cube';
import ModalWork from './components/modalWork/ModalWork';
import { useClickContext } from './state/ClickContext';

function Content() {
  const { dataInfo, setDataInfo } = useClickContext();

  const [cubes, setCubes] = useState([]);

  const gap = 50; // 立方体間のギャップ

  const calculateGrid = (width, height) => {
    const deviceArea = (width * 1) * (height * 1);
    const cubeWidth = 100;
    const cubeCount = Math.floor(deviceArea / ((cubeWidth + gap) * (cubeWidth + gap)));

    const aspectRatio = width / height;
    const cols = Math.round(Math.sqrt(cubeCount * aspectRatio));
    const rows = Math.round(cubeCount / cols);

    return { cols, rows };
  };


  const getRandomSize = () => {
    return Math.random() * (100 - 50) + 50; // 50px から 100px の範囲でランダムなサイズ
  };

  const updateCubes = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const newCubes = [];
    const { cols, rows } = calculateGrid(screenWidth, screenHeight);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const size = getRandomSize();
        const xPosition = col * (size + gap) + 120; // 横位置
        const yPosition = row * (size + gap) + 100; // 縦位置

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
      {cubes}
      <Topbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/LiveGT" element={<LiveGT />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router >
      <Content />
    </Router>
  );
}

export default App;
