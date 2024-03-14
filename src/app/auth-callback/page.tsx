"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { trpc } from "../_trpc/client";

const Page = async () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const apiResponse = await fetch("/api/whatever");

  //used to destructure data with typesafety
  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: () => {},
  });
};

export default Page;

//2.04.42
