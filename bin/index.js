#!/usr/bin/env node

const program = require('commander')
const readPkg = require('read-pkg')
const writePkg = require('write-pkg')

const log = scripts => {
    console.log(JSON.stringify(scripts, null, '  '))
}

const list = () => readPkg()
    .then(pkg => {
        log(pkg.scripts)
    })
    .catch(err => {
        console.log(err.toString())
    })

const set = scripts => readPkg()
    .then(pkg => {
        if (!pkg.scripts) {
            pkg.scripts = {}
        }
        scripts.forEach(script => {
            const [key, value] = script.split(/[=:]/)
            pkg.scripts[key] = value
        })
        
        return pkg
    })
    .then(pkg => {
        return writePkg(pkg)
            .then(() => {
                log(pkg.scripts)
            })
    })
    .catch(err => {
        console.log(err.toString())
    })

const remove = keys => readPkg()
    .then(pkg => {
        keys.forEach(key => {
            delete pkg.scripts[key]
        })
        
        return pkg
    })
    .then(pkg => {
        return writePkg(pkg)
            .then(() => {
                log(pkg.scripts)
            })
    })
    .catch(err => {
        console.log(err.toString())
    })

program
    .command('set <script> [otherScripts...]')
    .alias('s')
    .description('set script to npm scripts')
    .action((script, otherScripts = []) => {
        const scripts = [script, ...otherScripts]
        set(scripts)
    })
    .on('--help', function() {
        console.log('')
        console.log('  Examples:')
        console.log('')
        console.log(`    $ ${program.name()} set test=ava`)
        console.log(`    $ ${program.name()} set test=ava coverage="nyc ava"`)
    })

program
    .command('remove <key> [otherKeys...]')
    .alias('r')
    .description('remove srcipt by key from npm scripts')
    .action(function (key, otherKeys = []) {
        const keys = [key, ...otherKeys]
        remove(keys)
    })
    .on('--help', function() {
        console.log('')
        console.log('  Examples:')
        console.log('')
        console.log(`    $ ${program.name()} remove test`)
    })

program
    .command('list')
    .alias('ls')
    .description('list npm scripts')
    .action(() => {
        list()
    })
    .on('--help', function() {
        console.log('')
        console.log('  Examples:')
        console.log('')
        console.log(`    $ ${program.name()} ls`)
    })

program.parse(process.argv)

if (!program.args.length) program.help()
