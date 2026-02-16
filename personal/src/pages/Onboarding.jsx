import { FaBus, FaBusinessTime, FaUtensils } from "react-icons/fa6";
import img from "../assets/Rectangle 1.png";
import ButtonBrown, { ButtonWhite } from "../components/ui/Button";
import { NavLink } from "react-router";

export default function Onboarding() {

  const welcomeData = [
    { icon: <FaUtensils />, text: 'Freshly Prepared' },
    { icon: <FaBusinessTime />, text: 'Support Local Business' },
    { icon: <FaBus />, text: 'Fast & Reliable Delivery' },
  ]
  return (
    <main className="grid lg:grid-cols-2">
      <section
        className="max-lg:hidden bg-cover bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${img})` }} >
        <div className="flex justify-around items-center h-full w-full">
          <div className="text-center text-white w-8/12 space-y-5">

          </div>
        </div>
      </section>
      {/* right Screen */}
      <section className="flex flex-col bg-[#f3f4f6] min-h-screen h-full">
        <div className="flex justify-between items-center mt-4 px-6">
          <h1 className="text-[#FF7A18] text-3xl island-moments-regular">
            Chuks Kitchen
          </h1>
          <NavLink to='/signin'>
            <ButtonWhite label="Sign In" />
          </NavLink>
        </div>

        <div className="flex flex-col justify-center items-center grow p-4 space-y-4 w-10/12 mx-auto" >    
          <h1 className="font-bold  text-2xl">Your Authentic Taste of Nigeria</h1>
          <p>Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.</p>
          <div className='flex flex-wrap gap-6 items-center'>
            {welcomeData.map((item, i) => (
              <div key={i} className="flex gap-2 items-center">
                <div className="p-2 bg-amber-400/50 rounded-sm text-[#ff7a18]">{item.icon}</div> 
                <div className="font-semibold">{item.text}</div> 
                </div>
            ))}
          </div>
          <ButtonBrown label="Start Your Order" />
          <ButtonWhite label="Learn More about Us" />          
        </div>
      
        <div className="text-center text-sm my-4"><p> &copy; {new Date().getFullYear()} Chuks Kitchen </p></div>
      </section>
    </main>
  );
}
