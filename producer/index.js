const fastify=require('fastify')({logger:true})
const { createNewOrder } = require('./queues');


fastify.get('/', (ctx, res) => {
    ctx.body = {
        status: "OK",
        data: "Server is working",
    };
    res.send(200)
});

fastify.post("/order", async (request, response) => {
    await createNewOrder(request.body);
    let resposeBody = {
        status: "OK",
        data: {
            msg: "Order processed succsessfully!",
            order: request.body,
        }
    }
    response.send(resposeBody)
})

fastify.listen({port:3005}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server start running on 3000!");
    }
})