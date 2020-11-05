<script>
	export let cities;
	export let onSelect;
</script>

<div data-screen-only>
	<p aria-live="polite">
		{cities.length} commune{cities.length > 1 ? 's' : ''} corresponde{cities.length > 1 ? 'nt' : ''} à votre code postal
	</p>

	<ul>
		{#each cities as city}
			<li>
				<span></span>
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
		padding: 0%;
		list-style: none;
	}

	li {
		display: inline-block;
		margin-right: var(--quarter-unit);
	}
</style>
