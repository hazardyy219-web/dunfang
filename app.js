require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

console.log('Current directory:', __dirname);
console.log('Views directory:', path.join(__dirname, 'views'));
console.log('Public directory:', path.join(__dirname, 'public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/index');
app.use('/', routes);

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message, clientTimestamp } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: '所有字段都不能为空' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: '请输入有效的邮箱地址' });
    }

    const timestamp = clientTimestamp || new Date().toISOString().replace('T', ' ').substring(0, 19);
    const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.MAIL_TO,
        subject: `【DUNFANG 官网留言】${name} - ${subject}`,
        text: `客户姓名：${name}\n客户邮箱：${email}\n留言主题：${subject}\n留言内容：\n${message}\n提交时间：${timestamp}`
    };

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        const messageData = {
            name,
            email,
            subject,
            message,
            timestamp: clientTimestamp ? new Date().toISOString() : new Date().toISOString()
        };

        const filePath = path.join(__dirname, 'messages.json');
        let messages = [];

        if (fs.existsSync(filePath)) {
            const existingData = fs.readFileSync(filePath, 'utf8');
            if (existingData.trim()) {
                messages = JSON.parse(existingData);
            }
        }

        messages.push(messageData);
        fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), 'utf8');
        console.log('Message saved to messages.json');

        res.json({ success: true, message: '留言发送成功！我们会尽快回复您' });
    } catch (error) {
        console.error('Error sending email or saving message:', error);
        res.status(500).json({ success: false, message: '发送失败，请稍后重试' });
    }
});

app.use((req, res) => {
    console.log('404 error for path:', req.path);
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;