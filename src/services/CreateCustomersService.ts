import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string;
    email: string;
}

class CreateCutsomerService{
    async execute({ name, email}: CreateCustomerProps){
        if(!name || !email){
        throw new Error("Preencha todos os campos")
        }
        return { ok: true }
    }
}

export { CreateCutsomerService }