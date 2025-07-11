import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Using react-router-dom for routing
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Globe, Zap, Heart, Star } from "lucide-react";
import Blank from "./Blank";

const AboutPage = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchData = document.querySelector("[data-search]")?.getAttribute("data-search");
    if (searchData) {
      setSearch(searchData);
    }
  }, []);

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Vast Library",
      description:
        "Access millions of books from the Open Library database with comprehensive metadata and cover images.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Auto-Sliding Carousel",
      description: "Enjoy a seamless browsing experience with our responsive, auto-sliding book carousels.",
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Global Collection",
      description: "Discover books from authors around the world across multiple genres and languages.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Community Driven",
      description: "Powered by Open Library, a community-driven project to create a web page for every book.",
    },
  ];

  const stats = [
    { label: "Books Available", value: "20M+", icon: <BookOpen className="h-5 w-5" /> },
    { label: "Authors", value: "2M+", icon: <Users className="h-5 w-5" /> },
    { label: "Languages", value: "100+", icon: <Globe className="h-5 w-5" /> },
    { label: "Daily Visitors", value: "50K+", icon: <Heart className="h-5 w-5" /> },
  ];

  return (
    <>
    <Blank/>
    <div className="container mx-auto md:px-28 px-4 py-8 space-y-12" style={{ paddingTop: "80px" }}>
      {search && (
        <div className="text-center bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            You searched for "<span className="font-semibold">{search}</span>".{" "}
            <Link to="/books" className="text-blue-600 hover:underline ml-1">
              View search results →
            </Link>
          </p>
        </div>
      )}

      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-5xl font-bold tracking-tight">Your Gateway to the World of Books</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            BookStore is a modern book discovery platform that connects readers with millions of books from around the
            world. Built with cutting-edge technology and powered by the Open Library API.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-2 text-primary">{stat.icon}</div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-xl font-bold">Why Choose BookStore?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            We've built a platform that makes book discovery enjoyable, accessible, and engaging for readers of all
            kinds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
        <CardContent className="p-8 md:p-12">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Star className="h-12 w-12 text-yellow-500 fill-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              To democratize access to books and make literature discovery a delightful experience. We believe that
              every reader should have the opportunity to discover their next favorite book, regardless of their
              location or background.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              <Badge variant="secondary">Open Source</Badge>
              <Badge variant="secondary">Community Driven</Badge>
              <Badge variant="secondary">Free Access</Badge>
              <Badge variant="secondary">Global Reach</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Built with Modern Technology</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            BookStore leverages the latest web technologies to provide a fast, responsive, and accessible experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Frontend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge variant="outline">Next.js 15</Badge>
              <Badge variant="outline">React 18</Badge>
              <Badge variant="outline">ShadCn/ui</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">API & Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge variant="outline">Open Library API</Badge>
              <Badge variant="outline">Axios</Badge>
              <Badge variant="outline">REST API</Badge>
              <Badge variant="outline">JSON</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge variant="outline">Responsive Design</Badge>
              <Badge variant="outline">Auto-sliding Carousel</Badge>
              <Badge variant="outline">Search Integration</Badge>
              <Badge variant="outline">Accessibility</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center space-y-6">
          <h2 className="text-2xl font-bold">Start Discovering Books Today</h2>
          <p className="text-sm opacity-90 max-w-2xl mx-auto">
            Join thousands of readers who use BookStore to find their next great read. Explore our vast collection and
            discover books you never knew existed.
          </p>
          <Link
            to="/books"
            className="inline-flex items-center justify-center rounded-md bg-background text-foreground hover:bg-background/90 h-11 px-3 text-sm transition-colors"
          >
            Explore Books Now
          </Link>
        </CardContent>
      </Card>
    </div>
    </>
  );
};

export default AboutPage;
