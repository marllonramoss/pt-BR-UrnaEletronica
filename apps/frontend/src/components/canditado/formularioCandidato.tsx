import { Candidato } from '@urnaeletronica/core';
import React, { useState } from 'react';

interface formularioCandidatoProps {
    candidatoParcial: Partial<Candidato>;
    cancelar?: () => void;
    salvarCandidato?: (candidato: Partial<Candidato>) => void;
}

const FormularioCandidato = ({
    candidatoParcial,
    salvarCandidato,
    cancelar,
}: formularioCandidatoProps) => {
    const [candidato, setCandidato] =
        useState<Partial<Candidato>>(candidatoParcial);

    return (
        <div className="flex flex-col gap-7">
            <h1 className="text-4xl">Formulário Candidato</h1>
            <div className="flex flex-col gap-1">
                <span>Nome</span>
                <input
                    type="text"
                    value={candidato.nome}
                    onChange={(e) =>
                        setCandidato({
                            ...candidatoParcial,
                            nome: e.target.value,
                        })
                    }
                    className="input"
                />
            </div>
            <div className="flex flex-col gap-1">
                <span>Numero</span>
                <input
                    type="number"
                    value={candidato.numero}
                    onChange={(e) =>
                        setCandidato({
                            ...candidatoParcial,
                            numero: +e.target.value,
                        })
                    }
                    className="input"
                />
            </div>
            <div className="flex flex-col gap-1">
                <span>Partido</span>
                <input
                    type="text"
                    value={candidato.partido}
                    onChange={(e) =>
                        setCandidato({
                            ...candidatoParcial,
                            partido: e.target.value,
                        })
                    }
                    className="input"
                />
            </div>
            <div className="flex flex-col gap-1">
                <span>Descricao</span>
                <textarea
                    onChange={(e) =>
                        setCandidato({
                            ...candidatoParcial,
                            descricao: e.target.value,
                        })
                    }
                    className="input"
                    value={candidato.descricao}
                ></textarea>
            </div>
            <div className="flex gap-2">
                <button
                    className="botao azul"
                    onClick={() => salvarCandidato?.(candidato)}
                >
                    Salvar
                </button>
                <button className="botao cinza" onClick={cancelar}>
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default FormularioCandidato;
