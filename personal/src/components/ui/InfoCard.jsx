export default function InfoCard({ icon, title, value }) {
  return (
    <div className="grid gap-2 p-3 sm:p-4 ring-1 ring-gray-300 bg-white rounded-lg sm:rounded-xl flex-1 min-w-40 sm:w-auto hover:shadow-md transition-shadow">
      <div className="text-xs sm:text-sm bg-gray-200 w-fit h-fit font-light rounded-lg p-2 hover:bg-gray-300 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs sm:text-sm font-medium text-gray-600">{title}</p>
      </div>
      <div>
        <div className="text-lg sm:text-xl font-bold text-[#2E462E]">{value}</div>
      </div>
    </div>
  )
}