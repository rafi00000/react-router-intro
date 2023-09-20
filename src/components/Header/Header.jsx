import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>  
                <ul className="flex gap-5 justify-end">
                    <Link to='/'>Home</Link>
                    <Link to='users'>Users</Link>
                    <Link to='about'>About us</Link>
                    <Link to='contact'>Contact Us</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;