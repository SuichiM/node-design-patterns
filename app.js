import express from 'express';

const app = express();

const port = process.env.PORT || 8888;

app.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Sea Bienvenido al mundo',
    version: '1.0.0',
  });
});

app.listen(port);
console.log('Aplicação executando na porta ', port);