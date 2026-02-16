export default function ButtonBrown({ label, type = "button", disabled }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="bg-[#ff7a18] hover:bg-[#956a24] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-md w-full text-sm sm:text-base font-medium transition-colors"
    >
      {label}
    </button>
  );
}
export function ButtonGreen({ label, type = "button", disabled }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="bg-[#446A2E] hover:bg-[#365a25] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-md text-sm sm:text-base font-medium transition-colors"
    >
      {label}
    </button>
  );
}
export function ButtonWhite({ label, type = "button", disabled }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="text-[#446A2E] bg-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-md text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors"
    >
      {label}
    </button>
  );
}
export function ButtonRing({ label, type = "button", disabled, icon }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="gap-4 bg-white border-gray-300 border flex justify-center items-center text-gray-800 py-1 sm:py-2 px-4 sm:px-6 rounded-lg sm:rounded-md w-full text-sm sm:text-base font-medium hover:bg-white/10 transition-colors"
    >
      {icon}
      {label}
    </button>
  );
}
