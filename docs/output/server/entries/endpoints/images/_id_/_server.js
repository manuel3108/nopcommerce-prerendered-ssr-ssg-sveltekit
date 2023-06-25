import { PrismaClient } from "@prisma/client";
import { error } from "console";
const prerender = true;
const prisma = new PrismaClient();
const GET = async ({ params }) => {
  const image = await prisma.picture.findFirst({
    where: {
      Id: Number(params.id)
    },
    include: {
      PictureBinary: true
    }
  });
  if (!image || !image.PictureBinary)
    error(404, "wrong data");
  return new Response(image?.PictureBinary[0].BinaryData, {
    status: 200,
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": (
        // Use filename* instead of filename to support non-ASCII characters
        `attachment; filename*=UTF-8''${encodeURIComponent("filename.asd")}`
      )
    }
  });
};
export {
  GET,
  prerender
};
