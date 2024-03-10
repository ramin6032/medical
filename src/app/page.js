"use client";
import styles from "./page.module.css";
import Intro from "@src/components/intro/intro";
import MainForm from "@src/components/mainForm/mainForm";
import FemaileForm from "@src/components/femaleForm/femaleForm";
import MaleForm from "@src/components/maleForm/maleForm";
import MixForm from "@src/components/mixForm/mixForm";
import PcosForm from "@src/components/pcosForm/pcosForm";
import PofForm from "@src/components/pofForm/pofForm";
import { useEffect, useState } from "react";
import { FloatButton } from "antd";
import { LeftOutlined } from "@ant-design/icons";

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
        ) : (
          <Intro />
        )}
      </div>
      <FloatButton
        style={{ left: 25, background: "#cdcdcd" }}
        onClick={() => setSection("mainForm")}
        icon={<LeftOutlined style={{ fontSize: 18 }} />}
      />
    </main>
  );
}
