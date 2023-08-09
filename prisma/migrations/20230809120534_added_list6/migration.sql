-- AddForeignKey
ALTER TABLE "ShoppingItem" ADD CONSTRAINT "ShoppingItem_id_fkey" FOREIGN KEY ("id") REFERENCES "ShoppingList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
