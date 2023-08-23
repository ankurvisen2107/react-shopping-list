import React, {FC} from "react";

interface IconPanelProps {
    count?: number,
    icon: JSX.Element
}
const IconPanel: FC<IconPanelProps> = ({ count, icon }) => {
    return (
        <div className="icon-panel">
            {icon}
            {count && <span className="icon-count"> {count}</span>}
        </div>
    );
}

export default IconPanel;