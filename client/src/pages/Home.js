import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export default function Home() {
  const { loading, error, data } = useQuery(FETCH_PROFILE_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h1>Profiles</h1>
      {data.getProfiles.map(profile => (
        <ul key={profile.id}>
          <li>{profile.username}</li>
          <li>{profile.title}</li>
        </ul>
      ))}
    </div>
  );
}

const FETCH_PROFILE_QUERY = gql`
  {
    getProfiles {
      id
      username
      title
    }
  }
`;
