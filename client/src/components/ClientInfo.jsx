import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function ClientInfo({ client }) {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">
            <FaEnvelope /> {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone /> {client.phone }
        </li>
      </ul>
    </>
  );
}
