import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    console.log(user);
    const {id, name, email, username} = user;
    return (
        <div className='border border-orange-700 rounded-xl flex flex-col items-center justify-center'>
            <h1>id: {id}</h1>
            <h2>Name: {name}</h2>
            <div className='flex gap-3'>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
            </div>
            <Link to={`user/${id}`} className='text-md font-bold bg-purple-500 rounded-lg p-2'>Show Details</Link>
            
        </div>
    );
};


User.propTypes = {
    user: PropTypes.array,
}
export default User;