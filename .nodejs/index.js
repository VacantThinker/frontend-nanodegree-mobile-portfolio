const path = require('path')
const fs = require('fs')

const minify = require('html-minifier').minify;
const rootPath = '../'
const readdirSync = fs.readdirSync(path.resolve(rootPath)).filter(name => name.lastIndexOf(".html") >= 0);
// console.log(readdirSync)
readdirSync.forEach(fileName => {
    // console.log(fileName)
    const originPath = path.resolve(rootPath, fileName);
    let fileContent = fs.readFileSync(originPath).toString()

    // minify and write

    // console.log(fileContent)
    let result = minify(fileContent, {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
        // removeOptionalTags: true,
        // removeRedundantAttributes: true,
        // removeScriptTypeAttributes: true,
        removeTagWhitespace: true,
        // useShortDoctype: true,
        minifyCSS: true,
        // minifyJS: true
    });
    // console.log(result)
    fs.writeFileSync(path.resolve(rootPath, fileName), result)

})

