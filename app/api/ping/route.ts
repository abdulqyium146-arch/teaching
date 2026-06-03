import { NextResponse } from 'next/server'

const BASE_URL = 'https://qurancenter.uk'
const INDEXNOW_KEY = 'b8f7a3d2c1e590478673a2d1c5e90471'

const ALL_URLS = [
  BASE_URL + '/',
  BASE_URL + '/about',
  BASE_URL + '/courses',
  BASE_URL + '/contact',
  BASE_URL + '/blog',
  BASE_URL + '/online-quran-classes',
  BASE_URL + '/hifz-classes',
  BASE_URL + '/quran-classes-for-kids',
  BASE_URL + '/quran-classes-for-adults',
  BASE_URL + '/womens-quran-classes',
  BASE_URL + '/quran-classes-manchester',
  BASE_URL + '/quran-classes-birmingham',
  BASE_URL + '/online-quran-classes-london',
  BASE_URL + '/tajweed-classes-uk',
]

export async function GET() {
  const results: { engine: string; status?: number; error?: string }[] = []

  // 1. Bing sitemap ping
  try {
    const r = await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(BASE_URL + '/sitemap.xml')}`,
      { cache: 'no-store' }
    )
    results.push({ engine: 'Bing sitemap', status: r.status })
  } catch (e) {
    results.push({ engine: 'Bing sitemap', error: String(e) })
  }

  // 2. IndexNow — notifies Bing, Yandex, Lista, Naver, and others simultaneously
  try {
    const r = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'qurancenter.uk',
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: ALL_URLS,
      }),
      cache: 'no-store',
    })
    results.push({ engine: 'IndexNow (Bing/Yandex/Naver)', status: r.status })
  } catch (e) {
    results.push({ engine: 'IndexNow', error: String(e) })
  }

  // 3. Bing direct IndexNow (belt and braces)
  try {
    const r = await fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'qurancenter.uk',
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: ALL_URLS,
      }),
      cache: 'no-store',
    })
    results.push({ engine: 'Bing IndexNow direct', status: r.status })
  } catch (e) {
    results.push({ engine: 'Bing IndexNow direct', error: String(e) })
  }

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    urlsSubmitted: ALL_URLS.length,
    results,
  })
}
