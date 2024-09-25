module.exports = {
    webpack: (config) => {
        config.resolve.fallback = {
            https: require.resolve('https-browserify'),
            http: require.resolve('stream-http'), // Adicionando o fallback para 'http'
            stream: require.resolve('stream-browserify'),
            url: require.resolve('url/'), // Adicione o fallback para 'url', se necessário
            buffer: require.resolve('buffer/'), // Adicione o fallback para 'buffer', se necessário
            process: require.resolve('process/browser'), // Adicione o fallback para 'process', se necessário
        };
        return config;
    },
};
