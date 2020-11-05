<script>
	import GlobalStyles from '../components/GlobalStyles';
	import ThemeSwitcher from '../components/ThemeSwitcher';
	import SkipLinks from '../components/SkipLinks';
	import {citySelectedStore as citySelected} from '../stores';
</script>

<GlobalStyles />

<header role="banner">
	<h1>Indice national de Fragilité Numérique</h1>
	<SkipLinks hasResults={!!$citySelected} city={$citySelected} />
	<ThemeSwitcher />
</header>

<main role="main">
	<slot></slot>
</main>

<footer role="contentinfo">
	<p>©Team 3 - Design4green 2020</p>
	<ul>
		<li>
			<a href="https://institutnr.org/mentions-legales" target="_blank" title="Mentions légales (nouvel onglet)">
				Mentions légales
			</a>
		</li>
	</ul>
</footer>

<style>
	header {
		padding: var(--double-unit) 0;
	}

	footer {
		display: flex;
		flex-wrap: wrap;
		color: var(--theme-comp-color);
		padding: var(--half-unit);
		background-color: var(--theme-color);
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li:before {
		content: '|';
   		padding: 0 var(--half-unit);
	}

	a {
		text-decoration: underline;
		padding: 0;
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
