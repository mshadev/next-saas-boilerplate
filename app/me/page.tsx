import Card from "@/app/(components)/Card/Card";

export default async function MePage() {
  return (
    <>
      <div className="container mx-auto p-20 min-h-screen w-full">
        <div className="w-3/4 mx-auto">
          <Card className="p-12" />
        </div>
      </div>
    </>
  );
}
