export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-6 px-4 h-screen flex flex-col items-center bg-primary">
      <h2 className="text-center text-4xl text-white font-bold">Speedly ​</h2>
      <p className="text-lg font-semibold text-white mt-2 text-center">
        Real Estate Owner
      </p>
      <main className="w-full max-w-sm pt-4 h-fit my-auto">{children}</main>
    </div>
  );
}
