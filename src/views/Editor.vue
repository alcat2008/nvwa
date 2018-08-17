<template>
  <div class="editor-page">
    <div class="nav-wrapper">nav wrapper</div>
    <div class="content-wrapper">
      <div class="controls-wrapper">
        <h3>模板组件</h3>
        <draggable class="components" v-model="components" :options="{ group: { name: 'people', pull: 'clone', put: false } }" @change="log">
          <div v-for="(element, index) in list" :key="index" class="component">{{element.name}}</div>
        </draggable>
      </div>
      <div class="preview-wrapper">
        <draggable class="dragArea" v-model="box" :options="{ group: 'people' }" @change="log">
          <div v-for="(element, index) in box">
              {{element.name}} {{index}}
          </div>
        </draggable>
      </div>
      <div class="property-wrapper">

      </div>
    </div>
  </div>

</template>

<style lang="less">
@nav-height: 64px;
@controls-width: 340px;
@property-width: 340px;

.editor-page {
  // width: 100%;
  // position: relative;
  // height: 100%;
  overflow: hidden;
}

.nav-wrapper {
  height: @nav-height;
  width: 100%;
  background: darkgrey;
}

.content-wrapper {
  width: 100%;
  height: calc(~'100vh - @{nav-height}');
  // margin-top: @nav-height;
  // height: 100%;
  // padding-top: @nav-height;
  background: #363b3e;
  color: white;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.preview-wrapper {
  // float: left;
  // width: calc(~'100% - @{controls-width}');
  flex: 1;
  height: 100%;
  box-shadow: 5px 0 5px rgba(0, 0, 0, .35);
  z-index: 11;
}

.controls-wrapper {
  width: @controls-width;
  height: 100%;
  overflow: hidden;
  // float: right;
  padding: 0 16px 16px 16px;
  z-index: 10;
  background: #fff;
  color: rgba(0,0,0,.85);

  h3 {
    font-size: 16px;
    height: 24px;
    line-height: 24px;
  }

  .components {
    box-shadow: 3px 0 16px rgba(0,0,0,.06);
    height: calc(~'100% - 48px');
    overflow: auto;
    padding-right: 12px;

    .component {
      margin: 24px auto;
      width: 260px;
      max-height: 200px;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
      cursor: pointer;
      padding: 10px;
      transition: box-shadow 0.5s, transform 0.5s;
      font-weight: bold;
      font-size: large;
      line-height: 2;
      color: rgb(45, 183, 245);

      &:hover {
        transform: scale(1.057);
        transition: all .2s ease;
      }
    }
  }
}

.property-wrapper {
  width: @property-width;
  height: 100px;
}

</style>

<script lang="ts">
import Vue from 'vue';
import draggable from 'vuedraggable';

export default {
  name: 'editor',
  props: {
    box: { type: Array },
    list: { type: Array }
  },
  data() {
    return {
      box: [
        {name: 'John', id: 1},
      ],
      list: [
        {name: 'John', id: 1},
        {name: 'Joao', id: 2},
        {name: 'Jean', id: 3},
        {name: 'Gerard', id: 4},
        {name: 'Juan', id: 5},
        {name: 'Edgard', id: 6},
        {name: 'Johnson', id: 7}
      ],
    };
  },
  methods: {
    add: function () {
        this.list.push({name: 'Juan'});
      },
      replace: function () {
        this.list = [{name: 'Edgard'}];
      },
      clone: function (el) {
        return {
          name : el.name + ' cloned',
        };
      },
      log: function (evt: object) {
        console.log(evt); // tslint:disable-line:no-console
        console.log(this.box); // tslint:disable-line:no-console
        console.log(this.list); // tslint:disable-line
      },
  },
  components: {
    draggable,
  },
};
</script>
