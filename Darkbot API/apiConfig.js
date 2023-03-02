const _config = {
    
    domain: "", // A domain to use for the API (no trailing slash).

    discord: {
        oauthId: "", // Discord Client ID
        oauthToken: "" // Discord Client Secret
    },

    redirects: [
        { name: `discord`, link: `https://store.ciscomodifications.com/discord` }
    ]

};

module.exports = _config;
