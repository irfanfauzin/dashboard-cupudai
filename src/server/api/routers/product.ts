import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const productSchema = z.object({
  name: z.string(),
  price: z.string(),
  description: z.string(),
  category: z.string(),
  enable: z.boolean(),
});

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(productSchema)
    .mutation(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.product.create({
        data: {
          name: input.name,
          author: "Test",
          sold: 0,
          price: input.price,
          enable: input.enable,
          description: input.description,
          image: "test",
          category: {
            connect: { id: input.category },
          },
        },
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const deletedProduct = await ctx.db.product.deleteMany({
        where: {
          id: input.id,
        },
      });
      return deletedProduct;
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany({
      include: {
        category: true,
      },
    });
  }),
});
