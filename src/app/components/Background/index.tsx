import React, { useState } from 'react';


export function Background() { 

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <video autoPlay loop muted className="w-full h-full object-cover">
                <source src="/Matrix.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
        </div>
    );

}
