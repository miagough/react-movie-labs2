import React from "react";
import { useParams } from 'react-router-dom';
import PageTemplate from "../components/templateMoviePage";
import { getRecommendations } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
//import useMovie from "../hooks/useMovie";   Redundant


const RecommendationsPage = (props) => {
  const { id } = useParams();
  const { data: recommendations, error, isLoading, isError } = useQuery(
    ["recommendations", { id: id }],
    getRecommendations
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
      {recommendations ? (
        <>
          <PageTemplate recommendations={recommendations}>
           
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for recommendations</p>
      )}
    </>
  );
};

export default RecommendationsPage;