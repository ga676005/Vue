<template>
  <form method="post" action="#">
    <InputField
      v-for="input in inputs"
      :label="input.label"
      :id="input.id"
      :key="input.id"
    />
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