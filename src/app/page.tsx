import { Metadata } from "next";
import DefaultLayout from "@/(components)/Layouts/DefaultLayout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/constants/authProvider";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log("🚀 ~ Home ~ session:", session?.user)
  if (!session) {
    redirect("/signin")
  }

  return (
    <>
      <DefaultLayout>
        <h1 className="font-bold text-[25px]">Home</h1>
        <Link href="/addavailability" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
          <span className="relative group-hover:text-white">Button Text</span>
        </Link>
        
        
      </DefaultLayout>
    </>
  );
}
