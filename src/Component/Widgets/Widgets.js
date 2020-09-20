import React from 'react'
import './Widgets.css'
function Widgets() {
    return (
        <div className="Widgets">
           <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstephenhawking&tabs=timeline&width=320&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
           width="320" height="100%" style={{border:"none",overflow:"hidden"}} 
           scrolling="no" frameBorder="0" allowransparency="true" allow="encrypted-media" title="fbpage"></iframe>
        </div>
    )
}

export default Widgets
