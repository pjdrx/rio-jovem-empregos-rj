import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Star, Award, Target, Users, Brain, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Apprentice {
  id: number;
  name: string;
  age: number;
  photo: string;
  qualities: string[];
  behavioral: string[];
  technical: string[];
  highlight: string;
}

const apprentices: Apprentice[] = [
  {
    id: 1,
    name: "Ana Beatriz Silva",
    age: 18,
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    qualities: ["Liderança natural", "Comunicação eficaz", "Pensamento analítico", "Criatividade"],
    behavioral: ["Proativa", "Colaborativa", "Resiliente", "Empática"],
    technical: ["Excel avançado", "PowerBI", "SQL básico", "Design thinking"],
    highlight: "Consegue transformar dados complexos em insights claros para toda a equipe, sempre com um sorriso no rosto."
  },
  {
    id: 2,
    name: "Carlos Eduardo Santos",
    age: 19,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    qualities: ["Resolução de problemas", "Aprendizado rápido", "Organização", "Inovação", "Dedicação"],
    behavioral: ["Determinado", "Curioso", "Responsável", "Adaptável"],
    technical: ["Python", "JavaScript", "Git/GitHub", "APIs REST"],
    highlight: "Desenvolveu uma automação que economizou 15 horas semanais de trabalho manual em apenas 2 meses de estágio."
  },
  {
    id: 3,
    name: "Mariana Costa Oliveira",
    age: 17,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    qualities: ["Inteligência emocional", "Visão estratégica", "Networking"],
    behavioral: ["Carismática", "Influenciadora", "Otimista", "Persistente"],
    technical: ["Redes sociais", "Canva", "Google Analytics", "CRM"],
    highlight: "Aumentou o engajamento nas redes sociais da empresa em 200% com campanhas criativas e autênticas."
  },
  {
    id: 4,
    name: "Pedro Henrique Lima",
    age: 18,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    qualities: ["Atenção aos detalhes", "Pensamento lógico", "Eficiência", "Precisão"],
    behavioral: ["Metódico", "Confiável", "Paciente", "Focado"],
    technical: ["SAP", "Processos fiscais", "Planilhas avançadas", "Compliance"],
    highlight: "Identificou e corrigiu inconsistências em processos que geraram economia de R$ 50mil para a empresa."
  },
  {
    id: 5,
    name: "Gabriela Ferreira Rosa",
    age: 19,
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    qualities: ["Criatividade", "Visão de negócio", "Sustentabilidade", "Inovação", "Liderança"],
    behavioral: ["Visionária", "Sustentável", "Inspiradora", "Corajosa"],
    technical: ["Figma", "Adobe Creative", "UX/UI", "Prototipação"],
    highlight: "Criou uma solução de design que melhorou a experiência do usuário em 40% e se tornou referência na empresa."
  }
];

const Apprentices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-gradient-to-r from-purple-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white hover:text-gray-200 transition-colors mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar para vagas
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Conheça quem vai revolucionar seu time
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Jovens aprendizes prontos para transformar desafios em oportunidades e crescer junto com sua empresa.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {apprentices.map((apprentice) => (
            <div key={apprentice.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <img
                    src={apprentice.photo}
                    alt={apprentice.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-purple-100"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{apprentice.name}</h3>
                    <p className="text-purple-600 font-medium mb-4">{apprentice.age} anos</p>
                    
                    <div className="mb-6">
                      <p className="text-gray-700 italic leading-relaxed">
                        "{apprentice.highlight}"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <Star className="h-5 w-5 text-purple-600 mr-2" />
                      <h4 className="font-semibold text-gray-900">Principais Qualidades</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {apprentice.qualities.map((quality, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {quality}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <Heart className="h-5 w-5 text-teal-600 mr-2" />
                      <h4 className="font-semibold text-gray-900">Características Comportamentais</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {apprentice.behavioral.map((trait, index) => (
                        <span
                          key={index}
                          className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  {apprentice.technical.length > 0 && (
                    <div>
                      <div className="flex items-center mb-3">
                        <Brain className="h-5 w-5 text-orange-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Habilidades Técnicas</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {apprentice.technical.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-200">
                    <button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                      Conversar com {apprentice.name.split(' ')[0]}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para descobrir mais talentos?
            </h3>
            <p className="text-gray-600 mb-6">
              Estes são apenas alguns dos jovens aprendizes incríveis que estão prontos para fazer a diferença na sua empresa. 
              Entre em contato conosco para conhecer ainda mais perfis e encontrar o match perfeito para suas necessidades.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white py-3 px-8 rounded-lg font-medium transition-colors">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Apprentices;