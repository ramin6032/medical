"use client";
import styles from "./page.module.css";
import Intro from "@src/components/intro/intro";
import MainForm from "@src/components/mainForm/mainForm";
import FemaileForm from "@src/components/femaleForm/femaleForm";
import MaleForm from "@src/components/maleForm/maleForm";
import MixForm from "@src/components/mixForm/mixForm";
import PcosForm from "@src/components/pcosForm/pcosForm";
import PofForm from "@src/components/pofForm/pofForm";
import UnknownForm from "@src/components/unknown/unknown";
import { useEffect, useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function Home() {
  const [section, setSection] = useState();

  useEffect(() => {
    setTimeout(() => setSection("mainForm"), 2000);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        {section === "mainForm" ? (
          <MainForm setSection={setSection} />
        ) : section === "femaleForm" ? (
          <FemaileForm setSection={setSection} />
        ) : section === "maleForm" ? (
          <MaleForm />
        ) : section === "mixForm" ? (
          <MixForm />
        ) : section === "pcosForm" ? (
          <PcosForm />
        ) : section === "pofForm" ? (
          <PofForm />
        ) : section === "unknown" ? (
          <UnknownForm />
        ) : (
          <Intro />
        )}
      </div>
      {section !== "mainForm" ? (
        <ArrowLeftOutlined
          onClick={() => setSection("mainForm")}
          style={{
            position: "absolute",
            left: "15px",
            top: "15px",
            fontSize: "22px",
            cursor: "pointer",
          }}
        />
      ) : null}
    </main>
  );
}
