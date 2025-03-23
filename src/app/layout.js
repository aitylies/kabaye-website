import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 md:pr-12">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                                Simplifiez votre gestion locative
                            </h1>
                            <p className="text-xl mb-8">
                                Kabaye vous aide à gérer vos biens immobiliers et à trouver les meilleurs locataires, sans stress et en toute sécurité.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link href="/register" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium text-center">
                                    Essayer gratuitement
                                </Link>
                                <Link href="/demo" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md text-lg font-medium text-center">
                                    Voir une démo
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-12 md:mt-0">
                            <div className="bg-white p-4 rounded-lg shadow-xl">
                                {/* Remplacez ceci par votre propre image */}
                                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded flex items-center justify-center">
                                    <p className="text-gray-500">Capture d'écran de l'application</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Avantages */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir Kabaye ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Gestion simplifiée</h3>
                            <p className="text-gray-600">
                                Gérez tous vos biens locatifs en un seul endroit, avec une interface intuitive et moderne.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Sécurité maximale</h3>
                            <p className="text-gray-600">
                                Vérification automatique des dossiers et des documents pour garantir des locations sécurisées.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Gain de temps</h3>
                            <p className="text-gray-600">
                                Automatisez les tâches répétitives et consacrez votre temps à ce qui compte vraiment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-600 text-white py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Prêt à simplifier votre gestion locative ?</h2>
                    <p className="text-xl mb-8">
                        Rejoignez des milliers de propriétaires qui font confiance à Kabaye pour la gestion de leurs biens.
                    </p>
                    <Link href="/register" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium inline-block">
                        Commencer gratuitement
                    </Link>
                </div>
            </section>
        </main>
    );
}