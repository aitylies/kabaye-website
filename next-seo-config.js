const SEO = {
    titleTemplate: '%s | Kabaye - La gestion locative simplifiée',
    defaultTitle: 'Kabaye - La gestion locative simplifiée',
    description: 'Simplifiez vos démarches de location immobilière avec notre solution complète pour propriétaires et locataires.',
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: 'https://kabaye.fr/',
        siteName: 'Kabaye',
        images: [
            {
                url: 'https://kabaye.fr/og-image.jpg', // Créez cette image dans votre dossier public
                width: 1200,
                height: 630,
                alt: 'Kabaye - La gestion locative simplifiée',
            },
        ],
    },
    twitter: {
        handle: '@kabaye',
        site: '@kabaye',
        cardType: 'summary_large_image',
    },
};

export default SEO;