import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	preview: {
		port: 8000,
		host: true,
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					antd: ["antd"],
					react: ["react"],
					redux: ["redux"],
					lodash: ["lodash"],
					axios: ["axios"],
				},
			},
		},
	},
});
