import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { TRPCError, initTRPC } from "@trpc/server";

const t = initTRPC.create();
const middleware = t.middleware;

const isAuth = middleware(async (opts) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return opts.next({
    //conext: directly pass value from middleware to the API
    ctx: {
      userId: user.id,
      user,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;

//goes via isAuth to ensure user validation
export const privateProcedure = t.procedure.use(isAuth);
