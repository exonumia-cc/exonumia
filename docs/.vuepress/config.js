module.exports = {
    dest: 'dist',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Exonumia',
            description: 'The landing page for native African language speaker looking to learn about Bitcoin.'
        },
        '/zu/': {
            lang: 'zu',
            group: '🇿🇦 South Africa',
            title: 'Exonumia',
            description: 'iLanding page for native african language speakers looking to learn about Bitcoin.'
        },
        '/st/': {
            lang: 'st',
            group: '🇿🇦 South Africa',
            title: 'Exonumia',
            description: 'iLanding page for native african language speakers looking to learn about Bitcoin.'
        },
        '/nr/': {
            lang: 'nr',
            group: '🇿🇦 South Africa',
            title: 'Exonumia',
            description: 'iLanding page for native african language speakers looking to learn about Bitcoin.'
        },
        '/ve/': {
            lang: 've',
            group: '🇿🇦 South Africa',
            title: 'Exonumia',
            description: 'iLanding page for native african language speakers looking to learn about Bitcoin.'
        },
        '/ng/': {
            lang: 'ng',
            group: '🇳🇦 Namibia',
            title: 'Exonumia',
            description: 'Ke yona landing page for native African language speaker looking to learn about Bitcoin.'
        }
    },
    themeConfig: {
        repo: 'https://github.com/exonumia-cc/exonumia.git',
        repoLabel: 'CODE',
        editLinks: true,
        searchPlaceholder: 'what goes up?',
        // i18n
        locales: {
            '/': {
                selectText: '🇬🇧 Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Improve Content',
                nav: [
                    { 
                        text: 'Home', 
                        link: '/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/translations/' 
                    },
                    { 
                        text: 'Sigidli', 
                        link: 'https://sigidli.com' 
                    }
                ],
                sidebar: [
                    '/about/',
                    {
                        title: 'Translations',   // required
                        path: '/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/',
                            '/explain-bitcoin-like-im-five/',
                            '/bitcoin-is-like/',
                            '/i-am-hodling/'
                        ]
                    }
                ],
            },
            '/zu/': {
                selectText: '🇿🇦 Izilimi',
                label: 'IsiZulu',
                ariaLabel: 'Izilimi',
                editLinks: true,
                editLinkText: "Thuthukisa Ukuhumusha",
                nav: [
                    { 
                        text: 'Home', 
                        link: '/zu/' 
                    },
                    { 
                        text: 'Ukuhumusha', 
                        link: '/zu/translations/' 
                    },
                    { 
                        text: 'Sigidli', 
                        link: 'https://sigidli.com' 
                    },
                ],
                sidebar: [
                    '/zu/about/',
                    {
                        title: 'Ukuhumusha',   // required
                        path: '/zu/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/zu/',
                            '/zu/explain-bitcoin-like-im-five/',
                            '/zu/bitcoin-is-like/',
                            '/zu/i-am-hodling/'
                        ]
                    }
                ],
            },
            '/st/': {
                selectText: '🇿🇦 Lipuo',
                label: 'Sesotho',
                ariaLabel: 'Lipuo',
                editLinks: true,
                editLinkText: "Ntlafatsa phetolelo!",
                nav: [
                    { 
                        text: 'Home', 
                        link: '/st/' 
                    },
                    { 
                        text: 'Fetolela', 
                        link: '/st/translations/' 
                    },
                    { 
                        text: 'Sigidli', 
                        link: 'https://sigidli.com' 
                    },
                ],
                sidebar: [
                    '/st/about/',
                    {
                        title: 'Fetolela',   // required
                        path: '/st/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/st/',
                            '/st/explain-bitcoin-like-im-five/',
                            '/st/bitcoin-is-like/',
                            '/st/i-am-hodling/'
                        ]
                    }
                ],
            },
            '/ve/': {
                selectText: '🇿🇦 Languages',
                label: 'IsiVenda',
                ariaLabel: 'Languages',
                editLinks: true,
                editLinkText: "Improve Translation!",
                nav: [
                    { 
                        text: 'Home', 
                        link: '/ve/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/ve/translations/' 
                    },
                    { 
                        text: 'Sigidli', 
                        link: 'https://sigidli.com' 
                    },
                ],
                sidebar: [
                    '/ve/about/',
                    {
                        title: 'Translations',   // required
                        path: '/ve/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/ve/',
                            '/ve/explain-bitcoin-like-im-five/',
                            '/ve/bitcoin-is-like/',
                            '/ve/i-am-hodling/'
                        ]
                    }
                ],
            },
            '/nr/': {
                selectText: '🇿🇦 Languages',
                label: 'Isindebele',
                ariaLabel: 'Languages',
                editLinks: true,
                editLinkText: "Improve Translation!",
                nav: [
                    { 
                        text: 'Home', 
                        link: '/nr/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/nr/translations/' 
                    },
                    { 
                        text: 'Sigidli', 
                        link: 'https://sigidli.com' 
                    },
                ],
                sidebar: [
                    '/nr/about/',
                    {
                        title: 'Translations',   // required
                        path: '/nr/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/nr/',
                            '/nr/explain-bitcoin-like-im-five/',
                            '/nr/bitcoin-is-like/',
                            '/nr/i-am-hodling/'
                        ]
                    }
                ],
            },
            '/ng/': {
                selectText: '🇳🇦 Languages',
                label: 'Oshiwambo',
                ariaLabel: 'Languages',
                editLinks: true,
                editLinkText: "Toloka xwepo!",
                nav: [
                    { 
                        text: 'Home', 
                        link: '/ng/' 
                    },
                    { 
                        text: 'Translations', 
                        link: '/ng/translations/' 
                    },
                    { 
                        text: 'Sigidli', 
                        link: 'https://sigidli.com' 
                    },
                ],
                sidebar: [
                    '/ng/about/',
                    {
                        title: 'Translations',   // required
                        path: '/ng/translations/',      // optional, which should be a absolute path.
                        // collapsable: false, // optional, defaults to true
                        // sidebarDepth: 3,    // optional, defaults to 1
                        children: [
                            '/ng/',
                            '/ng/explain-bitcoin-like-im-five/',
                            '/ng/bitcoin-is-like/',
                            '/ng/i-am-hodling/'
                        ]
                    }
                ],
            }
        }
    }
}
