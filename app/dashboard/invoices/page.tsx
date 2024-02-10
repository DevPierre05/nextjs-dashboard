const button = {
  small: 'p-2 bg-blue-600 text-white rounded-sm',
  medium: 'p-4 text-lg bg-blue-600 rounded-sm',
  large: 'p-4 px-12 text-xl text-white bg-blue-600 rounded-lg text-center ',
};

export default function Page() {
  return (
    <div className="">
      <h1 className="text-xl font-semibold">Invoices</h1>
      <button className={`${button.small} mt-4`}>Add Invoice</button>
    </div>
  )
}