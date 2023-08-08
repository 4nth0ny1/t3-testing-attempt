import { type inferProcedureInput } from "@trpc/server";
import type { inferRouterOutputs } from '@trpc/server'
import { Todo, PrismaClient } from "@prisma/client";


import { render, screen, waitFor } from "@testing-library/react";
import { appRouter, type AppRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";
import { mockDeep } from "jest-mock-extended";



describe("Todo Router", () => {
  it("should render all the todos", async () => {
    const prismaMock = mockDeep<PrismaClient>();

    const mockOutput: Todo[] = [
      {
        id: "1",
        content: "hello test todo",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "user-1"
      },
    ];

    const ctx = await createTRPCContext({
      session: {
        user: { id: "123", userId: "123421423" },
        expires: "1",
      }, prisma: prismaMock,
      });
    
    const caller = appRouter.createCaller(ctx);

    prismaMock.todo.findMany.mockResolvedValue(mockOutput);
      
    const todos = await caller.todo.getAll()
  
    expect(todos).toHaveLength(1);
  
  });
})
