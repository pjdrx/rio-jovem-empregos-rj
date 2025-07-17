import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building, Users, Star, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const companies = [
  {
    id: 1,
    name: "TechCorp Inovação",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop",
    location: "Centro, Rio de Janeiro",
    employees: "500-1000",
    area: "Tecnologia",
    rating: 4.8,
    openJobs: 12,
    description: "Empresa líder em soluções tecnológicas, comprometida com a inovação e desenvolvimento de jovens talentos."
  },
  {
    id: 2,
    name: "Verde Sustentável",
    logo: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=200&h=200&fit=crop",
    location: "Barra da Tijuca, Rio de Janeiro",
    employees: "100-500",
    area: "Sustentabilidade",
    rating: 4.9,
    openJobs: 8,
    description: "Pioneira em soluções sustentáveis, oferecendo um ambiente de trabalho que inspira mudanças positivas."
  },
  {
    id: 3,
    name: "CreativeHub Design",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop",
    location: "Ipanema, Rio de Janeiro",
    employees: "50-100",
    area: "Design",
    rating: 4.7,
    openJobs: 5,
    description: "Agência criativa que transforma ideias em realidade, valorizando a criatividade e inovação de seus colaboradores."
  },
  {
    id: 4,
    name: "FinanceMax Consultoria",
    logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop",
    location: "Centro, Rio de Janeiro",
    employees: "200-500",
    area: "Financeiro",
    rating: 4.6,
    openJobs: 15,
    description: "Consultoria financeira de excelência, oferecendo oportunidades de crescimento e aprendizado contínuo."
  },
  {
    id: 5,
    name: "HealthCare Plus",
    logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=200&fit=crop",
    location: "Copacabana, Rio de Janeiro",
    employees: "300-500",
    area: "Saúde",
    rating: 4.8,
    openJobs: 10,
    description: "Rede de saúde comprometida com o bem-estar, proporcionando um ambiente de trabalho humanizado e colaborativo."
  },
  {
    id: 6,
    name: "EduFuture Ensino",
    logo: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=200&h=200&fit=crop",
    location: "Tijuca, Rio de Janeiro",
    employees: "100-200",
    area: "Educação",
    rating: 4.9,
    openJobs: 7,
    description: "Instituição educacional inovadora, dedicada a formar os profissionais do futuro através da educação de qualidade."
  }
];

const Companies = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-gradient-to-r from-purple-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Empresas Parceiras
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Conheça as empresas que confiam no nosso trabalho e investem no desenvolvimento de jovens talentos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mais de 200 empresas confiam em nós
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Desde startups inovadoras até grandes corporações, conectamos jovens aprendizes 
            com empresas que valorizam o potencial e investem no futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {companies.map((company) => (
            <div key={company.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-gray-600 ml-1">{company.rating}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {company.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {company.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {company.employees} funcionários
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Building className="h-4 w-4 mr-2" />
                    {company.area}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-purple-600 font-semibold">
                    {company.openJobs} vagas abertas
                  </span>
                  <Link to="/jobs" className="text-purple-600 hover:text-purple-700 flex items-center text-sm font-medium">
                    Ver vagas
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sua empresa também pode fazer parte
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já descobriram o poder transformador 
            dos jovens aprendizes. Publique suas vagas e encontre os talentos do futuro.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            Publicar Vaga
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Companies;