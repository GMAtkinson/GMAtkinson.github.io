

function generateTable3(tableID, jsonData) {
  jsonData.headers.forEach(function (item) {

    if(item == "unit") {
      document.getElementById(tableID).children[0].children[0].innerHTML +=
      "<th class='unit'></th>";
    } else if(item == "S") {
      document.getElementById(tableID).children[0].children[0].innerHTML +=
      "<th class='unit'>" + item + "</th>";
    } else if(item == "Value") {
      document.getElementById(tableID).children[0].children[0].innerHTML +=
      "<th class='value'>" + item + "</th>";
    } else {
      document.getElementById(tableID).children[0].children[0].innerHTML +=
        "<th>" + item + "</th>";      
    }
  });

  var test = "";
  jsonData.fields.forEach(function (item) {
    test += "<tr>";
    var row_values = Object.entries(item);
    var count = true;
    // for (const [key, val] of row_values) {
    //   test += "<td>" + val + "</td>";
    // }

    var val = parseFloat(item["val"]);

    if(val > 10000 || val < 0.0001) {
      val = val.toExponential(2);
    }

    if(!item["val"] && !item["unit"]) {
      test += "<td colspan='4' class='title'><b>" + item["name"] + "</b></td>";
    } else {

      test += "<td>" + item["name"] + "</td><td>" + item["symbol"] + "</td>" + (item["input"] ? "<td class='val'><input type='number' id='" + item["name"] + "' value='" + val + "'>" : "<td class='val' id='" + item["name"] + "'>" + val) + "</td><td class='unit'>" + item["unit"] + "</td>";
       
    }


    
    //console.log("test", item["name"]);

    test += "</tr>";
  });
  document.getElementById(tableID).children[1].innerHTML += test;

}

function generateTable2(tableID, jsonData) {
  jsonData.headers.forEach(function (item) {

    if(item == "unit") {
      document.getElementById(tableID).children[0].children[0].innerHTML +=
      "<th class='unit'></th>";
    } else if(item == "Linear" || item == "Log") {
      document.getElementById(tableID).children[0].children[0].innerHTML +=
      "<th class='val'>" + item + "</th>";
    } else {
      document.getElementById(tableID).children[0].children[0].innerHTML +=
        "<th>" + item + "</th>";      
    }


  });

  var test = "";
  jsonData.fields.forEach(function (item) {
    test += "<tr>";
    var row_values = Object.entries(item);
    var count = true;
    // for (const [key, val] of row_values) {
    //   test += "<td>" + val + "</td>";
    // }

    var val = parseFloat(item["val"]);

    if(val > 10000 || val < 0.0001) {
      val = val.toExponential();
    }

    if(!item["val"] && !item["unit"] && !item["db_unit"]) {
      test += "<td colspan='5' class='title'><b>" + item["name"] + "</b></td>";
    } else {
      if(item["db"]) {
        test += "<td>" + item["name"] + "<td>" + item["symbol"] + "</td><td class='val'>" + (item["db_unit"] ? Math.pow(10, item["val"] / 10.0).toFixed(2) : "") + "</td><td class='unit'>" + item["unit"] + "</td>" + (item["input"] ? "<td class='val'><input type='number' id='" + item["name"] + "' value='" + val + "'>" : "<td class='val' id='" + item["name"] + "'>" +  val) + "</td><td class='unit'>" + item["db_unit"] + "</td>";
      } else {

        test += "<td>" + item["name"]+ "<td>" + item["symbol"] + "</td>" + (item["input"] ? "<td class='val'><input type='number' id='" + item["name"] + "' value='" + val + "'>" : "<td class='val' id='" + item["name"] + "'>" + val) + "</td><td class='unit'>" + item["unit"] + "</td><td class='val'>" + (item["db_unit"] ? (10*Math.log10(item["val"])).toFixed(2) : "") + "</td><td class='unit'>" + item["db_unit"] + "</td>";
      }      
    }


    
    //console.log("test", item["name"]);

    test += "</tr>";
  });
  document.getElementById(tableID).children[1].innerHTML += test;
}



function generateTable(tableID, jsonData) {
  jsonData.headers.forEach(function (item) {
    document.getElementById(tableID).children[0].children[0].innerHTML +=
      "<th>" + item + "</th>";
  });

  var test = "";
  jsonData.fields.forEach(function (item) {
    test += "<tr>";
    var row_values = Object.entries(item);
    var count = true;
    for (const [key, val] of row_values) {
      if (key.startsWith("i_")) {
        test +=
          "<td>" +
          "<input id=" +
          key +
          " type='number' value='" +
          val +
          "'></td>";
      } else {
        if (count) {
          test +=
            "<td id=" +
            key +
            " data-tooltip='" + capitalise_words(key.substring(2).replace(/_/g,' ')) + "'>" +
            val +
            "</td>";
          count = !count;
        } else {
          test += "<td id=" + key + " >" + val + "</td>";
        }
      }
    }
    test += "</tr>";
  });
  document.getElementById(tableID).children[1].innerHTML += test;
}

function capitalise_words(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
