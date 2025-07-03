
import { Search, MapPin, Users, Briefcase } from 'lucide-react';
import { useState } from 'react';

const HeroSection = ({ onSearch }: { onSearch: (query: string, location: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, location);
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Encontre
            <span className="block text-white">
              a sua vaga
            </span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Conectamos jovens talentos com as melhores empresas do Rio de Janeiro. 
            Encontre sua vaga de Jovem Aprendiz e dê o primeiro passo na sua carreira.
          </p>
        </div>

        <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-2 flex flex-col md:flex-row gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar vagas (ex: administrativa, vendas...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-gray-900 placeholder-gray-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Localização (ex: Centro, Barra da Tijuca...)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-gray-900 placeholder-gray-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Pesquisar Vagas
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
            <div className="bg-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
            <p className="text-purple-100">Vagas disponíveis</p>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
            <div className="bg-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">200+</h3>
            <p className="text-purple-100">Empresas parceiras</p>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
            <div className="bg-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Rio de Janeiro</h3>
            <p className="text-purple-100">Todas as regiões</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
