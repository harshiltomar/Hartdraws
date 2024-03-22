"useclient";
import { trpc } from "@/app/_trpc/client";
import UploadButton from "./ui/UploadButton";
import { Ghost, MessageSquare, Plus, Trash } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import { format } from "date-fns";
import { Button } from "./ui/button";

const Dashboard = () => {
  //const { data: files, isLoading } = trpc.getUserFiles.useQuery();

  const files = [
    {
      id: 1,
      name: "John Doe",
      createdAt: "2024-03-14T12:00:00Z",
    },
    {
      id: 2,
      name: "Jane Smith",
      createdAt: "2024-03-14T12:30:00Z",
    },
    {
      id: 3,
      name: "Alice Johnson",
      createdAt: "2024-03-14T13:00:00Z",
    },
    {
      id: 4,
      name: "Bob Anderson",
      createdAt: "2024-03-14T13:30:00Z",
    },
    {
      id: 5,
      name: "Emily Brown",
      createdAt: "2024-03-14T14:00:00Z",
    },
  ];

  //
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-gray-900">My Files</h1>
        <UploadButton />
      </div>

      {/* User's Files */}
      {files && files?.length != 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
          {files.sort().map((file) => (
            <li
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg"
              key={file.id}
            >
              <Link
                href={`/dashboard/${file.id}`}
                className="flex flex-col gap-2"
              >
                <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-lg font-medium text-zinc-900">
                        {file.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500">
                <div className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  {format(new Date(file.createdAt), "MMM yyy")}
                </div>

                <div className="flex items-center gap-2'">
                  <MessageSquare className="h-4 w-4" />
                  mocked
                </div>

                <Button size="sm" className="w-full" variant="destructive">
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2">
          <Ghost className="h-8 w-8 text-zinc-800" />
          <h3 className="font-semibold text-xl">Pretty Empty Here !</h3>
          <p>Let&apos;s upload your first PDF</p>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
