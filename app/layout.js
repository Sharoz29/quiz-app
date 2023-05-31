"use client";
import "./globals.css";
import { store } from "../app/store/store";
import { Provider } from "react-redux";

import { Montserrat } from "next/font/google";
import { fetchOptionsData } from "./store/optionsdata/optionsdataSlice";

const montserrat = Montserrat(
  { subsets: ["latin"] },
  { weight: ["400", "800"] }
);

export const metadata = {
  title: "Quiz App",
  description: "A quiz app",
};

store.dispatch(fetchOptionsData());

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </Provider>
  );
}
