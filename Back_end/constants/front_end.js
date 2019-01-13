import { builtinModules } from "module";

const FRONT_END_DEV_URLS = [ 'http://localhost:3000' ];

const FRONT_END_PROD_URLS = [ 'https://labs9carreviews.netlify.com/' ];

module.exports = process.env.NODE_ENV === 'production'
    ? FRONT_END_PROD_URLS
    : FRONT_END_DEV_URLS;