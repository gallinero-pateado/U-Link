import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="h-screen">
            {/* Header */}
            <header className="flex h-20">
                <div className="flex-1 flex justify-center items-center bg-[#0092BC]">
                    <div className="absolute text-[#333] text-4xl font-bold">Roomies</div>
                </div>
                <div className="flex-1 flex justify-center items-center bg-[#A3D9D3]">
                    <div className="absolute text-[#333] text-4xl font-bold">ULINK</div>
                </div>
                <div className="flex-1 flex justify-center items-center bg-[#DAEDF2]">
                    <div className="absolute text-[#333] text-4xl font-bold">Descuentos</div>
                </div>
            </header>

            {/* Opciones */}
            <div className="flex h-[calc(100vh-80px)]">
                <Link to="/Roomies" className="flex-1 bg-[#0092BC] text-white text-2xl p-8">Roomies</Link>
                <Link to="/practicas" className="flex-1 bg-[#A3D9D3] text-2xl p-8">Práctica</Link>
                <Link to="/Descuentos" className="flex-1 bg-[#DAEDF2] text-2xl p-8">Descuentos</Link>
            </div>
        </div>
    );
};

export default MainPage;
