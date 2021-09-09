const customTags = [
    'LanguageDropdown',
    'TranslatedBookList',
    'TranslatedContentList',
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
            id: 'G-GDFND36NLP',
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
        '/ago/ng/': {
            lang: 'ng-AO',
            group: '🇦🇴 Angola',
            title: 'Exonumia'
        },
        '/int/en/': {
            lang: 'en-US',
            title: 'Exonumia'
        },
        '/ken/sw/': {
            lang: 'sw',
            group: '🇰🇪 Kenya',
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
        '/zaf/zu/': {
            lang: 'zu',
            group: '🇿🇦 South Africa',
            title: 'Exonumia'
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
        '/zaf/ve/': {
            lang: 've',
            group: '🇿🇦 South Africa',
            title: 'Exonumia'
        },
    },
    themeConfig: {
        repo: 'https://github.com/exonumia-cc/exonumia',
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
            '/ago/ng/': {
                selectText: '🇦🇴 Languages',
                selectLanguageName: '🇦🇴 Oshiwambo',
                freelyAvailableTranslationsText: '🇦🇴 Freely Available Translations',
                label: 'Oshiwambo',
                ariaLabel: 'Languages',
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
                            '/ago/ng/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/ago/ng/museum/bitcoin-v0.1-released/',
                            '/ago/ng/museum/re-bitcoin-v0.1-released/',
                            '/ago/ng/i-am-hodling/'
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
                    '/ago/ng/contribution-guide/'
                ],
            },
            '/int/en/': {
                selectText: '🇬🇧 Languages',
                selectLanguageName: '🇬🇧 English',
                freelyAvailableTranslationsText: '🇬🇧 Freely Available Translations',
                label: 'English',
                ariaLabel: 'Languages',
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
                            '/int/en/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/int/en/museum/bitcoin-v0.1-released/',
                            '/int/en/museum/re-bitcoin-v0.1-released/',
                            '/int/en/i-am-hodling/'
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
                    '/int/en/contribution-guide/'
                ],
            },
            '/ken/sw/': {
                selectText: '🇰🇪 Lugha',
                selectLanguageName: '🇰🇪 Kiswahili',
                freelyAvailableTranslationsText: '🇰🇪 Freely Available Translations',
                label: 'Kiswahili',
                ariaLabel: 'Lugha',
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
                            '/ken/sw/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/ken/sw/museum/bitcoin-v0.1-released/',
                            '/ken/sw/museum/re-bitcoin-v0.1-released/',
                            '/ken/sw/museum/bitcoin-v0.1-released/',
                            '/ken/sw/museum/re-bitcoin-v0.1-released/',
                            '/ken/sw/i-am-hodling/'
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
                    '/ken/sw/contribution-guide/'
                ],
            },
            '/zaf/zu/': {
                selectText: '🇿🇦 Izilimi',
                selectLanguageName: '🇿🇦 IsiZulu',
                freelyAvailableTranslationsText: '🇿🇦 Freely Available Translations',
                label: 'IsiZulu',
                ariaLabel: 'Izilimi',
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
                            '/zaf/zu/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/zu/museum/bitcoin-v0.1-released/',
                            '/zaf/zu/museum/re-bitcoin-v0.1-released/',
                            '/zaf/zu/i-am-hodling/'
                        ]
                    },
                    {
                        text: 'Izincwadi',   // required
                        link: '/zaf/zu/books/',
                        children: [
                            '/zaf/zu/books/layered-money/'
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
                    '/zaf/zu/contribution-guide/'
                ],
            },
            '/zaf/st/': {
                selectText: '🇿🇦 maleme',
                selectLanguageName: '🇿🇦 Sesotho',
                freelyAvailableTranslationsText: '🇿🇦 Freely Available Translations',
                label: 'Sesotho',
                ariaLabel: 'Maleme',
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
                            '/zaf/st/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/st/museum/bitcoin-v0.1-released/',
                            '/zaf/st/museum/re-bitcoin-v0.1-released/',
                            '/zaf/st/i-am-hodling/'
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
                    '/zaf/st/contribution-guide/'
                ],
            },
            '/zaf/ve/': {
                selectText: '🇿🇦 Languages',
                selectLanguageName: '🇿🇦 Tshivenda',
                freelyAvailableTranslationsText: '🇿🇦 Freely Available Translations',
                label: 'IsiVenda',
                ariaLabel: 'Languages',
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
                            '/zaf/ve/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/ve/museum/bitcoin-v0.1-released/',
                            '/zaf/ve/museum/re-bitcoin-v0.1-released/',
                            '/zaf/ve/i-am-hodling/'
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
                    '/zaf/ve/contribution-guide/'
                ],
            },
            '/zaf/nr/': {
                selectText: '🇿🇦 Izilimi',
                selectLanguageName: '🇿🇦 Isindebele',
                freelyAvailableTranslationsText: '🇿🇦 Freely Available Translations',
                label: 'Isindebele',
                ariaLabel: 'Izilimi',
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
                            '/zaf/nr/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/nr/museum/bitcoin-v0.1-released/',
                            '/zaf/nr/museum/re-bitcoin-v0.1-released/',
                            '/zaf/nr/i-am-hodling/'
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
                    '/zaf/nr/contribution-guide/'
                ],
            },
            '/nam/ng/': {
                selectText: '🇳🇦 Languages',
                selectLanguageName: '🇳🇦 Oshiwambo',
                freelyAvailableTranslationsText: '🇳🇦 Freely Available Translations',
                label: 'Oshiwambo',
                ariaLabel: 'Languages',
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
                            '/nam/ng/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/nam/ng/museum/bitcoin-v0.1-released/',
                            '/nam/ng/museum/re-bitcoin-v0.1-released/',
                            '/nam/ng/i-am-hodling/'
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
                    '/nam/ng/contribution-guide/'
                ],
            },
            '/nam/naq/': {
                selectText: '🇳🇦 Languages',
                selectLanguageName: '🇳🇦 Khoekhoegowab',
                freelyAvailableTranslationsText: '🇳🇦 Freely Available Translations',
                label: 'Khoekhoegowab',
                ariaLabel: 'Languages',
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
                            '/nam/naq/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/nam/naq/museum/bitcoin-v0.1-released/',
                            '/nam/naq/museum/re-bitcoin-v0.1-released/',
                            '/nam/naq/i-am-hodling/'
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
                    '/nam/naq/contribution-guide/'
                ],
            }
        }
    }
}
