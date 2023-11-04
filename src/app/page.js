"use client";

import { useInView, motion } from "framer-motion";
import styles from "./page.module.css";
import { useRef, useEffect } from "react";

export default function Home() {
  const phrases = [
    "It is a long established fact",
    "that a reader will be distracted",
    "by the readable content of a page",
    "when looking at its layout.",
  ];

  return (
    <main className={styles.main}>
      <MaskText phrases={phrases} />
      <MaskText phrases={phrases} />
      <MaskText phrases={phrases} />
      <MaskText phrases={phrases} />
    </main>
  );
}

function MaskText({ phrases }) {
  const animate = {
    initial: { y: "100%" },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.75, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };

  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-10%" });

  return (
    <div ref={body} className={styles.body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={styles.lineMask}>
            <motion.p
              custom={index}
              variants={animate}
              initial="initial"
              animate={isInView ? "open" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
