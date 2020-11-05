
<script>
	export let hasResults;
	export let city;

</script>

<ul>
	<li>
		<a class="button" href="#introduction">
			Aller à l'introduction
		</a>
	</li>
	<li>
		<a class="button" href="#citySearchFrom">
			Aller à la recherche
		</a>
	</li>
	{#if hasResults}
		<li>
			<a class="button" href="#results">
				Aller aux résultats : Indice national de fragilité numérique à {city.name}
			</a>
		</li>
	{/if}
</ul>

<style>
	ul {
		position: absolute;
		list-style: none;
		top: 0;
		left: 0;
		z-index: 350;
	}

	li {
		display: inline-block;
		list-style: none;
	}

	a {
		position: absolute;
		text-align: center;
    	min-width: calc(10 * var(--unit));
		left: -999em;
		padding: var(--quarter-unit) var(--unit);
	}

	a:hover,
	a:active,
	a:focus {
		left: auto;
	}
</style>
