import { NextResponse } from 'next/server'

export function proxy(request) {
  const url = request.nextUrl
  const pathname = url.pathname.replace(/\/$/, '')

  const pathRedirects = {
    '/online-mba': '/programs/online-mba/',
    '/online-bca': '/programs/online-bca/',
    '/online-bba': '/programs/online-bba/',
    '/online-mca': '/programs/online-mca/',
    '/online-msc': '/programs/online-msc/',
    '/online-ma': '/programs/online-ma/',
    '/online-bcom': '/programs/online-bcom/',
    '/online-bcom-hons': '/programs/online-bcom-honours/',
    '/online-bcom-int': '/programs/online-bcom-international/',
    '/online-ba': '/programs/online-ba/',
    '/online-bajmc': '/programs/online-bajmc/',
    '/online-majmc': '/programs/online-majmc/',
    '/online-certification': '/nmims/nmims-mumbai-online-certification/',
    '/online-diploma': '/programs/online-diploma/',
    '/integrated-programs': '/amity/amity-online-integrated-programs/',
    '/executive-mba': '/programs/online-mba-wx/',
  }

  if (pathRedirects[pathname]) {
    const redirectUrl = new URL(pathRedirects[pathname], request.url)
    return NextResponse.redirect(redirectUrl, 301)
  }

  if (pathname === '/privacy-policy' || pathname === '/terms-and-conditions' || pathname === '/disclaimer') {
    const redirectUrl = new URL(`${pathname}/`, request.url)
    return NextResponse.redirect(redirectUrl, 301)
  }

  const category = url.searchParams.get('category')
  if (category) {
    const categoryMap = {
      'online-mba': '/programs/online-mba/',
      'online-bca': '/programs/online-bca/',
      'online-bba': '/programs/online-bba/',
      'online-mca': '/programs/online-mca/',
      'online-msc': '/programs/online-msc/',
      'online-ma': '/programs/online-ma/',
      'online-bcom': '/programs/online-bcom/',
      'online-bcom-hons': '/programs/online-bcom-honours/',
      'online-bcom-int': '/programs/online-bcom-international/',
      'online-ba': '/programs/online-ba/',
      'online-bajmc': '/programs/online-bajmc/',
      'online-majmc': '/programs/online-majmc/',
      'online-certification': '/nmims/nmims-mumbai-online-certification/',
      'online-diploma': '/programs/online-diploma/',
      'integrated-programs': '/amity/amity-online-integrated-programs/',
      'executive-mba': '/programs/online-mba-wx/',
    }

    if (categoryMap[category]) {
      const redirectUrl = new URL(categoryMap[category], request.url)
      return NextResponse.redirect(redirectUrl, 301)
    }
  }

  return NextResponse.next()
}

// Optional but recommended (avoids unnecessary processing on static/internal routes)
export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
}
