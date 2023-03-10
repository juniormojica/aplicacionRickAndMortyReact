const http = require("http")
const characters = require("./utils/data")
const PORT = 3001;



const server = http.createServer((req, res) => {
    let { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');
    // console.log(url);
    let lastNumber = String(url)
    let validacionNumero = parseInt(lastNumber.charAt(lastNumber.length - 1))
    console.log(typeof validacionNumero);
    const regex = /^\/rickandmorty\/[1-4]$/;

    if (url.includes("/rickandmorty/character") && regex.test(url)) {
        const clientiD = validacionNumero;
        clientRequestedData = characters.filter((el) => {
            return el.id === clientiD
        })

        console.log(clientRequestedData);
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(JSON.stringify(clientRequestedData))
        return
    } else if (url === "/rickandmorty/character") {
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(JSON.stringify(characters))

        return;
    } else {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.end("404 Not Found");
        console.log(url);
        return;
    }


})
server.listen(PORT, "localhost")

console.log(`Server raised in port ${PORT}`);

// switch (url) {
//     case (true):
//         const clientiD = validacionNumero;
//         clientRequestedData = characters.filter((el) => {
//             return el.id === clientiD
//         })

//         console.log(clientRequestedData);
//         res.writeHead(200, { "Content-type": "application/json" })
//         res.end(JSON.stringify(clientRequestedData))
//         break;

//     case "/":

//         res.writeHead(200, { "Content-type": "application/json" })
//         res.end(JSON.stringify(characters))

//         break;

//     default:
//         res.writeHead(404, { "Content-type": "text/plain" });
//         res.end("404 Not Found");
//         console.log(url);
//         break;
// }