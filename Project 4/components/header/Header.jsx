import React from 'react';
import './Header.css';
//import dog from './garlic_dog.jpg';

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <img src={'../../compiled/3134c7b69912e8ca552b7b5700a45825.jpg'} width="500" height="300"/>
            </div>
        );
    }
}

export default Header;
