<script>
	export let data;

	const { productDetailsData } = data;
</script>

<div>
	<div class="header">{productDetailsData.name}<br /><br /></div>

	<div class="content">
		<div class="images">
			{#each productDetailsData.images as { alt, title, id }}
				<img src="/images/{id}" {alt} {title} />
			{/each}
		</div>

		<div class="details">
			<div>{@html productDetailsData.shortDescription}<br /><br /></div>
			<div>{@html productDetailsData.longDescription}<br /><br /></div>
			<div>{productDetailsData.price}<br /><br /></div>
		</div>
	</div>
</div>

<style>
	.header {
		text-align: center;
		font-size: 2rem;
	}

	.content {
		display: flex;
	}

	.details {
		margin-left: 1rem;
	}

	.images {
		margin-right: 1rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.images img {
		max-width: 300px;
	}
</style>
