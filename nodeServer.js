let http = require('http')
let nodemailer = require('nodemailer')

// defining transporter for sending emails
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "bfcab09f7971f5",
        pass: "d48df4e0063273"
    }
});

let fs = require('fs')

let server = http.createServer((req, res) => {

    console.log(`Trying to ${req.method} from ${req.url}`)
    // finding path for the file
    // let mod_url = []

    // ON PC

    // req.url.split('/').forEach((elem) => {
    //     if (elem !== '/') {
    //         mod_url.push(elem)
    //     } else {
    //         mod_url.push('\\')
    //     }
    // })
    // mod_url = mod_url.join('\\')
    // let path = __dirname + "\\" + mod_url


    let path = __dirname + req.url
    // console.log(path)

    // responding the home page
    if (req.url === '/' || req.url === '/index.html') {
        res.writeHead(200)
        // let html_file = []
        fs.readFile('./index.html', 'utf-8', (err, chunk) => {
            if (err) {
                console.log(err)
            }
            // console.log(chunk)
            res.end(chunk)
        })

        //   responding for css and javascript files
    } else if (/(.*css|.*js)/.test(req.url)) {
        // console.log(path)
        fs.readFile(path, 'utf-8', (err, chunk) => {
            if (err) {
                console.log(err)
            }
            // console.log(chunk)
            res.end(chunk, 'utf-8')
        })
    }
    // responding to images
    else if (/(.*jpg|.*png)/.test(req.url)) {
        // console.log('this image is located but not loading rt now :       ', req.url)
        fs.readFile(path, 'Base64', (err, data) => {
            if (!err) res.end(data, 'Base64')
            else {
                console.log(err)
            }
        })
    } else if (/.*mailto:satyammtiwarii@gmail\.com/.test(req.url)) {
        console.log('Person Trying to send Personal Details')
        let detail = path.split('?')[1].split('&')

        let name = detail[0].split('=')[1].split('+').join(' ')
        let mob_number = detail[2].split('=')[1]
        let email = detail[1].split('=')[1].split('%40').join('@')

        console.log(name, mob_number, email)
        console.log(detail)

        var mailOptions = {
            from: 'satyammtiwarii@gmail.com',
            to: email,
            subject: 'Trial of Automatic Email',
            text: 'Hello there, \nI am Satyam Tiwari, I am glad to know that you liked my portfolio. \n' +
                'Your connection request has been received... I will be reaching out to you soon.... '
        };
        // sending email
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.writeHead(200)
        // let html_file = []
        fs.readFile('./index.html', 'utf-8', (err, chunk) => {
            if (err) {
                throw err
            }
            // console.log(chunk)
            res.end(chunk)
        })

        //    sending myself about the person in contact
    }
})


// making server listen to host with a port
let port = process.env.PORT || 5000

server.listen(port, '0.0.0.0', () => {
    console.log('Server is up and running..... ')
})
