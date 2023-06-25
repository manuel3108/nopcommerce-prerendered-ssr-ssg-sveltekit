<script>
	export let data;

	const { categoriesInfo } = data;
</script>

{#each categoriesInfo as { name, slug }}
	<div>
		<a href="/category/{slug}">{name}</a>
	</div>
{/each}
