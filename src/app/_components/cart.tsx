"use client";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import PlaceholderImage from "~/assets/images/placeholder.png";

export default function Cart() {
  const router = useRouter();

  let total = 0;
  let totalPerItem = 0;

  const { data: cart, isFetched } = api.cart.getCart.useQuery();
  console.log(cart);

  const { mutate: incrementQTY } = api.cart.incrementItemCount.useMutation({
    onSettled: () => {
      router.push("/cart");
    },
  });

  function onIncrement(id: number) {
    incrementQTY({ id });
  }

  const { mutate: decrementQTY } = api.cart.decrementItemCount.useMutation({
    onSettled: () => {
      router.push("/cart");
    },
  });

  function onDecrement(id: number) {
    decrementQTY({ id });
  }

  const { mutate: deleteItem } = api.cart.deleteItem.useMutation({
    onSettled: () => {
      router.push("/cart");
    },
  });

  function onDeleteItem(id: number) {
    deleteItem({ id });
  }


  type productRes = {
    itemCount: number,
    item: { id: number; image: string; name: string; author: string; price: string; enable: boolean; description: string; sold: number; createdAt: Date; updatedAt: Date; }
    id: number;
    name?: string;
    author?: string;
  };
  


  return (
    <>
      <div className="flex items-center justify-center bg-black text-white ">
        <div className="h-screen  pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {isFetched &&
                cart?.length !== 0 &&
                cart?.map((product: productRes) => (
                  <>
                    <div className="hidden">
                      {(totalPerItem = product.itemCount * Number(product?.item?.price))}

                      {(total = total + totalPerItem)}
                    </div>

                    <div className="mb-6 justify-between rounded-2xl   border-2 border-[#7F04E3] p-6 shadow-md sm:flex sm:justify-start">
                      <Image
                        src={PlaceholderImage}
                        alt="Logo Icon"
                        width={150}
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold ">
                            {product.item.name}
                          </h2>
                          <p className="mt-1 text-xs ">{product.item.author}</p>
                        </div>
                        <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
                          <div className="flex items-center border-gray-100">
                            <span className="cursor-pointer rounded-l border-2 border-[#7F04E3] px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50">
                              {" "}
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  onDecrement(product.id);
                                }}
                              >
                                -
                              </a>{" "}
                            </span>
                            <input
                              className="h-9 w-8  border-2 border-[#7F04E3] bg-[#7F04E3] text-center text-xs outline-none"
                              type="number"
                              defaultValue={product.itemCount}
                              min={1}
                            />
                            <span className="cursor-pointer rounded-r border-2 border-[#7F04E3] px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50">
                              {" "}
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  onIncrement(product.id);
                                }}
                              >
                                +
                              </a>{" "}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-sm">${product.item.price}</p>
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                onDeleteItem(product.id);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
            {/* Sub total */}

            <div className="mt-6 h-full rounded-2xl  border-2 border-[#7F04E3] p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="">Subtotal</p>
                <p className="">${total}</p>
              </div>
              <div className="flex justify-between">
                <p className="">Fee</p>
                <p className="">$1.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">${total + 1.9} USD</p>
                  <p className="text-sm ">including VAT</p>
                </div>
              </div>

              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
