# MADE.js UI Range Selector for Vue 3

This package includes a Vue 3 range selector component, a double slider that allows the user to select a sub-range of values from a larger range of possible values. The user can slide from the left or right of the range.

## Usage

To customise the range selector, you'll want to import the scss styling:

```
import "made-ui-rangeselector/styles.scss";
```

In your main file, you can import the component:

```
import { createApp } from "vue";
import App from "./App.vue";

import RangeSelector from "made-ui-rangeselector";

const app = createApp(App);
...
app.use(RangeSelector);
...
app.mount("#app");
```

You can then reference the range selector component in your app:

```
<template>
  <div>
    <m-range-selector
      v-model="rangeValue"
      :min="rangeMin"
      :max="rangeMax"
      :step="rangeStep"
      :showValues="rangeShowValues"
      :formatValue="formatRangeValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyPage",
  data() {
    return {
      rangeValue: [0, 100],
      rangeMin: 0,
      rangeMax: 100,
      rangeStep: 1,
      rangeShowValues: true,
      formatRangeValue: (v: number) => {
        return `${v}%`;
      },
    };
  },
  watch: {
    rangeValue(value) {
      console.log(value);
    },
  },
});
</script>
```
