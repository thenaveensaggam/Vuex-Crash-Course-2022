<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Counter</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fuga impedit quae!
          Aspernatur cum,
          eveniet id iste minus provident quidem quo soluta? Amet blanditiis dicta enim, nostrum nulla quis sunt?</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">{{ count }}</p>
            <button class="btn btn-success m-1" @click="clickIncrement()">Increment</button>
            <button class="btn btn-warning m-1" @click="clickDecrement()">Decrement</button>
            <button class="btn btn-danger m-1" @click="clickIncrementBy(5)">Increment By</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    clickIncrement: function () {
      this.count = this.count + 1
    },
    clickDecrement: function () {
      this.count = this.count - 1
    },
    clickIncrementBy: function (value) {
      this.count = this.count + value
    }
  }
}
</script>

<style scoped>

</style>
