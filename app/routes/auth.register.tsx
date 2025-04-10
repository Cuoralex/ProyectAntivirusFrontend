// routes/auth/register.tsx
import RegisterForm from "~/components/organisms/register-form/register-form";
import { json, type ActionFunction } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { useEffect } from "react";
import { useAuthStore } from "~/store";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const fullName = formData.get("fullname");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm_password");
  const birthdate = formData.get("birthdate");

  const fieldErrors: Record<string, string> = {};

  if (!fullName) fieldErrors.fullname = "El nombre es obligatorio.";
  if (!email) fieldErrors.email = "El correo es obligatorio.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email as string))
    fieldErrors.email = "Correo inválido.";
  if (!password) fieldErrors.password = "La contraseña es obligatoria.";
  else if ((password as string).length < 6)
    fieldErrors.password = "Debe tener al menos 6 caracteres.";
  if (!confirmPassword) fieldErrors.confirmPassword = "Confirma la contraseña.";
  else if (password !== confirmPassword)
    fieldErrors.confirmPassword = "Las contraseñas no coinciden.";
  if (!birthdate)
    fieldErrors.birthdate = "La fecha de nacimiento es obligatoria.";

  if (Object.keys(fieldErrors).length > 0) {
    return json({ fieldErrors }, { status: 400 });
  }

  const requestData = {
    fullName,
    email,
    phone,
    role: "user",
    password,
    birthdate,
  };

  const response = await fetch("http://localhost:5055/api/v1/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestData),
  });

  const responseBody = await response.json();
  const statusCode = response.status;

  if (statusCode === 201) {
    return json({ success: true }, { status: 201 });
  }

  return json(responseBody, { status: statusCode });
};

export default function RegisterPage() {
  const actionData = useActionData<typeof action>();
  const setRegistrationSuccess = useAuthStore(
    (state) => state.setRegistrationSuccess
  );

  useEffect(() => {
    if (actionData?.success) {
      setRegistrationSuccess(true);
    }
  }, [actionData, setRegistrationSuccess]);

  return <RegisterForm />;
}
