export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {
			...(process.env.VITE_NANO_CSS === true ? { cssnano: {} } : {}),
		},
	},
};
