import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'


const ReservesBox = (props) => {

    return (
        <>
            {props.reserves.map(reserve => (

                <div className='reserves' key={reserve.id}>
                    <img src={reserve.image}
                        alt={reserve.title} />
                    <strong>{reserve.title}</strong>
                    <div>
                        <AiFillPlusCircle onClick={() => props.addReserveRequest(reserve.id)} />
                        <span>Quantidade: {reserve.amount}</span>
                        <AiFillMinusCircle onClick={() => props.decreaseAmount(reserve.id)} />
                    </div>
                    <button
                        type='button'
                        onClick={() => { }}
                    >
                        <MdDelete
                            size={20}
                            color='#191919'
                            onClick={() => props.removeReserve(reserve.id)}
                        />
                    </button>
                </div>
            ))}
        </>
    )
}

export default ReservesBox