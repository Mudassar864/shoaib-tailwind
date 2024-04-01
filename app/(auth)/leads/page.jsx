import { auth, signIn, signOut } from "@/auth";
import { client } from "@/sanity/lib/client";
import React from "react";
async function getData() {
  const query = `*[_type == "formData"]{
    fullName,
    email,
    phone,
    message,
    offPlanProject->{title}
  }`;

  const data = await client.fetch(query);
  return data;
}
export default async function page() {
  const session = await auth();
  if (!session || !session.user)
    return (
      <div className="w-full h-screen flex flex-col gap-4 items-center justify-center p-5">
        You Need To Sign In
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button className="btn bg-black text-white" type="submit">
            Sign In
          </button>
        </form>
      </div>
    );
  const data = await getData();
  console.log("fetching", data);
  return (
    <div className="container my-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl">All Leads</h2>
        <div className="ml-auto">
          {session && session.user ? (
            <div className="flex gap-2">
              <p>{session.user.name}</p>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">Sign Out</button>
              </form>
            </div>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <button type="submit">Sign In</button>
            </form>
          )}
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto my-8">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Project Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Phone
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Message
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length > 0 &&
            data.map((item, key) => (
              <tr key={key}>
                <td className="px-6 py-4">{item.offPlanProject.title}</td>
                <td className="px-6 py-4">{item.fullName}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4 ">{item.message}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
