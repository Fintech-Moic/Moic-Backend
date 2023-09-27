import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        o1: '#fff5e8',
        o2: '#fff1dd',
        o3: '#ffe1b9',
        o4: '#ff9f1c',
        o5: '#e68f19',
        o6: '#cc7f16',
        o7: '#bf7715',
        o8: '#995f11',
        o9: '#73480d',
        o10: '#59380a',

        y1: '#fff9f0',
        y2: '#fff5e9',
        y3: '#ffebd1',
        y4: '#ffbf69',
        y5: '#e6ac5f',
        y6: '#cc9954',
        y7: '#bf8f4f',
        y8: '#99733f',
        y9: '#73562f',
        y10: '#594325',

        b1: '#fafefe',
        b2: '#f7fdfd',
        b3: '#effbfa',
        b4: '#cbf3f0',
        b5: '#b7dbd8',
        b6: '#a2c2c0',
        b7: '#98b6b4',
        b8: '#7a9290',
        b9: '#5b6d6c',
        b10: '#475554',

        g1: '#eaf9f8',
        g2: '#e0f6f4',
        g3: '#beede8',
        g4: '#2ec4b6',
        g5: '#29b0a4',
        g6: '#259d92',
        g7: '#239389',
        g8: '#1c766d',
        g9: '#155852',
        g10: '#104540',

        Primary: '#545F71',
        Secondary: '#9BA5B7',
        Tertiary: '#EEF1F4',
        White: '#FFFFFF',
        Annotations: '#F6BE2C',
        CardSubtitle: '#7E7E7E',
      },
      fontFamily: {
        suit: ['SUIT', 'sans-serif'],
        jalnan: ['JALNAN', 'sans-serif'],
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        36: '32px',
        80: '80px',
      },
      lineHeight: {
        120: '120%',
        130: '130%',
        140: '140%',
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
      },
    },
  },
  plugins: [],
};
export default config;