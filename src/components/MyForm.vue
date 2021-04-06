<template>
  <form method="post" action="#">
    <InputField v-for="input in inputs" v-bind="input" :key="input.id" />
    <!-- v-bind="input" 傳整個object下去，在InputField component裡可直接destructure，在prop裡抓object的properties -->
    <div class="input-wrapper">
      <button>Contact Us</button>
    </div>
  </form>
</template>
<script>
import InputField from "./InputField";

export default {
  name: "MyForm",
  components: {
    InputField,
  },
  data: function () {
    return {
      inputs: [
        { label: "First Name", id: "first_name" },
        { label: "Last Name", id: "last_name" },
        { label: "Email", id: "email" },
      ],
    };
  },
};
</script>
<style>
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.input-wrapper > button {
  background: #555ae4;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
}
</style>