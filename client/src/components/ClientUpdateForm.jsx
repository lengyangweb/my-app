import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENT } from "../queries/clientQueries";

export default function ClientUpdateForm({ client }) {
  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);
  const [phone, setPhone] = useState(client.phone);

  const [updateClient] = useMutation(UPDATE_CLIENT, {
    variables: { id: client.id, name, email, phone },
    refetchQueries: [{ query: GET_CLIENT, variables: { id: client.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      return alert("Please fill in all fields");
    }

    updateClient(name, email, phone);
  };

  return (
    <div>
      <h3>Update User Details</h3>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-success btn-inline ms-auto mt-4"
        >
          Update
        </button>
      </form>
    </div>
  );
}
