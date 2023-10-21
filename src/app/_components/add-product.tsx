"use client";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type CategoryRes = {
  id?: string;
  name?: string;
};

export default function AddProduct() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [enable, setEnable] = useState(false);

  const createProduct = api.product.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const { data: categories, isFetched } = api.category.getLatest.useQuery();

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] rounded-lg border-2 border-zinc-700 bg-black text-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createProduct.mutate({
              name,
              price,
              description,
              category,
              enable,
            });
          }}
          className="px-9 py-6"
          method="POST"
        >
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium "
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="AI Content "
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="-mx-3 mb-5 md:flex">
            <div className="px-3 md:mb-0 md:w-1/2">
              <label
                className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide"
                htmlFor="grid-first-name"
              >
                Price
              </label>
              <input
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                id="price"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="$1"
              />
            </div>
            <div className="px-3 md:w-1/2">
              <label
                className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide"
                htmlFor="grid-last-name"
              >
                Category
              </label>

              <select
                id="category"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
                className="bg-grey-lighter border-grey-lighter block w-full appearance-none rounded border px-4 py-3 text-black"
                placeholder="Select category"
              >
                {!isFetched && <option value="">Please wait</option>}

                {isFetched && categories?.length === 0 && (
                  <option value="">No Categories</option>
                )}

                {isFetched &&
                  categories?.length !== 0 &&
                  categories?.map((category: CategoryRes) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="Description"
              className="mb-3 block text-base font-medium "
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write your description of your product "
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="toggle mb-6 flex flex-row justify-between ">
            <label
              htmlFor="enable"
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  name="enable"
                  id="enable"
                  className="checkbox hidden"
                  onClick={() => setEnable(!enable)}
                />
                <div className="label block h-8 w-14 rounded-full border-[1px] border-gray-900 dark:border-zinc-700 " />
                <div className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition dark:bg-white" />
              </div>
              <div className="ml-3 font-medium text-gray-900 dark:text-white">
                Enable
              </div>
            </label>
          </div>

          <div className="mb-6 pt-4">
            <label className="mb-5 block text-xl font-semibold ">
              Upload Banner
            </label>
            <div className="flex w-full items-center justify-center">
              <label
                htmlFor="dropzone-file"
                className="dark:hover:bg-bray-800 mb-6 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed  border-gray-300 hover:bg-gray-100  dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-3 h-10 w-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <div className="mb-5 rounded-md bg-[#F5F7FB] px-8 py-4">
              <div className="flex items-center justify-between">
                <span className="truncate pr-3 text-base font-medium text-black ">
                  banner-design.png
                </span>
                <button className="">
                  <svg
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    fill="#000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                      fill="#000"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                      fill="#000"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="rounded-md bg-[#F5F7FB] px-8 py-4">
              <div className="flex items-center justify-between">
                <span className="truncate pr-3 text-base font-medium text-black">
                  banner-design.png
                </span>
                <button className="">
                  <svg
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                      fill="#000"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                      fill="#000"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                <div className="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]" />
              </div>
            </div>
          </div>
          <div>
            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] px-8 py-3 text-center text-base font-semibold text-white outline-none">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
