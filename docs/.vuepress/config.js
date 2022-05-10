const { path } = require('@vuepress/utils')

const customTags = [
    'math',
    'mtable',
    'mtr',
    'mtd',
    'mstyle',
    'mi',
    'mo',
    'mtext',
    'msub',
    'mrow',
    'mn',
    'mspace',
    'msup',
    'mfrac',
    'munderover'
]

module.exports = {
    theme: path.resolve(__dirname, './theme'),
    bundler: '@vuepress/webpack',
	bundlerConfig: {
		vue: {
			compilerOptions: {
				isCustomElement: tag => {
					return customTags.includes(tag)
				}
			}
		}
	},
    extendsMarkdown: md => {
        // use more markdown-it plugins!
        md.use(require('markdown-it-footnote'))
    },
    head: [
        ['meta', { charset: "UTF-8"}],
        ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0"}],
        ['meta', { property: "og:image", content: "/exonumia-logo.png"}],
        ['link', { rel: 'icon', href: '/exonumia-logo.png' }]
    ],
    dest: 'dist',
    plugins: [
        [
          '@vuepress/plugin-google-analytics',
          {
            id: 'G-NY2PV8B0BG',
          },
        ],
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ],
    ],
    // plugins: {
    //     // 'check-md': {
    //     // },
    //     // 'sitemap': {
    //     //     hostname: 'https://exonumia.africa'
    //     // }
    // },
    locales: {
        '/': {
            lang: 'en',
            title: 'Exonumia'
        },
        '/int/en/': {
            lang: 'en-US',
            title: 'Exonumia'
        },
        '/ago/ng/': {
            lang: 'ng-AO',
            group: '🇦🇴 Angola',
            title: 'Exonumia'
        },
        '/cod/ln/': {
            lang: 'ln-CD',
            group: '🇨🇩 Democratic Republic of the Congo',
            title: 'Exonumia'
        },
        '/cog/ln/': {
            lang: 'ln-CG',
            group: '🇨🇬 Republic of the Congo',
            title: 'Exonumia'
        },
        '/egy/ar/': {
            lang: 'ar',
            group: '🇪🇬 مصر',
            title: 'Exonumia'
        },
        '/ken/sw/': {
            lang: 'sw',
            group: '🇰🇪 Kenya',
            title: 'Exonumia'
        },
        '/mwi/ny/': {
            lang: 'ny',
            group: '🇲🇼 Malawi',
            title: 'Exonumia'
        },
        '/nam/ng/': {
            lang: 'ng-NA',
            group: '🇳🇦 Namibia',
            title: 'Exonumia'
        },
        '/nam/naq/': {
            lang: 'naq',
            group: '🇳🇦 Namibia',
            title: 'Exonumia',
            selectLanguageName: '🇳🇦 Khoekhoegowab'
        },
        '/nga/ha/': {
            lang: 'ha',
            group: '🇳🇬 Nigeria',
            title: 'Exonumia',
            selectLanguageName: '🇳🇬 Hausa'
        },
        '/nga/yo/': {
            lang: 'yo',
            group: '🇳🇬 Nigeria',
            title: 'Exonumia',
            selectLanguageName: '🇳🇬 Yoruba'
        },
        '/som/so/': {
            lang: 'so',
            group: '🇸🇴 Somalia',
            title: 'Exonumia',
            selectLanguageName: '🇸🇴 Somali'
        },
        '/zaf/st/': {
            lang: 'st',
            group: '🇿🇦 South Africa',
            title: 'Exonumia'
        },
        '/zaf/nr/': {
            lang: 'nr',
            group: '🇿🇦 South Africa',
            title: 'Exonumia'
        },
        '/zaf/nso/': {
            lang: 'nso',
            group: '🇿🇦 South Africa',
            title: 'Exonumia'
        },
        '/zaf/ts/': {
            lang: 'ts',
            group: '🇿🇦 South Africa',
            title: 'Exonumia'
        },
        '/zaf/ve/': {
            lang: 've',
            group: '🇿🇦 South Africa',
            title: 'Exonumia'
        },
        '/zaf/xh/': {
            lang: 'xh',
            group: '🇿🇦 South Africa',
            title: 'Exonumia'
        },
        '/zaf/zu/': {
            lang: 'zu',
            group: '🇿🇦 South Africa',
            title: 'Exonumia'
        },
        '/zwe/sn/': {
            lang: 'sn',
            group: '🇿🇼 Zimbabwe',
            title: 'Exonumia'
        },
    },
    themeConfig: {
        contributors: false,
        repo: 'https://github.com/exonumia-cc/exonumia',
        docsBranch: 'master',
        repoLabel: 'Open Source',
        editLinks: true,
        docsDir: 'docs',
        searchPlaceholder: 'what goes up?',
        continueReading: false,
        logo: '/exonumia-logo.png',
        // i18n
        locales: {
            '/': {
                selectLanguageName: '🌍 Languages',
            },
            '/int/en/': {
                lastUpdatedText: "Last Updated",
                supportersText: "Supporters",
                translatorsText: "Translators",
                selectLanguageText: '🇬🇧 Languages',
                selectLanguageName: '🇬🇧 English',
                freelyAvailableTranslationsText: '🇬🇧 Freely Available Translations',
                label: 'English',
                selectLanguageAriaLabel: 'Languages',
                editLinkText: 'Improve Content',
                continueReading: true,
                continueReadingText: 'Continue Reading',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/int/en/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/int/en/translations/' 
                    }
                ],
                sidebar: [
                    '/int/en/about/',
                    {
                        text: 'Translations',   // required
                        link: '/int/en/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/int/en/',
                            '/int/en/explain-bitcoin-like-im-five/',
                            '/int/en/bitcoin-is-like/',
                            '/int/en/bitcoin-is-like-sports/',
                            '/int/en/understanding-lightning-network-using-an-abacus',
                            '/int/en/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/int/en/museum/bitcoin-v0.1-released/',
                            '/int/en/museum/re-bitcoin-v0.1-released/',
                            '/int/en/i-am-hodling/',
                            '/int/en/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Books',   // required
                        link: '/int/en/books/',
                        children: [
                            '/int/en/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Tools',
                        link: '/int/en/tools/'
                    },
                    {
                        text: 'Translation Projects',   // required
                        link: '/int/en/open-source-translation-projects/',
                        children: [
                            '/int/en/transifex/bitcoin-core/',
                            '/int/en/transifex/btcpayserver/'
                        ]
                    },
                    '/int/en/contribution-guide/',
                    '/int/en/contact/'
                ],
            },
            '/ago/ng/': {
                lastUpdatedText: "Last Updated",
                supportersText: "Supporters",
                translatorsText: "Translators",
                selectLanguageText: '🇦🇴 Languages',
                selectLanguageName: '🇦🇴 Oshiwambo',
                freelyAvailableTranslationsText: '🇦🇴 Freely Available Translations',
                label: 'Oshiwambo',
                selectLanguageAriaLabel: 'Languages',
                editLinks: true,
                editLinkText: "Toloka xwepo!",
                continueReading: true,
                continueReadingText: 'Continue Reading',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/ago/ng/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/ago/ng/translations/' 
                    },
                ],
                sidebar: [
                    '/ago/ng/about/',
                    {
                        text: 'Translations',   // required
                        link: '/ago/ng/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/ago/ng/',
                            '/ago/ng/explain-bitcoin-like-im-five/',
                            '/ago/ng/bitcoin-is-like/',
                            '/ago/ng/bitcoin-is-like-sports/',
                            '/ago/ng/understanding-lightning-network-using-an-abacus',
                            '/ago/ng/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/ago/ng/museum/bitcoin-v0.1-released/',
                            '/ago/ng/museum/re-bitcoin-v0.1-released/',
                            '/ago/ng/i-am-hodling/',
                            '/ago/ng/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Books',   // required
                        link: '/ago/ng/books/',
                        children: [
                            '/ago/ng/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Tools',
                        link: '/ago/ng/tools/'
                    },
                    {
                        text: 'Translation Projects',   // required
                        link: '/ago/ng/open-source-translation-projects/',
                        children: [
                            '/ago/ng/transifex/bitcoin-core/',
                            '/ago/ng/transifex/btcpayserver/'
                        ]
                    },
                    '/ago/ng/contribution-guide/',
                    '/ago/ng/contact/'
                ],
            },
            '/cod/ln/': {
                lastUpdatedText: "Last Updated",
                supportersText: "Supporters",
                translatorsText: "Translators",
                selectLanguageText: '🇨🇩 Languages',
                selectLanguageName: '🇨🇩 Lingala',
                freelyAvailableTranslationsText: '🇨🇩 Freely Available Translations',
                label: 'Lingala',
                selectLanguageAriaLabel: 'Languages',
                editLinkText: 'Improve Content',
                continueReading: true,
                continueReadingText: 'Continue Reading',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/cod/ln/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/cod/ln/translations/' 
                    }
                ],
                sidebar: [
                    '/cod/ln/about/',
                    {
                        text: 'Translations',   // required
                        link: '/cod/ln/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/cod/ln/',
                            '/cod/ln/explain-bitcoin-like-im-five/',
                            '/cod/ln/bitcoin-is-like/',
                            '/cod/ln/bitcoin-is-like-sports/',
                            '/cod/ln/understanding-lightning-network-using-an-abacus',
                            '/cod/ln/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/cod/ln/museum/bitcoin-v0.1-released/',
                            '/cod/ln/museum/re-bitcoin-v0.1-released/',
                            '/cod/ln/i-am-hodling/',
                            '/cod/ln/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Books',   // required
                        link: '/cod/ln/books/',
                        children: [
                            '/cod/ln/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Tools',
                        link: '/cod/ln/tools/'
                    },
                    {
                        text: 'Translation Projects',   // required
                        link: '/cod/ln/open-source-translation-projects/',
                        children: [
                            '/cod/ln/transifex/bitcoin-core/',
                            '/cod/ln/transifex/btcpayserver/'
                        ]
                    },
                    '/cod/ln/contribution-guide/',
                    '/cod/ln/contact/'
                ],
            },
            '/cog/ln/': {
                lastUpdatedText: "Last Updated",
                supportersText: "Supporters",
                translatorsText: "Translators",
                selectLanguageText: '🇨🇬 Languages',
                selectLanguageName: '🇨🇬 Lingala',
                freelyAvailableTranslationsText: '🇨🇬 Freely Available Translations',
                label: 'Lingala',
                selectLanguageAriaLabel: 'Languages',
                editLinkText: 'Improve Content',
                continueReading: true,
                continueReadingText: 'Continue Reading',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/cog/ln/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/cog/ln/translations/' 
                    }
                ],
                sidebar: [
                    '/cog/ln/about/',
                    {
                        text: 'Translations',   // required
                        link: '/cog/ln/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/cog/ln/',
                            '/cog/ln/explain-bitcoin-like-im-five/',
                            '/cog/ln/bitcoin-is-like/',
                            '/cog/ln/bitcoin-is-like-sports/',
                            '/cog/ln/understanding-lightning-network-using-an-abacus',
                            '/cog/ln/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/cog/ln/museum/bitcoin-v0.1-released/',
                            '/cog/ln/museum/re-bitcoin-v0.1-released/',
                            '/cog/ln/i-am-hodling/',
                            '/cog/ln/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Books',   // required
                        link: '/cog/ln/books/',
                        children: [
                            '/cog/ln/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Tools',
                        link: '/cog/ln/tools/'
                    },
                    {
                        text: 'Translation Projects',   // required
                        link: '/cog/ln/open-source-translation-projects/',
                        children: [
                            '/cog/ln/transifex/bitcoin-core/',
                            '/cog/ln/transifex/btcpayserver/'
                        ]
                    },
                    '/cog/ln/contribution-guide/',
                    '/cog/ln/contact/'
                ],
            },
            '/egy/ar/': {
                lastUpdatedText: "التحديث الاخير",
                supportersText: "أنصار",
                translatorsText: "مترجمين",
                selectLanguageText: '🇪🇬 اللغات',
                selectLanguageName: '🇪🇬 العربية',
                freelyAvailableTranslationsText: '🇪🇬 الترجمات المتاحة بحرية',
                label: 'العربية',
                selectLanguageAriaLabel: 'اللغات',
                editLinkText: 'تحسين المحتوى',
                continueReading: true,
                continueReadingText: 'أكمل القراءة',
                navbar: [
                    { 
                        text: 'الصفحة الرئيسية', 
                        link: '/egy/ar/' 
                    },
                    { 
                        text: 'الترجمات', 
                        link: '/egy/ar/translations/' 
                    }
                ],
                sidebar: [
                    '/egy/ar/about/',
                    {
                        text: 'الترجمات',   // required
                        link: '/egy/ar/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/egy/ar/',
                            '/egy/ar/explain-bitcoin-like-im-five/',
                            '/egy/ar/bitcoin-is-like/',
                            '/egy/ar/bitcoin-is-like-sports/',
                            '/egy/ar/understanding-lightning-network-using-an-abacus',
                            '/egy/ar/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/egy/ar/museum/bitcoin-v0.1-released/',
                            '/egy/ar/museum/re-bitcoin-v0.1-released/',
                            '/egy/ar/i-am-hodling/',
                            '/egy/ar/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'كتب',   // required
                        link: '/egy/ar/books/',
                        children: [
                            '/egy/ar/books/layered-money/'
                        ]
                    },
                    {
                        text: 'أدوات',
                        link: '/egy/ar/tools/'
                    },
                    {
                        text: 'مشاريع الترجمة',   // required
                        link: '/egy/ar/open-source-translation-projects/',
                        children: [
                            '/egy/ar/transifex/bitcoin-core/',
                            '/egy/ar/transifex/btcpayserver/'
                        ]
                    },
                    '/egy/ar/contribution-guide/',
                    '/egy/ar/contact/'
                ],
            },
            '/ken/sw/': {
                lastUpdatedText: "Ilisasishwa mwisho",
                supportersText: "Wafuasi",
                translatorsText: "Wafasiri",
                selectLanguageText: '🇰🇪 Lugha',
                selectLanguageName: '🇰🇪 Kiswahili',
                freelyAvailableTranslationsText: '🇰🇪 Freely Available Translations',
                label: 'Kiswahili',
                selectLanguageAriaLabel: 'Lugha',
                editLinkText: 'Boresha Yaliyomo',
                continueReading: true,
                continueReadingText: 'Endelea kusoma',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/ken/sw/' 
                    },
                    { 
                        text: 'Tafsiri', 
                        link: '/ken/sw/translations/' 
                    }
                ],
                sidebar: [
                    '/ken/sw/about/',
                    {
                        text: 'Tafsiri',   // required
                        link: '/ken/sw/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/ken/sw/',
                            '/ken/sw/explain-bitcoin-like-im-five/',
                            '/ken/sw/bitcoin-is-like/',
                            '/ken/sw/bitcoin-is-like-sports/',
                            '/ken/sw/understanding-lightning-network-using-an-abacus',
                            '/ken/sw/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/ken/sw/museum/bitcoin-v0.1-released/',
                            '/ken/sw/museum/re-bitcoin-v0.1-released/',
                            '/ken/sw/i-am-hodling/',
                            '/ken/sw/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Books',   // required
                        link: '/ken/sw/books/',
                        children: [
                            '/ken/sw/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Tools',
                        link: '/ken/sw/tools/'
                    },
                    {
                        text: 'Translation Projects',   // required
                        link: '/ken/sw/open-source-translation-projects/',
                        children: [
                            '/ken/sw/transifex/bitcoin-core/',
                            '/ken/sw/transifex/btcpayserver/'
                        ]
                    },
                    '/ken/sw/contribution-guide/',
                    '/ken/sw/contact/'
                ],
            },
            '/mwi/ny/': {
                lastUpdatedText: "Zasinthidwa komaliza",
                supportersText: "Othandizira",
                translatorsText: "Omasulira",
                selectLanguageText: '🇲🇼 Zinenero',
                selectLanguageName: '🇲🇼 Chewa',
                freelyAvailableTranslationsText: '🇲🇼 Zomasulira Zopezeka Kwaulere',
                label: 'Chewa',
                selectLanguageAriaLabel: 'Zinenero',
                editLinkText: 'Konzani Zokhutira',
                continueReading: true,
                continueReadingText: 'Pitirizani Kuwerenga',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/mwi/ny/' 
                    },
                    { 
                        text: 'Zomasulira', 
                        link: '/mwi/ny/translations/' 
                    }
                ],
                sidebar: [
                    '/mwi/ny/about/',
                    {
                        text: 'Zomasulira',   // required
                        link: '/mwi/ny/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/mwi/ny/',
                            '/mwi/ny/explain-bitcoin-like-im-five/',
                            '/mwi/ny/bitcoin-is-like/',
                            '/mwi/ny/bitcoin-is-like-sports/',
                            '/mwi/ny/understanding-lightning-network-using-an-abacus',
                            '/mwi/ny/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/mwi/ny/museum/bitcoin-v0.1-released/',
                            '/mwi/ny/museum/re-bitcoin-v0.1-released/',
                            '/mwi/ny/i-am-hodling/',
                            '/mwi/ny/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Mabuku',   // required
                        link: '/mwi/ny/books/',
                        children: [
                            '/mwi/ny/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Zida',
                        link: '/mwi/ny/tools/'
                    },
                    {
                        text: 'Ntchito Zomasulira',   // required
                        link: '/mwi/ny/open-source-translation-projects/',
                        children: [
                            '/mwi/ny/transifex/bitcoin-core/',
                            '/mwi/ny/transifex/btcpayserver/'
                        ]
                    },
                    '/mwi/ny/contribution-guide/',
                    '/mwi/ny/contact/'
                ],
            },
            '/nam/ng/': {
                lastUpdatedText: "Last Updated",
                supportersText: "Supporters",
                translatorsText: "Translators",
                selectLanguageText: '🇳🇦 Languages',
                selectLanguageName: '🇳🇦 Oshiwambo',
                freelyAvailableTranslationsText: '🇳🇦 Freely Available Translations',
                label: 'Oshiwambo',
                selectLanguageAriaLabel: 'Languages',
                editLinks: true,
                editLinkText: "Toloka xwepo!",
                continueReading: true,
                continueReadingText: 'Continue Reading',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/nam/ng/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/nam/ng/translations/' 
                    },
                ],
                sidebar: [
                    '/nam/ng/about/',
                    {
                        text: 'Translations',   // required
                        link: '/nam/ng/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/nam/ng/',
                            '/nam/ng/explain-bitcoin-like-im-five/',
                            '/nam/ng/bitcoin-is-like/',
                            '/nam/ng/bitcoin-is-like-sports/',
                            '/nam/ng/understanding-lightning-network-using-an-abacus',
                            '/nam/ng/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/nam/ng/museum/bitcoin-v0.1-released/',
                            '/nam/ng/museum/re-bitcoin-v0.1-released/',
                            '/nam/ng/i-am-hodling/',
                            '/nam/ng/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Books',   // required
                        link: '/nam/ng/books/',
                        children: [
                            '/nam/ng/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Tools',
                        link: '/nam/ng/tools/'
                    },
                    {
                        text: 'Translation Projects',   // required
                        link: '/nam/ng/open-source-translation-projects/',
                        children: [
                            '/nam/ng/transifex/bitcoin-core/',
                            '/nam/ng/transifex/btcpayserver/'
                        ]
                    },
                    '/nam/ng/contribution-guide/',
                    '/nam/ng/contact/'
                ],
            },
            '/nam/naq/': {
                lastUpdatedText: "Last Updated",
                supportersText: "Supporters",
                translatorsText: "Translators",
                selectLanguageText: '🇳🇦 Languages',
                selectLanguageName: '🇳🇦 Khoekhoegowab',
                freelyAvailableTranslationsText: '🇳🇦 Freely Available Translations',
                label: 'Khoekhoegowab',
                selectLanguageAriaLabel: 'Languages',
                editLinks: true,
                editLinkText: "Improve Content!",
                continueReading: true,
                continueReadingText: 'Continue Reading',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/nam/naq/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/nam/naq/translations/' 
                    },
                ],
                sidebar: [
                    '/nam/ng/about/',
                    {
                        text: 'Translations',   // required
                        link: '/nam/naq/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/nam/naq/',
                            '/nam/naq/explain-bitcoin-like-im-five/',
                            '/nam/naq/bitcoin-is-like/',
                            '/nam/naq/bitcoin-is-like-sports/',
                            '/nam/naq/understanding-lightning-network-using-an-abacus',
                            '/nam/naq/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/nam/naq/museum/bitcoin-v0.1-released/',
                            '/nam/naq/museum/re-bitcoin-v0.1-released/',
                            '/nam/naq/i-am-hodling/',
                            '/nam/naq/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Books',   // required
                        link: '/nam/naq/books/',
                        children: [
                            '/nam/naq/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Tools',
                        link: '/nam/naq/tools/'
                    },
                    {
                        text: 'Translation Projects',   // required
                        link: '/nam/naq/open-source-translation-projects/',
                        children: [
                            '/nam/naq/transifex/bitcoin-core/',
                            '/nam/naq/transifex/btcpayserver/'
                        ]
                    },
                    '/nam/naq/contribution-guide/',
                    '/nam/naq/contact/'
                ],
            },
            '/nga/ha/': {
                lastUpdatedText: "An sabunta ta ƙarshe",
                supportersText: "Magoya bayansa",
                translatorsText: "Masu Fassara",
                selectLanguageText: '🇳🇬 Harsuna',
                selectLanguageName: '🇳🇬 Hausa',
                freelyAvailableTranslationsText: '🇳🇬 Akwai Fassara Kyauta',
                label: 'Hausa',
                selectLanguageAriaLabel: 'Harsuna',
                editLinkText: 'Inganta Abun ciki',
                continueReading: true,
                continueReadingText: 'Ci gaba Karatun',
                navbar: [
                    { 
                        text: 'Gida', 
                        link: '/nga/ha/' 
                    },
                    { 
                        text: 'Fassara', 
                        link: '/nga/ha/translations/' 
                    }
                ],
                sidebar: [
                    '/nga/ha/about/',
                    {
                        text: 'Fassara',   // required
                        link: '/nga/ha/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/nga/ha/',
                            '/nga/ha/explain-bitcoin-like-im-five/',
                            '/nga/ha/bitcoin-is-like/',
                            '/nga/ha/bitcoin-is-like-sports/',
                            '/nga/ha/understanding-lightning-network-using-an-abacus',
                            '/nga/ha/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/nga/ha/museum/bitcoin-v0.1-released/',
                            '/nga/ha/museum/re-bitcoin-v0.1-released/',
                            '/nga/ha/i-am-hodling/',
                            '/nga/ha/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Littattafai',   // required
                        link: '/nga/ha/books/',
                        children: [
                            '/nga/ha/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Kayan aiki',
                        link: '/nga/ha/tools/'
                    },
                    {
                        text: 'Ayyukan Fassara',   // required
                        link: '/nga/ha/open-source-translation-projects/',
                        children: [
                            '/nga/ha/transifex/bitcoin-core/',
                            '/nga/ha/transifex/btcpayserver/'
                        ]
                    },
                    '/nga/ha/contribution-guide/',
                    '/nga/ha/contact/'
                ],
            },
            '/nga/yo/': {
                lastUpdatedText: "Imudojuiwọn to kẹhin",
                supportersText: "Olufowosi",
                translatorsText: "Awọn onitumọ",
                selectLanguageText: '🇳🇬 Awọn ede',
                selectLanguageName: '🇳🇬 Yoruba',
                freelyAvailableTranslationsText: '🇳🇬 Awọn Itumọ ti o Wa Ni Ọfẹ',
                label: 'Yoruba',
                selectLanguageAriaLabel: 'Languages',
                editLinkText: 'Mu akoonu dara si',
                continueReading: true,
                continueReadingText: 'Tesiwaju Kika',
                navbar: [
                    { 
                        text: 'Ile', 
                        link: '/nga/yo/' 
                    },
                    { 
                        text: 'Awọn itumọ', 
                        link: '/nga/yo/translations/' 
                    }
                ],
                sidebar: [
                    '/nga/yo/about/',
                    {
                        text: 'Awọn itumọ',   // required
                        link: '/nga/yo/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/nga/yo/',
                            '/nga/yo/explain-bitcoin-like-im-five/',
                            '/nga/yo/bitcoin-is-like/',
                            '/nga/yo/bitcoin-is-like-sports/',
                            '/nga/yo/understanding-lightning-network-using-an-abacus',
                            '/nga/yo/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/nga/yo/museum/bitcoin-v0.1-released/',
                            '/nga/yo/museum/re-bitcoin-v0.1-released/',
                            '/nga/yo/i-am-hodling/',
                            '/nga/yo/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Awọn iwe ohun',   // required
                        link: '/nga/yo/books/',
                        children: [
                            '/nga/yo/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Awọn irinṣẹ',
                        link: '/nga/yo/tools/'
                    },
                    {
                        text: 'Awọn iṣẹ Itumọ',   // required
                        link: '/nga/yo/open-source-translation-projects/',
                        children: [
                            '/nga/yo/transifex/bitcoin-core/',
                            '/nga/yo/transifex/btcpayserver/'
                        ]
                    },
                    '/nga/yo/contribution-guide/',
                    '/nga/yo/contact/'
                ],
            },
            '/som/so/': {
                lastUpdatedText: "Markii ugu dambeysay ee la cusbooneysiiyay",
                supportersText: "Taageerayaasha",
                translatorsText: "Turjubaanad",
                selectLanguageText: '🇸🇴 Luuqadaha',
                selectLanguageName: '🇸🇴 Somali',
                freelyAvailableTranslationsText: '🇸🇴 Tarjumaadaha bilaashka ah ee la heli karo',
                label: 'Somali',
                selectLanguageAriaLabel: 'Luuqadaha',
                editLinkText: 'Hagaajinta waxa ku jira',
                continueReading: true,
                continueReadingText: 'Sii wad akhriska',
                navbar: [
                    { 
                        text: 'Guri', 
                        link: '/som/so/' 
                    },
                    { 
                        text: 'Tarjumaad', 
                        link: '/som/so/translations/' 
                    }
                ],
                sidebar: [
                    '/som/so/about/',
                    {
                        text: 'Tarjumaad',   // required
                        link: '/som/so/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/som/so/',
                            '/som/so/explain-bitcoin-like-im-five/',
                            '/som/so/bitcoin-is-like/',
                            '/som/so/bitcoin-is-like-sports/',
                            '/som/so/understanding-lightning-network-using-an-abacus',
                            '/som/so/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/som/so/museum/bitcoin-v0.1-released/',
                            '/som/so/museum/re-bitcoin-v0.1-released/',
                            '/som/so/i-am-hodling/',
                            '/som/so/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Buugaag',   // required
                        link: '/som/so/books/',
                        children: [
                            '/som/so/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Qalab',
                        link: '/som/so/tools/'
                    },
                    {
                        text: 'Mashaariicda turjumaadda',   // required
                        link: '/som/so/open-source-translation-projects/',
                        children: [
                            '/som/so/transifex/bitcoin-core/',
                            '/som/so/transifex/btcpayserver/'
                        ]
                    },
                    '/som/so/contribution-guide/',
                    '/som/so/contact/'
                ],
            },
            '/zaf/nr/': {
                lastUpdatedText: "Last Updated",
                supportersText: "Supporters",
                translatorsText: "Translators",
                selectLanguageText: '🇿🇦 Izilimi',
                selectLanguageName: '🇿🇦 Isindebele',
                freelyAvailableTranslationsText: '🇿🇦 Freely Available Translations',
                label: 'Isindebele',
                selectLanguageAriaLabel: 'Izilimi',
                editLinks: true,
                editLinkText: "Improve Translation!",
                continueReading: true,
                continueReadingText: 'Continue Reading',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/zaf/nr/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/zaf/nr/translations/' 
                    },
                ],
                sidebar: [
                    '/zaf/nr/about/',
                    {
                        text: 'Translations',   // required
                        link: '/zaf/nr/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/zaf/nr/',
                            '/zaf/nr/explain-bitcoin-like-im-five/',
                            '/zaf/nr/bitcoin-is-like/',
                            '/zaf/nr/bitcoin-is-like-sports/',
                            '/zaf/nr/understanding-lightning-network-using-an-abacus',
                            '/zaf/nr/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/nr/museum/bitcoin-v0.1-released/',
                            '/zaf/nr/museum/re-bitcoin-v0.1-released/',
                            '/zaf/nr/i-am-hodling/',
                            '/zaf/nr/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Books',   // required
                        link: '/zaf/nr/books/',
                        children: [
                            '/zaf/nr/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Tools',
                        link: '/zaf/nr/tools/'
                    },
                    {
                        text: 'Translation Projects',   // required
                        link: '/zaf/nr/open-source-translation-projects/',
                        children: [
                            '/zaf/nr/transifex/bitcoin-core/',
                            '/zaf/nr/transifex/btcpayserver/'
                        ]
                    },
                    '/zaf/nr/contribution-guide/',
                    '/zaf/nr/contact/'
                ],
            },
            '/zaf/nso/': {
                lastUpdatedText: "E Qetetsoe ho ntlafatsoa",
                supportersText: "Bathekgi ka tša ditšhelete",
                translatorsText: "Bafetoledi", // Mofetoledi
                selectLanguageText: '🇿🇦 Maleme',
                selectLanguageName: '🇿🇦 Sepedi',
                freelyAvailableTranslationsText: '🇿🇦 Diphetolelo Tse Fumanehang Ka Ho Fetisisa',
                label: 'Sepedi',
                selectLanguageAriaLabel: 'Maleme',
                editLinkText: 'Ntlafatsa Ditaba',
                continueReading: true,
                continueReadingText: 'Tsoela Pele ho Bala',
                navbar: [
                    { 
                        text: 'Lehae', 
                        link: '/zaf/nso/' 
                    },
                    { 
                        text: 'Diphetolelo', 
                        link: '/zaf/nso/translations/' 
                    }
                ],
                sidebar: [
                    '/zaf/nso/about/',
                    {
                        text: 'Diphetolelo',   // required
                        link: '/zaf/nso/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/zaf/nso/',
                            '/zaf/nso/explain-bitcoin-like-im-five/',
                            '/zaf/nso/bitcoin-is-like/',
                            '/zaf/nso/bitcoin-is-like-sports/',
                            '/zaf/nso/understanding-lightning-network-using-an-abacus',
                            '/zaf/nso/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/nso/museum/bitcoin-v0.1-released/',
                            '/zaf/nso/museum/re-bitcoin-v0.1-released/',
                            '/zaf/nso/i-am-hodling/',
                            '/zaf/nso/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Dibuka',   // required
                        link: '/zaf/nso/books/',
                        children: [
                            '/zaf/nso/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Disebedisoa',
                        link: '/zaf/nso/tools/'
                    },
                    {
                        text: 'Merero ea Phetolelo',   // required
                        link: '/zaf/nso/open-source-translation-projects/',
                        children: [
                            '/zaf/nso/transifex/bitcoin-core/',
                            '/zaf/nso/transifex/btcpayserver/'
                        ]
                    },
                    '/zaf/nso/contribution-guide/',
                    '/zaf/nso/contact/'
                ],
            },
            '/zaf/ts/': {
                lastUpdatedText: "Last Updated",
                supportersText: "Supporters",
                translatorsText: "Translators",
                selectLanguageText: '🇿🇦 Languages',
                selectLanguageName: '🇿🇦 Isitsonga',
                freelyAvailableTranslationsText: '🇿🇦 Freely Available Translations',
                label: 'Isitsonga',
                selectLanguageAriaLabel: 'Languages',
                editLinkText: 'Improve Content',
                continueReading: true,
                continueReadingText: 'Continue Reading',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/zaf/ts/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/zaf/ts/translations/' 
                    }
                ],
                sidebar: [
                    '/zaf/ts/about/',
                    {
                        text: 'Translations',   // required
                        link: '/zaf/ts/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/zaf/ts/',
                            '/zaf/ts/explain-bitcoin-like-im-five/',
                            '/zaf/ts/bitcoin-is-like/',
                            '/zaf/ts/bitcoin-is-like-sports/',
                            '/zaf/ts/understanding-lightning-network-using-an-abacus',
                            '/zaf/ts/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/ts/museum/bitcoin-v0.1-released/',
                            '/zaf/ts/museum/re-bitcoin-v0.1-released/',
                            '/zaf/ts/i-am-hodling/',
                            '/zaf/ts/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Books',   // required
                        link: '/zaf/ts/books/',
                        children: [
                            '/zaf/ts/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Tools',
                        link: '/zaf/ts/tools/'
                    },
                    {
                        text: 'Translation Projects',   // required
                        link: '/zaf/ts/open-source-translation-projects/',
                        children: [
                            '/zaf/ts/transifex/bitcoin-core/',
                            '/zaf/ts/transifex/btcpayserver/'
                        ]
                    },
                    '/zaf/ts/contribution-guide/',
                    '/zaf/ts/contact/'
                ],
            },
            '/zaf/st/': {
                lastUpdatedText: "Last Updated",
                supportersText: "Batšehetsi",
                translatorsText: "Bafetoleli",
                selectLanguageText: '🇿🇦 maleme',
                selectLanguageName: '🇿🇦 Sesotho',
                freelyAvailableTranslationsText: '🇿🇦 Freely Available Translations',
                label: 'Sesotho',
                selectLanguageAriaLabel: 'Maleme',
                editLinks: true,
                editLinkText: "Ntlafatsa phetolelo!",
                continueReading: true,
                continueReadingText: 'Tsoela Pele ho Bala',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/zaf/st/' 
                    },
                    { 
                        text: 'Fetolela', 
                        link: '/zaf/st/translations/' 
                    },
                ],
                sidebar: [
                    '/zaf/st/about/',
                    {
                        text: 'Fetolela',   // required
                        link: '/zaf/st/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/zaf/st/',
                            '/zaf/st/explain-bitcoin-like-im-five/',
                            '/zaf/st/bitcoin-is-like/',
                            '/zaf/st/bitcoin-is-like-sports/',
                            '/zaf/st/understanding-lightning-network-using-an-abacus',
                            '/zaf/st/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/st/museum/bitcoin-v0.1-released/',
                            '/zaf/st/museum/re-bitcoin-v0.1-released/',
                            '/zaf/st/i-am-hodling/',
                            '/zaf/st/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Books',   // required
                        link: '/zaf/st/books/',
                        children: [
                            '/zaf/st/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Tools',
                        link: '/zaf/st/tools/'
                    },
                    {
                        text: 'Translation Projects',   // required
                        link: '/zaf/st/open-source-translation-projects/',
                        children: [
                            '/zaf/st/transifex/bitcoin-core/',
                            '/zaf/st/transifex/btcpayserver/'
                        ]
                    },
                    '/zaf/st/contribution-guide/',
                    '/zaf/st/contact/'
                ],
            },
            '/zaf/ve/': {
                lastUpdatedText: "Last Updated",
                supportersText: "Supporters",
                translatorsText: "Translators",
                selectLanguageText: '🇿🇦 Languages',
                selectLanguageName: '🇿🇦 Tshivenda',
                freelyAvailableTranslationsText: '🇿🇦 Freely Available Translations',
                label: 'IsiVenda',
                selectLanguageAriaLabel: 'Languages',
                editLinks: true,
                editLinkText: "Improve Translation!",
                continueReading: true,
                continueReadingText: 'Continue Reading',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/zaf/ve/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/zaf/ve/translations/' 
                    },
                ],
                sidebar: [
                    '/zaf/ve/about/',
                    {
                        text: 'Translations',   // required
                        link: '/zaf/ve/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/zaf/ve/',
                            '/zaf/ve/explain-bitcoin-like-im-five/',
                            '/zaf/ve/bitcoin-is-like/',
                            '/zaf/ve/bitcoin-is-like-sports/',
                            '/zaf/ve/understanding-lightning-network-using-an-abacus',
                            '/zaf/ve/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/ve/museum/bitcoin-v0.1-released/',
                            '/zaf/ve/museum/re-bitcoin-v0.1-released/',
                            '/zaf/ve/i-am-hodling/',
                            '/zaf/ve/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Books',   // required
                        link: '/zaf/ve/books/',
                        children: [
                            '/zaf/ve/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Tools',
                        link: '/zaf/ve/tools/'
                    },
                    {
                        text: 'Translation Projects',   // required
                        link: '/zaf/ve/open-source-translation-projects/',
                        children: [
                            '/zaf/ve/transifex/bitcoin-core/',
                            '/zaf/ve/transifex/btcpayserver/'
                        ]
                    },
                    '/zaf/ve/contribution-guide/',
                    '/zaf/ve/contact/'
                ],
            },
            '/zaf/xh/': {
                lastUpdatedText: "Igqityelwe ukuhlaziywa",
                supportersText: "Abaxhasi",
                translatorsText: "Abaguquleli",
                selectLanguageText: '🇿🇦 Iilwimi',
                selectLanguageName: '🇿🇦 IsiXhosa',
                freelyAvailableTranslationsText: '🇿🇦 Iinguqulelo Ezifumaneka Ngokukhululekileyo',
                label: 'IsiXhosa',
                selectLanguageAriaLabel: 'Iilwimi',
                editLinks: true,
                editLinkText: "Phucula Inguqulelo!",
                continueReading: true,
                continueReadingText: 'Qhubeka ufunda',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/zaf/xh/' 
                    },
                    { 
                        text: 'Ukuhumusha', 
                        link: '/zaf/xh/translations/' 
                    },
                ],
                sidebar: [
                    '/zaf/xh/about/',
                    {
                        text: 'Ukuhumusha',   // required
                        link: '/zaf/xh/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/zaf/xh/',
                            '/zaf/xh/explain-bitcoin-like-im-five/',
                            '/zaf/xh/bitcoin-is-like/',
                            '/zaf/xh/bitcoin-is-like-sports/',
                            '/zaf/xh/understanding-lightning-network-using-an-abacus',
                            '/zaf/xh/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/xh/museum/bitcoin-v0.1-released/',
                            '/zaf/xh/museum/re-bitcoin-v0.1-released/',
                            '/zaf/xh/i-am-hodling/',
                            '/zaf/xh/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Izincwadi',   // required
                        link: '/zaf/xh/books/',
                        children: [
                            '/zaf/xh/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Tools',
                        link: '/zaf/xh/tools/'
                    },
                    {
                        text: 'Amaphrojekthi weTransifex',   // required
                        link: '/zaf/xh/open-source-translation-projects/',
                        children: [
                            '/zaf/xh/transifex/bitcoin-core/',
                            '/zaf/xh/transifex/btcpayserver/'
                        ]
                    },
                    '/zaf/xh/contribution-guide/',
                    '/zaf/xh/contact/'
                ],
            },
            '/zaf/zu/': {
                lastUpdatedText: "Kugcine ukubuyekezwa",
                supportersText: "Abasekeli",
                translatorsText: "Abahumushi",
                selectLanguageText: '🇿🇦 Izilimi',
                selectLanguageName: '🇿🇦 IsiZulu',
                freelyAvailableTranslationsText: '🇿🇦 Freely Available Translations',
                label: 'IsiZulu',
                selectLanguageAriaLabel: 'Izilimi',
                editLinks: true,
                editLinkText: "Thuthukisa Ukuhumusha",
                continueReading: true,
                continueReadingText: 'Qhubeka ufunde',
                navbar: [
                    { 
                        text: 'Home', 
                        link: '/zaf/zu/' 
                    },
                    { 
                        text: 'Ukuhumusha', 
                        link: '/zaf/zu/translations/' 
                    },
                ],
                sidebar: [
                    '/zaf/zu/about/',
                    {
                        text: 'Ukuhumusha',   // required
                        link: '/zaf/zu/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/zaf/zu/',
                            '/zaf/zu/explain-bitcoin-like-im-five/',
                            '/zaf/zu/bitcoin-is-like/',
                            '/zaf/zu/bitcoin-is-like-sports/',
                            '/zaf/zu/understanding-lightning-network-using-an-abacus',
                            '/zaf/zu/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/zu/museum/bitcoin-v0.1-released/',
                            '/zaf/zu/museum/re-bitcoin-v0.1-released/',
                            '/zaf/zu/i-am-hodling/',
                            '/zaf/zu/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Izincwadi',   // required
                        link: '/zaf/zu/books/',
                        children: [
                            '/zaf/zu/books/21-lessons/',
                            '/zaf/zu/books/layered-money/',
                        ]
                    },
                    {
                        text: 'Tools',
                        link: '/zaf/zu/tools/'
                    },
                    {
                        text: 'Amaphrojekthi weTransifex',   // required
                        link: '/zaf/zu/open-source-translation-projects/',
                        children: [
                            '/zaf/zu/transifex/bitcoin-core/',
                            '/zaf/zu/transifex/btcpayserver/'
                        ]
                    },
                    '/zaf/zu/contribution-guide/',
                    '/zaf/zu/contact/'
                ],
            },
            '/zwe/sn/': {
                lastUpdatedText: "Last Updated",
                supportersText: "Vatsigiri",
                translatorsText: "Vashanduri",
                selectLanguageText: '🇿🇼 Mitauro',
                selectLanguageName: '🇿🇼 Shona',
                freelyAvailableTranslationsText: '🇿🇼 Dudziro Dzinowanika Pachena',
                label: 'Shona',
                selectLanguageAriaLabel: 'Mitauro',
                editLinkText: 'Vandudza zvirimo',
                continueReading: true,
                continueReadingText: 'Enderera Kuverenga',
                navbar: [
                    { 
                        text: 'Kumba', 
                        link: '/zwe/sn/' 
                    },
                    { 
                        text: 'Dudziro', 
                        link: '/zwe/sn/translations/' 
                    }
                ],
                sidebar: [
                    '/zwe/sn/about/',
                    {
                        text: 'Dudziro',   // required
                        link: '/zwe/sn/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/zwe/sn/',
                            '/zwe/sn/explain-bitcoin-like-im-five/',
                            '/zwe/sn/bitcoin-is-like/',
                            '/zwe/sn/bitcoin-is-like-sports/',
                            '/zwe/sn/understanding-lightning-network-using-an-abacus',
                            '/zwe/sn/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zwe/sn/museum/bitcoin-v0.1-released/',
                            '/zwe/sn/museum/re-bitcoin-v0.1-released/',
                            '/zwe/sn/i-am-hodling/',
                            '/zwe/sn/bitcoin-banking-for-communities-lessons-learned-from-el-zonte'
                        ]
                    },
                    {
                        text: 'Mabhuku',   // required
                        link: '/zwe/sn/books/',
                        children: [
                            '/zwe/sn/books/layered-money/'
                        ]
                    },
                    {
                        text: 'Zvishandiso',
                        link: '/zwe/sn/tools/'
                    },
                    {
                        text: 'Zvirongwa zvekududzira',   // required
                        link: '/zwe/sn/open-source-translation-projects/',
                        children: [
                            '/zwe/sn/transifex/bitcoin-core/',
                            '/zwe/sn/transifex/btcpayserver/'
                        ]
                    },
                    '/zwe/sn/contribution-guide/',
                    '/zwe/sn/contact/'
                ],
            },
        }
    }
}
