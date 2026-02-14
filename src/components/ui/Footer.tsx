import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-jubla-green-dark text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-amatic text-4xl font-bold mb-6">Jubla Triengen</h4>
            <p className="font-inter font-light text-gray-300 leading-relaxed">
              Abenteuer, Freundschaft und unvergessliche Erlebnisse für Kinder und Jugendliche.
            </p>
          </div>

          <div>
            <h5 className="font-inter font-semibold text-lg mb-4">Kontakt</h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-jubla-yellow mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@jubla-triengen.ch"
                  className="font-inter font-light text-gray-300 hover:text-jubla-yellow transition-colors"
                >
                  info@jubla-triengen.ch
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-jubla-yellow mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+41411234567"
                  className="font-inter font-light text-gray-300 hover:text-jubla-yellow transition-colors"
                >
                  +41 41 123 45 67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-jubla-yellow mt-0.5 flex-shrink-0" />
                <span className="font-inter font-light text-gray-300">
                  Triengen, Luzern
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-inter font-semibold text-lg mb-4">Lager & Infos</h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-inter font-light text-gray-300 hover:text-jubla-yellow transition-colors"
                >
                  Sommerlager
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter font-light text-gray-300 hover:text-jubla-yellow transition-colors"
                >
                  Herbstlager
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter font-light text-gray-300 hover:text-jubla-yellow transition-colors"
                >
                  Gruppenstunden
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter font-light text-gray-300 hover:text-jubla-yellow transition-colors"
                >
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-inter font-semibold text-lg mb-4">Folge uns</h5>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-jubla-yellow hover:bg-jubla-yellow-dark rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-6 h-6 text-black" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-jubla-yellow hover:bg-jubla-yellow-dark rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-6 h-6 text-black" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter font-light text-gray-400 text-sm">
              © 2024 Jubla Triengen. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-inter font-light text-gray-400 hover:text-jubla-yellow text-sm transition-colors"
              >
                Datenschutz
              </a>
              <a
                href="#"
                className="font-inter font-light text-gray-400 hover:text-jubla-yellow text-sm transition-colors"
              >
                Impressum
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
