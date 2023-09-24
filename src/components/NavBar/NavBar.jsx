import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
  const  [inputValue, setInputValue] = useState('') ;
  const navigate = useNavigate();
  // search value is passed to the api in this func
  const handleSearch = value => {
    navigate(`/search/${value}`);
  }

  return (
  <div className="flex flex-col lg:flex-row justify-between items-center p-7 shadow-xl mb-7 gap-7 lg:gap-0">
    <div>
      <h2 className="text-xl font-bold p-2 rounded-xl">Food Danda</h2>
    </div>

    <div className='flex gap-4'>
        <Link>Home</Link>
        <Link to={'/'}>Categories</Link>
        <Link to={'/about'}>Home</Link>
    </div>
    <div className='flex'>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='input outline-1 outline' placeholder='Search here'/>
      <button type="submit" className='btn btn-neutral' onClick={()=>handleSearch(inputValue)}>Submit</button>
    </div>
  </div>
  )
};

export default Header;