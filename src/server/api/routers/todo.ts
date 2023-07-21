import { z } from "zod";
import {
  createTRPCRouter,

  protectedProcedure,
} from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({


  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany();
  }),

  delete: protectedProcedure
  .input(z.string())
  .mutation(({ ctx, input}) => {
    return ctx.prisma.todo.delete({
      where: {
        id: input
      }
    })
  }), 


});
