import Cabecalho from "./Cabecalho";

export default function Layout({ children }) {
  return (
    <>
      <Cabecalho />
      <main>{children}</main>
    </>
  );
}

