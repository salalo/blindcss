<template>
  <div>
    <codemirror
      v-model="code"
      :options="cmOption"
      @cursorActivity="onCmCursorActivity"
      @ready="onCmReady"
      @focus="onCmFocus"
      @blur="onCmBlur"
    ></codemirror>
    <codemirror
      v-model="code"
      :options="cmOption"
      @cursorActivity="onCmCursorActivity"
      @ready="onCmReady"
      @focus="onCmFocus"
      @blur="onCmBlur"
    ></codemirror>
    <codemirror
      v-model="code"
      :options="cmOption"
      @cursorActivity="onCmCursorActivity"
      @ready="onCmReady"
      @focus="onCmFocus"
      @blur="onCmBlur"
    ></codemirror>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
// language
import "codemirror/mode/javascript/javascript.js";
// theme css
import "codemirror/theme/monokai.css";
// active-line.js
import "codemirror/addon/selection/active-line.js";
// styleSelectedText
import "codemirror/addon/selection/mark-selection.js";
import "codemirror/addon/search/searchcursor.js";
// highlightSelectionMatches
import "codemirror/addon/scroll/annotatescrollbar.js";
import "codemirror/addon/search/matchesonscrollbar.js";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/match-highlighter.js";
// keyMap
import "codemirror/mode/clike/clike.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/comment/comment.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/search.js";
import "codemirror/keymap/sublime.js";
// foldGutter
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/xml-fold.js";

export default {
  data() {
    const code = `const a = 10;`;
    return {
      code,
      cmOption: {
        tabSize: 2,
        foldGutter: true,
        styleActiveLine: true,
        // lineNumbers: true,
        line: true,
        // keyMap: "sublime",as
        mode: "text/javascript",
        theme: "monokai",
        extraKeys: {
          F11(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
          },
          Esc(cm) {
            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
          }
        }
      }
    };
  },
  components: {
    codemirror
  }

  // methods: {
  //   onCmCursorActivity(codemirror) {
  //     console.log("onCmCursorActivity", codemirror);
  //   },
  //   onCmReady(codemirror) {
  //     console.log("onCmReady", codemirror);
  //   },
  //   onCmFocus(codemirror) {
  //     console.log("onCmFocus", codemirror);
  //   },
  //   onCmBlur(codemirror) {
  //     console.log("onCmBlur", codemirror);
  //   }
  // }
};
</script>

<style lang="scss" scoped>
</style>
