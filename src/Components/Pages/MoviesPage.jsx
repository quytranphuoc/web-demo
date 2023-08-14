import React, { useState } from "react";
import Filters from "../layout/Movies/Filters";
import Layout from "../Layout";
import Movie from "../layout/Movies/Movie";
import { Movies } from "../../Data/MovieData";
import { CgSpinner } from "react-icons/cg";

function MoviesPage() {
  const maxPage = 9;
  const [page, setPage] = useState(maxPage);
  const HandleLoadingMore = () => {
    setPage(page + maxPage);
  };
  return (
    <Layout className="bg-black">
      <div className=" min-height-screen container mx-auto px-2 my-6">
        <Filters />
        <p className="text-lg font-medium my-6 text-white">
          Total <span className="font-bold text-subMain">{Movies?.length}</span>{" "}
          items Found
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {Movies.slice(0, page)?.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
        {/* Loading More */}
        <div className="w-full flex-colo md:my-20 my-10" data-aos = "fade-up" data-aos-duration = "1500">
          <button
            onClick={HandleLoadingMore}
            className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain"
          >
            Load More <CgSpinner className="animate-spin" />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default MoviesPage;
