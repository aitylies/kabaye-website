export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/api'],
        },
        sitemap: 'https://kabaye.fr/sitemap.xml', // Remplacez par votre domaine
    };
}