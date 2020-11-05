<script>
	import {fetchCitySuggestions} from '../api';

	const handleSubmit = (event) => {
		event.preventDefault();
		fetchCitySuggestions(
			document.getElementById('postal-code').value
		);
	};
</script>

<section>
	<header>
		<h2>Recherche</h2>
	</header>

	<form on:submit={handleSubmit}>
		<label for="postal-code">Code postal</label>

		<div>
			<input id="postal-code" type="search" />
			<input type="submit" value="GO" />
		</div>
	</form>
</section>

<style>
	div {
		display: flex;
		width: 100%;
	}
</style>
