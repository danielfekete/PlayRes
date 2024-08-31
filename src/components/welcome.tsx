import LiveSearchGames from "./games/live-search-games";

export function Welcome() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="welcome">Welcome to Play Res</h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            Your go-to place for detailed information on how the latest games
            perform on current-generation consoles.
          </p>
          <LiveSearchGames />
        </div>
      </div>
    </section>
  );
}
