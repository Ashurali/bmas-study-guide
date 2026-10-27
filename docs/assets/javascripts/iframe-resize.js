/* Auto-size embedded animation iframes to their content so nothing hides
   behind an inner scrollbar. Same-origin only; the height attribute remains
   as the no-JS / cross-origin fallback.

   Measure document.body, NOT documentElement: the html element's
   scrollHeight is clamped to the iframe viewport, which turns a resize
   observer into a positive feedback loop (the frame grows forever).
   Skip the about:blank placeholder a lazy iframe shows before it loads:
   its quirks-mode body fills the viewport, so measuring it causes the same loop. */
document$.subscribe(() => {
  document.querySelectorAll(".md-typeset iframe").forEach((frame) => {
    const loaded = () => frame.contentWindow?.location.href !== "about:blank";
    const fit = () => {
      try {
        const body = frame.contentDocument?.body;
        if (!body || !loaded()) return;
        const h = Math.max(body.scrollHeight, body.offsetHeight) + 24;
        const cur = parseInt(frame.style.height, 10) || 0;
        if (h > 60 && Math.abs(h - cur) > 8) frame.style.height = h + "px";
      } catch (e) {
        /* cross-origin: keep the fixed fallback height */
      }
    };
    const observe = () => {
      if (!loaded()) return;
      fit();
      try {
        new ResizeObserver(fit).observe(frame.contentDocument.body);
      } catch (e) {
        /* ignore */
      }
    };
    frame.addEventListener("load", observe);
    if (frame.contentDocument?.readyState === "complete") observe();
  });
});
