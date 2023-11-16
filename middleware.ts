import { NextRequest, NextResponse } from 'next/server'

export default function middxleware(request: NextRequest) {
<<<<<<< HEAD
=======
  // const config = {
  //   matcher: ['/*'],
  // }
>>>>>>> f14e1bf7df3195dfa0c0df05ff5eef0e3152361d
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://beamanalytics.b-cdn.net/beam.min.js ;
    script-src-elem 'self' https://carvido.net https://beamanalytics.b-cdn.net/beam.min.js ;
    style-src 'self';
    object-src 'none';
    child-src 'none';
    base-uri 'self';
    connect-src https://lb1.beamanalytics.io/api/log ;
    font-src 'self';
    frame-src 'self';
    img-src 'self';
    manifest-src 'self';
    media-src 'self';
    worker-src 'none';
    require-trusted-types-for 'script'
`
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim()
 
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
 
  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )
 
  const response = NextResponse.next({
    headers: requestHeaders,
    request: {
      headers: requestHeaders,
    },
  })
  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )
 
  return response
}
