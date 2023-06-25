import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';

const prisma = new PrismaClient();

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
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

	if (!productData) return error(404, 'Failed fetching data');

	/**
	 * @typedef {object} ProductDetailsData
	 * @property {string} slug
	 * @property {string} name
	 * @property {number} price
	 * @property {string | null} shortDescription
	 * @property {string | null} longDescription
	 * @property {ImageData[]} images
	 *
	 * @typedef {object} ImageData
	 * @property {number} id
	 * @property {string | null} alt
	 * @property {string | null} title
	 */

	/** @type {ImageData[]} */
	const imageData = [];
	for (const imageInfo of productData.Product_Picture_Mapping) {
		imageData.push({
			alt: imageInfo.Picture.AltAttribute,
			title: imageInfo.Picture.TitleAttribute,
			id: imageInfo.Picture.Id
		});
	}

	/** @type {ProductDetailsData} */
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
