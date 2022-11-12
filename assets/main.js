var app = new Vue({
  el: "#root",
  data: {
    img: [
      { position: "assets/img/30212993894_85351f21ba.jpg" },
      { position: "assets/img/52c897521aa86a677f446cf95e20d57b.jpg" },
      { position: "assets/img/39709319980_7b2159e8b5.jpg" },
    ],
    index: 1,
  },
  methods: {
    sliderRight: function () {
      if (this.index >= this.img.length - 1) {
        return (this.index = 0);
      }
      return this.index++;
    },

    sliderLeft: function () {
      if (this.index <= 0) {
        return (this.index = 2);
      }
      return this.index--;
    },
  },
});
