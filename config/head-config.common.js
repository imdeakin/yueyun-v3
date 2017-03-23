/**
 * Configuration for head elements added during the creation of index.html.
 *
 * All href attributes are added the publicPath (if exists) by default.
 * You can explicitly hint to prefix a publicPath by setting a boolean value to a key that has
 * the same name as the attribute you want to operate on, but prefix with =
 *
 * Example:
 * { name: 'msapplication-TileImage', content: '/assets/icon/ms-icon-144x144.png', '=content': true },
 * Will prefix the publicPath to content.
 *
 * { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/icon/apple-icon-57x57.png', '=href': false },
 * Will not prefix the publicPath on href (href attributes are added by default
 *
 */
module.exports = {
  link: [
    /** <link> tags for 'apple-touch-icon' (AKA Web Clips). **/
    // { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/icon/apple-icon-57x57.png' },
    // { rel: 'apple-touch-icon', sizes: '60x60', href: '/assets/icon/apple-icon-60x60.png' },
    // { rel: 'apple-touch-icon', sizes: '72x72', href: '/assets/icon/apple-icon-72x72.png' },
    // { rel: 'apple-touch-icon', sizes: '76x76', href: '/assets/icon/apple-icon-76x76.png' },
    // { rel: 'apple-touch-icon', sizes: '114x114', href: '/assets/icon/apple-icon-114x114.png' },
    // { rel: 'apple-touch-icon', sizes: '120x120', href: '/assets/icon/apple-icon-120x120.png' },
    // { rel: 'apple-touch-icon', sizes: '144x144', href: '/assets/icon/apple-icon-144x144.png' },
    // { rel: 'apple-touch-icon', sizes: '152x152', href: '/assets/icon/apple-icon-152x152.png' },
    // { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/icon/apple-icon-180x180.png' },

    /** <link> tags for android web app icons **/
    // { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/assets/icon/android-icon-192x192.png' },

    /** <link> tags for favicons **/
    {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icon/favicon-32x32.png'},
    {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/assets/icon/favicon-96x96.png'},
    {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icon/favicon-16x16.png'},

    /** <link> tags for a Web App Manifest **/
    {rel: 'manifest', href: '/assets/manifest.json'}
  ],
  meta: [
    // { name: 'msapplication-TileColor', content: '#00bcd4' },
    // { name: 'msapplication-TileImage', content: '/assets/icon/ms-icon-144x144.png', '=content': true },
    // { name: 'theme-color', content: '#00bcd4' }
    {
      name: 'description',
      content: '广州悦云信息科技立足于提供整套移动互联网定制研发解决方案—我们专注于APP行业应用开发、软件定制开发企业资源计划ERP开发、微信应用开发、网站建设等。我们专业提供需求评估、项目规划、视觉设计、前端制作、程序开发等。'
    },
    {name: 'keyword', content: 'APP开发,广州APP开发,广州APP开发公司,网站制作,广州网站制作,网站设计,网页制作,广州网站建设公司,悦云'}
  ]
};
