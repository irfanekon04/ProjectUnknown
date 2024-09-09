import React, {useEffect,useState} from 'react';
import headerImg from "../../public/element.png";
import ServiceItems from './Shared/ServiceItems';

const Service = () => {
    const [menu, setMenu]=useState([true]);
    const[loading, setLoading]=useState(true);
    const[error,setError]=useState(null);

    useEffect(() => {
        const fetchMenuData =async () => {
            try {
                const response =await fetch('service.json');
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMenu(data);
            }catch (error) {
                console.error('error 404',error);
                setError(error);

            } finally {
                setLoading(false);
            }
        };
        fetchMenuData();
    }, []);

    if (loading) return <p>Loading Services...</p>;
    if (error) return <p>Error loading services: {error.message}</p>;

    return(
        <div className='max-w-screen-xl mx-auto py-28'>
            <div className='text-center mx-auto'>
            <img className='mx-auto' src={headerImg} alt="Header Image"/> 
            <h2 className='font-extrabold text-[48px] text-center text-[#192239] mx-auto'>Our Services</h2>
            <p className='font-paprika text-[18px] w-332px mt-4 text-center mx-auto' >
                We have been providing great flooring solutions services.
            </p>
            </div>
            
            <div className="">
                {menu.length > 0 ? (
                    <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
                        {menu.map((item,index) => (
                            <div className='flex' key={index}>
                                <ServiceItems
                                item={item}
                                />
                            </div> 
                        ))}
                    </div>
                ) : (
                    <p>No Services Available.</p>                    
                )}
            </div>
        </div>
    );
};

export default Service
