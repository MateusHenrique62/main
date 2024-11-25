import express from "express";
import routes from "./src/routes/postsRoutes.js";
// Importa o framework Express, que será utilizado para criar a aplicação web.

const app = express();
// Cria uma instância do Express e armazena-a na variável `app`, que será o objeto principal da aplicação.
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
    // Inicia o servidor Express na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
    console.log("Servidor escutando...");
});