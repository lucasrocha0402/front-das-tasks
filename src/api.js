import axios from 'axios';
import https from 'https';

const api = axios.create({
    baseURL: 'https://localhost:7239/api/Task',
    httpsAgent: new https.Agent({ rejectUnauthorized: false }) // Use com cautela para desenvolvimento local
});

const fetchDados = async () => {
    try {
        const response = await api.get(); // Busca na URL base
        return response.data;
    } catch (error) {
        // Tratamento de erro
        if (error.response) {
            console.error('Erro na resposta:', error.response.data);
            console.error('Status:', error.response.status);
        } else if (error.request) {
            console.error('Erro na solicitação:', error.request);
        } else {
            console.error('Mensagem de erro:', error.message);
        }
        throw error; // Relança o erro para que possa ser tratado onde a função é chamada
    }
};

export default fetchDados;
