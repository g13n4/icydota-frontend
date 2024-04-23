import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	preview: {
		port: 8000,
		host: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./@/"),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					antd: ["antd"],
					antv: ["@antv/s2"],
					antvreact: ["@antv/s2-react"],
					other: ["axios", "lodash", "redux", "react"],
				},
			},
		},
	},
});
