import { FaPlusCircle } from "react-icons/fa";
import { exploreImg } from "../assets/imgLists";
import { entrees, exploreData, explorePopular, swallow } from "../utils/exploreData";

export default function Explore() {
  return (
    <main className="relativee h-full w-full bg-[#f3f4f6]">
      {/* banner */}
      <section style={{ backgroundImage: `url(${exploreImg})` }} className="h-[90vh] w-full bg-cover bg-no-repeat">
        <div className="bg-black/50 min-h-full w-full flex items-center text-white p-4">
          <div className="space-y-6 w-3/5">
            <h1 className="font-bold text-6xl">Chuks  Kitchen</h1>
            <p className="font-semibold text-2xl">Chuks  Kitchen Nigerian Home Cooking 4.8  (1.2k)</p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="p-4 bg-white mx-auto w-11/12 my-6 shadow-lg rounded-xl">
        <h1 className="font-semibold ">Menu Categories</h1>
        <select name="menu" id="menu" className="outline-0 w-full">
          {exploreData.map((item, i) => (
            <option key={i} value={item} className="">{item}</option>
          ))}
        </select>
      </section>

      {/* Popular */}
      <section className="my-6 mx-auto w-11/12">
        <h1 className="font-semibold text-2xl my-4">Popular</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-10 w-full">
          {explorePopular.map((item, i) => (
            <div key={i} className="flex flex-col gap-2 items-center mx-auto shadow-xl rounded-xl w-fit">
              <img src={item.img} alt={item.title} className="block" />
              <div className="px-6 box-border py-8 space-y-2 w-fit">
                <div className="font-semibold">{item.title}</div>
                <div className="">{item.desc}</div>
                <div className="flex justify-between items-center w-full">
                  <div className="text-[#ff7a18] font-semibold text-lg">N{item.price}</div>
                  <div className="w-fit text-[#ff7a18] text-2xl">
                    <FaPlusCircle />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jollof Rice & Entrees */}
      <section className="my-6 mx-auto w-11/12">
        <h1 className="font-semibold text-2xl my-4"> Jollof Rice & Entrees</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-10 w-full">
          {entrees.map((item, i) => (
            <div key={i} className="flex flex-col gap-2 items-center mx-auto shadow-xl rounded-xl w-fit">
              <img src={item.img} alt={item.title} className="block" />
              <div className="px-6 box-border py-8 space-y-2 w-fit">
                <div className="font-semibold">{item.title}</div>
                <div className="">{item.desc}</div>
                <div className="flex justify-between items-center w-full">
                  <div className="text-[#ff7a18] font-semibold text-lg">N{item.price}</div>
                  <div className="w-fit text-[#ff7a18] text-2xl">
                    <FaPlusCircle />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Swallow & Soups */}
      <section className="my-6 mx-auto w-11/12">
        <h1 className="font-semibold text-2xl my-4">Swallow & Soups</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-10 w-full">
          {swallow.map((item, i) => (
            <div key={i} className="flex flex-col gap-2 items-center mx-auto shadow-xl rounded-xl w-fit">
              <img src={item.img} alt={item.title} className="block" />
              <div className="px-6 box-border py-8 space-y-2 w-fit">
                <div className="font-semibold">{item.title}</div>
                <div className="">{item.desc}</div>
                <div className="flex justify-between items-center w-full">
                  <div className="text-[#ff7a18] font-semibold text-lg">N{item.price}</div>
                  <div className="w-fit text-[#ff7a18] text-2xl">
                    <FaPlusCircle />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
