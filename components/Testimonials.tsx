"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Person } from "react-bootstrap-icons";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    avatar: <Person />,
    rating: 5,
    text: "DICUMÊ revolucionou minha alimentação! O semáforo nutricional é genial e me ajuda a fazer escolhas mais saudáveis. Agora consigo equilibrar minha dieta sem complicação.",
  },
  {
    id: 2,
    name: "João Santos",
    avatar: <Person />,
    rating: 5,
    text: "Finalmente um app que entende a realidade brasileira! As porções são perfeitas e a interface é muito intuitiva. Recomendo para todos que querem melhorar a alimentação.",
  },
  {
    id: 3,
    name: "Ana Costa",
    avatar: <Person />,
    rating: 5,
    text: "Como nutricionista, recomendo o DICUMÊ para todos os meus pacientes. É uma ferramenta essencial para educação nutricional. O semáforo facilita muito o entendimento.",
  },
  {
    id: 4,
    name: "Pedro Oliveira",
    avatar: <Person />,
    rating: 5,
    text: "O app é incrível! Consigo montar pratos equilibrados em segundos e as recomendações personalizadas são muito úteis. A sincronização funciona perfeitamente.",
  },
  {
    id: 5,
    name: "Fernanda Lima",
    avatar: <Person />,
    rating: 5,
    text: "Adorei o DICUMÊ! Como mãe, sempre me preocupo com a alimentação da família. O app me ajuda a montar pratos nutritivos e as crianças adoram as cores do semáforo.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1
    );
  };

  const startIndex = currentIndex * 3;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Header and Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Title in 3 lines */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight"
            >
              Avaliações de usuários
              <br />
              e feedback de
              <br />
              usuários reais.
            </motion.h2>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-3"
            >
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white rounded-full shadow-soft flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <ChevronLeft className="w-4 h-4 text-text-primary" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white rounded-full shadow-soft flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <ChevronRight className="w-4 h-4 text-text-primary" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Testimonials Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="w-72 bg-white rounded-xl p-5 shadow-soft h-56 flex flex-col"
              >
                {/* Avatar */}
                <div className="w-12 h-12 bg-gray-200 rounded-full mb-4 flex items-center justify-center flex-shrink-0">
                  {testimonial.avatar}
                </div>

                {/* Name */}
                <h3 className="font-bold text-text-primary text-base mb-2 flex-shrink-0">
                  {testimonial.name}
                </h3>

                {/* Rating Stars */}
                <div className="flex items-center mb-3 flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-text-secondary leading-relaxed text-xs flex-1 overflow-hidden">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
