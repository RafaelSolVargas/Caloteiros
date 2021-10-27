const express = require('express')
const cors = require('cors')
const connection = require('./connection');

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

connection.connectToServer(function (err, client) {
    if (err) return res.json({ error: err })

    // Busca o banco de Dados no arquivo connection
    db = connection.getDb()

    app.post('/amigos', async (req, res) => {
        const name = req.body.name.trim()
        const divida = req.body.divida.trim()

        const result = await db.collection('amigos').insertOne({ name, divida })

        if (!result.acknowledged) return res.status(500).json({ error: 'Erro ao criar dado' })

        return res.status(200).json({ message: "Ok" })
    })

    app.get('/amigos', async (req, res) => {
        const query = {};
        const options = {
            sort: { name: -1 }, // 1 é crescente e -1 é decrescente
            projection: { _id: 1, name: 1, divida: 1 }, // Coloca quais campos quer pegar, exceto o _id, o resto deve ser tudo 1 ou tudo 0, aí os outros são omitidos
        };
        // Busca na coleção amigos
        const result = await db.collection('amigos').find(query, options).toArray()

        // Verifica se teve retorno de amigos
        if (result.length === 0) return res.status(200).json({ message: "Nenhum amigo encontrado, F" })
        return res.status(200).json(result)
    })

    app.delete('/amigos/:nomeAmigo', async (req, res) => {
        const { nomeAmigo } = req.params;
        const query = { name: nomeAmigo }

        const result = await db.collection('amigos').deleteOne(query);

        if (result.deletedCount === 1) return res.status(200).json({ message: `O amigo ${nomeAmigo} foi excluído com sucesso` })
        return res.status(400).json({ message: `Não foi encontrado um ${nomeAmigo} na sua lista de amizades` })
    })

    app.put('/amigos/:nomeAmigo', async (req, res) => {
        const { nomeAmigo } = req.params;
        const { divida } = req.body;

        const filter = { name: nomeAmigo };
        const updateDoc = { $set: { divida } };

        const result = await db.collection('amigos').updateOne(filter, updateDoc);

        if (!result.acknowledged) return res.status(500).json({ error: "Error ao atualizar dados" })
        if (result.modifiedCount === 0) return res.status(400).json({ message: "Não foi encontrado amigo com esse nome" })

        return res.status(200).json({
            message: `Foram atualizados ${result.modifiedCount} registros com sucesso e foram encontrados ${result.matchedCount} registros semelhantes`
        })
    })

    app.listen(3333, () => {
        console.log('API ouvindo porta 3333')
    })
});


