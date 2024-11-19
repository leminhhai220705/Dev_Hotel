import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;

// import useFetch from "../../hooks/useFetch";
// import "./featuredProperties.css";

// const FeaturedProperties = () => {
//   const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

//   // Check if there is an error
//   if (error) {
//     return <div className="error">Something went wrong. Please try again later.</div>;
//   }

//   // Check if data is valid and is an array
//   if (!data || !Array.isArray(data)) {
//     return <div className="error">Please search the hotel name.</div>;
//   }

//   return (
//     <div className="fp">
//       {loading ? (
//         <div className="loading">Loading...</div> // You can replace this with a spinner
//       ) : (
//         <>
//           {data.length > 0 ? (
//             data.map((item) => (
//               <div className="fpItem" key={item._id || item.name}> {/* fallback to name if _id is not available */}
//                 <img
//                   src={item.photos && item.photos[0] ? item.photos[0] : "default_image.jpg"} // Fallback if no photo
//                   alt={`Image of ${item.name} in ${item.city}`} // Description for alt
//                   className="fpImg"
//                 />
//                 <span className="fpName">{item.name}</span>
//                 <span className="fpCity">{item.city}</span>
//                 <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
//                 {item.rating && (
//                   <div className="fpRating">
//                     <button>{item.rating}</button>
//                     <span>Excellent</span>
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <div className="noData">No data available to display.</div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default FeaturedProperties;