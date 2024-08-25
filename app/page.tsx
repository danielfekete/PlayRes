import Showcase from "@/components/showcase";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
      <div>
        {/* Recently released */}
        <Showcase />
        {/* Performance recently updated */}
        {/* System sellers */}
      </div>
    </main>
  );
}
