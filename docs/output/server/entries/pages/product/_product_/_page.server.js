import { PrismaClient } from "@prisma/client";
import { e as error } from "../../../../chunks/index.js";
const prisma = new PrismaClient();
async function load({ params }) {
  const urlRecord = await prisma.urlRecord.findFirst({
    where: {
      Slug: params.product,
      IsActive: true
    }
  });
  const productData = await prisma.product.findFirst({
    where: {
      Id: urlRecord?.EntityId
    },
    include: {
      Product_Picture_Mapping: {
        include: {
          Picture: true
        }
      }
    }
  });
  if (!productData)
    return error(404, "Failed fetching data");
  const imageData = [];
  for (const imageInfo of productData.Product_Picture_Mapping) {
    imageData.push({
      alt: imageInfo.Picture.AltAttribute,
      title: imageInfo.Picture.TitleAttribute,
      id: imageInfo.Picture.Id
    });
  }
  const data = {
    slug: params.product,
    name: productData.Name,
    shortDescription: productData.ShortDescription,
    longDescription: productData.FullDescription,
    price: productData.Price.toNumber(),
    images: imageData
  };
  return {
    productDetailsData: data
  };
}
export {
  load
};
