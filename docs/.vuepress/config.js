module.exports = {
    dest: 'dist',
    plugins: ['check-md'],
    locales: {
        '/int/en/': {
            lang: 'en-US',
            title: 'Exonumia',
            description: 'The landing page for native African language speaker looking to learn about Bitcoin.'
        },
        '/nam/ng/': {
            lang: 'ng',
            group: '🇳🇦 Namibia',
            title: 'Exonumia',
            description: 'Ke yona landing page for native African language speaker looking to learn about Bitcoin.'
        },
        '/nam/naq/': {
            lang: 'naq',
            group: '🇳🇦 Namibia',
            title: 'Exonumia',
            description: 'Ke yona landing page for native African language speaker looking to learn about Bitcoin.'
        },
        '/zaf/zu/': {
            lang: 'zu',
            group: '🇿🇦 South Africa',
            title: 'Exonumia',
            description: 'iLanding page for native african language speakers looking to learn about Bitcoin.'
        },
        '/zaf/st/': {
            lang: 'st',
            group: '🇿🇦 South Africa',
            title: 'Exonumia',
            description: 'iLanding page for native african language speakers looking to learn about Bitcoin.'
        },
        '/zaf/nr/': {
            lang: 'nr',
            group: '🇿🇦 South Africa',
            title: 'Exonumia',
            description: 'iLanding page for native african language speakers looking to learn about Bitcoin.'
        },
        '/zaf/ve/': {
            lang: 've',
            group: '🇿🇦 South Africa',
            title: 'Exonumia',
            description: 'iLanding page for native african language speakers looking to learn about Bitcoin.'
        },
    },
    themeConfig: {
        repo: 'https://github.com/exonumia-cc/exonumia',
        repoLabel: 'CODE',
        editLinks: true,
        docsDir: 'docs',
        searchPlaceholder: 'what goes up?',
        continueReading: false,
        // i18n
        locales: {
            '/int/en/': {
                selectText: '🇬🇧 Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Improve Content',
                continueReading: true,
                continueReadingText: 'Continue Reading',
                nav: [
                    { 
                        text: 'Home', 
                        link: '/int/en/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/int/en/translations/' 
                    },
                    { 
                        text: 'Sigidli', 
                        link: 'https://sigidli.com' 
                    }
                ],
                sidebar: [
                    '/int/en/about/',
                    {
                        title: 'Translations',   // required
                        path: '/int/en/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/int/en/',
                            '/int/en/explain-bitcoin-like-im-five/',
                            '/int/en/bitcoin-is-like/',
                            '/int/en/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/int/en/i-am-hodling/'
                        ]
                    },
                    {
                        title: 'Transifex Projects',   // required
                        path: '/int/en/transifex/',
                        children: [
                            '/int/en/transifex/bitcoin-core/',
                            '/int/en/transifex/btcpayserver/'
                        ]
                    },
                    '/int/en/contribution-guide/'
                ],
            },
            '/zaf/zu/': {
                selectText: '🇿🇦 Izilimi',
                label: 'IsiZulu',
                ariaLabel: 'Izilimi',
                editLinks: true,
                editLinkText: "Thuthukisa Ukuhumusha",
                continueReading: true,
                continueReadingText: 'Qhubeka ufunde',
                nav: [
                    { 
                        text: 'Home', 
                        link: '/zaf/zu/' 
                    },
                    { 
                        text: 'Ukuhumusha', 
                        link: '/zaf/zu/translations/' 
                    },
                    { 
                        text: 'Sigidli', 
                        link: 'https://sigidli.com' 
                    },
                ],
                sidebar: [
                    '/zaf/zu/about/',
                    {
                        title: 'Ukuhumusha',   // required
                        path: '/zaf/zu/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/zaf/zu/',
                            '/zaf/zu/explain-bitcoin-like-im-five/',
                            '/zaf/zu/bitcoin-is-like/',
                            '/zaf/zu/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/zu/i-am-hodling/'
                        ]
                    }
                ],
            },
            '/zaf/st/': {
                selectText: '🇿🇦 Lipuo',
                label: 'Sesotho',
                ariaLabel: 'Lipuo',
                editLinks: true,
                editLinkText: "Ntlafatsa phetolelo!",
                continueReading: true,
                continueReadingText: 'Tsoela Pele ho Bala',
                nav: [
                    { 
                        text: 'Home', 
                        link: '/zaf/st/' 
                    },
                    { 
                        text: 'Fetolela', 
                        link: '/zaf/st/translations/' 
                    },
                    { 
                        text: 'Sigidli', 
                        link: 'https://sigidli.com' 
                    },
                ],
                sidebar: [
                    '/zaf/st/about/',
                    {
                        title: 'Fetolela',   // required
                        path: '/zaf/st/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/zaf/st/',
                            '/zaf/st/explain-bitcoin-like-im-five/',
                            '/zaf/st/bitcoin-is-like/',
                            '/zaf/st/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/st/i-am-hodling/'
                        ]
                    }
                ],
            },
            '/zaf/ve/': {
                selectText: '🇿🇦 Languages',
                label: 'IsiVenda',
                ariaLabel: 'Languages',
                editLinks: true,
                editLinkText: "Improve Translation!",
                continueReading: true,
                continueReadingText: 'Continue Reading',
                nav: [
                    { 
                        text: 'Home', 
                        link: '/zaf/ve/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/zaf/ve/translations/' 
                    },
                    { 
                        text: 'Sigidli', 
                        link: 'https://sigidli.com' 
                    },
                ],
                sidebar: [
                    '/zaf/ve/about/',
                    {
                        title: 'Translations',   // required
                        path: '/zaf/ve/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/zaf/ve/',
                            '/zaf/ve/explain-bitcoin-like-im-five/',
                            '/zaf/ve/bitcoin-is-like/',
                            '/zaf/ve/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/ve/i-am-hodling/'
                        ]
                    }
                ],
            },
            '/zaf/nr/': {
                selectText: '🇿🇦 Languages',
                label: 'Isindebele',
                ariaLabel: 'Languages',
                editLinks: true,
                editLinkText: "Improve Translation!",
                continueReading: true,
                continueReadingText: 'Continue Reading',
                nav: [
                    { 
                        text: 'Home', 
                        link: '/zaf/nr/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/zaf/nr/translations/' 
                    },
                    { 
                        text: 'Sigidli', 
                        link: 'https://sigidli.com' 
                    },
                ],
                sidebar: [
                    '/zaf/nr/about/',
                    {
                        title: 'Translations',   // required
                        path: '/zaf/nr/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/zaf/nr/',
                            '/zaf/nr/explain-bitcoin-like-im-five/',
                            '/zaf/nr/bitcoin-is-like/',
                            '/zaf/nr/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/zaf/nr/i-am-hodling/'
                        ]
                    }
                ],
            },
            '/nam/ng/': {
                selectText: '🇳🇦 Languages',
                label: 'Oshiwambo',
                ariaLabel: 'Languages',
                editLinks: true,
                editLinkText: "Toloka xwepo!",
                continueReading: true,
                continueReadingText: 'Continue Reading',
                nav: [
                    { 
                        text: 'Home', 
                        link: '/nam/ng/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/nam/ng/translations/' 
                    },
                    { 
                        text: 'Sigidli', 
                        link: 'https://sigidli.com' 
                    },
                ],
                sidebar: [
                    '/nam/ng/about/',
                    {
                        title: 'Translations',   // required
                        path: '/nam/ng/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/nam/ng/',
                            '/nam/ng/explain-bitcoin-like-im-five/',
                            '/nam/ng/bitcoin-is-like/',
                            '/nam/ng/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/nam/ng/i-am-hodling/'
                        ]
                    }
                ],
            },
            '/nam/naq/': {
                selectText: '🇳🇦 Languages',
                label: 'Khoekhoegowab',
                ariaLabel: 'Languages',
                editLinks: true,
                editLinkText: "Improve Content!",
                continueReading: true,
                continueReadingText: 'Continue Reading',
                nav: [
                    { 
                        text: 'Home', 
                        link: '/nam/naq/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/nam/naq/translations/' 
                    },
                    { 
                        text: 'Sigidli', 
                        link: 'https://sigidli.com' 
                    },
                ],
                sidebar: [
                    '/nam/ng/about/',
                    {
                        title: 'Translations',   // required
                        path: '/nam/naq/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/nam/naq/',
                            '/nam/naq/explain-bitcoin-like-im-five/',
                            '/nam/naq/bitcoin-is-like/',
                            '/nam/naq/bitcoin-a-peer-to-peer-electronic-cash-system/',
                            '/nam/naq/i-am-hodling/'
                        ]
                    }
                ],
            }
        }
    }
}
