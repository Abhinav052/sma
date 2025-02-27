import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({ publicRoutes: ["/", "/home"] });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
