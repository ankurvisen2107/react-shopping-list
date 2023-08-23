import React, {FC} from "react";

interface SoldPanelProps {
    is_sold_out: boolean
}
const SoldPanel: FC<SoldPanelProps> = ({is_sold_out}) => {
    return (
        <>
            {is_sold_out && <div className="item-sold">
                <p className="item-sold-text">SOLD</p>
            </div>}
        </>
    );
}

export default SoldPanel;