// Importa as bibliotecas necessárias
import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controller/postsController.js";
import cors from "cors";

const corsOption = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}
// Configura o armazenamento de arquivos (Multer)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define o diretório de destino para os uploads ("uploads/")
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo enviado
    cb(null, file.originalname);
  }
});

// Cria uma instância do Multer com a configuração de armazenamento
const upload = multer({ dest: "./uploads", storage });

// Define as rotas da aplicação
const routes = (app) => {
  // Habilita o middleware express.json() para interpretar dados JSON nas requisições
  app.use(express.json());
  app.use(cors(corsOption));
  // Rota GET para listar posts (caminho: "/posts")
  app.get("/posts", listarPosts);

  // Rota POST para criar um novo post (caminho: "/posts")
  app.post("/posts", postarNovoPost);

  // Rota POST para upload de imagem (caminho: "/upload")
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost)
};

// Exporta a função routes para ser utilizada em outros módulos
export default routes;