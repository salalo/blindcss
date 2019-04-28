<template>
  <div>
    <codemirror v-model="html" :options="htmlOption" class="editor-html"></codemirror>
    <codemirror v-model="css" :options="cssOption" class="editor-css"></codemirror>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";

export default {
  components: {
    codemirror
  },
  data() {
    const html = `<html style="color: green">
  <!-- this is a comment -->
  <head>
    <title>HTML Example</title>
  </head>
  <body>
    <span>HELLO</span>
  </body>
</html>`;
    const css = `.abc {
  color: $red;
  background-color: blue;

  span {
    display: inline-block;
    font-size: 20px;
  }
}`;
    return {
      html,
      css,
      htmlOption: {
        tabSize: 2,
        line: true,
        lineNumbers: true,
        styleActiveLine: true,
        styleSelectedText: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        foldGutter: true,
        showCursorWhenSelecting: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        mode: "text/html",
        theme: "gruvbox-dark",
        keyMap: "sublime",
        extraKeys: { Ctrl: "autocomplete" },
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true }
      },
      cssOption: {
        tabSize: 2,
        line: true,
        lineNumbers: true,
        styleActiveLine: true,
        styleSelectedText: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        foldGutter: true,
        showCursorWhenSelecting: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        mode: "text/x-scss",
        theme: "monokai",
        keyMap: "sublime",
        extraKeys: { Ctrl: "autocomplete" },
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        // hint.js options
        hintOptions: {
          completeSingle: false
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.editor {
}
</style>
