const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

const port = 5000;
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    app.use(cors());
    next();
});

const historias = [
    {
        img: 'https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_1280.png',
        titulo: 'Uma história de One Piece',
        autor: 'Sou um pirata',
        resumo: 'Era uma vez um garoto que queria ser o rei dos piratas ...',
        texto: ["Capítulo 1 ...", "Capítulo 2 ..."],
        categoria: 'Mangas',
        fandom: 'One Piece',
        generos: ['Aventura', 'Ação', 'Fantasia'],
        status: 'Completo',
        id: '1'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_1280.png',
        titulo: 'Uma história de Dragon Ball',
        autor: 'I am a alien',
        resumo: 'Era uma vez um garoto que queria ser mais forte ...',
        texto: ["Capítulo 1 ...", "Capítulo 2 ..."],
        categoria: 'Animes',
        fandom: 'Dragon Ball Z',
        generos: ['Humor', 'Drama'],
        status: 'Completo',
        id: '2'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_1280.png',
        titulo: 'Uma história de Kuroko no Basket',
        autor: 'Sou um jogador',
        resumo: 'Era uma vez um garoto que queria ser o blá blá blá ...',
        texto: ["Capítulo 1 ...", "Capítulo 2 ..."],
        categoria: 'Jogos',
        fandom: 'Kuroko no Basket',
        generos: ['Ação', 'Humor', 'Esportes'],
        status: 'Em-Progresso',
        id: '3'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_1280.png',
        titulo: 'Uma história de Soredemo',
        autor: 'I am a alien',
        resumo: 'Era uma vez um garoto que queria ser mais forte ...',
        texto: ["Capítulo 1 ...", "Capítulo 2 ..."],
        categoria: 'Animes',
        fandom: 'Soredemo',
        generos: ['Fantasia', 'Drama', 'Romance'],
        status: 'Completo',
        id: '4'
    }
];

const categorias = ['Animes', 'Mangas', 'Jogos', 'Livros'];
const generos = ['Fantasia', 'Ficção científica', 'Ação', 'Aventura', 'Horror', 'Suspense',
    'Romance', 'Humor', 'Drama', 'Tragédia'];
const status = ['Completo', 'Em-Progresso'];


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

app.get(`${base}/categorias/`, (req, res) => {
    res.status(200).send(categorias);
});

app.get(`${base}/generos/`, (req, res) => {
    res.status(200).send(generos);
});
app.get(`${base}/status/`, (req, res) => {
    res.status(200).send(status);
});

app.get(`${base}/filtros/historias`, (req, res) => {
    const { categoria, fandom, genero, status } = req.query; 
    let result = filtroCategoria(categoria); 
    if(result.length !== 0) result = filtroFandom(result, fandom);
    if(result.length !== 0) result = filtroGenero(result, genero);
    if(result.length !== 0) result = filtroStatus(result, status);

    res.status(200).send(result);
    // res.send(status);
});

const filtroCategoria = (categoria) => {
    if(!categoria) return historias;
    const result = historias.filter((historia) => historia.categoria === categoria);
    // console.log(result);
    return result;
}

const filtroFandom = (filtradas, fandom) => {
    if(!fandom) return filtradas;
    const result = filtradas.filter((historia) => historia.fandom === fandom);
    // console.log(result);
    return result;
}

const filtroGenero = (filtradas, genero) => {
    if(!genero) return filtradas;
    const result = filtradas.filter((historia) => historia.generos.includes(genero));
    return result;
}

const filtroStatus = (filtradas, status) => {
    if(!status) return filtradas;
    const result = filtradas.filter((historia) => historia.status === status);
    console.log(status);
    console.log(result);
    return result;
}

app.get(`${base}/:categoria/fandoms`, (req, res) => {
    const categoria = req.params.categoria;
    const fandoms = [];
    historias.map((historia) => {
        if(historia.categoria === categoria) fandoms.push(historia.fandom);
    });
    res.status(200).send(fandoms);
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


