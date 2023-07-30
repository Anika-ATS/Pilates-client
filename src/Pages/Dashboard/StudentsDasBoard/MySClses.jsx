
import { BiTrash } from "react-icons/bi";
const MySClses = ({SelectCls}) => {
    const {_id, Iname,name,price} = SelectCls;
    return (
        <div>
            <div className="overflow-x-auto mb-10">
                <table className="table table-zebra">
                    {/* head */}
                    
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>{ Iname}</td>
                            <td>{name}</td>
                            <td>{price}</td>
                            <td><button className="btn btn-error h-[50px]">
                                <BiTrash></BiTrash>

                                </button>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySClses;