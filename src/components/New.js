import React, {useState} from 'react';

const New = ({ text }) => {
    
    const [textContent, setTextContent] = useState(text)
    
    const handleToggle = () => {
        setTextContent('world');
    }
 
    return (
        <span onClick={handleToggle}>{textContent}</span>
    );
 };
 
 export default New;