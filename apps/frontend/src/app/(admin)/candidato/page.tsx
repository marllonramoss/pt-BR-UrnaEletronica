'use client';

import ListaCanditados from '@/components/canditado/ListaCanditados';
import candidatosIniciais from '@/data/constants/canditados';
import { Candidato } from '@urnaeletronica/core';
import Link from 'next/link';
import React, { useState } from 'react';
import FormularioCandidato from '../../../components/canditado/formularioCandidato';
import { defaultConfig } from 'next/dist/server/config-shared';

const page = () => {
    const [candidatos, setCandidatos] = useState(candidatosIniciais);
    const [candidatoSelecionado, setCandidatoSelecionado] =
        useState<Partial<Candidato> | null>(null);

    function salvar(candidato: Partial<Candidato>): void {
        if (candidato.id) {
            setCandidatos(
                candidatos.map((cand) =>
                    cand.id === candidato.id ? (candidato as Candidato) : cand,
                ),
            );
        } else {
            const id = Math.random();
            setCandidatos([...candidatos, { ...candidato, id } as Candidato]);
        }

        setCandidatoSelecionado(null);
    }

    function cancelar(): void {
        setCandidatoSelecionado(null);
    }

    function selecionarCandidato(candidato: Candidato): void {
        setCandidatoSelecionado(candidato);
    }

    function excluirCandidato(candidato: Candidato): void {
        const candidatosRestantes = candidatos.filter(
            (cand) => cand.id !== candidato.id,
        );
        setCandidatos(candidatosRestantes);
    }

    return (
        <div className="">
            {candidatoSelecionado ? (
                <FormularioCandidato
                    candidatoParcial={candidatoSelecionado}
                    cancelar={cancelar}
                />
            ) : (
                <div>
                    <button
                        className="botao azul"
                        onClick={() => setCandidatoSelecionado({})}
                    >
                        Novo Candidato
                    </button>
                    <ListaCanditados
                        candidato={candidatos}
                        excluirCandidato={excluirCandidato}
                        selecionarCandidato={selecionarCandidato}
                    />
                </div>
            )}
        </div>
    );
};

export default page;
