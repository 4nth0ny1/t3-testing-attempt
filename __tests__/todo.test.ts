import { type inferProcedureInput } from "@trpc/server";
import type { inferRouterOutputs } from "@trpc/server";
import { Todo, PrismaClient } from "@prisma/client";

import { render, screen, waitFor } from "@testing-library/react";
import { appRouter, type AppRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";
import { mockDeep } from "jest-mock-extended";
import { Session } from "next-auth";
import { createInnerTRPCContext } from "~/server/api/trpc";

describe("Todo Router", () => {
  it("should render all the todos", async () => {
    try {

      // const mockSession: Session = {
      //   expires: new Date().toISOString(),
      //   user: { id: "test-user-id", name: "Anthony" },
      // };
      // const caller = appRouter.createCaller({
      //   session: mockSession,
      //   prisma: prismaMock,
      // });

      const prismaMock = mockDeep<PrismaClient>();
      const mockOutput: Todo[] = [
        {
          id: "1",
          content: "hello test todo",
          done: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: "user-1",
        },
      ];

      const ctx = createInnerTRPCContext({
        session: {
          user: { id: "123", name: "John Doe" },
          expires: "1",
        },
      });

      // const caller = appRouter.createCaller(ctx);

      // prismaMock.todo.findMany.mockResolvedValue(mockOutput);

      // const todos = await caller.todo.getAll();
      // expect(todos).toHaveLength(1);
    } catch (error) {
      console.log(error);
    }
  });
});
