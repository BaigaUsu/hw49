// Дополнительное задание на автоматический счетчик
import { useEffect, useState } from 'react';

export function AutoClicker(props) {
    const [autoClick, setAutoClick] = useState(0)

    useEffect(() => {
    const interval = setInterval(() => {
        setAutoClick(prevCount => prevCount + 1)
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    return( 
    <div>{autoClick}</div>
    )
} 