import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { signUp, login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!successMessage) return undefined;

    const timeoutId = window.setTimeout(() => {
      setSuccessMessage("");
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [successMessage]);

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      setSuccessMessage(
        mode === "signup"
          ? "Signed up successfully!"
          : "Logged in successfully!",
      );
      navigate("/");
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="page auth-page">
      <div className="container auth-shell">
        <div className="auth-card">
          <div className="auth-illustration">
            <span className="eyebrow">Welcome back</span>
            <h1>
              {mode === "signup"
                ? "Create your account"
                : "Sign into your account"}
            </h1>
            <p>
              Enjoy a seamless shopping experience with secure access and fast
              checkout.
            </p>
          </div>

          <div className="auth-form-card">
            <h2 className="page-title auth-title">
              {mode === "signup" ? "Sign Up" : "Login"}
            </h2>
            <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
              {error && <div className="error-message">{error}</div>}
              {successMessage && (
                <div className="success-message">{successMessage}</div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="form-error">{errors.email.message}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <div className="password-input-wrap">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      maxLength: {
                        value: 12,
                        message: "Password must be less than 12 characters",
                      },
                    })}
                    className="form-input"
                    type={showPassword ? "text" : "password"}
                    id="password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword((value) => !value)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <span className="form-error">{errors.password.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-large btn-block"
              >
                {mode === "signup" ? "Sign Up" : "Login"}
              </button>
            </form>

            <div className="auth-socials">
              <button type="button" className="social-btn">
                Continue with Google
              </button>
              <button type="button" className="social-btn">
                Continue with Apple
              </button>
            </div>

            <div className="auth-switch">
              {mode === "signup" ? (
                <p>
                  Already have an account?{" "}
                  <span className="auth-link" onClick={() => setMode("login")}>
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Don&apos;t have an account?{" "}
                  <span className="auth-link" onClick={() => setMode("signup")}>
                    Sign Up
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
