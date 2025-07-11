import React from "react";
import Books from "./Books";

const BooksCarousel = ({ search }) => {
  return (
    <div
      className="container mx-auto max-w-screen-2xl md:px-28 mt-10 px-4 py-8 space-y-12"
      style={{ paddingTop: "64px" }}
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">📚 Discover Amazing Books</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our curated collection of bestselling books from around the world
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">🔥 Bestsellers</h2>
          <Books searchQuery={search || "bestseller"} autoplayDelay={4000} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">🧙‍♂️ Fantasy Adventures</h2>
          <Books searchQuery={search || "fantasy fiction"} autoplayDelay={4000} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">🔬 Science & Technology</h2>
          <Books searchQuery={search || "science technology"} autoplayDelay={3500} />
        </section>
      </div>
    </div>
  );
};

export default BooksCarousel;