var RotationSliderEditor = function () {
    RotationSliderEditor.superClass.constructor.call(this);
};
ht.Default.def(RotationSliderEditor, ht.ui.editor.Editor, {
    initEditorView: function (view, data, value, column) {
        var self = this,
            slider = new ht.ui.Slider();
        
        slider.setMin(-Math.PI);
        slider.setMax(Math.PI);
        slider.setValue(ht.Default.getPropertyValue(data, column.getAccessType(), column.getName()));
        slider.setStep(0.001);
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
        if (event.type === 'mousedown') {
            return true;
        }
        return false;
    },
    getEditorValue: function () {
        return this.getEditorView().getValue();
    }
});
