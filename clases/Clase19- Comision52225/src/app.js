const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
//const FileStore = require("session-file-store");
const MongoStore = require("connect-mongo"); // Esto es la libreria que nos va ayudar a persistir la data en la base de datos de mongo
const mongoose = require("mongoose"); // esto es la conexion a mongo
//const FileStore = FileStore(session);
const usersViewRouter = require("./routes/users.views.router");
const sessionRouter = require("./routes/sessions.router.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: ture }));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("views", __dirname + "/public");
app.set("views engine", "handlebars");
app.use(cookieParser());

const MONGO_URL = 27017;
app.use(
  session({
    //store: new FileStore({
    store: MongoStore.create({
      mongoURL: MONGO_URL,
      mongoOptions: { userNewUrlParser: true, useUnifiedTopology: true, ttl: 40 },
    }),
    //   path: "./sessions",
    //   ttl: 15000,
    //   retries: 0,
    // }) /* Path es donde se van a cargar los archivos que seria en la carpeta sessions que esta en la raiz de lo clase 19 comision .... en resumen es la ruta donde vivira la carpeta para almacenar las sessiones. El ttl(time to live): Es la vidad de la sesion, nosostros le estamos pasando 15 segundos. Y el Retries: son las veces que el servidor tratara de leer el archivo  */,
    secret: "CoderS3cret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/", viewsRouter);
app.use("/users", usersViewRouter);
app.use("/api/sessions", sessionRouter);

const SERVER_PORT = 9000;
app.listen(SERVER_PORT, () => {
  console.log(`Lintening on PORT ${SERVER_PORT}`);
});

//Esto que esta aca es para hacer la conexion con la base de datos
const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(" Connected to MongoDB using Mongoose");
  } catch (error) {
    console.log("We couldn't connect to BD using Mongoose: " + error);
    process.getMaxListeners();
  }
};
connectMongoDB();
