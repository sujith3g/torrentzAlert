Polymer("torrentz-menu", {
    list: [],

    listChanged: function() {
        if (!(this.list instanceof Array))
            this.list = JSON.parse(this.list);
    },

    menuItemTap: function(event, detail, sender) {
        var _id = $(sender).attr("tag");

        var index = -1;

        var item = _.find(torrentz_db, function(item) {
            index++;

            return (_id == item._id);
        });

        if (item) {
            $("torrentz-list").attr("list", JSON.stringify([item]));
            $("torrentz-list").attr("tag", JSON.stringify([_id]));

            if ($("html /deep/ #drawer-panel").width() < 768) {
                document.querySelector("html /deep/ #drawer-panel").togglePanel();
            }

            $("html /deep/ #main-toolbar").removeClass().addClass(item.iconClass);

            $("html /deep/ .menu-l").css("background", "white");
            $(sender).css("background", "#EEE");
        }
    }
});
