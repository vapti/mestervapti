"use client" 
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    script.async = true; 
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []); 
  return (
    <footer className="bg-neutral-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4 text-white">SDM Chiptuning</h3>
            <p className="text-white">
            Få fuld kraft ud af din bil – Optimer ydeevnen med os!</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Sider</h4>
            <ul className="space-y-2 text-white">
              <li>
                <a href="/">Forside</a>
              </li>
              <li>
                <a href="/omos">Om Os</a>
              </li>
              <li>
                <a href="/priser">Priser</a>
              </li>
              <li>
                <a href="/kontaktos">Kontakt Os</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-white">
              <li>kontakt@sdmchiptuning.dk</li>
              <li>+45 28 25 45 51</li>
              <li>CVR: 44 97 73 38</li>
              <li>Østervang 12, 7160 Tørring</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Følg Os</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61567711833205" className="text-white hover:text-primary transition-colors">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        <div className="pb-3 trustpilot-widget" data-locale="da-DK" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="66dc6fb2321310cee73e14df" data-style-height="52px" data-style-width="100%">
          <a href="https://dk.trustpilot.com/review/sdmchiptuning.dk" target="_blank" rel="noopener">Trustpilot</a>
        </div>
        <div className="border-t border-white/10 pt-9 text-center text-white">
          <p>&copy; 2024 SDMCHIPTUNING. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;