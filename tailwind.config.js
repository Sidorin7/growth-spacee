/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			md1: '810px',
			lg: '976px',
			xm: '1080px',
			xl: '1440px',
		},
		extend: {
			fontSize: {
				xss: '1.2rem',
				xs: '1.3rem',
				sm: '1.5rem',
				base: '1.7rem',
				xl: '2rem',
				xlm: '3rem',
				'2xl': '3.563rem',
				'3xl': '4.953rem',
				'4xl': '5.441rem',
				'5xl': '6.052rem',
			},
			colors: {
				green: '#899878',
				greenligth: '#e4e6c3',
				gray: '#383739',
				lwhite: '#fcfdf9',
				black: {
					800: 'rgb(0,0,0,0.8)',
					1000: '#000',
				},
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, addComponents, addUtilities, theme }) {
			addUtilities({
				'.hide': {
					display: 'none',
				},
			})
		}),
	],
}
