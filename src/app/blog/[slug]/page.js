import Link from 'next/link';

// Simulation de données d'articles
const blogPosts = {
    'comment-selectionner-bon-locataire': {
        title: 'Comment sélectionner le bon locataire pour votre bien',
        date: '15 mars 2024',
        content: `
      <p>La sélection d'un bon locataire est l'une des décisions les plus importantes que vous prendrez en tant que propriétaire. Un locataire fiable vous épargnera non seulement des maux de tête, mais assurera également un flux de revenus constant et préservera la valeur de votre bien.</p>
      
      <h2>Les critères essentiels à vérifier</h2>
      
      <p>Avant de choisir un locataire, assurez-vous de vérifier les éléments suivants :</p>
      
      <h3>1. Stabilité financière</h3>
      <p>Le candidat doit avoir des revenus stables, généralement au moins trois fois le montant du loyer. Demandez les trois dernières fiches de paie et vérifiez l'ancienneté dans l'emploi actuel.</p>
      
      <h3>2. Historique locatif</h3>
      <p>Des références de précédents propriétaires peuvent vous donner une bonne idée du comportement du locataire : paiement du loyer à temps, entretien du logement, respect des règles, etc.</p>
      
      <h3>3. Solvabilité</h3>
      <p>Vérifiez l'absence de dettes importantes ou d'incidents bancaires qui pourraient compromettre le paiement du loyer.</p>
      
      <h2>L'importance d'un processus de sélection structuré</h2>
      
      <p>Pour éviter les discriminations et traiter toutes les candidatures équitablement, établissez un processus clair :</p>
      
      <ul>
        <li>Définissez vos critères à l'avance</li>
        <li>Utilisez un formulaire de candidature standard pour tous</li>
        <li>Documentez vos décisions</li>
        <li>Assurez-vous que votre processus respecte les lois anti-discrimination</li>
      </ul>
      
      <p>Avec Kabaye, vous pouvez automatiser ce processus de sélection et recevoir une analyse détaillée de chaque dossier, ce qui vous aide à prendre des décisions éclairées rapidement.</p>
    `
    },
    // Vous pouvez ajouter d'autres articles de la même façon
};

export async function generateMetadata({ params }) {
    const { slug } = params;
    const post = blogPosts[slug];

    if (!post) {
        return {
            title: 'Article non trouvé',
            description: 'Cet article n\'existe pas ou a été déplacé.'
        };
    }

    return {
        title: post.title,
        description: `${post.title} - Blog Kabaye sur la gestion locative`
    };
}

export default function BlogPost({ params }) {
    const { slug } = params;
    const post = blogPosts[slug];

    if (!post) {
        return (
            <main className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-6">Article non trouvé</h1>
                    <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
                    <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
                        Retour au blog
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-8 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Retour au blog
                </Link>

                <article className="bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                    <div className="text-gray-500 mb-6">{post.date}</div>

                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </article>
            </div>
        </main>
    );
}