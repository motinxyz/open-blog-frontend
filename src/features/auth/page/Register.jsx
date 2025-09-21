import RegistrationForm from "../components/RegistrationForm";

function Register() {
  return (
    <>
      <div className="container mx-auto grid h-full w-full grid-cols-1 overflow-hidden rounded-md border border-gray-800 md:grid-cols-2 lg:grid-cols-3">
        <div className="hidden bg-amber-100 md:block"></div>
        <div className="hidden bg-blue-100 lg:block"></div>
        <div className="flex h-full w-full items-center justify-center">
          <RegistrationForm />
        </div>
      </div>
    </>
  );
}

export default Register;
