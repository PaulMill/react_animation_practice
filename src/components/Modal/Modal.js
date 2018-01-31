import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animatingTime = {
    enter: 500,
    exit: 1000
}

const modal = (props) => {
    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            timeout={animatingTime}
            // classNames="fade-slide" // it can use as this style
            classNames={{ //customize classes
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed'
            }}
            in={props.show}>
                <div className="Modal">
                    <h1>A Modal</h1>
                    <button className="Button" onClick={props.closed}>Dismiss</button>
                </div>
        </CSSTransition>
    )
};

export default modal;


// if imported Transition

//  <Transition
    // in={props.show}
    // timeout={animatingTime}
    // mountOnEnter
    // unmountOnExit // it can be used as ms for enter and exit same time or object figure enter: ..., exit: ...
//      onEnter={() => console.log('onEnter')} // possible to use this 6 callback functions
//      onEntering
//      onEntered
//      onExit
//      onExiting
//      onExited
//  >
//    {state => {
//      const cssClasses = ["Modal", state === "entering" ? "ModalOpen" : state === "exiting" ? "ModalClosed" : null];
//      return <div className={cssClasses.join(" ")}>
//          <h1>A Modal</h1>
//          <button className="Button" onClick={props.closed}>
//            Dismiss
//          </button>
//        </div>;
//    }}
//  </Transition>;