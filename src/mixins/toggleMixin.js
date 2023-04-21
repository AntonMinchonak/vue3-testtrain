export default {
  props: {
    isHidden: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    }
  },
  mounted() {
    // console.log('mixin');
  },
};