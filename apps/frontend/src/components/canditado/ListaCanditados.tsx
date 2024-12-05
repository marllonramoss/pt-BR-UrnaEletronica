'use client';

import { Candidato } from '@urnaeletronica/core';
import React from 'react';

interface ListaCanditadosProps {
    candidato: Candidato[];
    excluirCandidato: (canditado: Candidato) => void;
    selecionarCandidato: (candidato: Candidato) => void;
}

const ListaCanditados = ({
    candidato,
    excluirCandidato,
    selecionarCandidato,
}: ListaCanditadosProps) => {
    return (
        <div className="flex flex-col justify-center gap-5 ">
            {candidato.map((cand, i) => (
                <div
                    className="flex flex-col bg-zinc-800 p-4 rounded-lg"
                    key={cand.id}
                >
                    <span>{cand.partido}</span>
                    <span>{cand.descricao}</span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => {
                                selecionarCandidato(cand);
                            }}
                            className="botao azul"
                        >
                            Selecionar
                        </button>
                        <button
                            onClick={() => {
                                excluirCandidato(cand);
                            }}
                            className="botao vermelho"
                        >
                            Excluir
                        </button>
                        <div className="flex-1"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListaCanditados;
