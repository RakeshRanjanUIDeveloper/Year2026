import { useEffect, useState } from "react";

const recipesData = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    cuisine: "Italian",
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    rating: 4.6,
    reviewCount: 98,
  },
  {
    id: 2,
    name: "Vegetarian Stir-Fry",
    cuisine: "Asian",
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    rating: 4.7,
    reviewCount: 26,
  },
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    cuisine: "American",
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
    rating: 4.9,
    reviewCount: 13,
  },
  {
    id: 4,
    name: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    image: "https://cdn.dummyjson.com/recipe-images/4.webp",
    rating: 4.9,
    reviewCount: 82,
  },
  {
    id: 5,
    name: "Mango Salsa Chicken",
    cuisine: "Mexican",
    image: "https://cdn.dummyjson.com/recipe-images/5.webp",
    rating: 4.9,
    reviewCount: 63,
  },
  {
    id: 6,
    name: "Quinoa Salad with Avocado",
    cuisine: "Mediterranean",
    image: "https://cdn.dummyjson.com/recipe-images/6.webp",
    rating: 4.4,
    reviewCount: 59,
  },
  {
    id: 7,
    name: "Tomato Basil Bruschetta",
    cuisine: "Italian",
    image: "https://cdn.dummyjson.com/recipe-images/7.webp",
    rating: 4.7,
    reviewCount: 95,
  },
  {
    id: 8,
    name: "Beef and Broccoli Stir-Fry",
    cuisine: "Asian",
    image: "https://cdn.dummyjson.com/recipe-images/8.webp",
    rating: 4.7,
    reviewCount: 58,
  },
  {
    id: 9,
    name: "Caprese Salad",
    cuisine: "Italian",
    image: "https://cdn.dummyjson.com/recipe-images/9.webp",
    rating: 4.6,
    reviewCount: 82,
  },
  {
    id: 10,
    name: "Shrimp Scampi Pasta",
    cuisine: "Italian",
    image: "https://cdn.dummyjson.com/recipe-images/10.webp",
    rating: 4.3,
    reviewCount: 5,
  },
];

const RecipeFilterApp = () => {
  const [selectedRating, setSelectedRating] = useState("");

  const filteredProducts = selectedRating
    ? recipesData.filter((recipe) => recipe.rating >= Number(selectedRating))
    : recipesData;

  const totalRating = filteredProducts.reduce(
    (acc, recipe) => acc + recipe.rating,
    0,
  );

  const averageRating = filteredProducts.length > 0 ? totalRating / filteredProducts.length : 0;
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        color: "#333",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontSize: "28px",
          marginBottom: "30px",
          color: "#2d3436",
        }}
      >
        RecipeFilterApp
      </h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h4
            style={{
              margin: 0,
              color: "#555",
              fontSize: "18px",
            }}
          >
            Filter By Rating
          </h4>
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
          >
            <option value="">Select an Option</option>
            <option value="4.0">4.0+</option>
            <option value="4.3">4.3+</option>
            <option value="4.5">4.5+</option>
            <option value="4.7">4.7+</option>
            <option value="4.9">4.9+</option>
          </select>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          marginBottom: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <h3
          style={{
            margin: 0,
            color: "#2d3436",
            fontSize: "20px",
          }}
        >
          Average Rating: {averageRating}
        </h3>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((r) => (
          <div
            key={r.id}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "220px",
                backgroundColor: "#eee",
                overflow: "hidden",
              }}
            >
              <img
                src={r.image}
                alt={r.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              style={{
                padding: "18px",
              }}
            >
              <h4
                style={{
                  margin: "0 0 8px",
                  fontSize: "20px",
                  color: "#2d3436",
                }}
              >
                {r.name}
              </h4>

              <h6
                style={{
                  margin: "0 0 12px",
                  fontSize: "14px",
                  color: "#777",
                  fontWeight: "normal",
                }}
              >
                cuisine : {r.cuisine}
              </h6>

              <h6
                style={{
                  display: "inline-block",
                  marginRight: "12px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#f39c12",
                }}
              >
                Rating: {r.rating}
              </h6>

              <h6
                style={{
                  display: "inline-block",
                  fontSize: "14px",
                  color: "#777",
                }}
              >
                {r.reviewCount} reviews
              </h6>

              <button
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: "16px",
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#0984e3",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecipeFilterApp;
