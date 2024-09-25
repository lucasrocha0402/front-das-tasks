import React, { useEffect, useState } from "react";
import '../Styles/TaskList.css'; // Ajuste conforme necessário
import fetchDados from "../api"; // Importação correta para exportação padrão

const AcessandoTdsTask = () => {
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obterDados = async () => {
            try {
                const resultado = await fetchDados();
                console.log('Dados recebidos:', resultado); // Log para verificar os dados
                setDados(resultado);
            } catch (error) {
                console.error('Erro ao obter dados:', error);
                setError('Ocorreu um erro ao carregar os dados.');
            } finally {
                setLoading(false);
            }
        };

        obterDados();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div class = "DivDasTaks">
            <h1>Dados das Tasks</h1>
            <ul>
                {dados.map((item) => (
                    <li key={item.Id}>
                        <h2>Nome:</h2> {item.name} <br />
                        <strong>Descrição:</strong> {item.description} <br />
                        <strong>Completo:</strong> {item.iscomplet ? "Sim" : "Não"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AcessandoTdsTask;
