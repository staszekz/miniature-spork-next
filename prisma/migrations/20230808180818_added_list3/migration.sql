/*
  Warnings:

  - Added the required column `shoppingListName` to the `ShoppingList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShoppingItem" ALTER COLUMN "quantity" DROP DEFAULT;

-- AlterTable
ALTER TABLE "ShoppingList" ADD COLUMN     "shoppingListName" TEXT NOT NULL;
