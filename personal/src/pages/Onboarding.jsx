import { ButtonRing } from "../components/ui/Button";

export default function Onboarding() {
  return (
    <main className="flex">
      <section className="flex justify-between items-center">
        <div> </div>
      
        <ButtonRing/>
      </section>
      <section>
        <div></div>
        <div></div>
        <div>
          <p>
            &copy {new Date().getFullYear()} Chuks Kitchen. Privacy Policy Terms
            of Service
          </p>
        </div>
      </section>
    </main>
  );
}
