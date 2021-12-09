import React from "react";
import Header from "../../components/Header/Header";
import VerticalMenuBar from "../../components/VerticalMenuBar/VerticalMenuBar";
import RecipesFeed from "../../components/RecipesFeed/RecipesFeed";
import Banner from "../../components/Banner/Banner";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex max-x-7xl mx-auto px">
        <VerticalMenuBar />
        <div className="flex flex-col">
          <Banner />
          <RecipesFeed />
        </div>
      </main>
    </div>
  );
}
