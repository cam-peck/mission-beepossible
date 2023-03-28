export default function Venus() {
  return (
    <div className="w-[30%] planet bg-venus venus">
      <div className="flex flex-col items-center w-1/3 pt-28">
        <div className="w-full flex justify-between">
          <div className="w-[20px] h-[20px] bg-gray-900 rounded-full" />
          <div className="w-[20px] h-[20px] bg-gray-900 rounded-full" />
        </div>
        <div className="w-[80px] h-[40px] rounded-b-full border-b-4 border-l-4 border-gray-900 border-r-4 mt-4" />
      </div>
    </div>
  )
}
