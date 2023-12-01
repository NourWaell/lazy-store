import { FormInput, SubmitBtn } from "../components";
import { Link, Form } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          label="Username"
          name="username"
          placeholder="Username"
        />
        <FormInput
          type="email"
          label="Email"
          name="email"
          placeholder="Email"
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
        />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
