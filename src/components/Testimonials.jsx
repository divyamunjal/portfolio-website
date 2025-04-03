import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  // State for active testimonial (for mobile view)
  const [activeIndex, setActiveIndex] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "Divya is an exceptional developer who consistently delivers high-quality work. Her expertise in Angular proved invaluable for our project. She tackled complex challenges with innovative solutions and was always willing to go the extra mile.",
      name: "Shamsher Ali Ansari",
      title: "Manager, Capgemini",
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      id: 2,
      text: "Divya's migration of our AngularJS application to Angular 16 was seamless. She ensured zero downtime and actually improved performance during the process. Her attention to detail and commitment to quality are remarkable. I would hire her again in a heartbeat.",
      name: "Mohit Sharma",
      title: "CEO, Refread Solutions Pvt. Ltd.",
      //image: "/assets/img/testimonials/priya.jpg", // Replace with actual image path
      color: "from-green-500/20 to-teal-500/20",
    },
    {
      id: 3,
      text: "Working with Divya on our digital signature platform was a fantastic experience. Her technical skills are impressive, but what really stands out is her ability to understand business requirements and translate them into elegant code. Our users love the intuitive interface she designed.",
      name: "Ankit Arora",
      title: "CEO, RegalBit Solutions Pvt. Ltd.",
      //image: "/assets/img/testimonials/michael.jpg", // Replace with actual image path
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  // Handle navigation for mobile view
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 px-6 md:px-8 relative overflow-hidden bg-bg-primary">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>
      <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-accent-purple/10 rounded-full blur-3xl z-0"></div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <motion.p
            className="font-mono text-accent text-base mb-4"
            variants={itemVariants}
          >
            What People Say
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-accent-gradient bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Testimonials
          </motion.h2>
          <motion.p
            className="text-text-secondary mt-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Don't just take my word for it. Here's what colleagues and clients
            have to say about working with me.
          </motion.p>
        </div>

        {/* Desktop View - Show all testimonials in a grid */}
        <motion.div
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-bg-secondary/20 backdrop-blur-sm rounded-xl overflow-hidden border border-accent/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/20 h-full flex flex-col"
              variants={itemVariants}
            >
              <div
                className={`h-2 bg-gradient-to-r ${testimonial.color}`}
              ></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-6 text-accent/50">
                  <FaQuoteLeft size={30} />
                </div>

                <p className="text-text-secondary italic mb-6 flex-1">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-bg-secondary/50 flex-shrink-0">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-accent text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View - Carousel style */}
        <motion.div className="md:hidden" variants={containerVariants}>
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 bg-bg-secondary/20 backdrop-blur-sm rounded-xl overflow-hidden border border-accent/5 shadow-lg"
                    >
                      <div
                        className={`h-2 bg-gradient-to-r ${testimonial.color}`}
                      ></div>
                      <div className="p-6">
                        <div className="mb-6 text-accent/50">
                          <FaQuoteLeft size={30} />
                        </div>

                        <p className="text-text-secondary italic mb-6">
                          "{testimonial.text}"
                        </p>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-bg-secondary/50 flex-shrink-0">
                            {testimonial.image ? (
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                                {testimonial.name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="text-text-primary font-semibold">
                              {testimonial.name}
                            </h4>
                            <p className="text-accent text-sm">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-bg-secondary/70 backdrop-blur-sm flex items-center justify-center text-accent border border-accent/20 z-10"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-bg-secondary/70 backdrop-blur-sm flex items-center justify-center text-accent border border-accent/20 z-10"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-6 bg-accent" : "bg-bg-secondary/70"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
