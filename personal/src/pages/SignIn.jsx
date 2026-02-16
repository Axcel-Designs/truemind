import img from "../assets/Rectangle 1.png";
import SigninForm from "../components/forms/signin/SigninForm";

export default function SignIn() {
  return (
    <main className="grid lg:grid-cols-2">
      <section
        className="max-lg:hidden bg-cover bg-no-repeat min-h-screen"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex justify-around items-center h-full w-full bg-[#FF7A18]/80">
          <div className="text-center text-white w-8/12 space-y-5">
            <h1 className="font-semibold text-3xl">Chuks Kitchen</h1>
            <p>
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center bg-[#f3f4f6] min-h-screen">
        <h1 className="text-[#FF7A18] text-4xl island-moments-regular">
          Chuks Kitchen
        </h1>
        <SigninForm />
      </section>
    </main>
  );
}
