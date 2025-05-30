import { motion as Motion } from "framer-motion";
import {
  FaChartLine,
  FaFileInvoice,
  FaBalanceScale,
  FaHandshake,
  FaFileAlt,
  FaMoneyBillWave,
  FaUsers,
  FaSearchDollar,
  FaRegFileAlt,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Contabilidade Geral",
      description:
        "Atendimento completo para manter sua empresa em conformidade com todas as obrigações legais.",
      icon: <FaHandshake className="text-3xl text-[#1E6235]" />,
    },
    {
      title: "Gestão de Obrigações Contábeis e Fiscais",
      description:
        "Monitoramento e entrega de documentos fiscais e declarações, garantindo que sua empresa evite multas e fique sempre regular.",
      icon: <FaBalanceScale className="text-3xl text-[#1E6235]" />,
    },
    {
      title: "Consultoria Tributária e Fiscal",
      description:
        "Orientação especializada para reduzir impostos legalmente, prevenir riscos e manter tudo dentro da lei.",
      icon: <FaChartLine className="text-3xl text-[#1E6235]" />,
    },
    {
      title: "Suporte Contábil Estratégico",
      description:
        "Organização e acompanhamento da contabilidade da empresa para gerar relatórios precisos e apoiar decisões estratégicas.",
      icon: <FaFileInvoice className="text-3xl text-[#1E6235]" />,
    },
  ];

  const otherServices = [
    {
      name: "Relatórios Financeiros Detalhados",
      icon: <FaFileAlt className="text-2xl text-[#1E6235]" />,
    },
    {
      name: "Planejamento e Gestão Tributária",
      icon: <FaMoneyBillWave className="text-2xl text-[#1E6235]" />,
    },
    {
      name: "Administração de Folha de Pagamento",
      icon: <FaUsers className="text-2xl text-[#1E6235]" />,
    },
    {
      name: "Auditoria e Conformidade Contábil",
      icon: <FaSearchDollar className="text-2xl text-[#1E6235]" />,
    },
    {
      name: "Consultoria Tributária Personalizada",
      icon: <FaRegFileAlt className="text-2xl text-[#1E6235]" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E6235] mb-4">
            Meus serviços
          </h2>
          <div className="w-20 h-1 bg-[#7C9E84] mx-auto"></div>
        </Motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f8faf8] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="mr-4">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-[#1E6235] mb-8">
            Outros serviços especializados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {otherServices.map((service, index) => (
              <Motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md border border-[#e0e0e0] hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-[#f0f7f1] p-3 rounded-full mb-3">
                    {service.icon}
                  </div>
                  <h4 className="text-sm font-medium text-gray-800 text-center">
                    {service.name}
                  </h4>
                </div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Services;
