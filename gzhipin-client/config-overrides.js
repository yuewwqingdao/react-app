const { override, fixBabelImports, addLessLoader,babelInclude } = require('customize-cra')

module.exports = override(
    addLessLoader({
        strictMath: true,
        noIeCompat: true,
        javascriptEnabled: true,
        modifyVars: {
            "@brand-primary": "#1cae82",
            "@brand-primary-tap": "#1da57a",
            "@hd": "1px"
        }
    }),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css'
    }),
)