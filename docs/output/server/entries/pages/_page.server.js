import { PrismaClient } from "@prisma/client";
new PrismaClient();
async function load() {
  return {
    categoriesInfo: {}
  };
}
export {
  load
};
