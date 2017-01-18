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
      isMobile(){
        return this.$resize && this.$mq.expr(this.$mq.bands.mobile);
      },
      isTablet(){
        return this.$resize && this.$mq.expr(this.$mq.bands.tablet);
      },
      isTabletOnly(){
        return this.$resize && this.$mq.expr(this.$mq.bands.tabletOnly);
      },
      isTouch(){
        return this.$resize && this.$mq.expr(this.$mq.bands.touch);
      },
      isDesktop(){
        return this.$resize && this.$mq.expr(this.$mq.bands.desktop);
      },
      isDesktopOnly(){
        return this.$resize && this.$mq.expr(this.$mq.bands.desktopOnly);
      },
      isWideScreen(){
        return this.$resize && this.$mq.expr(this.$mq.bands.wideScreen);
      },
    }
  }
};

export default {
  Bulma
};
