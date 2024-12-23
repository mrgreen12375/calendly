import React from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

const Inline = () => {
  useCalendlyEventListener({
    onEventScheduled: (e) => console.log(e.data.payload)
  });

  return (
    <div className="inline-widget">
      <InlineWidget url={'https://calendly.com/sbgreen-dev/30min'} />
    </div>
  );
};

export default Inline;
