$(function () {
  //Niki,Bíbor,Petra
  const osztalyTomb = [];
  const allatokTomb = [];
  //Ha selectben változás történik akkor meg hívja a kivalasztva fügvényt
  $("#Osztaly").change(kivalasztva);
  function kivalasztva() {
    osztalyBetolto();
  }
  function tombTorlese() {
    //osztály tömb tartalmának törlése
    while (osztalyTomb.length > 0) {
      osztalyTomb.pop();
    }
  }
  function osztalyBetolto() {
    if ($("option:selected").val() == "nev1") {
      $.ajax({
        url: "osztaly1.json",
        success: function (result) {
          tombTorlese();
          for (let i = 0; i < result.osztaly1.length; i++) {
            osztalyTomb.push(result.osztaly1[i]);
          }
          kiir();

        },
      });
      console.log(osztalyTomb);
    }
    if ($("option:selected").val() == "nev2") {
      $.ajax({
        url: "osztaly2.json",
        success: function (result) {
          tombTorlese();
          for (let i = 0; i < result.osztaly2.length; i++) {
            osztalyTomb.push(result.osztaly2[i]);
          }
          kiir();

        },
      });
      console.log(osztalyTomb);
    }
    if ($("option:selected").val() == "nev3") {
      $.ajax({
        url: "osztaly3.json",
        success: function (result) {
          tombTorlese();
          for (let i = 0; i < result.osztaly3.length; i++) {
            osztalyTomb.push(result.osztaly3[i]);
          }
          kiir();

        },
      });
      console.log(osztalyTomb);
    }
  }

  /*console.log($("option:selected"));
  //Niki
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
  console.log($("option:selected").index());
//Petra
  $.ajax({
    url: valasztott + ".json",
    success: function (result) {
      console.log(result);
      if ((valasztott = "osztaly1")) {
        for (let i = 0; i < result.osztaly1.length; i++) {
          osztalyTomb.push(result.osztaly1[i]);
        }
      } else if ((valasztott = "osztaly2")) {
        for (let i = 0; i < result.osztaly2.length; i++) {
          osztalyTomb.push(result.osztaly2[i]);
        }
      } else if ((valasztott = "osztaly3")) {
        for (let i = 0; i < result.osztaly3.length; i++) {
          osztalyTomb.push(result.osztaly3[i]);
        }
      }
      console.log(osztalyTomb);
     
    },
    
  });*/
//Petra
  $.ajax({
    url: "adatok.json",
    success: function (result) {
      console.log(result);
      for (let i = 0; i < result.allatlista.length; i++) {
        allatokTomb.push(result.allatlista[i]);
      }
      console.log(allatokTomb);
    },
  });

  function kiir() {
    $("section").empty();
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
   $("#nyomtat").click(function () {
      window.print();
    });
});
