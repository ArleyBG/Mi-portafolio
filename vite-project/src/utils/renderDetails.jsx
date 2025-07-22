import { motion } from "framer-motion";

export default function renderDetails(card) {
  if (!card.details || card.details.length === 0) return null;

  return card.details.map((item, idx) => {
    const delay = idx * 0.15;

    switch (card.title) {
      case "Educación":
        return (
          <motion.div
            className="timeline-item"
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay }}
          >
            <div className="year">{item.year}</div>
            <p>
              {item.title} – <span>{item.institution}</span>
            </p>
          </motion.div>
        );

      case "Experiencia":
        return (
          <motion.div
            className="timeline-item"
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay }}
          >
            <div className="year">{item.experience}</div>
            <p>
              {item.company} – <span>{item.rol}</span>
            </p>
          </motion.div>
        );

      default:
        return (
          <motion.div
            className="timeline-item"
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay }}
          >
            <p>{JSON.stringify(item)}</p>
          </motion.div>
        );
    }
  });
}
