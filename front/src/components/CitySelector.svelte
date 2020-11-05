<script>
	export let cities;
	export let onSelect;
	export let onCancel;
</script>

<div>
	<ul>
		{#each cities as city}
			<li>
				<span>{city.name}</span>
				<button on:click={() => onSelect(city)}>Choisir</button>
			</li>
		{/each}

		<button on:click={onCancel}>Annuler</button>
	</ul>
</div>
