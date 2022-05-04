var CreateBrokenEdgeInteractor = function (graphView) {
    CreateBrokenEdgeInteractor.superClass.constructor.call(this, graphView);
};
ht.Default.def(CreateBrokenEdgeInteractor, ht.graph.Interactor, {
    setUp: function () {
        CreateBrokenEdgeInteractor.superClass.setUp.call(this);
        this._autoMakeVisible = this._graphView.isAutoMakeVisible();
        this._graphView.setAutoMakeVisible(false);
    },
    tearDown: function () {
        CreateBrokenEdgeInteractor.superClass.tearDown.call(this);
        this._graphView.setAutoMakeVisible(this._autoMakeVisible);
        this._graphView.getSelectionModel().clearSelection();
    },
    handle_mousedown: function (e) {
        this.handle_touchstart(e);
    },
    handle_touchstart: function (e) {
        this._sourceNode = this.getNodeAt(e);
        if (this._sourceNode) {
            this._targetNode = null;
            this.startDragging(e);
            this._graphView.addTopPainter(this);
            this._graphView.getSelectionModel().setSelection(this._sourceNode);
        }
    },
    getNodeAt: function (e) {
        if (ht.Default.isLeftButton(e) && ht.Default.getTouchCount(e) === 1) {
            var data = this._graphView.getDataAt(e);
            if (data instanceof ht.Node) {
                return data;
            }
        }
        return null;
    },
    handleWindowMouseMove: function (e) {
        this.handleWindowTouchMove(e);
    },
    handleWindowMouseUp: function (e) {
        this.handleWindowTouchEnd(e);
    },
    handleWindowTouchMove: function (e) {
        var graphView = this._graphView;
        this.redraw();
        this._logicalPoint = graphView.getLogicalPoint(e);
        this.autoScroll(e);
        this._targetNode = this.getNodeAt(e);
        if (this._targetNode) {
            graphView.getSelectionModel().setSelection([this._sourceNode, this._targetNode]);
        } else {
            graphView.getSelectionModel().setSelection([this._sourceNode]);
        }
        this.redraw();
    },
    handleWindowTouchEnd: function (e) {
        this.redraw();
        if (this._targetNode && !(this._sourceNode instanceof ht.Text) && !(this._targetNode instanceof ht.Text)) {
            var edge = new ht.Edge(this._sourceNode, this._targetNode);
            edge.setParent(this._graphView.getCurrentSubGraph());
            if(this._graphView.defaultEdgeFunction == null) {
                edge.s("edge.expanded", true);
                edge.a('elementType', 'edge');
                edge.setName('新增线路');
                edge.a('label', '新增线路');
                edge.setStyle("edge.width", 1);
                edge.setStyle('label.color', "#15bdff");
                edge.s("edge.type", "points");
                edge.a("hiddenName", false);
                edge.onPropertyChanged = function (event) {
                    var oldLabelMax = event.data.s("label.max");
                    var newLabelMax = 1;
                    var sourcePosition = edge.getSource() ? edge.getSource().p() : null;
                    var targetPosition = edge.getTarget() ? edge.getTarget().p() : null;
                    if (sourcePosition && targetPosition) {
                        var edgeLength = ht.Default.getDistance(sourcePosition, targetPosition);
                        if (edgeLength > 80) {
                            newLabelMax = edgeLength - 80;
                        }
                        if (oldLabelMax != newLabelMax) {
                            edge.s('label.max', newLabelMax);
                        }
                    }
                };
                this._graphView.getDataModel().add(edge);
                this._graphView.getSelectionModel().setSelection(edge);
            }else{
                this._graphView.defaultEdgeFunction(edge);
            }
        }
        this._graphView.removeTopPainter(this);
    },
    redraw: function () {
        var p1 = this._sourceNode.getPosition(),
            p2 = this._logicalPoint;
        if (p1 && p2) {
            var rect = ht.Default.unionPoint(p1, p2);
            ht.Default.grow(rect, 1);
            this._graphView.redraw(rect);
        }
    },
    draw: function (g) {
        var p1 = this._sourceNode.getPosition(),
            p2 = this._logicalPoint;
        if (p1 && p2) {
            g.lineWidth = 1;
            g.strokeStyle = '#1ABC9C';
            g.beginPath();
            g.moveTo(p1.x, p1.y);
            g.lineTo(p2.x, p2.y);
            g.stroke();
        }
    }
});
