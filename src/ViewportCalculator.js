class ViewportCalculator {
  constructor() {
    this.toolbarHeight = 0;
    this.init();
  }

  init() {
    this.calculateDimensions();
    this.setupEventListeners();
  }

  calculateDimensions() {
    const windowHeight = window.outerHeight;
    const viewportHeight = window.innerHeight;
    const visualViewportHeight =
      window.visualViewport?.height || viewportHeight;

    this.toolbarHeight = windowHeight - visualViewportHeight;

    // // Set CSS custom properties
    // document.documentElement.style.setProperty(
    //   "--toolbar-height",
    //   `${this.toolbarHeight}px`
    // );
    // document.documentElement.style.setProperty(
    //   "--viewport-height",
    //   `${visualViewportHeight}px`
    // );
  }

  getWindowHeight = () => {
    const windowHeight = window.outerHeight;
    return windowHeight;
  };

  getViewportHeight = () => {
    const viewportHeight = window.innerHeight;
    return viewportHeight;
  };

  getVisualViewportHeight = () => {
    const innerHeight = window.innerHeight;
    const visualViewportHeight = window.visualViewport?.height || innerHeight;
    return visualViewportHeight;
  };

  getToolbarHeight = () => {
    const windowHeight = window.outerHeight;
    const innerHeight = window.innerHeight;
    const toolbarHeight = windowHeight - innerHeight;
    return toolbarHeight;
  };

  setupEventListeners() {
    // Debounced resize handler
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => this.calculateDimensions(), 250);
    });

    window.addEventListener("orientationchange", () => {
      setTimeout(() => this.calculateDimensions(), 100);
    });
  }
}

export default ViewportCalculator;
