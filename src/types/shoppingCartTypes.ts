import { Shopping_Cart } from "@prisma/client";


export type IInsertData = Omit<Shopping_Cart, "id">