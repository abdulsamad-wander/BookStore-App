"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { searchBooks } from "@/logo/PostApi";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Star, Calendar, User } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const BooksCarousel = ({
  searchQuery = "bestseller",
  autoplayDelay = 3000,
  className = "",
}) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await searchBooks(searchQuery);
        const filteredBooks = response.data.docs
          .filter((book) => book.cover_i && book.title && book.author_name)
          .slice(0, 12);
        setBooks(filteredBooks);
      } catch (err) {
        setError("Failed to fetch books. Please try again later.");
        console.error("Error fetching books:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [searchQuery]);

  const getCoverUrl = (coverId, size = "M") => {
    return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
  };

  const handleReadMore = (bookKey) => {
    const id = bookKey.split('/').pop(); // or bookKey.replace('/works/', '')
  console.log('Navigating to book ID:', id); 
    navigate(`/books/${id}`);
  };

  const getFirst15Words = (text) => {
    const words = text.split(" ");
    return words.slice(0, 15).join(" ") + (words.length > 15 ? "..." : "");
  };

  if (loading) {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`w-full ${className}`}>
        <Card className="h-64 flex items-center justify-center">
          <CardContent className="text-center">
            <p className="text-destructive mb-2">📚 Oops!</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className={`w-full ${className}`}>
        <Card className="h-64 flex items-center justify-center">
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              No books found for "{searchQuery}"
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`} style={{ paddingTop: "64px" }}>
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: autoplayDelay })]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {books.map((book) => (
            <CarouselItem
              key={book.key}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 h-full flex flex-col">
                  <div className="relative mb-4 flex-shrink-0">
                    <img
                      src={
                        book.cover_i
                          ? getCoverUrl(book.cover_i)
                          : "/placeholder.svg?height=200&width=150"
                      }
                      alt={book.title}
                      className="w-full h-48 object-cover rounded-md shadow-sm"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=200&width=150";
                      }}
                    />
                    {book.first_publish_year && (
                      <Badge
                        variant="secondary"
                        className="absolute top-2 right-2 text-xs"
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {book.first_publish_year}
                      </Badge>
                    )}
                  </div>

                  <div className="flex-grow flex flex-col">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2 leading-tight">
                      {getFirst15Words(book.title)}
                    </h3>

                    {book.author_name && (
                      <div className="flex items-center text-xs text-muted-foreground mb-2">
                        <User className="w-3 h-3 mr-1 flex-shrink-0" />
                        <span className="line-clamp-1">
                          {book.author_name.slice(0, 2).join(", ")}
                          {book.author_name.length > 2 &&
                            ` +${book.author_name.length - 2} more`}
                        </span>
                      </div>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-5"
                      onClick={() => handleReadMore(book.key)}
                    >
                      Read More
                    </Button>
                    {book.ratings_average && (
                      <div className="flex items-center text-xs text-muted-foreground mb-2">
                        <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                        <span>{book.ratings_average.toFixed(1)}</span>
                        {book.ratings_count && (
                          <span className="ml-1">
                            ({book.ratings_count.toLocaleString()})
                          </span>
                        )}
                      </div>
                    )}

                    {book.subject && book.subject.length > 0 && (
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-1">
                          {book.subject.slice(0, 2).map((subject, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs px-2 py-0"
                            >
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default BooksCarousel;