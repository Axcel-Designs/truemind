import { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../../ui/Input";
import ButtonBrown, { ButtonRing } from "../../ui/Button";
import { FaFacebookF, FaGoogle, FaLock } from "react-icons/fa";
import { FaEnvelope, FaEye, FaEyeSlash, FaPhone } from "react-icons/fa6";

export default function SignupForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConPasswordVisibility = () => {
    setShowConPassword(!showConPassword);
  };

  return (
    <div className="">
      <div className="text-center font-semibold text-2xl mb-2">
        {" "}
        Create your Account
      </div>
      <form className="space-y-2">
        <Input
          label={"Email"}
          type="email"
          name="name"
          symbol={<FaEnvelope />}
          holder="name@gmail.com"
        />
        <Input
          label={"Phone number"}
          type="tel"
          name="tel"
          symbol={<FaPhone />}
          holder="8123340690"
        />
        <Input
          label={"Password"}
          type={`${showPassword ? "text" : "password"}`}
          symbol={<FaLock />}
          holder={"********"}
          icon={showPassword ? <FaEye /> : <FaEyeSlash />}
          clickIcon={togglePasswordVisibility}
        />
        <Input
          label={"Confirm Password"}
          type={`${showConPassword ? "text" : "password"}`}
          symbol={<FaLock />}
          holder={"********"}
          icon={showConPassword ? <FaEye /> : <FaEyeSlash />}
          clickIcon={toggleConPasswordVisibility}
        />
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p className="text-xs cursor-pointer">
            I agree to the
            <span className="text-blue-500"> Terms & Conditions</span> and
            <span className="text-blue-500"> Privacy Policy</span>
          </p>
        </div>
        <ButtonBrown label={"Continue"} />
        <p className="text-center text-xs cursor-pointer">Or continue with</p>
      </form>
      <div className="space-y-4 my-4">
        <ButtonRing
          label={"Continue with Google"}
          icon={<FaGoogle className="text-red-400" />}
        />
        <ButtonRing
          label={"Continue with Apple"}
          icon={<FaFacebookF className="text-blue-400" />}
        />
        <p className="text-center text-xs cursor-pointer">
          Already have an account?{" "}
          <span className="text-blue-500" onClick={() => navigate("/signin")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
