// import jsonServer
const jsonServer = require('json-server')


// import cors
const cors = require('cors')

// create jsonServer
const server = jsonServer.create()

// json type data - js data - before request resolve
const middileware = jsonServer.defaults()

// create a router
const router = jsonServer.router('db.json')

// apply in server
server.use(middileware)
server.use(cors())
server.use(router)

// set a port
const PORT = 5000

// run server
server.listen(PORT,()=>{
    console.log(`__json server start at PORT : ${PORT}____`);
})