import Image from "next/image";
import LogoIconImage from "~/assets/images/logo.png";

export default function ChangePassword() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className=" xs:w-full h-screen w-full rounded-xl border-2 border-zinc-700 bg-black px-4 py-8 shadow-none sm:h-auto sm:w-8/12 sm:px-8 sm:shadow-lg md:w-7/12 lg:w-7/12 xl:w-2/6">
        <Image src={LogoIconImage} alt="Logo Icon" className="mb-6 w-40" />

        <div className="w-full  text-2xl font-bold text-white">
          Change Password
        </div>
        <p className="text-gray-400">
          Change your password to a strong one and remember it!
        </p>
        <div className="my-3 w-full bg-zinc-700" style={{ height: 1 }} />
        <form>
          <div className="flex flex-col gap-4 px-0 py-4">
            <div>
              <label>New Password</label>

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
                    d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  />{" "}
                  <path
                    d="M6 10V8C6 4.68629 8.68629 2 12 2C14.7958 2 17.1449 3.91216 17.811 6.5"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />{" "}
                  <path
                    d="M12 14V18"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />{" "}
                </g>
              </svg>

              <input
                className="mt-2 w-full rounded border border-gray-200 py-2 pl-10 text-black"
                placeholder="Password"
                type="text"
              />
            </div>
            <div>
              <label>Password</label>
              {/* <LockClosedIcon class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" /> */}
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
                    d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  />{" "}
                  <path
                    d="M12 14V18"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />{" "}
                  <path
                    d="M6 10V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V10"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />{" "}
                </g>
              </svg>

              <input
                className="mt-2 w-full rounded border border-gray-200 py-2 pl-10 text-black"
                placeholder="Retype Password"
                type="password"
              />
            </div>

            <div className="mt-6 flex w-full flex-col gap-2">
              <button className="flex w-full flex-row items-center justify-center gap-2 rounded border-2 border-zinc-700 bg-gradient-to-r from-[#7F04E3] to-[#FF006B] p-3   text-white transition-all duration-500 hover:from-[#7F04E3] hover:to-[#ff006a75]">
                Update Password
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
