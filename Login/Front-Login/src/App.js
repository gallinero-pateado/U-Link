import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'; // Para los estilos de modo claro/oscuro
import MainPage from './mainpage'; // Importa el componente principal con opciones


function App() {

  return (
    <Router>
      <Suspense fallback={<LoadingMessage message="Cargando componentes..." />}>
        <Routes>
          {/* Redirección de la ruta raíz (/) hacia /main */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<MainPage />} />

          {/*Redirección de la ruta main (/main) hacia /roomies */}
          <Route path="/roomie" element={<Navigate to="/roomie" replace />} />
          <Route path="/roomie" element={<MainPage />} />

          {/*Redirección de la ruta main (/main) hacia /practicas */}
          <Route path="/practica" element={<Navigate to="/practica" replace />}    
          <Route path="/practica" element={<MainPage />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;