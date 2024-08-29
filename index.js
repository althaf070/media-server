const JSONServer = require("json-server")
const MpServer = JSONServer.create()
const router = JSONServer.router('db.json')
const middlware = JSONServer.defaults()

const PORT=3000 || process.env.PORT

MpServer.use(middlware)
MpServer.use(router)

MpServer.listen(PORT, () => {
    console.log(`mediaplayer server started running at ${PORT} and waiting for client requests`);
    
})