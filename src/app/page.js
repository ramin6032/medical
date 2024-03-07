"use client";
import styles from "./page.module.css";
import Intro from "@src/components/intro/intro";
import MainForm from "@src/components/mainForm/mainForm";
import FemaileForm from "@src/components/femaleForm/femaleForm";
import { useEffect, useState } from "react";

export default function Home() {
  const [section, setSection] = useState();

  useEffect(() => {
    setTimeout(() => setSection("mainForm"), 2000);
  }, []);

  if (section === "mainForm")
    return (
      <main className={styles.main}>
        <div className={styles.center}>
          <MainForm setSection={setSection} />
        </div>
      </main>
    );

  if (section === "femaleForm")
    return (
      <main className={styles.main}>
        <div className={styles.center}>
          <FemaileForm setSection={setSection} />
        </div>
      </main>
    );

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Intro />
      </div>
    </main>
  );
}
