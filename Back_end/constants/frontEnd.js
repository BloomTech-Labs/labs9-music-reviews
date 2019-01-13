const FRONT_END_DEV_URLS = [ 'http://localhost:3000' ];

// may need to be changed if we are changing the URL (from cars to music)
const FRONT_END_PROD_URLS = [ 'https://labs9carreviews.netlify.com/' ];

// module.exports = process.env.NODE_ENV === 'production'
//     ? FRONT_END_PROD_URLS
//     : FRONT_END_DEV_URLS;

module.exports = FRONT_END_DEV_URLS;