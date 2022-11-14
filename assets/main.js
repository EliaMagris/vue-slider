var app = new Vue({
  el: '#root',
  data: {
    img: [
      { position: 'assets/img/30212993894_85351f21ba.jpg' },
      { position: 'assets/img/52c897521aa86a677f446cf95e20d57b.jpg' },
      { position: 'assets/img/39709319980_7b2159e8b5.jpg' },
    ],
    indexImg: 0,
    timer: null,
  },

  mounted: function () {
    this.startRotation();
  },

  methods: {
    sliderRight: function () {
      if (this.indexImg >= this.img.length - 1) {
        return (this.indexImg = 0);
      }
      return this.indexImg++;
    },

    imageSelection(index){
      this.indexImg = index
    },

    sliderLeft: function () {
      if (this.indexImg <= 0) {
        return (this.indexImg = 2);
      }
      return this.indexImg--;
    },

    startRotation: function () {
      this.timer = setInterval(this.sliderRight, 5000);
    },
  },
});
