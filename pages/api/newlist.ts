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
    const { method } = req;
    console.log('🚀 ~ method:', method);

    switch (method) {
        case 'POST':
            const data = req.body;
            console.log('🚀 ~ prisma:', prisma, 'data', data);
            const result = await prisma.shoppingList.create({
                data: {
                    shoppingListName: data.shoppingListName,
                    item: {
                        connect: [
                            {
                                name: data.item[0].name,
                                quantity: data.item[0].quantity,
                                quantityType: data.item[0].unit,
                                type: data.item[0].categoty
                            }
                        ]
                    }
                }
            });
            // const result2 = await prisma.shoppingItem.create({
            //     data: {

            //     }
            // });

            res.status(201).json(result);
            // res.status(201).json(result2);
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
