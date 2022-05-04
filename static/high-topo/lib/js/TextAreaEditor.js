ht.ui.editor.TextAreaEditor = function () {
    ht.ui.editor.TextAreaEditor.superClass.constructor.call(this);
};

ht.Default.def('ht.ui.editor.TextAreaEditor', ht.ui.editor.StringEditor, {
    initEditorView: function (view, data, value) {
        var self = this,
            textArea = new ht.ui.TextArea(),
            input = textArea.getInput();
        textArea.setValue(value);
        input.onblur = function (e) {
            if (self.shouldSelect())
                self.stopEditing();
        };

        textArea.getView().addEventListener('keydown', function (e) {
            if (sizeof(e.srcElement.value) > 255) { //超过255个字符则禁止输入
                textArea.setValue(getMaxStr(e.srcElement.value, 255));
            }
            if (ht.Default.isEsc(e)) {
                self.cancelEditing();
            }
        });
        return textArea;
    },
    getEditorValue: function () {
        return this.getEditorView().getInput().value;
    }
});

function getMaxStr(str, length) {
    var total = 0,
        charCode,
        i,
        len;
    var newStr = "";
    for (i = 0, len = str.length; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode <= 0x007f) {
            total += 1;
        } else if (charCode <= 0xffff) {
            total += 2;
        } else {
            total += 4;
        }
        if(total<=length){
            newStr += str[i];
        }
    }
    return newStr;
}

function sizeof(str, charset) {
    var total = 0,
        charCode,
        i,
        len;

    for (i = 0, len = str.length; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode <= 0x007f) {
            total += 1;
        } else if (charCode <= 0xffff) {
            total += 2;
        } else {
            total += 4;
        }
    }

    return total;
}
