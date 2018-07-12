// Bulma (http://bulma.io)
const Bulma = {
  // Named Media Queries
  mobile: '(max-width: 768px)',
  tablet: '(min-width: 769px)',
  tabletOnly: '(min-width: 769px) and (max-width: 999px)',
  touch: '(max-width: 999px)',
  desktop: '(min-width: 1000px) ',
  desktopOnly: '(min-width: 1000px) and (max-width: 1191px)',
  wideScreen: '(min-width: 1192px)',

  // Media Query Helpers mixin. Use globally or per component
  mixin: {
    computed: {
      isMobile() {
        return this.$resize && this.$mq.expr(this.$mq.bands.mobile);
      },
      isTablet() {
        return this.$resize && this.$mq.expr(this.$mq.bands.tablet);
      },
      isTabletOnly() {
        return this.$resize && this.$mq.expr(this.$mq.bands.tabletOnly);
      },
      isTouch() {
        return this.$resize && this.$mq.expr(this.$mq.bands.touch);
      },
      isDesktop() {
        return this.$resize && this.$mq.expr(this.$mq.bands.desktop);
      },
      isDesktopOnly() {
        return this.$resize && this.$mq.expr(this.$mq.bands.desktopOnly);
      },
      isWideScreen() {
        return this.$resize && this.$mq.expr(this.$mq.bands.wideScreen);
      },
    }
  }
};


// Materialize (http://materializecss.com/)
const Materialize = {
  // Named Media Queries
  mediumAndUp: '(min-width: 601px)',
  largeAndUp: '(min-width: 993px)',
  extraLargeAndUp: '(min-width: 1201px)',
  smallAndDown: '(max-width: 600px)',
  mediumAndDown: '(max-width: 992px) ',
  mediumOnly: '(min-width: 601px) and (max-width: 992px)',

  // Media Query Helpers mixin. Use globally or per component
  mixin: {
    computed: {
      isMediumAndUp() {
        return this.$resize && this.$mq.expr(this.$mq.bands.mediumAndUp);
      },
      isLargeAndUp() {
        return this.$resize && this.$mq.expr(this.$mq.bands.largeAndUp);
      },
      isExtraLargeAndUp() {
        return this.$resize && this.$mq.expr(this.$mq.bands.extraLargeAndUp);
      },
      isSmallAndDown() {
        return this.$resize && this.$mq.expr(this.$mq.bands.smallAndDown);
      },
      isMediumAndDown() {
        return this.$resize && this.$mq.expr(this.$mq.bands.mediumAndDown);
      },
      isMediumOnly() {
        return this.$resize && this.$mq.expr(this.$mq.bands.mediumOnly);
      },
    }
  }
};


// Bootstrap4 (https://getbootstrap.com/)
const Bootstrap4 = {
  // Named Media Queries
  xsDown: '(max-width: 575.98px)',
  xsOnly: '(max-width: 575.98px)',
  smUp: '(min-width: 576px)',
  smDown: '(max-width: 767.98px)',
  smOnly: '(min-width: 576px) and (max-width: 767.98px)',
  mdUp: '(min-width: 768px)',
  mdDown: '(max-width: 991.98px)',
  mdOnly: '(min-width: 768px) and (max-width: 991.98px)',
  lgUp: '(min-width: 992px)',
  lgDown: '(max-width: 1199.98px)',
  lgOnly: '(min-width: 992px) and (max-width: 1199.98px)',
  xlUp: '(min-width: 1200px)',
  xlOnly: '(min-width: 1200px)',

  // Media Query Helpers mixin. Use globally or per component
  mixin: {
    computed: {
      isXsDown() {
        return this.$resize && this.$mq.expr(this.$mq.bands.xsDown);
      },
      isXsOnly() {
        return this.$resize && this.$mq.expr(this.$mq.bands.xsOnly);
      },

      isSmUp() {
        return this.$resize && this.$mq.expr(this.$mq.bands.smUp);
      },
      isSmDown() {
        return this.$resize && this.$mq.expr(this.$mq.bands.smDown);
      },
      isSmOnly() {
        return this.$resize && this.$mq.expr(this.$mq.bands.smOnly);
      },

      isMdUp() {
        return this.$resize && this.$mq.expr(this.$mq.bands.mdUp);
      },
      isMdDown() {
        return this.$resize && this.$mq.expr(this.$mq.bands.mdDown);
      },
      isMdOnly() {
        return this.$resize && this.$mq.expr(this.$mq.bands.mdOnly);
      },

      isLgUp() {
        return this.$resize && this.$mq.expr(this.$mq.bands.lgUp);
      },
      isLgDown() {
        return this.$resize && this.$mq.expr(this.$mq.bands.lgDown);
      },
      isLgOnly() {
        return this.$resize && this.$mq.expr(this.$mq.bands.lgOnly);
      },

      isXlUp() {
        return this.$resize && this.$mq.expr(this.$mq.bands.xlUp);
      },
      isXlOnly() {
        return this.$resize && this.$mq.expr(this.$mq.bands.xlOnly);
      },

    }
  }
};

export default {
  Bulma,
  Materialize,
  Bootstrap4
};
