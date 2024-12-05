import React from 'react';

const Rodape = () => {
    return (
        <footer className="flex items-center h-20 bg-zinc-900">
            <div className="flex container justify-end items-center">
                <p>
                    Todos os diretos reservados &copy;{' '}
                    {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Rodape;
