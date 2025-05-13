const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./models');

// Rotas
const authRoutes = require('./routes/authRoutes');
const healthRoutes = require('./routes/healthRoutes');
const privateRoutes = require('./routes/privateRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
    origin: 'https://erp-manager-system-nok1ylh7i-christian-limas-projects-55612625.vercel.app/', // ou '*', se for temporário
}));
app.use(express.json());

// Rotas públicas
app.use('/api/auth', authRoutes);
app.use('/api/health', healthRoutes);

// Rotas protegidas (JWT necessário)
app.use('/api/private', privateRoutes);

// Conexão com o banco e inicialização do servidor
db.sequelize.authenticate()
    .then(() => {
      console.log('🗄️  Conectado ao banco de dados PostgreSQL');
      return db.sequelize.sync(); // Sincroniza modelos com o DB
    })
    .then(() => {
      app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
      });
    })
    .catch((err) => {
      console.error('❌ Erro ao conectar no banco:', err);
    });
