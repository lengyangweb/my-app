import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-4">
        <FaExclamationTriangle size="5em" className="text-danger" />
        <h1>Page Not Found</h1>
        
        <Link to="/" className='btn btn-md btn-danger mt-4'>Go Back</Link>
    </div>
  )
}
