import { Link, useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { GET_CLIENT } from "../queries/clientQueries";
import ClientInfo from "../components/ClientInfo";
import ClientUpdateForm from "../components/ClientUpdateForm";

export default function Client() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <div className="d-flex flex-column card mt-3 p-4">
      <h1 className="d-flex flex-column align-items-center">
        <FaUser />
        {data.client.name}
      </h1>
      <hr />
      <div className="mb-3">
        <ClientInfo key={data.client.id} client={data.client} />
      </div>
      <div className="border mt-2 p-4 rounded">
        <ClientUpdateForm key={data.client.id} client={data.client} />
      </div>


        <button className="btn btn-secondary btn-inline ms-auto mt-4">
          <Link to="/" className="text-light">
            Go Back
          </Link>
        </button>
    </div>
  );
}
