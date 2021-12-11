import React from "react";
import VerticalMenuBar from "../../components/VerticalMenuBar/VerticalMenuBar";
import RecipesFeed from "../../components/RecipesFeed/RecipesFeed";
import Banner from "../../components/Banner/Banner";

export default function Home() {
  return (
    <div>
      <main className="flex max-w-7xl mx-auto mt-3">
        <div className="hidden sm:block h-auto mb-3">
          <VerticalMenuBar />
        </div>
        <div className="flex flex-col w-full">
          <Banner />
          <RecipesFeed />
        </div>
      </main>
    </div>
  );
}
