<script>
	import {onMount} from 'svelte';
	import {get, set} from '../storage';

	onMount(() => {
		document.documentElement.classList.toggle(
			'light',
			get('light', 'false') === 'true'
		);
	});

	const handleClick = () => {
		document.documentElement.classList.toggle('light');

		set(
			'light',
			document.documentElement.classList.contains('light')
				? 'true'
				: 'false'
		);
	};
</script>

<button aria-hidden="true" on:click={handleClick} data-screen-only>
	Thème clair / sombre
</button>
