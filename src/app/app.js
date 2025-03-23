import JsonLd from '@/components/JsonLd';

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Kabaye",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Kabaye est une solution de gestion locative qui simplifie les démarches pour propriétaires et locataires.",
        "offers": {
            "@type": "Offer",
            "price": "9.99",
            "priceCurrency": "EUR"
        }
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            {/* Rest of your home page content */}
        </>
    );
}