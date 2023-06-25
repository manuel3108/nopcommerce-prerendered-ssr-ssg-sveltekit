import { PrismaClient } from "@prisma/client";
import { e as error } from "../../../../chunks/index.js";
const prisma = new PrismaClient();
async function load({ params }) {
  const urlRecord = await prisma.urlRecord.findFirst({
    where: {
      Slug: params.category,
      IsActive: true
    }
  });
  const categoryWithProducts = await prisma.category.findFirst({
    where: {
      Id: urlRecord?.EntityId
    },
    include: {
      Product_Category_Mapping: {
        include: {
          Product: true
        }
      }
    }
  });
  const subcategories = await prisma.category.findMany({
    where: {
      ParentCategoryId: categoryWithProducts?.Id
    }
  });
  if (!categoryWithProducts)
    return error(404, "Failed fetching data");
  const products = categoryWithProducts?.Product_Category_Mapping.map((x) => x.Product);
  const productIds = products.map((x) => x.Id);
  const productUrlRecords = await prisma.urlRecord.findMany({
    where: {
      EntityId: {
        in: productIds
      },
      EntityName: "Product",
      IsActive: true
    }
  });
  const subcategoriesUrlRecords = await prisma.urlRecord.findMany({
    where: {
      EntityId: {
        in: subcategories.map((x) => x.Id)
      },
      EntityName: "Category",
      IsActive: true
    }
  });
  const productImages = await prisma.picture.findMany({
    where: {
      Product_Picture_Mapping: {
        some: {
          ProductId: {
            in: productIds
          }
        }
      }
    },
    include: {
      Product_Picture_Mapping: true
    }
  });
  const subcategoriesImages = await prisma.picture.findMany({
    where: {
      Id: {
        in: subcategories.map((x) => x.PictureId)
      }
    }
  });
  if (!productImages)
    return error(404, "Image not found");
  const data = {
    name: categoryWithProducts.Name,
    slug: params.category,
    imageId: 0,
    alt: "",
    title: "",
    subcategories: [],
    products: []
  };
  for (const category of subcategories) {
    const image = subcategoriesImages.find((x) => x.Id == category.PictureId);
    const urlRecord2 = subcategoriesUrlRecords.find((x) => x.EntityId == category.Id);
    if (!image || !urlRecord2)
      continue;
    data.subcategories.push({
      name: category.Name,
      alt: image?.AltAttribute,
      title: image?.TitleAttribute,
      products: [],
      slug: urlRecord2?.Slug,
      subcategories: [],
      imageId: image.Id
    });
  }
  for (const product of products) {
    const urlRecord2 = productUrlRecords.find((x) => x.EntityId == product.Id);
    if (!urlRecord2)
      continue;
    const image = productImages.find((x) => x.Product_Picture_Mapping[0].ProductId == product.Id);
    if (!image)
      continue;
    data.products.push({
      name: product.Name,
      slug: urlRecord2.Slug,
      imageId: image.Id,
      imageAlt: image.AltAttribute
    });
  }
  return {
    categoryDetailsData: data
  };
}
export {
  load
};
