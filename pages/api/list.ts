import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
    req: { body?: any; method?: any },
    res: {
        status: (arg0: number) => {
            (): any;
            new (): any;
            json: { (arg0: any): void; new (): any };
            end: { (arg0: string): void; new (): any };
        };
        setHeader: (arg0: string, arg1: string[]) => void;
    }
) {
    const { method, body } = req;

    switch (method) {
        case 'POST':
            const result = await prisma.shoppingList.create({
                data: {
                    shoppingListName: body.shoppingListName,
                    items: {
                        create: {
                            name: body.item[0].name,
                            quantity: body.item[0].quantity,
                            quantityType: body.item[0].unit,
                            type: body.item[0].category[0]
                        }
                    }
                }
            });

            res.status(201).json(result);
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
