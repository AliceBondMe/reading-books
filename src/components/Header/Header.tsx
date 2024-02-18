import { useTranslation } from "react-i18next";
import { HeaderStyled, Logo } from "./Header.styled";

export const Header = () => {
  const { t, i18n } = useTranslation();
  console.log(t);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HeaderStyled>
      <Logo>BR</Logo>
      <button type="button" onClick={() => changeLanguage("en")}>
        en
      </button>
      <button type="button" onClick={() => changeLanguage("ua")}>
        ua
      </button>
    </HeaderStyled>
  );
};
