import React from 'react';
import { PopupWidget } from 'react-calendly';

const Popup = () => {
  return (
    <div className="popup-widget">
      <PopupWidget
        url={'https://calendly.com/sbgreen-dev/30min'}
        rootElement={document.getElementById('root')}
        text="Popup Version"
        textColor="#ffffff"
        color="#319795"
      />
    </div>
  );
};

export default Popup;