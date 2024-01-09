import Card from "@/app/(components)/Card/Card";
import ProfileView from "@/app/(views)/Me/Profile";
import { auth } from "@/auth";

export default async function MePage() {
  const session = await auth();

  return (
    <>
      <div className="container mx-auto p-20 min-h-screen w-full">
        <div className="w-3/4 mx-auto">
          <Card className="p-12">
            <ProfileView
              avatarUrl={session?.user?.image ?? ""}
              username={session?.user?.name}
              email={session?.user?.email}
            />
          </Card>
        </div>
      </div>
    </>
  );
}
