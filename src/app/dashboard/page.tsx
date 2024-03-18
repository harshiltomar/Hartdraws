import Dashboard from "@/components/Dashboard";
import {
  getKindeServerSession,
  createKindeManagementAPIClient,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = () => {
  const { getUser } = getKindeServerSession();
  console.log("working");
  const user = getUser();

  //if (!user) redirect("/auth-callback?origin=dashboard");

  return <Dashboard />;
};

export default Page;
