$(function () {
  $("#image").draggable();
  $("#blackhole").droppable({
    drop: function (event, ui) {
      ui.helper.effect("scale", { percent: 0 }, 500, function () {
        $(this).fadeOut();
      });
    },
  });

  $("#image").hover(
    function () {
      $(this).effect("shake", { times: 3, distance: 5 }, 300);
    },
    function () {}
  );
});
