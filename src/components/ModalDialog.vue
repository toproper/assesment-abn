<template>
  <div class="modal" v-if="visible">
    <div class="modal-content">
      <div class="modal-toolbar"><span @click="hideModal()">X</span></div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";

export default defineComponent({
  name: "ModalDialog",
  computed: {
    ...mapState({
      visible: "modalVisible",
    }),
  },
  methods: {
    ...mapMutations(["hideModal"]),
  },
});
</script>

<style scoped lang="scss">
.modal {
  position: sticky;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);

  .modal-content {
    border-radius: 10px;
    border: 2px solid $border-color;
    position: absolute;
    top: 10vh;
    left: 10vw;
    background-color: #222;
    width: 80vw;
    height: 50vh;
  }
}

.modal-toolbar {
  background: #333;
  display: flex;
  justify-content: flex-end;

  span {
    color: #c1c1c1;
    font-size: 1.5rem;
    padding: $whitespace-xxs $whitespace-xs;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
