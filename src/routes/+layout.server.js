import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	const categories = await prisma.category.findMany();
	const categoryIds = categories.map((x) => x.Id);
	const urlRecords = await prisma.urlRecord.findMany({
		where: {
			EntityId: {
				in: categoryIds
			},
			EntityName: 'Category',
			IsActive: true
		}
	});

	/**
	 * @typedef {object} CategoryData
	 * @property {string} name
	 * @property {string} slug
	 * @property {CategoryData[]} subcategories
	 */

	const mainCategories = categories.filter((x) => x.ParentCategoryId == 0);

	/** @type {CategoryData[]} */
	const data = [];
	for (const category of mainCategories) {
		const urlRecord = urlRecords.find((x) => x.EntityId == category.Id);
		if (!urlRecord) continue;

		var childCategories = categories.filter((x) => x.ParentCategoryId == category.Id);

		const categoryItem = {
			name: category.Name,
			slug: urlRecord.Slug,
			subcategories: []
		};
		data.push(categoryItem);

		for (const subcategory of childCategories) {
			const subCategoryUrlRecord = urlRecords.find((x) => x.EntityId == subcategory.Id);

			categoryItem.subcategories.push({
				name: subcategory.Name,
				slug: subCategoryUrlRecord.Slug,
				subcategories: []
			});
		}
	}

	return {
		categoriesInfo: data
	};
}
