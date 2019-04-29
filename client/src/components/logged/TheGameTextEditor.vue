<template>
  <div class="editor-container">
    <codemirror
      v-model="html"
      :options="htmlOption"
      class="editor editor-html"
      @inputRead="inputCheck"
      @blur="unFocus"
      @ready="htmlMounted"
    ></codemirror>
    <codemirror
      v-model="css"
      :options="cssOption"
      class="editor editor-css"
      @inputRead="inputCheck"
      @blur="unFocus"
      @ready="cssMounted"
    ></codemirror>
    <div class="editor-container--image">
      <img src="@/assets/3.jpg" alt="image to code">
    </div>
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
        extraKeys: { Alt: "autocomplete" },
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
        theme: "gruvbox-dark",
        keyMap: "sublime",
        extraKeys: { Alt: "autocomplete" },
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        hintOptions: {
          completeSingle: false
        }
      }
    };
  },
  methods: {
    cssMounted(cm) {
      cm.setSize(null, "100vh");
    },
    htmlMounted(cm) {
      cm.setSize(null, "40vh");
    },

    // checks if user is pasting code (cheting)
    inputCheck(cm, obj) {
      obj.origin === "paste"
        ? (this.html =
            "<!-- Please don't paste code in the editor while playing. -->") &&
          (this.css = "// Please don't paste code in the editor while playing.")
        : null;
    },

    unFocus(cm) {}
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.editor-container {
  max-width: 80vw;

  .editor {
    width: 50vw;
    float: right;
    font-size: 16px;

    &-css {
      width: 30vw;
    }
  }

  &--image {
    width: 50vw;
    height: 60vh;
    position: absolute;
    bottom: 0;
    right: 0;

    img {
      max-width: 50vw;
      max-height: 60vh;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
}
</style>
