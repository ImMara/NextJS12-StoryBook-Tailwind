import React from 'react';

function PageBuilder(props) {
    return (
        <div className={`flex`}>
            <div className="sidebar">
                <h1 className="text-red-500">Sidebar</h1>
            </div>
            <div className="content">
                <h1>Content</h1>
            </div>
        </div>
    );
}

export default PageBuilder;