import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "../components/Header";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

export function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      {props.children}
    </>
  );
}
