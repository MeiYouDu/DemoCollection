module.exports = {
	"*.{js,ts,jsx,tsx,vue,json,mdx,md}": [
		"npx eslint --fix",
	],
	"*.{css,sass,scss}": ["npx stylelint --fix"],
};
