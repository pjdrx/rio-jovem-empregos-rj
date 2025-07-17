
import { MapPin, Search, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="bg-gradient-to-r from-purple-600 to-teal-500 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-900">
                Contrato <span className="text-purple-600">Direto</span>
              </h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/jobs" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Vagas
            </Link>
            <Link to="/companies" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Empresas
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Sobre
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contato
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/apprentices">
              <button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Descubra quem vai revolucionar seu time
              </button>
            </Link>
            <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Publicar Vaga
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              <Link to="/jobs" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                Vagas
              </Link>
              <Link to="/companies" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                Empresas
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                Sobre
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                Contato
              </Link>
              <Link to="/apprentices">
                <button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors mt-2 w-full">
                  Descubra quem vai revolucionar seu time
                </button>
              </Link>
              <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full">
                Publicar Vaga
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
