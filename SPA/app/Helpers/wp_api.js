const NAME = "malvestida",
    DOMAIN = `https://${NAME}.com`,
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp/v2`,
    POSTS = `${API_WP}/posts`,
    POST = `${API_WP}/posts`,
    SEARCH = `${API_WP}/posts?_embed&search=`;

export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST,
    SEARCH
};
