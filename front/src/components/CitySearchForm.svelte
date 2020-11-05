<script>
	import {citySelectedStore as citySelected} from '../stores';
	import {fetchCitySuggestions} from '../api';
	import ResetButton from './ResetButton';

	const handleSubmit = (event) => {
		event.preventDefault();
		fetchCitySuggestions(
			document.getElementById('postal-code').value
		);
	};
</script>

<section>
	<header>
		<h2 id="citySearchFrom">Recherche</h2>
	</header>

	<form on:submit={handleSubmit}>
		<label for="postal-code">Code postal (ex: 49000)</label>

		<div>
			<input id="postal-code" type="search" pattern="(?:[0-8]\d|9[0-8])\d{`{3}`}" />
			<input type="submit" value="Rechercher" />
			{#if $citySelected}
				<ResetButton />
			{/if}
		</div>

	</form>

</section>

<style>
	div {
		display: flex;
		width: 100%;
		margin-bottom: var(--unit);
	}
</style>
