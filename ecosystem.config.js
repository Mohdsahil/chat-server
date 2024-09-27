module.exports = {
    apps: [
        { 
            name: 'Chat app backend', 
            script: "./index.js",
            env: { // environment variable
                NODE_ENV: 'development',
            },
        }
    ]
}