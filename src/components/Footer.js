import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Link href="/" className="text-xl font-bold text-white">Kabaye</Link>
                        <p className="mt-4 text-gray-400">
                            La solution de gestion locative qui simplifie vos démarches.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Produit</h3>
                        <ul className="space-y-2">
                            <li><Link href="/fonctionnalites" className="text-gray-400 hover:text-white">Fonctionnalités</Link></li>
                            <li><Link href="/tarifs" className="text-gray-400 hover:text-white">Tarifs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Ressources</h3>
                        <ul className="space-y-2">
                            <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                            <li><Link href="/faq/page" className="text-gray-400 hover:text-white">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Légal</h3>
                        <ul className="space-y-2">
                            <li><Link href="/mentions-legales" className="text-gray-400 hover:text-white">Mentions légales</Link></li>
                            <li><Link href="/confidentialite" className="text-gray-400 hover:text-white">Politique de confidentialité</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">© {new Date().getFullYear()} Kabaye. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}