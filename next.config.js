/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src ${process.env.NODE_ENV === 'production'? `'self'`: `* 'unsafe-eval'`};
  script-src ${process.env.NODE_ENV === 'production'? `'self'`: `* 'unsafe-eval'`};
  script-src-elem ${process.env.NODE_ENV === 'production'? `'self'`: `* 'unsafe-eval'`};
  child-src 'self';
  style-src 'self' 'unsafe-inline';
  font-src 'self'; 
  media-src 'self';
  connect-src 'self';
  img-src http: https: data: blob: 'self';
`

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }

]

module.exports = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    }, {
      
    });
    return config;
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
};
