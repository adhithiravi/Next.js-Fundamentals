import styles from "./styles.css";
import React from "react";

export default function ConferenceLayout({ children }) {
  return (
    <>
      <header style={styles.header}>
        <h1>Globomantics Taking Tech Into The Globe</h1>
      </header>
      <section>{children}</section>
    </>
  );
}
