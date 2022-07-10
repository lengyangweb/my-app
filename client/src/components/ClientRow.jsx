import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }]
  })
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <div className="flex justify-content-between">
          <button
            className="btn btn-danger btn-sm"
            onClick={deleteClient}
          >
            <FaTrash />
          </button>
          <button className="btn btn-primary btn-sm mr-2">
            <Link to={`client/${client.id}`} className="text-light">
              View
            </Link>
          </button>
        </div>
      </td>
    </tr>
  );
}
