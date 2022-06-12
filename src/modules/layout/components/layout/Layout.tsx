/** @jsxImportSource @emotion/react */
import { Header } from "shared/components/header";
import { wrapper } from "./Layout.styles";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main css={wrapper}>
      <Header />
      {children}
    </main>
  );
};
