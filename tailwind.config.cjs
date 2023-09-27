/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				jetbrains: ['JetBrains Mono', 'monospace'],
				poppins: ['Poppins', 'sans-serif'],
				sansita: ['Sansita', 'sans-serif'],
			}, 
			colors: {
				'night': '#0C0D12',
				'brandOrange': '#EB5E28',
				'gunMetal': '#0F2933',
				'slateGray': '#7B8C93',
				'platinum': '#D9D9D9',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
