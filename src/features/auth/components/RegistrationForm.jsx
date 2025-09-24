import React, { useActionState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormStatus } from "react-dom";
import { register } from "../../../services/authService";
import Alert from "../../../components/Alert";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mx-auto my-5 w-max cursor-pointer rounded-md border border-gray-800 bg-gray-700 px-3 py-2 text-gray-100 transition-all hover:border-gray-800 hover:bg-gray-100 hover:text-gray-800 active:bg-gray-400 active:text-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={pending}
      type="submit"
    >
      Register
    </button>
  );
}

function RegistrationForm() {
  const navigate = useNavigate();

  async function formAction(previousState, formData) {
    const firstName = formData.get("firstName")?.trim();
    const lastName = formData.get("lastName")?.trim();
    const email = formData.get("email")?.trim();
    const password = formData.get("password");
    const termsAccepted = formData.get("termsAccepted") ? true : false;
    // if (!termsAccepted) {
    //   return {
    //     success: false,
    //     error: "You must agree to the Terms & Conditions",
    //     errors: [
    //       {
    //         type: "field",
    //         value: false,
    //         msg: "terms must be accepted",
    //         path: "termsAccepted",
    //         location: "body",
    //       },
    //     ],
    //   };
    // }

    // console.log("before api method call");
    const result = await register({
      firstName,
      lastName,
      email,
      password,
      termsAccepted,
    });

    // console.log("after api method call");
    // console.log("inside form action", result);
    return {
      ...result,
      preValues: [
        { field: "firstName", value: firstName },
        { field: "lastName", value: lastName },
        { field: "email", value: email },
        { field: "password", value: password },
        { field: "termsAccepted", value: termsAccepted },
      ],
    };
  }

  const [state, dispatchFormAction] = useActionState(formAction, {
    success: false,
    error: null,
    errors: [],
    preValues: [],
  });

  console.log("state.errors", state);

  useEffect(() => {
    if (state.success) {
      navigate("/login");
    }
  }, [state.success, navigate]);

  return (
    <div className="grid w-full bg-gray-100 px-10">
      <form
        className="grid w-full bg-gray-100 px-10 md:col-span-2 lg:col-span-1"
        action={dispatchFormAction}
      >
        <h1 className="mb-4 border-b-2 border-gray-300 pb-2 text-center text-2xl">
          Register
        </h1>

        <Alert message={state.error} />
        <div className="mt-5 w-full">
          <input
            type="text"
            placeholder="first name.."
            name="firstName"
            defaultValue={
              state.preValues?.find((val) => val.field === "firstName")?.value
            }
            aria-label="write your first name"
            className="w-full rounded-md border border-gray-700 px-4 py-3"
          />

          {state.errors?.find((err) => err.path === "firstName") && (
            <p className="mt-1 text-sm text-red-600">
              {state.errors?.find((err) => err.path === "firstName").msg}
            </p>
          )}
        </div>

        <div className="mt-5 w-full">
          <input
            type="text"
            placeholder="last name.."
            name="lastName"
            defaultValue={
              state.preValues?.find((val) => val.field === "lastName")?.value
            }
            aria-label="write your last name"
            className="w-full rounded-md border border-gray-700 px-4 py-3"
          />
          {state.errors?.find((err) => err.path === "lastName") && (
            <p className="mt-1 text-sm text-red-600">
              {state.errors?.find((err) => err.path === "lastName").msg}
            </p>
          )}
        </div>
        <div className="mt-5 w-full">
          <input
            type="text"
            placeholder="email.."
            name="email"
            defaultValue={
              state.preValues?.find((val) => val.field === "email")?.value
            }
            aria-label="write your email address"
            className="w-full rounded-md border border-gray-700 px-4 py-3"
          />
          {state.errors?.find((err) => err.path === "email") && (
            <p className="mt-1 text-sm text-red-600">
              {state.errors?.find((err) => err.path === "email").msg}
            </p>
          )}
        </div>
        <div className="my-5 w-full">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password.."
            defaultValue={
              state.preValues?.find((val) => val.field === "password")?.value
            }
            aria-label="Write your password"
            className="w-full rounded-md border border-gray-700 px-4 py-3"
          />
          {state.errors?.find((err) => err.path === "password") && (
            <p className="mt-1 text-sm text-red-600">
              {state.errors?.find((err) => err.path === "password").msg}
            </p>
          )}
        </div>

        <div className="text-center">
          <input
            type="checkbox"
            name="termsAccepted"
            id="termsAccepted"
            className="mr-2 cursor-pointer overflow-hidden accent-blue-600"
            defaultChecked={
              state.preValues?.find((val) => val.field === "termsAccepted")
                ?.value
            }
          />
          <label
            htmlFor="termsAccepted"
            className="cursor-pointer text-gray-700"
          >
            I agree to the{" "}
          </label>
          <Link
            to="#"
            className="cursor-pointer text-blue-600 underline opacity-80 hover:opacity-100"
          >
            Terms & Conditions
          </Link>
        </div>

        <SubmitButton />

        <div className="text-md text-center">
          <span className="text-gray-600">Already Registered? </span>
          <Link
            to={"/login"}
            className="font-medium text-blue-600 underline hover:text-blue-500"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
