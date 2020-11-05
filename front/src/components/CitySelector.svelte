<script>
	export let cities;
	export let onSelect;
</script>

<div data-screen-only>
	<p aria-live="polite">
		{#if cities.length === 0}
			<span>Aucune commune ne correspond au code postal saisi</span>
		{:else}
			{#if cities.length === 1}
				<span>1 commune correspond au code postal saisi</span>
			{:else}
				<span>{cities.length} communes correspondent au code postal saisi</span>
			{/if}
		{/if}
	</p>

	<ul>
		{#each cities as city}
			<li>
				<button
					on:click={() => onSelect(city)}
					title={`Voir l'indice national de fragilité numérique à ${city.name}`}
				>
					{city.name}
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		padding: 0;
		list-style: none;
	}

	li {
		display: inline-block;
		margin-right: var(--quarter-unit);
	}
</style>
