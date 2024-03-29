import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                customBlack: '#000000',
                customPink: '#D32B82',
                customGray: '#B3B3B3',
                customOrange: '#FFFFFF',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                literata: ['Literata', 'serif'],
            },
        },
    },
    plugins: [],
}

export default config
