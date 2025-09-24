import { use, useActionState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { useFormStatus } from "react-dom";
import { ScaleLoader } from "react-spinners";
import { login } from "../../../services/authService";
import Alert from "../../../components/Alert";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="mx-auto my-5 w-max cursor-pointer rounded-md border border-gray-800 bg-gray-700 px-3 py-2 text-gray-100 transition-all hover:border-gray-800 hover:bg-gray-100 hover:text-gray-800 active:bg-gray-400 active:text-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={pending}
      type="submit"
    >
      {pending ? (
        <div className="flex h-full w-full items-center justify-center">
          <ScaleLoader height={10} width={3} color={"#061957"} />
        </div>
      ) : (
        "Login"
      )}
    </button>
  );
}

function LoginForm() {
  const navigate = useNavigate();
  const { refreshAuthStatus } = use(AuthContext);

  async function formAction(previousState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const result = await login(email, password);
    return result;
  }

  const [state, dispatchFormAction] = useActionState(formAction, {
    success: false,
    error: null,
    errors: [],
  });

  // Navigate on successful login
  useEffect(() => {
    if (state.success) {
      // Refresh the global auth state before navigating to ensure UI consistency
      refreshAuthStatus().then(() => {
        navigate("/posts");
      });
    }
  }, [state.success, navigate, refreshAuthStatus]);

  return (
    <form
      className="col-span-3 flex flex-col items-center justify-center bg-gray-100 px-10 md:col-span-2 lg:col-span-1"
      action={dispatchFormAction}
    >
      <h1 className="mb-4 border-b-2 border-gray-300 pb-2 text-center text-2xl">
        Login
      </h1>

      <Alert message={state.error && !state.errors.length ? state.error : null} />

      <div className="my-3 w-full">
        <input
          type="text"
          placeholder="email.."
          name="email"
          aria-label="write your email address"
          className="w-full rounded-md border border-gray-700 px-4 py-3"
          required
        />
        {state.errors?.find((err) => err.path === "email") && (
          <p className="mt-1 text-sm text-red-600">
            {state.errors.find((err) => err.path === "email").msg}
          </p>
        )}
      </div>

      <div className="my-3 w-full">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password.."
          aria-label="Write your password"
          className="w-full rounded-md border border-gray-700 px-4 py-3"
        />
        {/* You can add a similar error display for the password field here */}
      </div>

      <SubmitButton />

      <div className="text-md">
        <span className="text-gray-600">No Account? </span>
        <Link
          to={"/register"}
          className="font-medium text-blue-600 underline hover:text-blue-500"
        >
          Register
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
