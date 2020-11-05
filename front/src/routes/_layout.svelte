<script>
	import GlobalStyles from '../components/GlobalStyles';
</script>

<GlobalStyles />

<header>
	<h1>Indice national de Fragilité Numérique</h1>
</header>

<main role="main">
	<slot></slot>
</main>

<style>
	header {
		padding: var(--double-unit) 0;
	}
</style>
