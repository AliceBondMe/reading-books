import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";
import { Loader } from "../Loader/Loader";
import { Header } from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
