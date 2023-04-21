<template>

<div @click="closePopup" class="popup" v-if="!isHidden">
  <div @click.stop class="window"> 
    <slot></slot>
  </div>
</div>
 
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin'

export default {
  name:'my-popup',
  mixins: [toggleMixin]
  // props: ['isHidden'],
  // methods: {
  //   closePopup() {
  //     this.$emit('closePopup')
  //   }
  // },
  ,
  mounted() {
    // console.log('pop');
  }
}
</script>

<style scoped>
  .window {
    background: white;
    padding: 30px;
    display: inline-flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: 0 3px 8px rgb(202, 202, 202);
  }

  .popup {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
    background: rgba(1, 24, 5, 0.61);
    width: 100%;
    bottom: 0;
  }
</style>