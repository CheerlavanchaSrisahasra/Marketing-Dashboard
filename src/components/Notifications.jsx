import React from "react";
import { FaArrowRight } from "react-icons/fa";

const notifications = [
  {
    text: "The fruit is almost finished, quickly refill the turkey, USD 24!",
    time: "Just now",
    urgent: true,
  },
  {
    text: "Vegetable stocks have been filled",
    subtext: "What is they most of?",
    time: "30 min ago",
  },
  {
    text: "Fish stock has been reordered",
    subtext: "Fix 17 May, 10:00 AM",
    time: "2 hours ago",
  },
  {
    text: "Fish orders have been refilled",
    subtext: "Fix 17 May, 10:00 PM",
    time: "5 hours ago",
  },
];

const Notifications = () => (
  <div className="notifications">
    <h4>Notification</h4>
    <ul>
      {notifications.map((item, idx) => (
        <li
          key={idx}
          className={`notification-item ${item.urgent ? "urgent" : ""}`}
        >
          <div className="notification-content">
            <div className="notification-text">
              {item.text}
              {item.subtext && (
                <div className="notification-subtext">{item.subtext}</div>
              )}
            </div>
            <div className="notification-arrow">
              <FaArrowRight />
            </div>
          </div>
          <div className="notification-time">{item.time}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default Notifications;
