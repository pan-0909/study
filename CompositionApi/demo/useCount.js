import {ref} from 'vue';
function count (num) {
  let count = ref(num);
  let dounbleCount = computed(()=>count.value*2);
  return {
    count,
    doubleCount
  }
}

export default useCount;
