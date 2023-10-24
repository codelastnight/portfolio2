/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['"Neue Montreal"', 'ui-sans-serif', 'system-ui', 'sans-serif']
		},
		extend: {
			colors: {
				theme: {
					'light': 'var(--c-light)',
					'dark': 'var(--c-dark)'
				}

			},
		},
	},
	plugins: [
		function ({ addComponents, theme }) {
			addComponents({
				'a': {
					color: theme('colors.theme.dark'),
					textDecoration: 'underline',
					background: theme('colors.theme.light')
				},
				'a:hover': {
					color: theme('colors.theme.light'),
					background: theme('colors.theme.dark')
				}
			});
		},
	],
}
