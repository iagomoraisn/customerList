import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCutsomerService } from "../services/CreateCustomersService";

class CreateCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply ){
        const { name, email } = request.body as {name: string, email: string };
    

        const customerService = new CreateCutsomerService()

        const customer = await customerService.execute({ name, email });

        reply.send(customer)
    }
}

export { CreateCustomerController }