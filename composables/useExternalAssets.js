export function useExternalAssets({ css = [], js = [] }) {
  css.forEach((href) => {
    if (!document.querySelector(`link[herf="${href}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }

    js.forEach((src) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
      }
    });
  });
}
