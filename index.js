import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { sequelize } from './src/models/index.js';

// Importar rutas
import routerPrincipal from './src/routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // 👈 habilitar CORS para todas las rutas
app.use(morgan('dev')); // imprime en la consola las peticiones que recibe tu servidor ej: GET /api/productos 200 15ms
app.use(express.json()); // convierte el body a JSON

app.get('/', (req, res) => {
  res.send('¡Backend funcionando!');
});

// Usar las rutas
app.use('/api', routerPrincipal); // cualquier ruta declarada en routes/index.js queda prefijada con /api.

// Iniciar servidor y sincronizar DB
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida correctamente.');

    // Sincroniza los modelos con la base de datos.
    // force: false (default) - No borra tablas si existen.
    // force: true - Borra y recrea tablas. ¡PELIGROSO en producción!
    // alter: true - Intenta modificar tablas existentes.
    await sequelize.sync({ force: false }); // Cambia bajo tu propio riesgo
    console.log('🔄 Modelos sincronizados con la base de datos.');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
  }
}

startServer();
