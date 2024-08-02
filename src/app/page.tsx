import LoggedIn from "@/components/LoggedIn";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <LoggedIn session={session} />
    </main>
  );
}
