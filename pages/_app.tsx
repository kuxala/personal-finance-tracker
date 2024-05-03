// pages/_app.tsx
import { AppProps } from "next/app";
import "../app/globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main
          style={{ flexGrow: 1, marginLeft: "300px" }}
          className="relative top-[100px]"
        >
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
