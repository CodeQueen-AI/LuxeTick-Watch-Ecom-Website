import Link from "next/link";

export default function Cancel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-5xl font-semibold text-red-500">Payment Cancelled ❌</h1>
      <p className="text-lg">Your payment was not completed.</p>

      <Link href="/Cart">
        <button className="px-6 py-3 bg-black text-white">
          Back To Cart
        </button>
      </Link>
    </div>
  );
}