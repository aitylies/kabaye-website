export const metadata = {
    title: 'Fonctionnalités | Kabaye',
    description: 'Découvrez toutes les fonctionnalités de Kabaye pour simplifier votre gestion locative.',
}

export default function Features() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl font-bold">Nos fonctionnalités</h1>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Gestion des candidatures</h2>
                    <p>Recevez et analysez facilement les dossiers des candidats locataires.</p>
                </div>
                {/* Autres fonctionnalités */}
            </div>
        </main>
    )
}