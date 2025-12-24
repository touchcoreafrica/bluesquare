"use client";

import { useEffect } from "react";

export default function TallyEmbed() {
  useEffect(() => {
    const scriptSrc = "https://tally.so/widgets/embed.js";

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    } else if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/dWNRao?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1&redirect=https://bluesquareng.com/thank-you"
      loading="lazy"
      width="100%"
      height="676"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Request Form"
    />
  );
}
