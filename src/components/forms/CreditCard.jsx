export default function CreditCard() {
  return (
    <div className="p-4 border shadow-lg rounded-2xl h-fit bg-[#d1b19d]">
      <h2 className="mb-4 text-xl font-bold text-slate-100">Payment Details</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-slate-100">
            Cardholder Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label
            htmlFor="card-number"
            className="block font-medium text-slate-100"
          >
            Card Number
          </label>
          <input
            id="card-number"
            type="text"
            placeholder="1234 5678 9012 3456"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="expiry"
              className="block font-medium text-slate-100"
            >
              Expiry Date
            </label>
            <input
              id="expiry"
              type="text"
              placeholder="MM/YY"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block font-medium text-slate-100">
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              placeholder="123"
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-1 mx-4 text-xl italic font-semibold text-white transition bg-green-400 float-end rounded-xl hover:bg-green-300"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}
