
import Link from "next/link";

import Header from "~/app/_components/header";
import Sidebar from "~/app/_components/sidebar";
import Addproduct from "~/app/_components/add-product"


export default  function Home() {

  return (
    <>
      <div className="scrollbar-hide absolute ml-[260px] mt-[80px] h-full max-h-[calc(100vh-80px)] w-full max-w-[calc(100vw-260px)] overflow-y-auto overflow-x-hidden bg-black">
      <Addproduct />
   
      </div>
      <Header title="Home"></Header>
      <Sidebar Selected="Home"></Sidebar>
    
    </>
  );
}

