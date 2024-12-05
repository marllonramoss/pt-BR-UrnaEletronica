import Link from 'next/link';
import React from 'react';

const Cabecalho = () => {
    return (
        <header className="flex items-center min-h-24 bg-zinc-800 ">
            <div className="flex justify-between items-center container">
                <h1>Eleições 2025</h1>
                <nav className="flex gap-2">
                    <Link href={'/'} className="text-white">
                        Inicio
                    </Link>
                    <Link href={'/candidato'} className="text-white">
                        Candidato
                    </Link>
                    <Link href={'/eleitor'} className="text-white">
                        Eleitor
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Cabecalho;
