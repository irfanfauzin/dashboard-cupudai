import Image from "next/image";
import LogoIconImage from "~/assets/images/logo.png";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className=" xs:w-full h-screen w-full rounded-xl border-2 border-zinc-700 bg-black px-4 py-8 shadow-none sm:h-auto sm:w-8/12 sm:px-8 sm:shadow-lg md:w-7/12 lg:w-7/12 xl:w-2/6">
        <Image src={LogoIconImage} alt="Logo Icon" className="mb-6 w-40" />

        <div className="w-full  text-2xl font-bold text-white">
          Welcome Back!
        </div>
        <p className="text-gray-400">Continue generating Realistic Images</p>
        <div className="my-3 w-full bg-zinc-700" style={{ height: 1 }} />
        <form>
          <div className="flex flex-col gap-4 px-0 py-4">
            <div>
              <label>Username or Email</label>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute mt-2 w-11 p-2.5 px-3 text-2xl font-medium text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <circle cx={12} cy={6} r={4} fill="#1C274C" />{" "}
                  <path
                    d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                    fill="#1C274C"
                  />{" "}
                </g>
              </svg>

              <input
                className="mt-2 w-full rounded border border-gray-200 py-2 pl-10 text-black"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div>
              <label>Password</label>
              {/* <LockClosedIcon class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute mt-2 w-11 p-2.5 px-3 text-2xl font-medium text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <input
                className="mt-2 w-full rounded border border-gray-200 py-2 pl-10 text-black"
                placeholder="Password"
                type="password"
              />
            </div>

            <div className="flex w-full flex-row justify-between">
              <div>
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-[#7F04E3] focus:[#7F04E3]"
                />
                <label htmlFor="remember_me" className="ml-2 ">
                  Remember me
                </label>
              </div>

              <a className="underline text-[#7F04E3]" href="#">
                Forgot Password
              </a>
            </div>

            <div className="mt-6 flex w-full flex-col gap-2">
              <button
                className="flex w-full flex-row items-center justify-center gap-2 rounded border-2 border-zinc-700 bg-gradient-to-r from-[#7F04E3] to-[#FF006B] p-3   text-white transition-all duration-500 hover:from-[#7F04E3] hover:to-[#ff006a75]"
              >
                Login
              </button>
            </div>

            <div className="my-2 flex flex-row justify-center">
              <span className="absolute bg-black px-4">or</span>
              <div className="my-3 w-full bg-zinc-700" style={{ height: 1 }} />
            </div>

            <div className="flex w-full flex-row gap-12">
              <button
                className="flex w-6/12 flex-row items-center justify-center gap-1 rounded border border-zinc-700 bg-gradient-to-r p-3 duration-100 ease-in-out hover:from-[#7F04E3] hover:to-[#ff006a75]"
                type="submit"
              >
                <svg
                  className="mr-2"
                  width="25px"
                  height="25px"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g
                        id="Color-"
                        transform="translate(-401.000000, -860.000000)"
                      >
                        {" "}
                        <g
                          id="Google"
                          transform="translate(401.000000, 860.000000)"
                        >
                          {" "}
                          <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>{" "}
                Google
              </button>
              <button className="flex w-6/12 flex-row items-center justify-center gap-1 rounded border border-zinc-700 bg-gradient-to-r  p-2 duration-100 ease-in-out hover:from-[#7F04E3] hover:to-[#ff006a75]">
                <svg
                  className="mr-2"
                  width="25px"
                  height="25px"
                  viewBox="0 -28.5 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                        fill="#5865F2"
                        fillRule="nonzero"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>
                </svg>{" "}
                Discord
              </button>
            </div>

            <div className="mt-2 flex w-full flex-row justify-center">
              Don&apos;t have an account? &nbsp;
              <a href="#" className="underline text-[#7F04E3]">
                Sign Up
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
