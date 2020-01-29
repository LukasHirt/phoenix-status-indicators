<template>
  <oc-button
    v-if="isFolder"
    class="file-row-share-indicator uk-text-middle"
    aria-label="Custom indicator"
    @click="triggerAlert"
    variation="raw"
  >
    <oc-icon
      name="folder"
      class="uk-text-middle"
      size="small"
      variation="active"
    />
  </oc-button>
</template>

<script>
  export default {
    name: 'Indicators',

    props: {
      item: {
        type: Object,
        required: true
      }
    },

    computed: {
      isFolder () {
        return this.item.type === 'folder'
      }
    },

    methods: {
      triggerAlert () {
        alert('Hello world')
      }
    }
  }
</script>
