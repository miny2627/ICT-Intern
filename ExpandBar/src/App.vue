<template>
  <div>
    <!-- <vertical-bar /> -->
    <horizontal-bar />
  </div>
</template>

<script>
import VerticalBar from "@/components/VerticalBar"
import HorizontalBar from "@/components/HorizontalBar"

export default {
  name: "App",
  components: {
    VerticalBar,
    HorizontalBar
  }
}
</script>