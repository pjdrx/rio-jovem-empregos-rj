
import { Filter, MapPin, Briefcase, Building } from 'lucide-react';

interface FilterSectionProps {
  filters: {
    location: string;
    area: string;
    type: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onClearFilters: () => void;
}

const FilterSection = ({ filters, onFilterChange, onClearFilters }: FilterSectionProps) => {
  const locations = [
    'Todas as regiões',
    'Centro',
    'Zona Sul',
    'Barra da Tijuca',
    'Zona Norte',
    'Zona Oeste',
    'Baixada Fluminense'
  ];

  const areas = [
    'Todas as áreas',
    'Administrativa',
    'Vendas',
    'Atendimento',
    'Logística',
    'Recursos Humanos',
    'Marketing',
    'Tecnologia',
    'Financeiro'
  ];

  const types = [
    'Todos os tipos',
    'Presencial',
    'Híbrido',
    'Home Office'
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-8 mb-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-purple-600 to-teal-500 p-2 rounded-lg mr-3">
            <Filter className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-purple-900">Filtros</h3>
        </div>
        <button
          onClick={onClearFilters}
          className="text-purple-600 hover:text-purple-700 text-sm font-medium bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-full transition-colors"
        >
          Limpar filtros
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-purple-900 mb-3">
            <MapPin className="inline h-4 w-4 mr-2 text-purple-600" />
            Localização
          </label>
          <select
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full p-4 border border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-900 mb-3">
            <Briefcase className="inline h-4 w-4 mr-2 text-purple-600" />
            Área de Atuação
          </label>
          <select
            value={filters.area}
            onChange={(e) => onFilterChange('area', e.target.value)}
            className="w-full p-4 border border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
          >
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-900 mb-3">
            <Building className="inline h-4 w-4 mr-2 text-purple-600" />
            Modalidade
          </label>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="w-full p-4 border border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
