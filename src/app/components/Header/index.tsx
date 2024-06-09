import React, { useState } from 'react';
import Image from "next/image";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-deep-purple z-40 w-full fixed top-0 py-6 p-5">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <div className="fundo">
                        <a href="#inicio">
                            <h4 className="font-poppins text-3xl font-bold"> {`<UJ/>`} </h4>
                        </a>
                    </div>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li><a href="#inicio" className="text-white">Início</a></li>
                        <li><a href="#sobre" className="text-white">Sobre mim</a></li>
                        <li><a href="#habilidades" className="text-white">Habilidades</a></li>
                        <li><a href="#projetos" className="text-white">Projetos</a></li>
                    </ul>
                </nav>
                <div className="menu-btn md:hidden flex flex-col justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
                    <div className="menu-btn__burger w-6 h-0.5 bg-white mb-1"></div>
                    <div className="menu-btn__burger w-6 h-0.5 bg-white mb-1"></div>
                    <div className="menu-btn__burger w-6 h-0.5 bg-white"></div>
                </div>
            </div>
            <nav className={`mobile-menu ${isOpen ? 'block' : 'hidden'} absolute right-0 top-0 mt-10`}>
                <ul className="flex flex-col items-center space-y-4 py-4 p-5">
                    <li><a href="#inicio" className="text-white">Início</a></li>
                    <li><a href="#sobre" className="text-white">Sobre mim</a></li>
                    <li><a href="#habilidades" className="text-white">Habilidades</a></li>
                    <li><a href="#projetos" className="text-white">Projetos</a></li>
                </ul>
            </nav>
        </header>
    );
};


