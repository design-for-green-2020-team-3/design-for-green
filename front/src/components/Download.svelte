<script>
	export let city;

	const handlePrint = () => {
		window.print();
	};
</script>

<section data-screen-only>
	<header>
		<h2>Téléchargement</h2>
	</header>

	<p>
		En alternative au téléchargement, cette page est optimisée
		pour être imprimée sur papier ou dans un document PDF.
		<br />
		<br />
		<a class="button" href="/pdf/{city.code}.pdf">Télécharger les données brutes (PDF)</a>
		<button on:click={handlePrint}>Imprimer la page</button>
	</p>
</section>
