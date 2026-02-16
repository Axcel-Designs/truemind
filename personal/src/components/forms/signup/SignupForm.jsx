import { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../../ui/Input";
import ButtonBrown, { ButtonRing } from "../../ui/Button";
import { FaFacebookF, FaGoogle, FaLock } from "react-icons/fa";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa6";

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
    <div>
      <div className="text-center font-medium text-2xl mb-4">
        {" "}
        Create your Account
      </div>
      <form className="space-y-4">
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
          symbol={<FaEnvelope />}
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
          Already have an account?{" "}
          <span className="text-blue-500" onClick={() => navigate("/signin")}>
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
}
