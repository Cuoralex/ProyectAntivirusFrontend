import { Outlet, Link, useLocation } from "@remix-run/react";
import "../../../styles/global.css?__remix_sideEffect__";
import SuccessModal from "app/components/organisms/success-modal/sucess-modal";
import { useAuthStore } from "app/store";
import GeneralHeader from "../../organisms/header-general/header-general";
import Footer from "../../organisms/footer-general/footer-general";

export default function AuthLayout() {
  const location = useLocation();
  const isRegistering = location.pathname.includes("register");

  const isModalOpen = useAuthStore((state) => state.registrationSuccess);
  const setRegistrationSuccess = useAuthStore(
    (state) => state.setRegistrationSuccess
  );

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <GeneralHeader />
      <div className="h-screen pt-32 w-screen flex justify-center items-start gap-2 px-8 lg:gap-0 xl:gap-32 relative">
        <SuccessModal
          isOpen={isModalOpen}
          onClose={() => {
            setRegistrationSuccess(false);
          }}
        />

        <img
          src="/app/assets/images/antivirus_avatar.png"
          alt="Antivirus Avatar"
          loading="lazy"
          className="hidden lg:block lg:max-w-[514px] h-auto"
        />
        <div className="bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.2)] flex justify-start flex-col items-center gap-4 lg:gap-4 rounded-lg w-[488px] h-auto pb-8 relative z-10">
          <h1 className="text-center text-3xl text-black font-semibold mt-12">
            {isRegistering ? "Registrarme" : "Acceder"}
          </h1>

          <Outlet />

          <div className="flex justify-center mt-4 space-x-4 px-14 w-full">
            <Link
              to="/auth/register"
              className={`px-4 py-2 w-full rounded-lg text-center ${
                isRegistering ? "bg-[#7C78B3] text-white" : "bg-gray-300"
              }`}
            >
              Registrarme
            </Link>
            <Link
              to="/auth/login"
              className={`w-full px-4 py-2 rounded-lg text-center ${
                !isRegistering ? "bg-[#7C78B3] text-white" : "bg-gray-300"
              }`}
            >
              Acceder
            </Link>
          </div>

          <p className="text-black font-medium text-lg">Continuar con</p>
          <div className="flex gap-5">
            <img
              src="/app/assets/icons/google.png"
              alt="Google"
              loading="lazy"
              className="max-w-8 h-auto"
            />
            <img
              src="/app/assets/icons/facebook.png"
              alt="Facebook"
              loading="lazy"
              className="max-w-8 h-auto"
            />
          </div>
          <Link to="/" className="underline text-black">
            Ir a inicio
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
