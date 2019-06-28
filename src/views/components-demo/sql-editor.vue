<template>
  <div class="components-container">
    <aside>SQL-Editor is base on <a href="https://github.com/codemirror/CodeMirror" target="_blank">CodeMirrorr</a>
      <div class="editor-container">
        <SQLEditor ref="SQLEditor" v-model="value" />
      </div>
    </aside></div>
</template>

<script>
import SQLEditor from '@/components/SQLEditor'

const sqlData = 'select name,sex,age,class,fmaily,phone,phone,phone,phone,phone,phone,phone,phone,phone,phone,phone,phone,phone,phone,phone,phone,phone,phone,phone from person where name > 18'
export default {
  name: 'SQLEditorDemo',
  components: { SQLEditor },
  data() {
    return {
      value: sqlData
    }
  }
}
</script>

<style scoped>
.editor-container{
  position: relative;
  height: 100%;
}
</style>

