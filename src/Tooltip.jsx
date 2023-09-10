import { useState } from "react";
import styles from './tooltip.module.css'

const Tooltip = ({content, position,children}) =>{

    const [showToolTip, setShowToolTip] = useState(false);

    const handleMouseIn = ()=> {
        setShowToolTip(true);
    }

    const handleMouseOut = ()=> {

     setShowToolTip(false);

    }

    return(
        <div
        className={styles.toolTipWrapper}
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
        >

        {children}
        {showToolTip && (
            <div className={`${styles.tooltip} ${styles[position]}`}>
                {content}
                </div>
        )}
        </div>
    )
}

export default Tooltip;