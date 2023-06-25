<script>
	export let data;
</script>

<div class="header">
	{data.categoryDetailsData.name}
</div>

{#if data.categoryDetailsData.subcategories.length > 0}
	<h2>Subcategories</h2>
	<div class="categories">
		{#each data.categoryDetailsData.subcategories as subcategory}
			<div class="category">
				<a href="/category/{subcategory.slug}">
					{subcategory.name}
					<img
						src="/images/{subcategory.imageId}"
						alt={subcategory.alt}
						title={subcategory.title}
					/>
				</a>
			</div>
		{/each}
	</div>
{/if}

{#if data.categoryDetailsData.products.length > 0}
	<h2>Products</h2>
	<div class="products">
		{#each data.categoryDetailsData.products as product}
			<div class="product">
				<a href="/product/{product.slug}">
					{product.name}
					<img src="/images/{product.imageId}" alt={product.imageAlt} />
				</a>
			</div>
		{/each}
	</div>
{/if}

<style>
	.header {
		text-align: center;
		font-size: 2rem;
	}

	.categories,
	.products {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.category,
	.product {
		margin: 0.25rem;
	}

	.category img,
	.product img {
		max-width: 300px;
	}
</style>
