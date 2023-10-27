/*
  Warnings:

  - The primary key for the `ShoppingItem` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ShoppingItem" DROP CONSTRAINT "ShoppingItem_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "quantity" DROP DEFAULT,
ADD CONSTRAINT "ShoppingItem_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ShoppingItem_id_seq";

-- CreateTable
CREATE TABLE "ShoppingList" (
    "id" TEXT NOT NULL,
    "shoppingListName" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "ShoppingList_pkey" PRIMARY KEY ("id")
);
