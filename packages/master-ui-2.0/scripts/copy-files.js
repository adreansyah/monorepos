const fs = require("fs");
const fse = require("fs-extra");
const path = require('path');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './build');

const copyIcons = () => {
    const icons = './src/assets/icons'
    const buildIcons = './build/assets/icons'

    fse.copy(icons, buildIcons, function (err) {
        if (err) {
            console.log('An error occured while copying the icons folder.')
            return console.error(err)
        }
        console.log('Copy icons completed!')
    });
}

const copyImages = () => {
    const images = './src/assets/images'
    const buildImages = './build/assets/images'

    fse.copy(images, buildImages, function (err) {
        if (err) {
            console.log('An error occured while copying the images folder.')
            return console.error(err)
        }
        console.log('Copy images completed!')
    });
}

const copyTheme = () => {
    const css = ['index.css', 'index.css.map']
    css.forEach(cssFile => {
        const theme = './src/Theme/' + cssFile
        const buildTheme = './build/Theme/' + cssFile

        fse.copy(theme, buildTheme, function (err) {
            if (err) {
                console.log('An error occured while copying the theme folder.')
                return console.error(err)
            }
            console.log('Copy theme completed!')
        });
    })
}

const createReadme = () => {
    const targetFile = './build/README.md'
    const content = `# master-ui
React elevenia design system


## Documentation

[Click here Master UI 1](http://172.18.186.60:8080)

[Click here Master UI 2](http://172.18.186.66:8082)


## How to Install
\`\`\`sh
$ yarn add @elevenia/master-ui
# or
$ npm install @elevenia/master-ui
\`\`\``

    fs.writeFile(targetFile, content, (err, file) => {
        if (err) throw err
        console.log('creating readme file succesfully!')
    })
}

const createPackageFile = async () => {
    const packageJson = await fse.readFile(path.resolve(packagePath, './package.json'), 'utf8')

    const { scripts, devDependencies, eslintConfig, browserslist, jest, ...newPackageJson } = JSON.parse(
        packageJson,
    );

    newPackageJson.private = false
    const targetPath = path.resolve(buildPath, './package.json')

    await fse.writeFile(targetPath, JSON.stringify(newPackageJson, null, 2), 'utf8')
    console.log(`Created package.json in ${targetPath}`)

    return newPackageJson
}

const run = async () => {
    try {
        copyIcons()
        copyImages()
        copyTheme()
        createReadme()
        await createPackageFile()
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run()