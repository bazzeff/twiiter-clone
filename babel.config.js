module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
        "blocklist": null,
        "allowlist": [
          "API_URL",
          "API_TOKEN"
        ],
        "blacklist": null, // DEPRECATED
        "whitelist": null, // DEPRECATED
        "safe": true,
        "allowUndefined": true,
        "verbose": false
      }]
    ]
  };
};
