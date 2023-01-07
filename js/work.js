$(function() {
    var tabs = $("#tabs").tabs();
    var previouslyFocused = false;

    tabs.find(".ui-tabs-nav").sortable({
        axis: "x",

        // Sortable removes focus, so we need to restore it if the tab was focused
        // prior to sorting
        start: function(event, ui) {
            previouslyFocused = document.activeElement === ui.item[0];
        },
        stop: function(event, ui) {
            tabs.tabs("refresh");
            if (previouslyFocused) {
                ui.item.trigger("focus");
            }
        }
    });
});