import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">SDM Chiptuning</h3>
            <p className="text-white">
            Få fuld kraft ud af din bil – Optimer ydeevnen med os!</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sider</h4>
            <ul className="space-y-2 text-white">
              <li>Forside</li>
              <li>Om Os</li>
              <li>Priser</li>
              <li>Kontakt Os</li>
              <li>Booking</li> 
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-white">
              <li>kontakt@sdmchiptuning.dk</li>
              <li>+45 28 25 45 51</li>
              <li>CVR: 44 97 73 38</li>
              <li>Østervang 12, 7160 Tørring</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Følg Os</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-white first-line:hover:text-primary transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-9 text-center text-white">
          <p>&copy; 2024 SDMCHIPTUNING. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;