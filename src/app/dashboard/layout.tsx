import Navbar from "@/components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex h-full-no-navbar">
        <main className="flex-1 ">{children}</main>
      </div>
    </>
  );
}
