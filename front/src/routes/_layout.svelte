<script>
	import GlobalStyles from '../components/GlobalStyles';
	import ThemeSwitcher from '../components/ThemeSwitcher';
	import SkipLinks from '../components/SkipLinks';
	import {citySelectedStore as citySelected} from '../stores';
</script>

<GlobalStyles />

<header>
	<h1>Indice national de Fragilité Numérique</h1>
	<SkipLinks hasResults={!!$citySelected} city={$citySelected} />
	<ThemeSwitcher />
</header>

<main role="main">
	<slot></slot>
</main>

<style>
	header {
		padding: var(--double-unit) 0;
	}

	h1 {
		margin-bottom: var(--unit);
	}

	@media screen and (min-width: 30rem) {
		header {
			display: flex;
			align-items: center;
		}

		h1 {
			flex-grow: 1;
			margin-right: var(--unit);
			margin-bottom: 0;
		}
	}
</style>
