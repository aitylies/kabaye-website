'use client';
import { useState } from 'react';

export const metadata = {
    title: 'FAQ',
    description: 'Questions fréquemment posées sur Kabaye et la gestion locative.',
}

export default function FAQ() {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    const faqItems = [
        {
            id: 1,
            question: "Qu'est-ce que Kabaye ?",
            answer: "Kabaye est une plateforme SaaS (Software as a Service) qui simplifie la gestion locative pour les propriétaires et améliore l'expérience des locataires. Notre solution permet de gérer les annonces, de sélectionner les candidats, et de suivre l'ensemble du processus de location."
        },
        {
            id: 2,
            question: "Comment fonctionne l'essai gratuit ?",
            answer: "Vous pouvez essayer Kabaye gratuitement pendant 14 jours, sans engagement. Pendant cette période, vous avez accès à toutes les fonctionnalités de la plateforme. Aucune carte bancaire n'est requise pour commencer votre essai."
        },
        {
            id: 3,
            question: "Puis-je annuler mon abonnement à tout moment ?",
            answer: "Oui, vous pouvez annuler votre abonnement à tout moment. Si vous annulez, vous aurez toujours accès au service jusqu'à la fin de votre période de facturation."
        },
        {
            id: 4,
            question: "Comment vérifiez-vous les dossiers des locataires ?",
            answer: "Notre système vérifie automatiquement l'authenticité des documents fournis par les candidats. Nous analysons également la cohérence des informations et calculons des ratios financiers pour vous aider à évaluer la solvabilité des candidats."
        },
        {
            id: 5,
            question: "Est-ce que Kabaye est conforme au RGPD ?",
            answer: "Oui, Kabaye est entièrement conforme au Règlement Général sur la Protection des Données (RGPD). Nous prenons très au sérieux la protection des données personnelles et avons mis en place toutes les mesures nécessaires pour assurer leur sécurité."
        }
    ];

    return (
        <main className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-12">Questions fréquentes</h1>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {faqItems.map((item) => (
                        <div key={item.id} className="border-b border-gray-200 last:border-0">
                            <button
                                className="w-full px-6 py-4 text-left font-medium flex justify-between items-center focus:outline-none"
                                onClick={() => toggleItem(item.id)}
                            >
                                {item.question}
                                <svg
                                    className={`w-5 h-5 transform transition-transform ${openItem === item.id ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {openItem === item.id && (
                                <div className="px-6 py-4 text-gray-600 bg-gray-50">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}