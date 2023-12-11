const withNextIntl = require('next-intl/plugin')();
 
module.exports = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'soho.nascom.nasa.gov',
        port: '',
        pathname: '/**'
      }
    ]
  }
});