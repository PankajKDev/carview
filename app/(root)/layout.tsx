import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full flex flex-col justify-center items-center">
        <div className="w-[80%] h-screen">{children}</div>
      </main>
    </>
  );
}

export default layout;
