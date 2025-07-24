import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            name: 'Bejo',
            username: 'bejo',
            email: 'bejo@example.com',
            password: 'bejo123',
            phoneNumber: '08123456789',
            address: 'Jl. Merdeka No. 123, Jakarta Pusat',
            birthdate: new Date('2000-01-01'),
            nationalId: '1234567890',
            status: 'active',
            role: "user",
        }
    });
}

main()
.catch(e => console.error(e))
.finally(() => prisma.$disconnect());