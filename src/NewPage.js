// 4 пункт кнопка с счётчиком

import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useState } from 'react';

export function NewPage() {
    const [count, setCount] = useState(0)
    function hadnleCount() {
        setCount(count + 1)
    }
    return (
        <div className='App-header'>
            
            <h1>Hello world</h1>
            
            <Button 
                classname='button' 
                text={count}
                onClick={hadnleCount}>
            </Button>
            <p>Вы нажимали кнопку {count} рвз</p>
            <Link to='/'>Vernutsya on main</Link>
        </div>
    )
}