const express = require("express");
const cors = require('cors');

let users =[{name:"Alex",age:39},{name:"Bob", age:20}]

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

(async () => {
    app.get('/users', async(req,res)=>{
        res.send(JSON.stringify(users))
    });
})();

app.listen(port,() => {
    console.log(`Сервер был запущен: http://localhost:${port}\n`);
})