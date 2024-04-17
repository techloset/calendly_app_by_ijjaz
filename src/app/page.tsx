import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/constants/authProvider";
import AvailabilityTable from "@/components/availabilityTable/AvailabilityTable";

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
        <h1 className="font-bold text-[25px]">Availability</h1>
        <AvailabilityTable/>
      </DefaultLayout>
    </>
  );
}
