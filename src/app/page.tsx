import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  // This will center the section
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <main className="w-screen min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="text-5xl font-semibold mr-3">Chat with any PDF</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex mt-2">
            {isAuth && <Button>Go to Chats</Button>}
          </div>
          <p className="max-w-xl mt-1 text-lg text-slate-600">
            Join millions of students, researchers and professinals to instantly
            anwer questions and understand research with AI
          </p>

          <div className="w-full mt-4">
            {isAuth ? (
              <h2>fileupload</h2>
            ) : (
              <Link href="/signin">
                <Button>
                  Login to get Started
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
