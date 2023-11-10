<template>
  <div class="home">
    <div class="home__frame">
      <div class="home__frame-inner">
        <h1 class="home__frame-text">Welcome in the <span>SuitShop</span></h1>
        <p class="home__frame-paragraph">
          Zapraszamy do naszego ekskluzywnego sklepu z garniturami, gdzie
          klasyka spotyka się z nowoczesnością, tworząc niepowtarzalne i
          eleganckie kolekcje dla mężczyzn, którzy cenią sobie wysoką jakość i
          wyrafinowany styl.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Della+Respira&family=Lato&display=swap");
$color-alpha: #b78846;
$della: "Della Respira", serif;
$lato: "lato", serif;
h1 {
  font-weight: 700;
  margin-bottom: 0.5em;
}
.home {
  background-image: url("https://images.unsplash.com/photo-1580656940647-8854a00547f0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
.home__frame {
  &-text {
    color: $color-alpha;
    & span {
      font-family: $della;
      font-size: 1.5em;
    }
  }
  &-paragraph {
    color: $color-alpha;
    font-family: $lato;
    font-size: 1.3rem;
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 100%;
  max-width: 600px;
  padding: 5px;
  border: 2px solid $color-alpha;
  &:before,
  &:after {
    content: "•";
    position: absolute;
    width: 14px;
    height: 14px;
    font-size: 14px;
    color: $color-alpha;
    border: 2px solid $color-alpha;
    line-height: 12px;
    top: 5px;
    text-align: center;
  }
  &:before {
    left: 5px;
  }
  &:after {
    right: 5px;
  }
  &-inner {
    position: relative;
    border: 2px solid $color-alpha;
    padding: 40px;
    &:before,
    &:after {
      content: "•";
      position: absolute;
      width: 14px;
      height: 14px;
      font-size: 14px;
      color: $color-alpha;
      border: 2px solid $color-alpha;
      line-height: 12px;
      bottom: -2px;
      text-align: center;
    }
    &:before {
      left: -2px;
    }
    &:after {
      right: -2px;
    }
  }
}
</style>
