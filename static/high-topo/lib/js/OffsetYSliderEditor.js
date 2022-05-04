var OffsetYSliderEditor = function () {
    OffsetYSliderEditor.superClass.constructor.call(this);
};
ht.Default.def(OffsetYSliderEditor, ht.ui.editor.Editor, {
    initEditorView: function (view, data, value, column) {
        var self = this,
            slider = new ht.ui.Slider();
        
        slider.setMin(-100);
        slider.setMax(100);
        slider.setValue(ht.Default.getPropertyValue(data, column.getAccessType(), column.getName()));
        slider.setStep(1);
        slider.setInstant(true);
        slider.setToolTipEnabled(true);

        slider.getView().addEventListener('focusout', function(e) {
            self.stopEditing();
        });

        // 拖拽过程中实时派发变化事件
        slider.addPropertyChangeListener(function(e) {
            if (e.property === 'value') {
                self.fireValueChange(e.newValue);
            }
        });

        slider.getView().addEventListener('keydown', function (e) {
            if (e.keyCode == 27) {
                self.cancelEditing();
            }
            else if (e.keyCode == 13) {
                self.stopEditing();
            }
        });
        return slider;
    },
    isEditable: function(event) {
		console.log("fwefwe");
        // 单击马上启动编辑
        if (event.type === 'mousedown') {
            return true;
        }
        return false;
    },
    getEditorValue: function () {
        return this.getEditorView().getValue();
    }
});
