<script>
	export let cities;
	export let onSelect;
	export let onCancel;
</script>

<div>
	<ul>
		{#each cities as {name, postalCode, inseeCode}}
			<li>
				<span>{name} ({postalCode})</span>
				<button on:click={() => onSelect(inseeCode)}>Choisir</button>
			</li>
		{/each}

		<button on:click={onCancel}>Annuler</button>
	</ul>
</div>
