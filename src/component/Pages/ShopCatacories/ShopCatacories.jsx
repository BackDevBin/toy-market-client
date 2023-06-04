import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShopCatacories = () => {

    const [toggle, setToggle] = useState("All Toys");
    const [toys, setToys] = useState([]);
    let [cat, setCat] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])


    if(cat.length === 0 ){
        cat = toys;
    }

    

    const toggleTab = (index) => {
        setToggle(index);
        console.log(index);
        if (index == "All Toys") {
            setCat(toys);
        } else {
            const catToy = toys.filter(toy => toy.category === index);
            setCat(catToy);
        }
    }



    return (
        <div className=' w-full my-10'>

            <div className='text-center mb-5'>
                <h3 className='md:text-3xl font-bold'>Shop By Catagories</h3>
            </div>

            <div className="tabs mx-auto w-fit">
                <Link onClick={() => toggleTab("All Toys")} className={toggle === "All Toys" ? "tab tab-lg tab-lifted tab-active" : "tab tab-lg tab-lifted"}>All Category</Link>
                <Link onClick={() => toggleTab("Teddy Bear")} className={toggle === "Teddy Bear" ? "tab tab-lg tab-lifted tab-active" : "tab tab-lg tab-lifted"}>Teddy Bear</Link>
                <Link onClick={() => toggleTab("Dinosaur")} className={toggle === "Dinosaur" ? "tab tab-lg tab-lifted tab-active" : "tab tab-lg tab-lifted"}>Dinosaur</Link>
                <Link onClick={() => toggleTab("Horse")} className={toggle === "Horse" ? "tab tab-lg tab-lifted tab-active" : "tab tab-lg tab-lifted"}>Horse</Link>
                <Link onClick={() => toggleTab("Unicorn")} className={toggle === "Unicorn" ? "tab tab-lg tab-lifted tab-active" : "tab tab-lg tab-lifted"}>Unicorn</Link>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 my-10 md:mx-14'>

                {
                    cat.map(cate => <div key={cate._id} className='space-y-3 border-2 rounded-lg p-4'>

                        <img className='max-h-60 max-w-64 mx-auto' src={cate.picture} alt="" />
                        <h3 className='text-xl font-semibold'>{cate.toy_name}</h3>
                        <p className='text-base font-semibold'>$ <span className='text-xl font-semibold'>{cate.price}</span></p>
                        <div className='flex align-middle'>
                            <FaStar className='text-yellow-400 text-base'></FaStar>
                            <FaStar className='text-yellow-400 text-base'></FaStar>
                            <FaStar className='text-yellow-400 text-base'></FaStar>
                            <FaStar className='text-yellow-400 text-base'></FaStar>
                            <FaStar className=' text-base'></FaStar>
                            <p className='mx-2'>{cate.rating}</p>
                        </div>
                        <button className="btn btn-outline btn-secondary normal-case ">Details</button>
                    </div>)
                }


            </div>



        </div>
    );
};

export default ShopCatacories;