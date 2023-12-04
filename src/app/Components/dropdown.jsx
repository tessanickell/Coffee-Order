
export default function DropDown({ children, setOption, selectedOption }) {
  return (
    <select value={selectedOption} onChange={(e) => setOption(e.target.value)} className="text-[#4A392A] rounded-xl border-[4px] border-[#4A392A] outline-none w-full bg-transparent py-4 px-6">{children}</select>
  )
}
