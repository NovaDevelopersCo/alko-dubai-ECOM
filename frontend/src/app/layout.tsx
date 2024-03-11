import type { Metadata } from 'next'
import { Inter, Montserrat, Literata as LiterataFont } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import clsx from 'clsx'

const inter = Inter({subsets: ['latin']})

import StoreProvider from './StoreProvider'

import './global.css'
import Header from '@/Components/ui/Header/Header'
import Footer from '@/Components/ui/Footer/Footer'
import AppProvider from '@/Components/ui/AppProvider'
import Modal from 'antd/es/modal/Modal'

const montserrat = Montserrat({
    style: ['normal'],
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    preload: true,
    display: 'swap',
    variable: '--font-montserrat',
})


const literata = LiterataFont({
    style: ['normal'],
    subsets: ['latin'],
    weight: ['400', '600'],
    preload: true,
    display: 'swap',
    variable: '--font-literata',
})

export const metadata: Metadata = {
    title: {
        default:
            'Алкоголь в Дубае с Доставкой. Быстрая и бесплатная доставка спиртных напитков в Дубай',
        template:
            'Алкоголь в Дубае с Доставкой. Быстрая и бесплатная доставка спиртных напитков в Дубай | %s',
        absolute:
            'Алкоголь в Дубае с Доставкой. Быстрая и бесплатная доставка спиртных напитков в Дубай',
    },
    description:
        'Купить алкоголь в Дубае с доставкой. Алкоголь и спиртное в Дубае по выгодныи ценам.',
    // generator: 'Next.js',
    // applicationName: 'Next.js',
    // referrer: 'origin-when-cross-origin',
    keywords: [
        'Алкоголь В Дубае',
        'Доставка Алкоголя в Дубае',
        'Купить Алгоколь в Дубае',
        'Купить Пиво в Дубае',
        'buy alcohol in dubai',
        'Купить дешево алкоголь в Дубае',
        'Магазин алкоголя в Дубае',
        'Можно купить алкоголь в дубае',
        'Где в Дубае купить алкоголь',
        'алкоголь в дьюти фри Дубае',
        'Alcohol in Dubai with delivery',
        'do you drink alcohol in dubai',
        'can you drink alcohol in dubai',
        'Dubai',
        'Alcohol',
        'delivery',
    ],
    authors: [
        {name: 'Nova Developers', url: 'https://github.com/NovaDevelopersCo'},
        {name: 'Igor Zimin', url: 'https://github.com/merdernoty'},
    ],
    creator: 'https://github.com/merdernoty',
    publisher: 'https://github.com/merdernoty',
    // formatDetection: {
    // 	email: true,
    // 	address: true,
    // 	telephone: true,
    // },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body
            className={clsx(
                montserrat.variable,
                literata.variable,
                'relative block z-0',
            )}
        >
        <StoreProvider>
          <AntdRegistry>
            <AppProvider>
              <div className={clsx('flex flex-col min-h-screen')}>
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
                <Modal/>
              </div>
            </AppProvider>
          </AntdRegistry>
        </StoreProvider>
        </body>
        </html>
    )
}
