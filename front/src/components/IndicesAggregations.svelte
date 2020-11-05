<script>
	import IndexAggregations from './IndexAggregations';
	import {Indices} from '../types/domain';

	export let aggregations;
	export let city;
</script>

<section>
	<header>
		<h2>Indice national de fragilité numérique à {city.name}</h2>
	</header>

	<div class="body">
		<IndexAggregations
			title="Accès à l'information"
			scores={aggregations[Indices.Indice0]}
			city={city}
		>
			<p>
				Identification des territoires mal couverts par une offre de service
				d'information ou des populations qui auront des difficultés à comprendre
				l'information.
			</p>
		</IndexAggregations>

		<IndexAggregations
			title="Accès aux interfaces numériques"
			scores={aggregations[Indices.Indice1]}
			city={city}
		>
			<p>
				Identification des territoires mal couverts par les réseaux ou dans
				lesquels des populations auront des difficultés financières à y accéder.
			</p>
		</IndexAggregations>

		<IndexAggregations
			title="Compétences administratives"
			scores={aggregations[Indices.Indice2]}
			city={city}
		>
			<p>
				Identification des populations parmi lesquelles s'observent des difficultés
				à accomplir des procédures administratives.
			</p>
		</IndexAggregations>

		<IndexAggregations
			title="Capacité d'usage des interfaces numériques"
			scores={aggregations[Indices.Indice3]}
			city={city}
		>
			<p>
				Identification des populations parmi lesquelles s'observe une fréquence
				d'illectronisme ou difficulté à utiliser internet.
			</p>
		</IndexAggregations>
	</div>
</section>

<style>
	@media screen and (min-width: 60em) {
		.body {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			gap: var(--triple-unit);
		}
	}
</style>
