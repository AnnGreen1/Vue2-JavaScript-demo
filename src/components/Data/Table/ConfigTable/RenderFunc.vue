<script>
export default {
  name: 'RenderFunc',
  props: {
    render: {
      type: Function,
    },
    params: {
      type: Object,
    },
  },
  render(h) {
    return this.render(h, this.params)
  },
}
</script>
