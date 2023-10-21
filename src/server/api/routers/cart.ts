import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { quantityInput } from "../../schema";

const addToCartSchema = z.object({
  itemCount: z.number(),
  productID: z.number(),
  description: z.string(),
  category: z.string(),
  enable: z.boolean(),
});

export const cartRouter = createTRPCRouter({
  addToCart: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const cartItem = await ctx.db.bag.findFirst({
        where: {
          productId: input.id,
          cartId: "clnzjvlkn00003mijmorfnny3",
          checkedOut: false,
        },
      });

      if (!cartItem) {
        const newBagItem = await ctx.db.bag.create({
          data: {
            cartId: "clnzjvlkn00003mijmorfnny3",
            itemCount: 1,
            productId: input.id,
          },
        });

        return newBagItem;
      }

      if (cartItem) {
        const updatedItem = await ctx.db.bag.updateMany({
          where: {
            cartId: "clnzjvlkn00003mijmorfnny3",
            productId: input.id,
            checkedOut: false,
          },
          data: {
            itemCount: { increment: 1 },
          },
        });
        return updatedItem;
      }
    }),

  getCartItemsPrice: publicProcedure.query(async ({ ctx }) => {
    const cart = await ctx.db.bag.findMany({
      where: {
        cartId: "clnzjvlkn00003mijmorfnny3",
        selected: true,
        checkedOut: false,
      },
      select: {
        itemCount: true,
        item: {
          select: {
            price: true,
          },
        },
      },
    });

    const price: number = cart.reduce((price: number, bag) => {
      const currentItemPrice: number = (bag.itemCount * +bag.item.price) / 100;

      return price + currentItemPrice;
    }, 0);

    return price.toFixed(2);
  }),

  getCart: publicProcedure.query(({ ctx }) => {
    return ctx.db.bag.findMany({
      include: { item: true },
    });
  }),

  incrementItemCount: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input, ctx }) => {
      const updatedCount = await ctx.db.bag.update({
        where: {
          id: input.id,
        },
        data: {
          itemCount: {
            increment: 1,
          },
        },
      });

      return updatedCount;
    }),

  decrementItemCount: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input, ctx }) => {
      const updatedCount = await ctx.db.bag.update({
        where: {
          id: input.id,
        },
        data: {
          itemCount: {
            decrement: 1,
          },
        },
      });

      return updatedCount;
    }),

  deleteItem: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input, ctx }) => {
      const deletedItem = await ctx.db.bag.deleteMany({
        where: {
          id: input.id,
          cartId: "clnzjvlkn00003mijmorfnny3",
        },
      });

      return deletedItem;
    }),
});
