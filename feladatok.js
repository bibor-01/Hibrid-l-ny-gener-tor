$(function () {
  //Niki
  var osztalyTomb = [];
  var allatokTomb = [];
  let valasztott;
  let i;
  //console.log($('option:selected').index());
  if ($("option:selected").index() == 0) {
    valasztott = "osztaly1";
    i = 1;
  } else if ($("option:selected").index() == 1) {
    valasztott = "osztaly2";
    i = 2;
  } else if ($("option:selected").index() == 2) {
    valasztott = "osztaly3";
    i = 3;
  }

  $.ajax({
    url: valasztott + ".json",
    success: function (result) {
      console.log(result);
      if ((valasztott = "osztaly1")) {
        osztalyTomb = result.osztaly1;
      } else if ((valasztott = "osztaly2")) {
        osztalyTomb = result.osztaly2;
      } else if ((valasztott = "osztaly3")) {
        osztalyTomb = result.osztaly3;
      }
      console.log(osztalyTomb);
    },
  });

  $.ajax({
    url: "adatok.json",
    success: function (result) {
      console.log(result);
      allatokTomb = result.allatlista;
      console.log(allatokTomb);
    },
  });

  //Petra

  $("#nyomtat").click(
    () => {
      console.log("valami");
      $("section").append("<table></table>");

      osztalyTomb.forEach((value, index) => {
        $("section table").append(
          "<tr id='" + index + "'><td>" + value + "</td></tr>"
        );
      });

      for (let i = 0; i < allatokTomb.length; i++) {
        allatokTomb.sort(function (a, b) {
          return Math.random() - 0.5;
        });
        for (let j = 0; j < 3; j++) {
          $("#" + i).append("<td>" + allatokTomb[j] + "</td>");
        }
      }
    }
    //Bíborka
  );
});
