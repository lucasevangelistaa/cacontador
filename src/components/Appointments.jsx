import { motion as Motion } from "framer-motion";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

const Appointments = () => {
  const items = [
    {
      title: "Missão",
      content:
        "Simplificar a contabilidade e facilitar a vida do empreendedor.",
      icon: <FaBullseye className="text-4xl text-[#1E6235]" />,
    },
    {
      title: "Visão",
      content: "Ser referência em contabilidade digital e acessível.",
      icon: <FaEye className="text-4xl text-[#1E6235]" />,
    },
    {
      title: "Valores",
      content: "Clareza, confiança, compromisso e agilidade.",
      icon: <FaHeart className="text-4xl text-[#1E6235]" />,
    },
  ];

  return (
    <section id="appointments" className="py-20 bg-[#f8faf8]">
      <div className="container mx-auto px-4">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E6235] mb-4">
            Compromissos Profissionais
          </h2>
          <div className="w-20 h-1 bg-[#7C9E84] mx-auto"></div>
        </Motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#1E6235] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.content}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appointments;
