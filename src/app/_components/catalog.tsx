"use client";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import PlaceholderImage from "~/assets/images/placeholder.png";

type ProductRes = {
  id?: number;
  name?: string;
  author?: string;
  sold?: number;
  price?: string;
  description?: string;
  category: { id: string; name: string; createdAt: Date }[];
};

type CategoryRes = {
  id: string; name: string; createdAt: Date;
};



export default function Catalog() {
  const router = useRouter();

  const { data: products, isFetched } = api.product.getAll.useQuery();

  const { mutate: deletePost } = api.product.delete.useMutation({});

  const { mutate: ATC } = api.cart.addToCart.useMutation({
    onSettled: () => {
      router.push("/cart");
    },
  });

  function onAddToCart(id: number) {
    ATC({ id });
  }

  const onDeleteHandler = (id: number) => {
    if (window.confirm("Are you sure")) {
      deletePost({ id });
    }
  };



  return (
    <>
      <section>
        <div className=" px-4 py-8 text-white sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold  sm:text-3xl">
              Discover More Product
            </h2>
            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>
          <div className="mt-8 sm:flex sm:items-center sm:justify-between">
            <div className="block sm:hidden">
              <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                <span className="text-sm font-medium">
                  {" "}
                  Filters &amp; Sorting{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden sm:flex sm:gap-4">
              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center gap-2 border-b border-[#7F04E3] pb-1  transition hover:border-gray-600">
                    <span className="text-sm font-medium">
                      {" "}
                      All Categories{" "}
                    </span>
                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0">
                    <div className="w-96 rounded border border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          0 Selected{" "}
                        </span>
                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>
                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label
                            htmlFor="FilterInStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              className="h-5 w-5 rounded border-gray-300"
                            />
                            <span className="text-sm font-medium text-gray-700">
                              In Stock (5+)
                            </span>
                          </label>
                        </li>
                        <li>
                          <label
                            htmlFor="FilterPreOrder"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPreOrder"
                              className="h-5 w-5 rounded border-gray-300"
                            />
                            <span className="text-sm font-medium text-gray-700">
                              Pre Order (3+)
                            </span>
                          </label>
                        </li>
                        <li>
                          <label
                            htmlFor="FilterOutOfStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOutOfStock"
                              className="h-5 w-5 rounded border-gray-300"
                            />
                            <span className="text-sm font-medium text-gray-700">
                              Out of Stock (10+)
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center gap-2 border-b border-[#7F04E3] pb-1 transition hover:border-gray-600">
                    <span className="text-sm font-medium"> Price </span>
                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0">
                    <div className="w-96 rounded border border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          The highest price is $600
                        </span>
                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>
                      <div className="border-t border-gray-200 p-4">
                        <div className="flex justify-between gap-4">
                          <label
                            htmlFor="FilterPriceFrom"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600">$</span>
                            <input
                              type="number"
                              id="FilterPriceFrom"
                              placeholder="From"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>
                          <label
                            htmlFor="FilterPriceTo"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600">$</span>
                            <input
                              type="number"
                              id="FilterPriceTo"
                              placeholder="To"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
            <div className="hidden text-black sm:block">
              <label htmlFor="SortBy" className="sr-only">
                SortBy
              </label>
              <select
                id="SortBy"
                className="h-12 rounded-lg border-2  border-[#7F04E3] bg-black p-2 text-sm text-white"
              >
                <option>Sort By</option>
                <option value="Title, DESC">Title, DESC</option>
                <option value="Title, ASC">Title, ASC</option>
                <option value="Price, DESC">Price, DESC</option>
                <option value="Price, ASC">Price, ASC</option>
              </select>
            </div>
          </div>
          <ul className="mt-4 grid gap-16 sm:grid-cols-2 lg:grid-cols-6">
            {isFetched &&
              products?.length !== 0 &&
              products?.map((product: ProductRes) => (
                <>
                  <li>
                    <div className="group relative  mt-10 min-w-[340px] max-w-sm">
                      <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#7F04E3] to-[#7F04E3] opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
                      <div className="relative rounded-2xl  bg-black px-6 py-3">
                        <a
                          href="#"
                          className="group relative block overflow-hidden rounded-2xl"
                        >
                          <button className="absolute end-4 top-4 z-10 rounded-full  p-1.5 text-white transition hover:text-gray-900/75">
                            <span className="sr-only">Wishlist</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                              />
                            </svg>
                          </button>

                          <Image
                            src={PlaceholderImage}
                            alt="Logo Icon"
                            className="mb-4 "
                          />

                          <div className="relative  p-6 ">
                            <span className="whitespace-nowrap rounded-md bg-gradient-to-r from-[#7F04E3] to-[#FF006B] px-3 py-1.5 text-xs font-medium">
                              {product.category?.map((category: CategoryRes) => (
                                <>{category.name}</>
                              ))}
                            </span>

                            <h3 className="mt-4 text-lg font-medium ">
                              {product.name}
                            </h3>

                            <div className="mb-5 mt-2.5 flex items-center">
                              <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                5.0
                              </span>
                            </div>

                            <p className="mt-1.5 text-sm ">${product.price}</p>

                            <form className="mt-4">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  onAddToCart(product.id!);
                                }}
                                className="block w-full rounded bg-gradient-to-r from-[#7F04E3] to-[#FF006B] p-4 text-sm font-medium transition hover:scale-105"
                              >
                                Add to Cart
                              </button>
                            </form>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                </>
              ))}
          </ul>

          {/* <ul className="mt-4 grid gap-16 sm:grid-cols-2 lg:grid-cols-6">
          {isFetched &&
          products?.length !== 0 &&
          products?.map((product: ProductRes) => (
            <>

            <li>
              <div className="group relative  min-w-[340px] max-w-sm mt-10 border-2 border-[#7F04E3] rounded-2xl">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg  opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
                <div className="relative rounded-2xl  bg-black px-6 py-3">
                  <a
                    href="#"
                    className="group relative block overflow-hidden rounded-2xl"
                  >
                    <button className="absolute end-4 top-4 z-10 rounded-full  p-1.5 text-white transition hover:text-gray-900/75">
                      <span className="sr-only">Wishlist</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>

                    <Image
                    src={PlaceholderImage}
                    alt="Logo Icon"
                    className="mb-4 "
                  />

                    <div className="relative  p-6 ">
                      <span className="whitespace-nowrap rounded-md bg-gradient-to-r from-[#7F04E3] to-[#FF006B] px-3 py-1.5 text-xs font-medium">
                      {product.category?.map((category: any) => (
                            <>{category.name}</>
                          ))}
                      </span>

                      <h3 className="mt-4 text-lg font-medium ">{product.name}</h3>

                      <div className="mb-5 mt-2.5 flex items-center">
                        <svg
                          className="h-5 w-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="h-5 w-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="h-5 w-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="h-5 w-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="h-5 w-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                          5.0a
                        </span>
                      </div>

                      <p className="mt-1.5 text-sm ">${product.price}</p>

                      <form className="mt-4">
                        <button 
                      onClick={(e) => {
                        e.preventDefault();
                        onAddToCart(product.id);
                      }}
                        


                       className="block w-full rounded bg-gradient-to-r from-[#7F04E3] to-[#FF006B] p-4 text-sm font-medium transition hover:scale-105">
                          Add to Cart
                        </button>
                      </form>
                    </div>
                  </a>
                </div>
              </div>
            </li>
               </>
          ))}

          </ul> */}
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-center p-10 lg:justify-between">
        {!isFetched && <option value="">Please wait</option>}

        {isFetched && products?.length === 0 && (
          <option value="">No products</option>
        )}

        {isFetched &&
          products?.length !== 0 &&
          products?.map((product: ProductRes) => (
            <>
              <div className="relative mx-1 my-3  min-w-[340px] max-w-sm cursor-pointer rounded-3xl border-2 p-2 text-white shadow-md">
                <div className="relative overflow-x-hidden rounded-2xl">
                  <Image
                    src={PlaceholderImage}
                    alt="Logo Icon"
                    className="mb-4 "
                  />
                  <p className="group absolute right-2 top-2 cursor-pointer rounded-full bg-white p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 opacity-70 group-hover:opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div className="mb-2 mt-4 flex justify-between pl-2 ">
                  <div>
                    <p className="mb-0 text-lg  font-semibold">Product Name</p>

                    <p className="text-md  mt-0">$340</p>
                  </div>

                  <div className="group mb-1 mr-4 flex cursor-pointer flex-col-reverse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                tabIndex={0}
                className="mx-2 mb-8 mt-8 w-72 rounded-2xl border-2 border-zinc-500 p-4 focus:outline-none xl:mb-0"
              >
                <div>
                  <Image
                    src={PlaceholderImage}
                    alt="Logo Icon"
                    className="mb-4 "
                  />
                </div>
                <div className="">
                  <div className="flex items-center justify-between px-2">
                    <div className="text-white">{product.name}</div>
                    <div className=" ">
                      <p
                        tabIndex={0}
                        className=" text-green-500 focus:outline-none"
                      >
                        ${product.price}
                      </p>
                    </div>
                  </div>
                  <div className="p-2">
                    <p
                      tabIndex={0}
                      className=" text-gray-600 focus:outline-none"
                    >
                      {product.author}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p
                          tabIndex={0}
                          className="rounded-2xl bg-gray-200 px-2 py-1 text-xs text-gray-600 focus:outline-none"
                        >
                          {product.category?.map((category: CategoryRes) => (
                            <>{category.name}</>
                          ))}
                        </p>
                      </div>
                      <div className="pl-2">
                        <p
                          tabIndex={0}
                          className="px-2 py-1 text-xs text-gray-600 "
                        >
                          Order
                        </p>

                        <button
                          className="bg-red"
                          onClick={() => onDeleteHandler(product.id!)}
                        >
                          {" "}
                          Delete{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}

        {/* Card 1 */}
      </div>
    </>
  );
}
