<template>
  <div class="content">
  <div class="block">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div>
  
    
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'Home',
  components: {
    Card,
    NavBar
  },

}
</script>

<style>
.block {
	width: 100%;
	height: 760px;
	background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
	transform: skewY(-12deg);
	transform-origin: 0;
	position: absolute;
	top: 0;
  z-index: -1;
}
.block span {
	height: 190px;
	position: absolute;
}
.block span:nth-child(1) {
	width: 33.3%;
	width: calc(100% / 3);
	left: -16.66666%;
	left: calc(calc(calc(100% / 3) / 2) * -1);
	background: #53f;
}
.block span:nth-child(2) {
	width: 33.33333%;
	width: calc(100% / 3);
	top: 0;
	left: 16.66666%;
	left: calc(calc(100% / 3) / 2);
	right: auto;
	background: #4553ff;
}
.block span:nth-child(3) {
	width: 33.33333%;
	width: calc(100% / 3);
	left: 49.99999%;
	left: calc(calc(calc(100% / 3) / 2) + calc(100% / 3));
	bottom: auto;
	background: #4f40ff;
}
.block span:nth-child(4) {
	width: 33.33333%;
	width: calc(100% / 3);
	bottom: 0;
	background: #1fa2ff;
}
</style>
