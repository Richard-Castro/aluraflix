import React from 'react';


function ButtonLink(props) {
    //props => { className: }
    return (
       <a href={props.href} className={props.className}>
          {props.childrn}
       </a>

    );
}

export default ButtonLink;