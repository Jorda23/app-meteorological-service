import { useTranslation } from "react-i18next";

export default function Header() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="container mb-[250px] pb-[150px] flex justify-center absolute">
      <div className="inline-flex shadow-sm" role="group">
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          onClick={() => i18n.changeLanguage("es")}
        >
          {t("Header.Language1")}
        </button>

        <button
          type="button"
          className="active py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          onClick={() => i18n.changeLanguage("en")}
        >
          {t("Header.Language2")}
        </button>
      </div>
    </div>
  );
}
