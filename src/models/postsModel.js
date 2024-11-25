import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Cria uma variável `conexao` que armazena o resultado da função `conectarAoBanco`,
// estabelecendo a conexão com o banco de dados usando a string de conexão obtida da variável de ambiente `STRING_CONEXAO`.

export async function getTodosPosts() {
    // Função assíncrona que recupera todos os posts do banco de dados.
    const db = conexao.db("Imersão-InstaBytes");
    // Obtém o banco de dados "Imersão-InstaBytes" da conexão estabelecida.
    const colecao = db.collection("posts");
    // Obtém a coleção "posts" do banco de dados.
    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos da coleção e retorna um array com os resultados.
}

export async function criarPost(novoPost) {
    const db = conexao.db("Imersão-InstaBytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("Imersão-InstaBytes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}