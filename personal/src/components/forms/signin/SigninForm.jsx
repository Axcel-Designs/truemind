import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
  FaLock,
} from "react-icons/fa";
import Input from "../../ui/Input";
import { useState } from "react";
import ButtonBrown, { ButtonRing } from "../../ui/Button";
import { useNavigate } from "react-router";

export default function SigninForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="text-center font-medium text-2xl mb-4"> Login your Account</div>
      <form className="space-y-4">
        <Input
          label={"Email or phone number"}
          type="email"
          name="name"
          symbol={<FaEnvelope />}
          holder="name@gmail.com"
        />
        <Input
          label={"Password"}
          type={`${showPassword ? "text" : "password"}`}
          symbol={<FaLock />}
          holder={"********"}
          icon={showPassword ? <FaEye /> : <FaEyeSlash />}
          clickIcon={togglePasswordVisibility}
        />
        <div>
          <p className="text-blue-500 text-xs flex justify-end cursor-pointer">
            Forgot password?
          </p>
        </div>
        <ButtonBrown label={"Continue"} />
        <p className="text-center text-xs cursor-pointer">Or continue with</p>
      </form>
      <div className="space-y-4 my-4">
        <ButtonRing label={"Continue with Google"} icon={<FaGoogle />} />
        <ButtonRing
          label={"Continue with Apple"}
          icon={<FaFacebookF className="text-blue-400" />}
        />
        <p className="text-center text-xs cursor-pointer">
          Don't have an account?{" "}
          <span className="text-blue-500" onClick={() => navigate("/signup")}>
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
}
