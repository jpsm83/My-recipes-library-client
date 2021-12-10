import React from "react";
import VerticalMenuBar from "../../components/VerticalMenuBar/VerticalMenuBar";
import RecipesFeed from "../../components/RecipesFeed/RecipesFeed";
import Banner from "../../components/Banner/Banner";

export default function Home() {
  return (
    <div>
      <main className="flex max-w-7xl mx-auto px-8 sm:px-16">
        <div className="hidden sm:block h-auto p-3">
          <VerticalMenuBar />
        </div>
        <div className="flex absolut flex-col w-full p-3 pl-0">
          <Banner />
          <RecipesFeed />
        </div>
      </main>
    </div>
  );
}
