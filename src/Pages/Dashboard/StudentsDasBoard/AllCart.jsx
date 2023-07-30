
import useCart from '../../../hooks/useCart';
import MySClses from './MySClses';
import { Link } from 'react-router-dom';

const AllCart = () => {
    const [CartClasses]=useCart();
    return (
        <section>
            <div className='flex col-space-x '>
                <h1 className='flex me-48 mt-2 text-2xl bg-teal-400 text-white mb-5'>Selected Classes</h1>
                <button  className="flex btn btn-primary bg-teal-400 text-white mb-5 ">
                    <Link to='/dashboard3/Allpayment'>Payment</Link>
                </button>
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