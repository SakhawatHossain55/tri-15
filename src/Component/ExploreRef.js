import React , { useRef }from 'react';

const ExploreRef = () => {
    const userNameRef = useRef(null)

    const handleClick = () => {
        userNameRef.current.focus();
    }
    return (
        <div>
            <input ref={userNameRef} type="text"/>
            <button onClick={handleClick}>Get Focus</button>
        </div>
    );
};

export default ExploreRef;