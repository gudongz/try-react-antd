module.exports = {
    
    "extends": "airbnb",
    "plugins": [
        'html'
    ],
    "rules": {
        'indent': [2, 4, {
            'SwitchCase': 2 // 针对switch case的缩进
        }],
    }
};