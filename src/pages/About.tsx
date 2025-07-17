import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Users, Award, Heart, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-gradient-to-r from-purple-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Sobre o Contrato Direto
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Conectamos jovens talentos com empresas visionárias, criando pontes para um futuro mais promissor.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Nossa História */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-4">
                Fundado em 2020 no coração do Rio de Janeiro, o Contrato Direto nasceu da visão de que 
                jovens aprendizes são a força transformadora que as empresas precisam para inovar e crescer.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Começamos como uma pequena iniciativa local e hoje somos a principal plataforma de 
                conexão entre jovens talentos e empresas no estado do Rio de Janeiro.
              </p>
              <p className="text-lg text-gray-600">
                Nossa missão é simples: acreditamos que todo jovem tem potencial para revolucionar 
                um time, e toda empresa tem a capacidade de ser o trampolim para uma carreira extraordinária.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Equipe trabalhando"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Propósito</h3>
              <p className="text-gray-600">
                Acreditamos que cada jovem tem um propósito único e merece a oportunidade de brilhar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Colaboração</h3>
              <p className="text-gray-600">
                Construímos pontes entre gerações, criando ambientes onde todos aprendem e crescem juntos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excelência</h3>
              <p className="text-gray-600">
                Buscamos a excelência em cada conexão, garantindo matches perfeitos entre talentos e empresas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Humanização</h3>
              <p className="text-gray-600">
                Colocamos as pessoas no centro de tudo, valorizando histórias, sonhos e potenciais únicos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Crescimento</h3>
              <p className="text-gray-600">
                Facilitamos o crescimento mútuo, onde jovens e empresas evoluem juntos rumo ao sucesso.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Confiança</h3>
              <p className="text-gray-600">
                Construímos relações baseadas na confiança, transparência e compromisso com resultados.
              </p>
            </div>
          </div>
        </section>

        {/* Nossos Números */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-teal-500 rounded-2xl text-white p-8">
            <h2 className="text-3xl font-bold text-center mb-12">Nosso Impacto</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-purple-100">Jovens Contratados</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-purple-100">Empresas Parceiras</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-purple-100">Taxa de Satisfação</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3 Anos</div>
                <div className="text-purple-100">Transformando Vidas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossa Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="CEO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Rafael Silva</h3>
              <p className="text-purple-600 mb-3">CEO & Fundador</p>
              <p className="text-gray-600 text-sm">
                Especialista em RH com 15 anos de experiência, apaixonado por conectar talentos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                alt="CTO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Marina Costa</h3>
              <p className="text-purple-600 mb-3">CTO & Co-fundadora</p>
              <p className="text-gray-600 text-sm">
                Desenvolvedora full-stack com visão estratégica para tecnologia e inovação.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                alt="Head de Parcerias"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Lucas Ferreira</h3>
              <p className="text-purple-600 mb-3">Head de Parcerias</p>
              <p className="text-gray-600 text-sm">
                Especialista em relacionamento corporativo, construindo pontes entre empresas e talentos.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;