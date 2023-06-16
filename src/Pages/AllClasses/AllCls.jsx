import React from 'react';
import useApprovecls from '../../hooks/useApprovecls';
import DisPAllcls from './DisPAllcls';

const AllCls = () => {
    const [AproveClasses]=useApprovecls();
    return (
        <section>
        {AproveClasses.map(Acls=><DisPAllcls
         key={Acls._id}
         Acls={Acls}></DisPAllcls>
        
     
        
       
        )
        
        }

    </section>
    );
};

export default AllCls;