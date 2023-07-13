
## value-key
在 Element UI 的下拉组件中，`value-key` 属性用于指定选项对象中用于显示文本和值的属性。默认情况下，`value-key` 属性的值为 `"value"`，即选项对象中的 `"value"` 属性用于显示文本和值。

然而，即使不使用 `value-key` 属性，Element UI 的下拉组件仍然可以正确地显示文本和值。这是因为 Element UI 下拉组件在处理选项对象时，会检查选项对象是否具有 `"value"` 属性。如果选项对象具有 `"value"` 属性，则使用该属性作为选项的值和显示文本。

这种行为是 Element UI 设计的一部分，旨在提供更好的灵活性和兼容性。如果您的选项对象中的属性名称不是 `"value"`，您可以通过设置 `value-key` 属性来告诉下拉组件使用哪个属性作为值和显示文本。

例如，如果您的选项对象中的属性名称是 `"id"`，您可以这样使用 `value-key` 属性：

```html
<el-select v-model="selectedValue" value-key="id">
  <el-option v-for="option in options" :key="option.id" :label="option.name" :value="option"></el-option>
</el-select>
```

在上面的示例中，我们使用 `value-key="id"` 来告诉下拉组件使用选项对象中的 `"id"` 属性作为值和显示文本。

总结起来，即使不使用 `value-key` 属性，Element UI 的下拉组件仍然可以正确地显示文本和值。但是，如果您的选项对象中的属性名称不是 `"value"`，您可以使用 `value-key` 属性来指定正确的属性名称。


❓ 为什么没有value属性有时也正确？