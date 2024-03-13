import { useSearchParams, useRouter } from "next/navigation";
import { trpc } from "@/app/_trpc/client";

const Page = async () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const apiResponse = await fetch("/api/whatever");

  //used to destructure data with typesafety
  const { data, isLoading } = trpc.test.useQuery();
};

export default Page;
