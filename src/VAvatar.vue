<template>
  <div class="vavatar" :class="classes">
    {{ initialsValue }}
  </div>
</template>

<script>
export default {

  name: 'VAvatar',

  props: {

    name: {
      type: String,
    },

    initials: {
      type: String,
    },

    alt: {
      type: String,
    },

    title: {
      type: String,
    },

    bg: {
      type: String,
      default: 'random',
    },

    color: {
      type: String,
      default: '#FFFFFF',
    },

    size: {
      type: String,
      default: '50px',
    },

    rounded: {
      type: Boolean,
    },

    circular: {
      type: Boolean,
    },
  },

  /**
   * @inheritDoc
   */
  data() {
    return {
      colors: [
        'red', 'red-light', 'red-dark',
        'pink', 'pink-light', 'pink-dark',
        'purple', 'purple-light', 'purple-dark',
        'violet', 'violet-light', 'violet-dark',
        'blue', 'blue-light', 'blue-dark',
        'cyan', 'cyan-light', 'cyan-dark',
        'teal', 'teal-light', 'teal-dark',
        'green', 'green-light', 'green-dark',
        'lime', 'lime-light', 'lime-dark',
        'yellow', 'yellow-light', 'yellow-dark',
        'orange', 'orange-light', 'orange-dark',
        'brown', 'brown-light', 'brown-dark',
        'gray', 'gray-light', 'gray-dark',
        'blue-gray', 'blue-gray-light', 'blue-gray-dark',
      ],
    };
  },

  computed: {

    /**
     * Calculate initials
     * @return {string}
     */
    initialsValue() {
      if (this.initials) {
        return this.initials;
      }

      return '';
    },

    /**
     * Calculate classes
     * @return {array}
     */
    classes() {
      const classes = [];

      // Background
      let { bg } = this;
      if (this.bg === 'random') {
        bg = this.colors[Math.floor(Math.random() * this.colors.length)];
      }
      classes.push(`bg-${bg}`);

      return classes;
    },

  },

};
</script>

<style lang="scss" scoped>
@import "VAvatar.scss";
</style>
