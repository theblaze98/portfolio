/** @type {import('tailwindcss').Config} */
export default {
	content: [
    "./index.html",
    "./src/**/*.{tsx,ts,jsx,js}"
  ],
	theme: {
		extend: {
			colors: {
				dark: {
					'primary-100': '#1F3A5F',
					'primary-200': '#4d648d',
					'primary-300': '#acc2ef',
					'accent-100': '#3D5A80',
					'accent-200': '#cee8ff',
					'text-100': '#FFFFFF',
					'text-200': '#e0e0e0',
					'bg-100': '#0F1C2E',
					'bg-200': '#1f2b3e',
					'bg-300': '#374357',
				},
				light: {
					'primary-100': '#d4eaf7',
					'primary-200': '#b6ccd8',
					'primary-300': '#3b3c3d',
					'accent-100': '#71c4ef',
					'accent-200': '#00668c',
					'text-100': '#1d1c1c',
					'text-200': '#313d44',
					'bg-100': '#f2f2f2',
					'bg-200': '#f5f4f1',
					'bg-300': '#cccbc8',
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [],
}
