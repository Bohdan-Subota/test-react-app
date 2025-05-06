// vite.config.js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// Используйте правильный базовый путь, соответствующий вашей структуре в S3
	// Если файлы загружаются в корень бакета, используйте "/"
	// Если в подпапку, используйте, например, "/project-id/"
	base: '/', // или `/${projectId}/` если файлы загружаются в подпапку
	build: {
		// Отключаем хеширование для отладки (опционально)
		// cssCodeSplit: false,
		// rollupOptions: {
		//   output: {
		//     entryFileNames: `assets/[name].js`,
		//     chunkFileNames: `assets/[name].js`,
		//     assetFileNames: `assets/[name].[ext]`
		//   }
		// }
	},
})
