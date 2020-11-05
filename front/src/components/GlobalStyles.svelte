<style>
	:global(:root) {
		--font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		--unit: 1.5em;
		--half-unit: calc(var(--unit) / 2);
		--quarter-unit: calc(var(--unit) / 4);
		--double-unit: calc(2 * var(--unit));
		--neutral-color: #fff;
		--neutral-comp-color: #020202;
		--theme-color: #0d3280;
		--theme-light-color: #4b6eb8;
		--theme-lighter-color: #c2ccdf;
		--theme-comp-color: var(--neutral-color);
		--positive-color: #32800d;
		--negative-color: #800d32;
	}

	:global(html) {
		background: var(--theme-comp-color);
		color: var(--theme-color);
		line-height: var(--unit);
		font-size: 100%;
		font-family: var(--font-family);
	}

	:global(#sapper) {
		margin: 0 auto;
		padding: var(--unit);
		max-width: 130ex;
	}

	:global(input),
	:global(textarea) {
		border: 1px solid var(--theme-color);
		font: inherit;
	}

	:global(input[type="search"]) {
		padding: var(--half-unit);
	}

	:global(a),
	:global(button),
	:global(input[type="submit"]) {
		border: 1px solid var(--theme-color);
		padding: var(--half-unit);
		font: inherit;
		text-decoration: none;
		background: var(--theme-color);
		color: var(--theme-comp-color);
	}

	:global(h1) {
		margin: 0;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 600;
	}

	:global(h2) {
		margin: 0;
		border-bottom: 1px solid var(--theme-light-color);
		line-height: 1;
		font-size: var(--unit);
		font-weight: 600;
	}

	:global(h3) {
		margin: 0;
		text-transform: uppercase;
		font: inherit;
	}

	:global(p) {
		margin: 0;
	}

	:global(section) {
		margin-bottom: var(--double-unit);
	}

	:global(section > header) {
		margin: 0 0 var(--unit) 0;
	}
</style>
