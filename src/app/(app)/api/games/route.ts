import { getGames } from "@/data/games";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const name = params.get("q") || "";
  if (!name) {
    return NextResponse.json({ games: [] });
  }
  const games = await getGames({
    name,
  });

  console.log(games);

  return NextResponse.json({ games });
}
