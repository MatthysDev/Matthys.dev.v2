export default function JsonLd() {
    const graph = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                name: 'Matthys Ducrocq',
                url: 'https://www.matthys.dev',
                image: 'https://www.matthys.dev/pp.jpg',
                jobTitle: 'React Native & Expo Developer',
                worksFor: {
                    '@type': 'Organization',
                    name: 'Ekklo',
                },
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Lille',
                    addressCountry: 'FR',
                },
                sameAs: [
                    'https://github.com/MatthysDev',
                    'https://www.linkedin.com/in/matthys-ducrocq',
                    'https://twitter.com/MatthysDev',
                ],
            },
            {
                '@type': 'WebSite',
                name: 'Matthys Ducrocq',
                url: 'https://www.matthys.dev',
            },
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
    )
}
