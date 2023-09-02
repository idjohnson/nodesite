import "../globals.css";
import NavBar from "@/app/components/Navbar";

export const metadata = {
  title: "Create NextJS App",
  description: "Generated by create next app",
};

// <!-- use http://caius.github.io/github_id/ -->
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
            <div className="flex flex-col gap-2 justify-center">
              <h2 className="mb-0 text-zinc-100 font-bold">and</h2>
              <p className="mb-0 text-zinc-400 font-semibold leading-none">
                .... fun here .....
              </p>
            </div>
  );
}
