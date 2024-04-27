import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://alkodostavka-dubai.ru',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://alkodostavka-dubai.ru/store',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://alkodostavka-dubai.ru/store/catalog/%D0%94%D0%B6%D0%B8%D0%BD',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        {
            url: 'https://alkodostavka-dubai.ru/store/catalog/%D0%92%D0%BE%D0%B4%D0%BA%D0%B0',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://alkodostavka-dubai.ru/store/catalog/%D0%9F%D0%B8%D0%B2%D0%BE%20%D0%B2%20%D0%B1%D0%B0%D0%BD%D0%BA%D0%B0%D1%85',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://alkodostavka-dubai.ru/store/catalog/%D0%91%D0%B5%D0%BB%D0%BE%D0%B5%20%D0%B2%D0%B8%D0%BD%D0%BE',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://alkodostavka-dubai.ru/store/catalog/%D0%A0%D0%BE%D0%B7%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%B2%D0%B8%D0%BD%D0%BE',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://alkodostavka-dubai.ru/store/catalog/%D0%9A%D0%BE%D0%BD%D1%8C%D1%8F%D0%BA',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://alkodostavka-dubai.ru/store/catalog/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5%20%D0%B2%D0%B8%D0%BD%D0%BE',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://alkodostavka-dubai.ru/cart',
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.3,
        },
        {
            url: 'https://alkodostavka-dubai.ru/company',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://alkodostavka-dubai.ru/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://alkodostavka-dubai.ru/delivery',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ]
}
