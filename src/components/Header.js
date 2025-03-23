'use client';  // Cette directive est nécessaire car nous utilisons useState
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/*<Link href="/" className="font-bold text-xl text-blue-600">
                        Kabaye
                    </Link>*/}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Kabaye Logo"
                            width={120}
                            height={40}
                            priority
                        />
                    </Link>



                    {/* Navigation desktop */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/fonctionnalites" className="text-gray-700 hover:text-blue-600">
                            Fonctionnalités
                        </Link>
                        <Link href="/tarifs" className="text-gray-700 hover:text-blue-600">
                            Tarifs
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </Link>
                    </nav>

                    <div className="hidden md:flex space-x-4">
                        <Link href="https://app.kabaye.fr/login" className="text-blue-600 hover:text-blue-800">
                            Connexion
                        </Link>
                        <Link href="https://app.kabaye.fr/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                            S'inscrire
                        </Link>
                    </div>

                    {/* Hamburger menu pour mobile */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Menu mobile */}
                {isMenuOpen && (
                    <div className="md:hidden py-4">
                        <nav className="flex flex-col space-y-4">
                            <Link href="/fonctionnalites" className="text-gray-700 hover:text-blue-600">
                                Fonctionnalités
                            </Link>
                            <Link href="/tarifs" className="text-gray-700 hover:text-blue-600">
                                Tarifs
                            </Link>
                            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                                Contact
                            </Link>
                            <Link href="https://app.kabaye.fr/login" className="text-blue-600 hover:text-blue-800">
                                Connexion
                            </Link>
                            <Link href="https://app.kabaye.fr/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center">
                                S'inscrire
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}