import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookDetails } from "@/logo/PostApi";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await getBookDetails(id);

        if (res.data) {
          setBook(res.data);
        } else {
          throw new Error("No data received from API");
        }
      } catch (err) {
        console.error("Error fetching book details:", err);
        setError("Failed to load book details.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="text-white p-6 max-w-6xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="text-white p-6 max-w-6xl mx-auto">
        <div className="text-red-500 text-center p-4 bg-black rounded-lg">
          {error || "Book not found"}
          <button
            onClick={() => navigate(-1)}
            className="block mt-4 mx-auto bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  const coverId = book.covers?.[0];
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "/placeholder.svg?height=300&width=200";

  const authorOLIDs =
    book.authors?.map((a) => a.author?.key?.split("/").pop()).join(", ") || "Unknown";

  const publishDate = book.created?.value?.split("T")[0] || "N/A";

  return (
    <div className="text-white p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">
        {book.title || "Untitled Book"}
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-black p-6 rounded-xl shadow-lg">
        <div className="w-full md:w-1/3">
          <img
            src={coverUrl}
            alt={`${book.title} cover`}
            className="w-full h-auto object-cover rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=300&width=200";
            }}
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="space-y-4 text-lg">
            <p><strong className="text-xl">Author OLID(s):</strong> <span className="text-sm">{authorOLIDs}</span></p>
            <p><strong>First Published:</strong> <span className="text-sm"> {publishDate}</span> </p>
            <p><strong className="text-xl">Subjects:</strong> <span className="text-sm">{(book.subjects || []).slice(0, 5).join(", ") || "N/A"}</span></p>
            {book.description && (
              <p><strong className="text-xl">Description:</strong> <span className="text-sm"> {typeof book.description === "string"
                ? book.description
                : book.description.value || "No description available"}
              </span></p>
            )}
          </div>

          <div className="flex justify-end mt-8">
            <button
              onClick={() => navigate(-1)}
              className="bg-indigo-600 text-white px-2 mt-5 md:mt-36 py-2 rounded-md hover:bg-indigo-700 transition duration-300 shadow-md"
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
