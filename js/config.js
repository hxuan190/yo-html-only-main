tailwind.config = {
    theme: {
        container: {
            center: true,
            padding: '20px',
        },
        screens: {
            sm: '390px',
            md: '744px',
            lg: '1133px',
            xl: '1920px',
        },
        extend: {
            fontFamily: {
                comfortaa: 'Comfortaa, sans-serif',
                paytone: 'Paytone One, system-ui',
            },
            fontWeight: {
                thin: 100,
                extralight: 200,
                light: 300,
                normal: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
                extrabold: 800,
                black: 900,
            },
            colors: {
                // primary day
                orange: {
                    100: '#FFE0B7',
                    200: '#FFD361',
                    300: '#FFA800',
                    400: '#FF862E',
                    500: '#ff852d',
                },
                //primary night
                purple: {
                    100: '#EFDBFF',
                    200: '#DEC7FF',
                    250: '#D2B2FF',
                    300: '#A672CF',
                    400: '#631B8F',
                },
                // secondary
                yellow: {
                    100: '#FFF5C2',
                    200: '#FFEE9B',
                    300: '#FFE259',
                    400: '#FFDA28',
                },
                // neutral
                neutral: {
                    white: '#F5F5F5',
                    white2: '#E8DEDE',
                    100: '#B0B0B0',
                    200: '#606060',
                    300: '#BBB6B6',
                    black: '#1E1E1E',
                    black2: '#232323',
                },
                //success
                green: {
                    50: '#EBFFD4',
                    100: '#DFFCF0',
                    200: '#A0EACB',
                    300: '#4BCE97',
                    350: '#71DC48',
                    400: '#22A06B',
                    450 : '#00583D',
                    500: '#00583D',
                },
                //error
                red: {
                    100: '#FFEDEB',
                    200: '#FFB6AD',
                    300: '#F87462',
                    400: '#E34935',
                },
                //warning
                warning: {
                    100: '#FFF7D6',
                    200: '#FAEDB9',
                    300: '#F5CD47',
                    400: '#E2B203',
                },
                border: {
                    DEFAULT: '#232323',
                },
            },
            textShadow: {
                smct: '1px 1px 0 #FF4500',
                sxct: '2px 2px 0 #FF4500',
                mdct: '3px 3px 0 #FF4500',
                lgct: '4px 4px 0 #FF4500',
                xlct: '5px 5px 0 #FF4500',
                xxlct: '6px 6px 0 #FF4500',
                xxxlct: '7px 7px 0 #FF4500',
                xxxxlct: '8px 8px 0 #FF4500'
            },
            boxShadow: {
                'br-black-sm': ['2px 2px 0 0 #232323'],
                'br-black-md': ['4px 4px 0px #232323'],
                'br-black-lg': ['8px 8px 0 0 #232323'],
                'inner-black-sm': ['inset 0.5px 0.5px 1px 1px #232323'],
                'inner-black-md': ['inset 0.5px 0.5px 2px 2px #232323'],
            },
            transitionDuration: {
                '2000': '2000ms',
            },
            borderRadius: {
                standard: '15px',
            },
        },
    },
    darkMode: 'class'
}