<script>
	import {IndicesLabels} from '../constants';

	export let results;

	$: showResults = false;

	const handleShow = () => {
		showResults = true;
	};
</script>

<section>
	<header>
		<h2>Résultats détaillés</h2>
	</header>

	{#if !showResults}
		<button on:click={handleShow}>
			Afficher les résultats détaillés
		</button>
	{:else}
		{#each results as result}
			<div class="container">
				<table>
					<caption class="h3">{IndicesLabels[result.index]}</caption>

					<thead>
						<th scope="col">Code</th>
						<th scope="col">Nom</th>
						<th scope="col">Ville</th>
						<th scope="col">EPCI</th>
						<th scope="col" class="score">Score<span> EPCI</span></th>
						<th scope="col">Département</th>
						<th scope="col" class="score">Score<span> département</span></th>
						<th scope="col">Region</th>
						<th scope="col" class="score">Score<span> région</span></th>
					</thead>

					<tbody>
						{#each result.data as row}
							<tr>
								<td>{row.code}</td>
								<td>{row.name}</td>
								<td>{row.cityName}</td>
								<td>{row.epciName}</td>
								<td class="score">{row.epciScore.toFixed(2)}</td>
								<td>{row.departmentName}</td>
								<td class="score">{row.departmentScore.toFixed(2)}</td>
								<td>{row.regionName}</td>
								<td class="score">{row.regionScore.toFixed(2)}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/each}
	{/if}
</section>

<style>
	.container {
		margin-bottom: var(--double-unit);
		overflow-x: auto;
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	caption {
		text-align: left;
	}

	th {
		padding: var(--half-unit) var(--quarter-unit);
		color: var(--theme-muted-color);
		text-align: left;
		font-style: italic;
		font-weight: normal;
		vertical-align: top;
	}

	thead th {
		border-bottom: 1px solid var(--theme-light-color);
	}

	td {
		padding: 0 var(--quarter-unit);
		vertical-align: top;
	}

	tr:first-child td {
		padding-top: var(--half-unit);
	}

	.score {
		text-align: right;
		font-variant-numeric: tabular-nums;
	}

	.score span {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
</style>
