import React from 'react';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';

interface PaginaProps {
    children: React.ReactNode;
    className?: string;
}

const Pagina = ({ children, className }: PaginaProps) => {
    return (
        <div className=" flex flex-col h-screen  ">
            <Cabecalho />
            <main className={`flex-1 py-16 container ${className ?? ''}`}>
                {children}
            </main>
            <Rodape />
        </div>
    );
};

export default Pagina;
