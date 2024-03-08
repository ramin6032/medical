"use client";
import styles from "./page.module.css";
import Intro from "@src/components/intro/intro";
import MainForm from "@src/components/mainForm/mainForm";
import FemaileForm from "@src/components/femaleForm/femaleForm";
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
