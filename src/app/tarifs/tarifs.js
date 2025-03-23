export const metadata = {
    title: 'Tarifs',
    description: 'Découvrez nos formules d\'abonnement pour la gestion locative avec Kabaye.',
}

export default function Pricing() {
    return (
        <main className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Nos tarifs</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choisissez la formule adaptée à vos besoins. Tous nos plans incluent un essai gratuit de 14 jours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Formule Essentiel */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6 border-b">
                            <h2 className="text-2xl font-bold mb-2">Essentiel</h2>
                            <p className="text-gray-600">Pour les petits propriétaires</p>
                            <div className="mt-4">
                                <span className="text-4xl font-bold">9,99€</span>
                                <span className="text-gray-600">/mois</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Jusqu'à 3 biens</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Gestion des candidatures</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Support par email</span>
                                </li>
                            </ul>
                            <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                                Essayer gratuitement
                            </button>
                        </div>
                    </div>

                    {/* Formule Pro */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-600 transform scale-105">
                        <div className="p-6 border-b bg-blue-600 text-white">
                            <h2 className="text-2xl font-bold mb-2">Pro</h2>
                            <p>Pour les propriétaires actifs</p>
                            <div className="mt-4">
                                <span className="text-4xl font-bold">19,99€</span>
                                <span>/mois</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Jusqu'à 10 biens</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Gestion avancée des candidatures</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Support prioritaire</span>
                                </li>
                            </ul>
                            <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                                Essayer gratuitement
                            </button>
                        </div>
                    </div>

                    {/* Formule Entreprise */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6 border-b">
                            <h2 className="text-2xl font-bold mb-2">Entreprise</h2>
                            <p className="text-gray-600">Pour les professionnels</p>
                            <div className="mt-4">
                                <span className="text-4xl font-bold">49,99€</span>
                                <span className="text-gray-600">/mois</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Biens illimités</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Fonctionnalités premium</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Support dédié 24/7</span>
                                </li>
                            </ul>
                            <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                                Essayer gratuitement
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}