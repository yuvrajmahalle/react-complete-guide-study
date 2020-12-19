import React from 'react';

const withClass = (WrappedComponent,ClassName) => {
    return props => (
                <div className={ClassName}>
            <WrappedComponent/>
        </div>
    )
    //<div className={props.classes}>{props.children}</div>
}

export default withClass;