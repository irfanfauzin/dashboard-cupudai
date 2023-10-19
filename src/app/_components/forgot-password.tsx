import Image from "next/image";
import LogoIconImage from "~/assets/images/logo.png";

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className=" xs:w-full h-screen w-full rounded-xl border-2 border-zinc-700 bg-black px-4 py-8 shadow-none sm:h-auto sm:w-8/12 sm:px-8 sm:shadow-lg md:w-7/12 lg:w-7/12 xl:w-2/6">
        <Image src={LogoIconImage} alt="Logo Icon" className="mb-6 w-40" />

        <div className="w-full  text-2xl font-bold text-white">
          Forgot Password
        </div>
        <p className="text-gray-400">
          We will send you a link to reset your password!
        </p>
        <div className="my-3 w-full bg-zinc-700" style={{ height: 1 }} />
        <form>
          <div className="flex flex-col gap-4 px-0 py-4">
            <div>
              <label>Email</label>

              <svg
                className="absolute mt-2 w-11 p-2.5 px-3 text-2xl font-medium text-black"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                    fill="#080341"
                  />{" "}
                </g>
              </svg>

              <input
                className="mt-2 w-full rounded border border-gray-200 py-2 pl-10 text-black"
                placeholder="your@email.com"
                type="text"
              />
            </div>
            

            <div className="mt-6 flex w-full flex-col gap-2">
              <button className="flex w-full flex-row items-center justify-center gap-2 rounded border-2 border-zinc-700 bg-gradient-to-r from-[#7F04E3] to-[#FF006B] p-3   text-white transition-all duration-500 hover:from-[#7F04E3] hover:to-[#ff006a75]">
                Reset Password
              </button>
            </div>

            <div className="mt-2 flex w-full flex-row justify-center">
              Remember your password? &nbsp;
              <a href="#" className="text-[#7F04E3] underline">
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
