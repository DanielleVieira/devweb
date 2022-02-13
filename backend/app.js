const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

const port = 3001;
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    app.use(cors());
    next();
});

const historias = [
    {
        img: 'https://criticalhits.com.br/wp-content/uploads/2021/07/one-piece-celebration-1276637-1280x0-1-910x472.jpeg',
        titulo: 'Uma história de One Piece',
        autor: 'Sou um pirata',
        resumo: 'Era uma vez um garoto que queria ser o rei dos piratas ...',
        texto: ["Capítulo 1 ...", "Capítulo 2 ..."],
        tags: ['shounen', 'action', 'adventure'],
        id: '1'
    },
    {
        img: 'https://geeksaw.com.br/wp-content/uploads/2016/12/dragonballsuper.jpg',
        titulo: 'Uma história de Dragon Ball',
        autor: 'I am a alien',
        resumo: 'Era uma vez um garoto que queria ser mais forte ...',
        texto: ["Capítulo 1 ...", "Capítulo 2 ..."],
        tags: ['slice of life', 'drama'],
        id: '2'
    }
];

const base = '/api/v1';

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get(`${base}/historias`, (req, res) => {
    res.status(200).send(historias);
});

app.get(`${base}/historias/:id`, (req, res) => {
    const id = req.params.id;
    
    const historia = historias.find(historia => historia.id === id);

    if(!historia) {
        res.status(404).send({error: 'História não encontrada'});
        return
    }

    res.status(200).send(historia);
});

app.post(`${base}/historias`, (req, res) => {
    const novaHistoria = req.body;

    novaHistoria.id = `${historias.length + 1}`; 
    historias.push(novaHistoria);
    res.status(201).send(historias[historias.length - 1]);
});

app.put(`${base}/historias/:id`, (req, res) => {
    const id = req.params.id;
    const novaHistoria = req.body;
    novaHistoria.id = id;
    
    const historia = historias.find(historia => historia.id === id);

    if(!historia) {
        res.status(404).send({error: 'História não encontrada'});
        return
    }

    const index = historias.indexOf(historia);
    historias.splice(index, index, novaHistoria);
    res.status(200).send(historias[index]);
});

app.delete(`${base}/historias/:id`, (req, res) => {
    const id = req.params.id;

    const historia = historias.find(historia => historia.id === id);

    if(!historia) {
        res.status(404).send({error: 'História não encontrada'});
        return
    }

    const index = historias.indexOf(historia);
    historias.splice(index, 1);
    res.status(200).send({info: "História removida com sucesso"});
});

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}`)
})


