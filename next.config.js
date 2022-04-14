const withPWA = require('next-pwa');
const withImages = require('next-images');

module.exports = withImages({
	assetPrefix: 'i.ibb.co',
	esModule: true,
	dynamicAssetPrefix: true,
	productionBrowserSourceMaps: true,
	reactStrictMode: true,
	webpack(config, options) {
		return config;
	},
	images: {
		domains: ['assets.vercel.com'],
		domains: ['i.ibb.co'],
		formats: ['image/avif', 'image/webp']
	}
});

module.exports = {
	images: {
		domains: ['i.ibb.co']
	}
};

module.exports = withPWA({
	reactStrictMode: true,
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true
	}
});
