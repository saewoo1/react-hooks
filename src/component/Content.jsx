import React from "react";

const Content = ({isDark}) => {
    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark? 'black' : 'white',
                color: isDark? 'white': 'black',
            }}
        >
            <p>홍길동 하이루</p>
        </div>
    )
}

export default Content;