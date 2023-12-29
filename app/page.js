"use client";

import "./styles.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <Nav />
        <Header />
        <Section />
        <Footer />
      </main>
    </Provider>
  );
}
