import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("homepage.title")}</h1>
      <h2>{t("homepage.subtitle1")}</h2>
      <ul>
        <li>{t("homepage.list1.item1")}</li>
        <li>{t("homepage.list1.item2")}</li>
        <li>{t("homepage.list1.item3")}</li>
      </ul>
      <h2>{t("homepage.subtitle2")}</h2>
      <ul>
        <li>{t("homepage.list2.item1")}</li>
        <li>{t("homepage.list2.item2")}</li>
        <li>{t("homepage.list2.item3")}</li>
      </ul>
      <ul>
        <li>
          <Link to="/login">{t("homepage.link1")}</Link>
        </li>
        <li>
          <Link to="/register">{t("homepage.link2")}</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
