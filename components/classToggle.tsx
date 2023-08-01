import { useState } from "react";

function classToggle() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggleClick = () => {
        setIsToggled(!isToggled);
        isToggled ? 'dog-selected' : ''
      };

}

export default classToggle