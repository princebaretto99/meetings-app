import React, { useContext, useState } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import { AuthContext } from '../../context/context';


function Event() {
    const { user } = useContext(AuthContext);
    
    console.log(user);

    return (
        <div>
            <Calendar />
        </div>

    )
}

export default Event
