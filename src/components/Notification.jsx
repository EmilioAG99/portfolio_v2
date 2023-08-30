import { useState, useEffect } from "react";
import "./notification.css";
// eslint-disable-next-line react/prop-types
const Notification = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return <div className="notification">{message}</div>;
};

export default Notification;
