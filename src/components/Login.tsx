import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField";
import CheckboxField from "./CheckboxField";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  type FormData = z.infer<typeof schema>;
  const { login } = useAuth();

  const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms" }),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");

    await new Promise((res) => setTimeout(res, 1000));

    if (data.email.endsWith("@blocked.com")) {
      toast.error("❌ This email domain is blocked.");
      setStatus("idle");
      return;
    }

    if (data.password === "123456") {
      toast.error("⚠️ This password is too weak.");
      setStatus("idle");
      return;
    }

    if (data.email === "fail@example.com") {
      toast.error("🚫 Something went wrong, please try again later.");
      setStatus("idle");
      return;
    }

    // success
    toast.success("✅ Successfully logged in!");
    login();
  };

  return (
    <section className="min-h-screen bg-indigo-900 text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-pink-400 font-semibold mb-4">
            Startup 3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Generate Awesome Web Pages
          </h1>
          <p className="text-lg mb-8">
            The most important part of the Startup is the samples. The samples
            form a set of 25 usable pages you can use as is or you can add new
            blocks.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg font-semibold transition">
            Learn More
          </button>
        </div>
        <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up Now</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              placeholder="Your email"
              error={errors.email}
              registration={register("email")}
            />
            <InputField
              type="password"
              placeholder="Your password"
              error={errors.password}
              registration={register("password")}
            />
            <CheckboxField
              label="I agree to the Terms of Service."
              registration={register("terms")}
              error={errors.terms}
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              {status === "loading" ? "Processing..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
