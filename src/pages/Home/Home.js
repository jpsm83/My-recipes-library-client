import React from "react";
import Header from "../../components/Header/Header";
import VerticalMenuBar from "../../components/VerticalMenuBar/VerticalMenuBar";
import RecipesFeed from "../../components/RecipesFeed/RecipesFeed";
import Banner from "../../components/Banner/Banner";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex max-w-7xl mx-auto px-8 sm:px-16">
      <div className="hidden sm:block " >
        <VerticalMenuBar />
        </div>
        <div className="flex flex-col w-full">
          <Banner />
          {/* <RecipesFeed /> */}
        </div>
      </main>
    </div>
  );
}
