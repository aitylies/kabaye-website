import Link from 'next/link';

export const metadata = {
    title: 'Blog',
    description: 'Découvrez nos articles et conseils sur la gestion locative et l\'immobilier.',
}

// Simulations d'articles de blog
const blogPosts = [
    {
        id: 1,
        title: 'Comment sélectionner le bon locataire pour votre bien',
        excerpt: 'Découvrez les critères essentiels pour choisir un locataire fiable et éviter les impayés.',
        date: '15 mars 2024',
        slug: 'comment-selectionner-bon-locataire'
    },
    {
        id: 2,
        title: 'Les documents indispensables pour constituer un dossier de location solide',
        excerpt: 'Liste complète des documents à demander aux candidats locataires pour sécuriser votre location.',
        date: '2 mars 2024',
        slug: 'documents-indispensables-dossier-location'
    },
    {
        id: 3,
        title: 'Les nouvelles lois sur la location en 2024',
        excerpt: 'Tour d\'horizon des principales évolutions législatives qui impactent les propriétaires et locataires.',
        date: '18 février 2024',
        slug: 'nouvelles-lois-location-2024'
    },
    {
        id: 4,
        title: 'Comment préparer un dossier de location qui se démarque',
        excerpt: 'Conseils pratiques pour les locataires afin d\'augmenter leurs chances d\'obtenir le logement de leurs rêves.',
        date: '5 février 2024',
        slug: 'preparer-dossier-location-qui-se-demarque'
    }
];

export default function Blog() {
    return (
        <main className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-12">Blog Kabaye</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                                <h2 className="text-xl font-bold mb-3">
                                    <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                                    Lire l'article
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}