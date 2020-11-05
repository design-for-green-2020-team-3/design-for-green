<script>
	import {slide} from 'svelte/transition';
	import {prop} from 'ramda';
	import {Zones} from '../types/domain';

	export let title;
	export let scores;
	export let city;

	const labels = {
		[Zones.epci]: city.name,
		[Zones.department]: 'Département',
		[Zones.region]: 'Région'
	};

	$: maxScore = Math.max(...scores.map(prop('score')));
</script>

<article>
	<header>
		<h3>{title}</h3>
	</header>

	<div class="body">
		<aside>
			<slot></slot>
		</aside>

		<ol class="scores">
			{#each scores as {zone, score}}
				<li class:current={zone === Zones.epci}>
					<p><strong>{labels[zone]} :</strong> {score.toFixed(2)}</p>
					<div
						in:slide
						class="indicator"
						style="width: {(score / maxScore) * 100}%"
						data-screen-only
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
		color: var(--theme-muted-color);
		font-style: italic;
	}

	ol {
		flex-grow: 1;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.indicator {
		margin-bottom: var(--half-unit);
		height: var(--half-unit);
		background: var(--theme-lighter-color);
	}

	li:last-child .indicator {
		margin-bottom: 0;
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
			flex-direction: row-reverse;
		}

		aside {
			flex-basis: 33%;
			margin-left: var(--unit);
			margin-bottom: 0;
		}
	}

	@media screen and (min-width: 60em) {
		article {
			margin-bottom: 0;
		}
	}
</style>
