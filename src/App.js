import React, { useState, useCallback } from 'react';

const ButtonComponent = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // Используем useCallback для мемоизации колбэк-функций
    const handleClick1 = useCallback(() => {
        setCount1(count1 + 1);
    }, [count1]);

    const handleClick2 = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2]);

    return (
        <div>
            <button onClick={handleClick1}>Кнопка 1: {count1}</button>
            <button onClick={handleClick2}>Кнопка 2: {count2}</button>
        </div>
    );
};

export default ButtonComponent;
