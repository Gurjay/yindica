var NameFinder = function (dataModel) {
    this.dm = dataModel;
    this._preKeyWord = null;
    this._preResult = null;
    this._index = 0;

    this.dm.mm(function () {
        if (this._preKeyWord) {
            this._preKeyWord = null;
            this._preResult = null;
            this._index = 0;
        }
    });
};

NameFinder.prototype.find = function (keyword) {
    if (!keyword) return [];
    var datas = this.dm.getDatas(), result = [];
    datas.each(function (item) {
        var name = item.getName();
        if (name && name.indexOf(keyword) >= 0) {
            result.push(item);
        }
    });
    return result;
};

NameFinder.prototype.findEach = function (keyword) {

    if (!keyword) return null;

    if (keyword !== this._preKeyWord) {// 继续上次查找
        this._preResult = this.find(keyword);
        this._preKeyWord = keyword;
        this._index = 0;
    }

    if (this._preResult.length === 0) {
        return null;
    } else {
        var result = this._preResult[this._index % this._preResult.length];
        this._index++;
        return this._preResult;
    }

};
