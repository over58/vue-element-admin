<template>
  <div class="sql-editor">
    <textarea ref="textarea" />
  </div>
</template>

<script>
import sqlFormatter from 'sql-formatter'
import CodeMirror from 'codemirror'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/lib/codemirror.css'
require('codemirror/addon/selection/active-line')
import 'codemirror/theme/rubyblue.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/lint/lint'

export default {
  name: 'SQLEditor',
  /* eslint-disable vue/require-prop-types */
  props: ['value'],
  data() {
    return {
      SQLEditor: false
    }
  },
  watch: {
    value(value) {
      const editorValue = this.SQLEditor.getValue()
      if (value !== editorValue) {
        this.SQLEditor.setValue(sqlFormatter.format(this.value))
      }
    }
  },
  mounted() {
    this.SQLEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: 'text/x-sql',
      gutters: ['CodeMirror-lint-markers'],
      theme: 'rubyblue',
      lint: true,
      tabSize: 2,
      styleActiveLine: true,
      extraKeys: {
        'Tab': 'autocomplete'
      }
    })

    this.SQLEditor.setValue(sqlFormatter.format(this.value))
    this.SQLEditor.on('change', cm => {
      this.$emit('changed', cm.getValue())
      this.$emit('input', cm.getValue())
    })
  },
  methods: {
    getValue() {
      return this.SQLEditor.getValue()
    }
  }
}
</script>

<style scoped>
.sql-editor{
  height: 100%;
  position: relative;
}
.sql-editor >>> .CodeMirror {
  height: auto;
  min-height: 300px;
}
.sql-editor >>> .CodeMirror-scroll{
  min-height: 300px;
}
.sql-editor >>> .cm-s-rubyblue span.cm-string {
  color: #F08047;
}
</style>
