<template>
  <div id="app">
    <router-view></router-view>
    <Radio />
    <GroupChat />
  </div>
</template>

<script>
import Radio from "./components/radio/Radio";
import GroupChat from "./components/forum/GroupChat";

export default {
  name: "App",
  components: {
    Radio,
    GroupChat,
  },
};
</script>
