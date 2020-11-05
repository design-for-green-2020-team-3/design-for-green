<style>
	:global(:root) {
		--font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		--unit: 1.5em;
		--half-unit: calc(var(--unit) / 2);
		--quarter-unit: calc(var(--unit) / 4);
		--double-unit: calc(2 * var(--unit));
		--triple-unit: calc(3 * var(--unit));
		--neutral-comp-color: #000;
		--neutral-color: #F6F8FE;
		--theme-color: #336EEA;
		--theme-light-color: #1142a9;
		--theme-lighter-color: #082051;
		--theme-muted-color: #9ebaf5;
		--theme-comp-color: var(--neutral-color);
		--positive-color: #6eea33;
		--negative-color: #ea336e;
	}

	:global(html.light) {
		--neutral-comp-color: #fff;
		--neutral-color: #020202;
		--theme-color: #0d3280;
		--theme-light-color: #3A5692;
		--theme-lighter-color: #c2ccdf;
		--theme-muted-color: #061639;
		--theme-comp-color: #fff;
		--positive-color: #32800d;
		--negative-color: #800d32;
	}

	:global(html) {
		background: var(--neutral-comp-color);
		color: var(--neutral-color);
		line-height: var(--unit);
		font-size: 100%;
		font-family: var(--font-family);
	}

	:global(#sapper) {
		margin: 0 auto;
		padding: var(--unit);
		max-width: 130ex;
	}
	:global(label) {
		color: var(--theme-color);
	}

	:global(input) {
		border: 1px solid var(--theme-light-color);
		padding: var(--half-unit);
		background: var(--neutral-comp-color);
		color: var(--neutral-color);
		font: inherit;
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
		font: inherit;
	}

	:global(h1),
	:global(h2),
	:global(h3) {
		margin: 0;
		color: var(--theme-color);
		font: inherit;
		font-weight: 600;
	}

	:global(h1) {
		text-transform: uppercase;
		font-size: 2em;
	}

	:global(h2) {
		border-bottom: 1px solid var(--theme-light-color);
		line-height: 1;
		font-size: var(--unit);
	}

	:global(h3) {
		border-bottom: 1px solid var(--theme-light-color);
		text-transform: uppercase;
	}

	:global(p) {
		margin: 0;
	}

	:global(section) {
		margin-bottom: var(--double-unit);
	}

	:global(section > header) {
		margin: 0 0 var(--double-unit) 0;
	}
</style>
