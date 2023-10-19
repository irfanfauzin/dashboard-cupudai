import Image from "next/image";
import LogoIconImage from "~/assets/images/logo.png";

export default function Verification() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className=" xs:w-full h-screen w-full rounded-lg border-2 border-zinc-700 bg-black px-4 py-8 shadow-none sm:h-auto sm:w-8/12 sm:px-8 sm:shadow-lg md:w-7/12 lg:w-7/12 xl:w-2/6">
        <Image src={LogoIconImage} alt="Logo Icon" className="mb-6 w-40" />

        <div className="w-full  text-2xl font-bold text-white">
          Email Verification
        </div>
        <p className="text-gray-400">
          Check your email for the verification code.
        </p>
        <div className="my-6 w-full bg-zinc-700" style={{ height: 1 }} />
        <form>
          <div className="grid grid-cols-6 gap-4">
            <div className="h-16 w-14 ">
              <input
                className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-5 text-center font-extrabold text-black text-lg outline-none ring-blue-700 focus:bg-gray-50 focus:ring-1 "
                type="text"
                maxLength={1}
                name=""
                id=""
              />
            </div>

            <div className="h-16 w-14 ">
              <input
                className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-5 text-center font-extrabold text-black  text-lg outline-none ring-blue-700 focus:bg-gray-50 focus:ring-1"
                type="text"
                maxLength={1}
                name=""
                id=""
              />
            </div>

            <div className="h-16 w-14 ">
              <input
                className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-5 text-center font-extrabold text-black  text-lg outline-none ring-blue-700 focus:bg-gray-50 focus:ring-1"
                type="text"
                maxLength={1}
                name=""
                id=""
              />
            </div>

            <div className="h-16 w-14 ">
              <input
                className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-5 text-center font-extrabold text-black  text-lg outline-none ring-blue-700 focus:bg-gray-50 focus:ring-1"
                type="text"
                maxLength={1}
                name=""
                id=""
              />
            </div>

            <div className="h-16 w-14 ">
              <input
                className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-5 text-center font-extrabold text-black  text-lg outline-none ring-blue-700 focus:bg-gray-50 focus:ring-1"
                type="text"
                maxLength={1}
                name=""
                id=""
              />
            </div>

            <div className="h-16 w-14 ">
              <input
                className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-5 text-center font-extrabold text-black  text-lg outline-none ring-blue-700 focus:bg-gray-50 focus:ring-1"
                type="text"
                maxLength={1}
                name=""
                id=""
              />
            </div>
          </div>

          <div className="mt-10 flex w-full flex-col gap-2">
              <button className="flex w-full flex-row items-center justify-center gap-2 rounded-lg border-2 border-zinc-700 bg-gradient-to-r from-[#7F04E3] to-[#FF006B] p-3   text-white transition-all duration-500 hover:from-[#7F04E3] hover:to-[#ff006a75]">
                Verify Code
              </button>
            </div>

        </form>
      </div>
    </div>
  );
}
