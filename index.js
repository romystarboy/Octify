import express from "express"
import connectDB from './config/db.js'
import dotenv from "dotenv"
import bodyParser from 'body-parser';
import authRoute from "./routes/auth.js"
import usagerRoute from "./routes/usager.js"
import adminRoute from "./routes/admin.js"
import { engine } from "express-handlebars"
import path from 'path'
import { fileURLToPath } from 'url';
import QRCode from 'qrcode'
import ejs from 'ejs'
import pdf from 'html-pdf'

dotenv.config();

const app = express();
connectDB();




app.set("view engine", "ejs")
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));



app.use("/auth", authRoute)
app.use("/usager", usagerRoute)
app.use("/admin", adminRoute)

app.get("/", async (req, res) => {
    res.render("home");
});

app.get("/login", async (req, res) => {

    res.render("login");
});
app.get("/user", async (req, res) => {

    res.render("user");
});

// app.get("/admin", async (req, res) => {

//     res.render("admin");
// });
// app.get("/admin", async (req, res) => {

//     res.render("admin");
// });
// app.get("/now-ui-dashboard-master/example/icons.html", async (req, res) => {
//     
// });

app.get("/Act", async (req, res) => {
    const data = {
        "matricule": "568563452354875428729859868926"
    }
    let code = '';

    if (data) {
        const dataJson = JSON.stringify(data)

        QRCode.toDataURL(dataJson, function (err, string) {
            if (err) throw err
            code = string
        })
    }
    // QRCode.toFile("public/qrcode/qr.png", dataJson, function (err) {
    //     if (err) throw err
    // })


    res.render("Act", { act: code });
});

app.get("/pdf", (req, res) => {
    const __filename = fileURLToPath(import.meta.url);

    const __dirname = path.dirname(__filename);

    ejs.renderFile(path.join(__dirname, './views/Act.ejs'), function (err, str) {
        if (err) return res.send(err);

        // str now contains your rendered html


        pdf.create(str).toFile("report.pdf", function (err) {
            if (err) return res.send(err);

            res.send("File created successfully");
        });
    });
});




// QRCode.toString(dataJson, function (err, string) {
//     if (err) throw err
//     return string
// })













app.listen(7000, () => {
    console.log("server running on port 7000 ");
})