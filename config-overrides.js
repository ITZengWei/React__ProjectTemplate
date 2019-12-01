/*
 * @file config-overrides.js
 * @ author Zeng
 * 基于customize 和 react-app-rewired 的定制化配置件
  * */
// 从 customize-cra 引入一些相关的方法

/* config-overrides.js */

const { override, addLessLoader, fixBabelImports, addDecoratorsLegacy } = require('customize-cra');

/* 自定义主题 */
const modifyVars = require('./lessVars')

console.log(modifyVars)

module.exports = override(
	addLessLoader({
		javascriptEnabled: true,
		modifyVars
	}),
	addDecoratorsLegacy(),
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	})
)