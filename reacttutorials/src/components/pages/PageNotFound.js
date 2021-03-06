import React from 'react';
import OverlayScrollbars from 'overlayscrollbars';

export default class PageNotFound extends React.Component { 
    async componentDidMount(){
        await(10);
        var osInstance = OverlayScrollbars(document.body);
        osInstance.scroll({ top : 0 });
    }

    render() {
        return (
            <div className="text-dark" style={{minHeight: '100vh'}}>
                <h1 style={{ margin: '8rem'}}>404 not found</h1>
            </div>
        )
    }
}
