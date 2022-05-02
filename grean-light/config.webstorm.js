// IDE별 js설정 파일이 다름
// vscode >> jsconfig.json
// intellij, webstorm >> config.webstorm.js

// eslint-disable-next-line no-undef
System.config({
	paths: {
		'@/*': './src/*',
	},
});
