import React, {FC} from 'react';

interface NotificationPanelProps {
    text: string
}
const NotificationPanel: FC<NotificationPanelProps> = ({text}) => {
    return (
        <div className="notification-panel center-align">
            <p className="notification-text">{text}</p>
        </div>
    );
};

export default NotificationPanel;
