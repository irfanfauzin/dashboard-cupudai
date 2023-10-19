"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function Test() {
  const { data: todos, refetch, isFetched } = api.category.getLatest.useQuery();


  return (
    <>
   {isFetched  && (
                    
                console.log(todos)
                    
                  )}
                  {isFetched  && todos!.map((todo: any) => (
                    <div key={todo.id} >
                      <ul>
                      <li>{todo.name}</li></ul>
                    
                    
                    </div>
                  ))}
    </>
  );
}
