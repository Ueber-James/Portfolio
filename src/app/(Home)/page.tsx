'use client';

import Image from "next/image";


import React, { useEffect, useState } from 'react';

export default function Home() {
    const [typedText, setTypedText] = useState('');
    const text = 'Ueber';
    let letter = 0;
    let deleting = false;

    useEffect(() => {
        function typeWriter() {
            if (deleting) {
                setTypedText(text.substring(0, letter - 1));
                letter--;
                if (letter >= 0) {
                    setTimeout(typeWriter, 300); // Tempo de espera entre cada caractere deletado (em milissegundos)
                } else {
                    deleting = false;
                    setTimeout(typeWriter, 3000); // Tempo de espera antes de reiniciar a digitação (em milissegundos)
                }
            } else {
                if (letter <= text.length) {
                    setTypedText(text.substring(0, letter + 1));
                    letter++;
                    setTimeout(typeWriter, 100); // Tempo de espera entre cada caractere digitado (em milissegundos)
                } else {
                    deleting = true;
                    setTimeout(typeWriter, 3000); // Tempo de espera antes de reiniciar a digitação (em milissegundos)
                }
            }
        }

        typeWriter();
    }, []); // Executa apenas uma vez ao montar o componente



    return (
        <main className="flex  flex-col text-center items-center justify-between p-24 mt-[200px] sm:text-xl md:text-2xl">
            <section className="inicio" id="inicio">
                <h1 className="text-2xl md:text-1xl font-bold text-center mb-10">Olá, eu sou</h1>
                <span className="meu-nome inline-block text-center items-center justify-center text-5xl   h-[20px] ">{typedText}
                    <span className="after-animation">|</span>
                </span>

                <span className="invisible">.</span>
                <h1 className="text-3xl font-bold mt-[50px]">Desenvolvedor FullStack</h1>

                <div className="flex justify-center text-center items-center mt-[50px] ">
                    <a href="https://www.linkedin.com/in/ueber-nascimento/" target="_blank" className="mr-4">
                        <div className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md justify-center text-center">
                            <img src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6 mr-2" />
                            <p>LinkedIn</p>
                        </div>
                    </a>

                    <a href="https://github.com/Ueber-James" target="_blank" className="mr-4 ">
                        <div className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-md justify-center text-center ">
                            <img src="/assets/github.png" alt="GitHub" className="w-6 h-6 mr-2 " />
                            <p>Github</p>
                        </div>
                    </a>

                    <a download
                        href='/documents/cv.pdf' target="_blank">
                        <div className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-md justify-center text-center">
                            <img src="/assets/baixar.png" alt="GitHub" className="w-6 h-6 mr-2" />
                            <p className="md-2xl">Download CV</p>
                        </div>
                    </a>
                </div>
            </section>

            <style jsx>{`
                .after-animation {
                    content: '|';
                    margin-left: 5px;
                    opacity: 1;
                    animation: pisca .7s infinite;
                    position: absolute;
                }

                @keyframes pisca {
                    0%, 100% {
                        opacity: 1;
                    }

                    50% {
                        opacity: 0;
                    }
                }
            `}</style>
        </main>
    );
}
