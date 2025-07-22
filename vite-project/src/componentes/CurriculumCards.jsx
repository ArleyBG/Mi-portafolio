import { useEffect, useState } from "react";
import * as Icons from "react-icons/fa";
import curriculumData from "../data/curriculumData.json";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CurriculumCards.css";

function CurriculumCards() {
  const [data, setData] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setData(curriculumData);
  }, []);

  const toggleCard = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  const getTimelineColorClass = (bgColorClass) => {
    const colorMap = {
      "bg-yellow-400": "timeline-yellow",
      "bg-pink-400": "timeline-pink",
      "bg-blue-400": "timeline-blue",
      "bg-cyan-400": "timeline-cyan",
      "bg-green-500": "timeline-green",
    };
    return colorMap[bgColorClass] || "timeline-yellow";
  };

  const renderCard = (card) => {
    const Icon = Icons[card.icon] || Icons.FaRegCircle;
    return (
      <div key={card.id} className={`card-curriculum ${card.color}`}>
        <div className="card-curriculum-icon"><Icon /></div>
        <h3>{card.title}</h3>
        <button onClick={() => toggleCard(card.id)}>Ver detalles</button>
      </div>
    );
  };

  return (
    <section className="curriculum-section">
      <Swiper
        grabCursor={true}
        slidesPerView={1.5}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2.7,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 4.5,
          },
          1400: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((card) => (
          <SwiperSlide key={card.id}>{renderCard(card)}</SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence mode="wait">
        {activeCard !== null && data[activeCard - 1]?.details.length > 0 && (
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`timeline ${getTimelineColorClass(data[activeCard - 1]?.color)}`}
          >
            {data[activeCard - 1].details.map((item, idx) => (
              <div className="timeline-item" key={idx}>
                {data[activeCard - 1].title === "Educación" && (
                  <>
                    <div className="year">{item.year}</div>
                    <p>{item.title} – <span>{item.institution}</span></p>
                  </>
                )}
                {data[activeCard - 1].title === "Experiencia" && (
                  <>
                    <div className="year">{item.experience}</div>
                    <p>{item.company} – <span>{item.rol}</span></p>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default CurriculumCards;
