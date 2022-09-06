const Model = require('./model');
module.exports =
    class Bookmark extends Model {
        constructor(Id, Title, Url,Category) {
            super();
            this.Id = Id !== undefined ? Id : "";
            this.Title = Title !== undefined ? Title : "";
            this.Url = Url !== undefined ? Url : "";
            this.Category = Category !== undefined ? Category : "";

            this.setKey("Url");
            this.addValidator('Id', 'int');
            this.addValidator('Title', 'string');
            this.addValidator('Url', 'string');
            this.addValidator('Category', 'string');

        }
    }