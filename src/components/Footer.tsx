
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-teal-500 to-purple-600 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-bold">
                Contrato <span className="text-teal-400">Direto</span>
              </h3>
            </div>
            <p className="text-purple-100 mb-6 max-w-md">
              Conectando jovens talentos com as melhores oportunidades de emprego 
              no estado do Rio de Janeiro. Sua carreira começa aqui!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-300 hover:text-teal-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-purple-300 hover:text-teal-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-purple-300 hover:text-teal-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Todas as Vagas</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Empresas Parceiras</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Dicas de Carreira</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Como se Candidatar</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-300 mr-3" />
                <span className="text-purple-200">contato@contratodireto.com.br</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-300 mr-3" />
                <span className="text-purple-200">(21) 3000-0000</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-300 mr-3 mt-1" />
                <span className="text-purple-200">
                  Rio de Janeiro, RJ<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-200">
            © 2024 Contrato Direto. Todos os direitos reservados.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
