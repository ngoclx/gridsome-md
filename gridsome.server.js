module.exports = function (api) {
    api.beforeBuild(function() {
        const fs = require('fs-extra')
        console.info('Copy Redirects - Starting')
        fs.copy(process.cwd() + "/src/_redirects", process.cwd() + "/dist/_redirects")
            .then(function () {
                console.info('Copy Redirects - Finished')
        })
            .catch(function (err) { throw err; });
    })
}
