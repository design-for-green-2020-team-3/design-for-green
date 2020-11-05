<script>
	import {slide} from 'svelte/transition';
	import {prop} from 'ramda';

	export let title;
	export let scores;
	export let city;

	const maxScore = Math.max(...scores.map(prop('score')));
	const labels = {
		city: city.name,
		dpt: 'Département',
		region: 'Région',
		global: 'Global'
	};
</script>

<article>
	<header>
		<h3>{title}</h3>
	</header>

	<div class="body">
		<aside>
			<slot></slot>
		</aside>

		<ol>
			{#each scores as {zone, score}}
				<li class:current={zone === 'city'}>
					<p><strong>{labels[zone]} :</strong> {score}</p>
					<div
						in:slide
						class="indicator"
						style="width: {(score / maxScore) * 100}%"
					/>
				</li>
			{/each}
		</ol>
	</div>
</article>

<style>
	article {
		margin-bottom: var(--unit);
	}

	header {
		margin: 0 0 var(--unit) 0;
	}

	aside {
		margin-bottom: var(--unit);
		padding: var(--unit);
		background: var(--theme-light-color);
		color: var(--theme-comp-color);
	}

	ol {
		flex-grow: 1;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		margin-bottom: var(--half-unit);
	}

	li:last-child {
		margin-bottom: 0;
	}

	.indicator {
		height: var(--half-unit);
		background: var(--theme-lighter-color);
	}

	.current {
		color: var(--positive-color);
	}

	.current .indicator {
		background: var(--positive-color);
	}

	@media screen and (min-width: 30em) {
		.body {
			display: flex;
		}

		aside {
			flex-basis: 33%;
			margin-right: var(--unit);
			margin-bottom: 0;
		}
	}

	@media screen and (min-width: 60em) {
		article {
			margin-bottom: 0;
		}
	}
</style>
