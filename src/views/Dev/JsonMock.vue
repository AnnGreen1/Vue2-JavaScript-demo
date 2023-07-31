<template>
  <div>
    <ul>
      <li v-for="(key, value) in Yuan" :key="key">{{ value }}:{{ key }}</li>
    </ul>
    <ol>
      <li v-for="(field, key) in fields" :key="key">
        {{ field.key }}:{{ field.value }}
      </li>
    </ol>
  </div>
</template>

<script>
import res from "@/utils/data.json";
export default {
  data() {
    return {
      Yuan: {},
      fields: [],
    };
  },
  created() {
    if (res.code == 200) {
      this.Yuan = res.data.Yuan;
      this.fields = res.data.fields;
      alert(res.msg);
    }
  },
};
</script>