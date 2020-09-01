<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <h3>Exercise 1</h3>
        <form class="form-inline">
          <div class="row">
            <div class="col-md-6">
              <div class="input-group">
                <label for="input1" class="sr-only">Text to reverse</label>
                <span class="input-group-addon">Original Text</span>
                <input type="text" id="input1" class="form-control" placeholder="Enter a text"
                       v-model="input1">
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group">
                <label for="result1" class="sr-only">Text filtered</label>
                <span class="input-group-addon">Text Filtered</span>
                <input type="text" id="result1" class="form-control disabled"
                       :value="input1 | reverseText">
              </div>
            </div>
          </div>
        </form>


        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <hr>
        <h3>Exercise 2</h3>
        <form class="form-inline">
          <div class="row">
            <div class="col-md-6">
              <div class="input-group">
                <label for="input2" class="sr-only">Text to filter</label>
                <span class="input-group-addon">Original Text</span>
                <input type="text" id="input2" class="form-control" placeholder="Enter a text"
                       v-model="input2">
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group">
                <label for="result2" class="sr-only">Text filtered</label>
                <span class="input-group-addon">Text Filtered</span>
                <input type="text" id="result2" class="form-control disabled"
                       :value="input2 | addTxtLength">
              </div>
            </div>
          </div>
        </form>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <hr>
        <h3>Exercise 3</h3>
        <form class="form-inline">
          <div class="row">
            <div class="col-md-6">
              <div class="input-group">
                <label for="result3" class="sr-only">Exercise 1 text computed</label>
                <span class="input-group-addon">Exercise 1 text computed</span>
                <input type="text" id="result3" class="form-control" disabled
                       :value="reversedText">
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group">
                <label for="result4" class="sr-only">Exercise 2 text computed</label>
                <span class="input-group-addon">Exercise 2 text computed</span>
                <input type="text" id="result4" class="form-control" disabled
                       :value="addTxtLength">
              </div>
            </div>
          </div>
        </form>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->

      </div>
    </div>
  </div>
</template>

<script>
import {MyMixin} from "@/mixins/MyMixin";

export default {
  name: 'App',

  data() {
    return {
      input1: 'Hello',
      input2: 'World!'
    }
  },

  computed: {
    reversedText() {
      return this.input1.split('').reverse().toString();
    },

    // get addTxtLength() {
    //     return this.input2.concat(` (${this.input2.length})`)
    // }
  },

  filters: {
    reverseText: (value) => {
      return value.split('').reverse().toString();
    }
  },

  mixins: [MyMixin]
}
</script>

<style>

</style>
