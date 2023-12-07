const express = require("express");
const app = express();
require("dotenv").config();
const PORT = 5011;

const cors = require("cors");
const { SES } = require('@aws-sdk/client-ses');
const emailValidator = require("email-validator");

// AWSの設定
const ses = new SES({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

app.use(express.json());

app.use(cors({
    origin: process.env.NODE_ENV, // フロントエンドのURLを追加
    credentials: true  // enable set cookie
}));

app.post("/sendEmail", async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !emailValidator.validate(req.body.email) || !req.body.comment) throw new Error;

        const params = {
            Source: 'noreply@livegt.net',
            Destination: {
                ToAddresses: [process.env.EMAIL]
            },
            Message: {
                Subject: { Data: "Daichi Sakai's Portfolioからのお問い合わせ" },
                Body: { Text: { Data: `Daichi Sakai's Portfolioのお問い合わせフォームに${req.body.name}さん（${req.body.email}）から下記のお問い合わせがありました。${req.body.comment}` } }
            }
        };

        ses.sendEmail(params, (err, data) => {
            if (err) {
                throw new Error("Email sending failed.");
            }
        });

        return res.status(200).json({ message: "Email is Sending" })
    } catch (err) {
        console.log("err:", err);
        return res.status(500).json({ message: "Server Error" })
    }
})

app.listen(PORT, () => { console.log(`サーバーが起動しました。PORT:${PORT}`) });