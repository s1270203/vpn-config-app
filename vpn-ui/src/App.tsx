import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './screens/Home';
import HowTo from './screens/HowTo';
import Download from './screens/Download';
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/download" element={<Download />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}
