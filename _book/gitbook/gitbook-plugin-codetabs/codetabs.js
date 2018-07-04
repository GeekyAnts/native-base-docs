require(["jquery"], function($) {
  var setupPage = function() {
    if (localStorage) {
      var lastSelected = localStorage.getItem("codetabs-selected");
      if (lastSelected) {
        $(".codetabs").each(function() {
          var $tabs = $(this);
          var tabId = $tabs
            .find(".codetabs-header .tab")
            .filter(function() {
              return $(this).text() == lastSelected;
            })
            .data("codetab");
          if (typeof tabId !== "undefined") {
            setActiveTab($tabs, tabId);
          }
        });
      }
    }
  };

  var setActiveTab = function($tabs, tabId) {
    // console.log("$tabs: ", $tabs);
    // console.log("tabId: ", tabId);
    // console.log("find: ", $tabs.find(".tab"));

    $tabs.find(".tab").removeClass("active");
    $tabs.find('.tab[data-codetab="' + tabId + '"]').addClass("active");
  };

  $(document).on(
    "click.plugin.codetabs",
    ".codetabs .codetabs-header .tab",
    function(e) {
      var $btn = $(e.target);
      var $tabs = $btn.parents(".codetabs");
      var tabId = $btn.data("codetab");
      setActiveTab($tabs, tabId);
      if (localStorage) {
        localStorage.setItem("codetabs-selected", $btn.text());
      }
    }
  );

  gitbook.events.bind("start", setupPage);
  gitbook.events.bind("page.change", setupPage);
});
