import { Outlet } from "@remix-run/react";
import ButtonDonateWompi from "~/components/organisms/button-donate-wompi/button-donate-wompi";
import ButtonGoUp from "~/components/organisms/button-go-up/button-go-up";
import FooterGeneral from "~/components/organisms/footer-general/footer-general";
import HeaderGeneral from "~/components/organisms/header-general/header-general";
import ButtonWhatsapp from "../../organisms/button-whatsapp";

export default function GeneralLayout() {
  return (
    <div id="general-layout">
      <HeaderGeneral />
      <ButtonGoUp />
      <ButtonDonateWompi />
      <div className="pt-20 overflow-hidden">
        <Outlet />
      </div>
      <FooterGeneral />
      <ButtonWhatsapp />
    </div>
  );
}
