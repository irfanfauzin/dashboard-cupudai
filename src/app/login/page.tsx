import Link from "next/link";

import Header from "~/app/_components/header";
import Sidebar from "~/app/_components/sidebar";
import Login from "~/app/_components/login"
import { Test } from "~/app/_components/test";
import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <>

      <Login />


   
    </>

  );
}

