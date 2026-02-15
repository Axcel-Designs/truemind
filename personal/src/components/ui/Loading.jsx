import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <main className="flex min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh] w-full justify-center items-center">
      <div className="text-blue-600 text-3xl sm:text-4xl md:text-5xl">
        <AiOutlineLoading3Quarters className="animate-spin" />
      </div>
    </main>
  )
}
