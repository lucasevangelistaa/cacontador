import { motion as Motion } from "framer-motion";
import { useState } from "react";
import {
  FaWhatsapp,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.phone.trim()) newErrors.phone = "Telefone é obrigatório";
    if (!formData.message.trim()) newErrors.message = "Mensagem é obrigatória";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      // Formatando a mensagem para o WhatsApp
      const whatsappMessage = `Olá Carlos, meu nome é ${formData.name}.%0A%0A${formData.message}%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}`;

      // Redirecionando para o WhatsApp
      window.open(
        `https://wa.me/41900000000?text=${whatsappMessage}`,
        "_blank"
      );

      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f8faf8]">
      <div className="container mx-auto px-4">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E6235] mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-[#7C9E84] mx-auto"></div>
        </Motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E6235] ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Seu nome"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E6235] ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="seu@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Telefone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E6235] ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="(00) 00000-0000"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensagem
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                    <FaFileAlt className="text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E6235] ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Descreva sua necessidade..."
                  ></textarea>
                </div>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1E6235] hover:bg-[#134826] text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={20} />
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2 bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-[#1E6235] mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#f0f7f1] p-3 rounded-full mr-4">
                  <FaWhatsapp className="text-[#1E6235] text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">WhatsApp</h4>
                  <p className="text-gray-600">(41) 90000-0000</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#f0f7f1] p-3 rounded-full mr-4">
                  <FaEnvelope className="text-[#1E6235] text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">contato@carloscontador.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#f0f7f1] p-3 rounded-full mr-4">
                  <FaPhone className="text-[#1E6235] text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Horário de Atendimento
                  </h4>
                  <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-bold text-[#1E6235] mb-4">
                Por que contar comigo?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#1E6235] mr-2">✓</span>
                  <span className="text-gray-600">
                    Atendimento próximo, humanizado e focado em você
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1E6235] mr-2">✓</span>
                  <span className="text-gray-600">
                    Especialista em Simples Nacional e rotina de pequenos
                    negócios
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1E6235] mr-2">✓</span>
                  <span className="text-gray-600">
                    Atendimento 100% online, rápido e descomplicado
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1E6235] mr-2">✓</span>
                  <span className="text-gray-600">
                    Experiência sólida: mais de 12 anos ajudando empreendedores
                  </span>
                </li>
              </ul>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
