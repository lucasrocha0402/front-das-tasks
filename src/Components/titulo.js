import React, { useEffect, useState } from 'react';
import '../Styles/titulo.css'
const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('https://localhost:7239/api/Task');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('Erro na solicitação:', error);
                setError(error.message);
            }
        };

        fetchTasks();
    }, []); // O array vazio faz com que o efeito seja executado apenas uma vez, como componentDidMount

    return (
        <div class = "title">
            <h1>Lista de Tarefas</h1>
        </div>
    );
};

export default TaskList;
