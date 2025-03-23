export default function sitemap() {
    const baseUrl = 'https://kabaye.fr'; // Remplacez par votre domaine

    // URLs statiques de votre site
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/fonctionnalites`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tarifs`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    // Simulons des articles de blog pour le sitemap
    const blogPosts = [
        {
            slug: 'comment-selectionner-bon-locataire',
            lastModified: new Date(),
        },
        {
            slug: 'documents-indispensables-dossier-location',
            lastModified: new Date(),
        },
        {
            slug: 'nouvelles-lois-location-2024',
            lastModified: new Date(),
        },
        {
            slug: 'preparer-dossier-location-qui-se-demarque',
            lastModified: new Date(),
        }
    ];

    const blogUrls = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.lastModified,
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [...staticPages, ...blogUrls];
}