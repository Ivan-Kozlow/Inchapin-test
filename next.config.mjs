import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.resolve.alias = {
			...config.resolve.alias,
			'@styles': path.resolve(process.cwd(), 'app/shared/styles'),
		}

		return config
	},
}

export default nextConfig
