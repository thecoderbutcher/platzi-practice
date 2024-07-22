const express =  require('express');
const routerApi = require('./routes/')
const app = express();
const port = 3000;
const {errorHanler, logErrors} = require('./middlewares/error.handler')

app.use(express.json())
app.get('/', (req, res) => {
  res.send("gola desde mi server");
});

app.use(logErrors);
app.use(errorHanler);
routerApi(app);


app.listen(port, () => {
  console.log("port", port);
})
