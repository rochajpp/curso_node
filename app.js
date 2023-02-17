const app = require("./config/server");

app.listen(8080, () => {
    let x = 2;
    let y = 2;
    console.log("2 + 2 é ", x + y );
});