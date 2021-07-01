import React, { FC, CSSProperties } from 'react';
import styles from './Tooltip.module.scss';


interface ToolProps {
    width?: number;
}

const Tooltip: FC<ToolProps> = (props) => {

    const ToolStyles: CSSProperties = {
        width: props.width,
    };

    return (
        <div style={ToolStyles} className={styles.tooltip}>
            {props.children}
        </div>
    );
}

export default Tooltip;