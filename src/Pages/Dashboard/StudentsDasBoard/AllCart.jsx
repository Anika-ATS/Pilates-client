import React from 'react';
import useCart from '../../../hooks/useCart';
import MySClses from './MySClses';

const AllCart = () => {
    const [CartClasses]=useCart();
    return (
        <section>
            <div>
                <h1 className='mx-36 text-2xl bg-teal-400 text-white mb-5'>Selected Classes</h1>
            </div>
            <thead className="bg-teal-400">
                        <tr className="text-white font-bold text-2xl">
                            <th>No.</th>
                            <th>Instructor Name</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
        {CartClasses.map(SelectCls=><MySClses
        

        key={SelectCls._id}
        SelectCls={SelectCls}
        
        
        ></MySClses>

        
     
        
       
        )
        
        }

    </section>
    );
};

export default AllCart;