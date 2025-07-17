import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-gradient-to-r from-purple-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a encontrar os melhores talentos ou a próxima oportunidade da sua carreira.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fale Conosco</h2>
            <p className="text-gray-600 mb-8">
              Nossa equipe está sempre disponível para esclarecer dúvidas, receber sugestões 
              e ajudar você a encontrar a melhor solução.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">contato@contratodireto.com.br</p>
                  <p className="text-gray-600">suporte@contratodireto.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                  <p className="text-gray-600">(21) 3000-1234</p>
                  <p className="text-gray-600">(21) 99999-5678</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    Av. Rio Branco, 1234<br />
                    Centro, Rio de Janeiro - RJ<br />
                    CEP: 20040-020
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda à Sexta: 8h às 18h<br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Envie sua Mensagem</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="empresa">Sou empresa e quero contratar</option>
                      <option value="jovem">Sou jovem e busco oportunidades</option>
                      <option value="parceria">Interesse em parceria</option>
                      <option value="suporte">Suporte técnico</option>
                      <option value="outros">Outros assuntos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Conte-nos como podemos ajudar você..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Como funciona para empresas?</h3>
              <p className="text-gray-600">
                Empresas podem publicar vagas gratuitamente e acessar nosso banco de talentos. 
                Oferecemos suporte completo no processo de seleção e integração.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">É gratuito para jovens?</h3>
              <p className="text-gray-600">
                Sim! Nosso serviço é 100% gratuito para jovens que buscam oportunidades de aprendizagem. 
                Oferecemos também orientação de carreira.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qual o tempo de resposta?</h3>
              <p className="text-gray-600">
                Respondemos todas as mensagens em até 24 horas úteis. Para questões urgentes, 
                entre em contato via telefone.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oferecem consultoria?</h3>
              <p className="text-gray-600">
                Sim! Oferecemos consultoria especializada em gestão de talentos jovens e 
                programas de aprendizagem corporativa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;