import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!<any>global.prisma) {
    (<any>global) = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;