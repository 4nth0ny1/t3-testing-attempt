import { z } from "zod";
import {
  createTRPCRouter,

  protectedProcedure,
} from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({


  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany();
  }),


});
