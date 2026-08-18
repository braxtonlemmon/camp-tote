import Header from "@/features/header/components/header";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <main className="p-4">{children}</main>
      {/* // footer */}
    </div>
  );
}
