import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface RequestWithDate extends Omit<Request, 'body'> {
  body: {
    shoppingListName: string;
    date: string;
  };
}

export default async function handler(
  req: RequestWithDate,
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
          date: body.date
          //   items: {
          //     create: body.items.map((item: any) => ({
          //       name: item.name,
          //       quantity: item.quantity,
          //       quantityType: item.unit,
          //       type: item.category[0]
          //     }))
          //   }
        }
      });

      res.status(201).json(result);
      break;
    case 'GET':
      const shoppingList = await prisma.shoppingList.findMany();
      res.status(200).json(shoppingList);
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
