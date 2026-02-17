import { lastImg, welcImg } from "../assets/imgLists";
import ButtonBrown from "../components/ui/Button";
import { chefSpecial, popularCategories } from "../utils/data";

export default function Home() {
  return (
    <main className="relativee h-full w-full bg-[#f3f4f6]">
      {/* banner */}
      <section style={{ backgroundImage: `url(${welcImg})` }} className="h-[90vh] w-full bg-cover bg-no-repeat">
        <div className="bg-black/50 min-h-full w-full flex items-center text-white p-4">
          <div className="space-y-6 w-3/5">
            <h1 className="font-bold text-6xl">The Heart of Nigerian Home Cooking</h1>
            <p className="font-semibold text-2xl">Handcrafted with passion, delivered with care.</p>
            <div className="w-fit">
              <ButtonBrown label="Discover What's new" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="my-30">
        <h1 className="font-semibold text-2xl text-center my-8">Popular Categories</h1>
        <div className="flex flex-wrap items-center gap-y-10 w-full">
          {popularCategories.map((item, i) => (
            <div key={i} className="flex flex-col gap-2 items-center #max-w-5/12 mx-auto shadow-xl rounded-xl w-fit">
              <img src={item.img} alt={item.title} />
              <div className="font-semibold p-4">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Chef Special */}
      <section className="my-30">
        <h1 className="font-semibold text-2xl text-center my-8">Chef's Special</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-10 w-full">
          {chefSpecial.map((item, i) => (
            <div key={i} className="flex flex-col gap-2 items-center max-w-11/12 mx-auto shadow-xl rounded-xl w-fit">
              <img src={item.img} alt={item.title} className="block" />
              <div className="px-6 box-border py-8 space-y-2 w-fit">
                <div className="font-semibold">{item.title}</div>
                <div className="">{item.desc}</div>
                <div className="flex justify-between items-center w-full">
                  <div className="text-[#ff7a18] font-semibold text-lg">N{item.price}</div>
                  <div className="w-fit text-sm">
                    <ButtonBrown label="Add to Cart" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundImage: `url(${lastImg})` }} className="h-[90vh] w-full bg-cover bg-no-repeat">
        <div className="bg-black/50 min-h-full w-full flex items-center text-white p-4">
          <div className="space-y-6 w-3/5">
            <h1 className="font-bold text-6xl">Introducing Our New Menu Additions!</h1>
            <p className="font-semibold text-2xl">Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!</p>
            <div className="w-fit">
              <ButtonBrown label="Discover What's new" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
