//var elt = document.querySelector("select");
//elt.addEventListener("change", function () {
//  console.log("value => " + this.value);
//  console.log("elt => " + elt);
//});

var button1 = document.getElementById("button1");
button1.innerHTML = '<img id="smaller" src="./images/1.png" />';

var button2 = document.getElementById("button2");
button2.innerHTML = '<img id="smaller" src="./images/2.jpg" />';

var button3 = document.getElementById("button3");
button3.innerHTML = '<img id="smaller" src="./images/3.png" />';

var button4 = document.getElementById("button4");
button4.innerHTML = '<img id="smaller" src="./images/4.jpg" />';

var button5 = document.getElementById("button5");
button5.innerHTML = '<img id="smaller" src="./images/5.jpg" />';

var button6 = document.getElementById("button6");
button6.innerHTML = '<img id="smaller" src="./images/6.jpg" />';

var button7 = document.getElementById("button7");
button7.innerHTML = '<img id="smaller" src="./images/7.jpg" />';

var button8 = document.getElementById("button8");
button8.innerHTML = '<img id="smaller" src="./images/8.jpg" />';

function flavours(what) {
  what.form.pressed.value = what.value;
  console.log(what.value);
}

var vanilla = 0;
var chocolate = 0;
var lemon = 0;
var blueberry = 0;
var cherry = 0;
var strawberry = 0;
var mango = 0;
var caramel = 0;

var totalball =
  vanilla +
  chocolate +
  lemon +
  blueberry +
  cherry +
  strawberry +
  mango +
  caramel;

function flavours() {
  totalball++;

  if (totalball === 1) {
    console.log("Total balls " + totalball);
  } else if (totalball === 1) {
    console.log("Total balls " + totalball);
  } else if (totalball === 2) {
    console.log("Total balls " + totalball);
  } else if (totalball === 3) {
    console.log("Total balls " + totalball);
  } else {
    console.log("Total balls " + "Too many balls");
  }
}

//---------------------------

function calculateTotal() {
  let unit_price = {
    vanilla: 0.75,
    chocolate: 0.75,
    lemon: 0.75,
    blueberry: 0.75,
    cherry: 0.75,
    strawberry: 0.75,
    mango: 0.75,
    caramel: 0.75,
  };
  let item_price = {};

  item_price.vanilla = $("#qty_vanilla").val() * unit_price.vanilla;
  $("#price_vanilla").val(item_price.vanilla);

  item_price.chocolate = $("#qty_chocolate").val() * unit_price.chocolate;
  $("#price_chocolate").val(item_price.chocolate);

  item_price.lemon = $("#qty_lemon").val() * unit_price.lemon;
  $("#price_lemon").val(item_price.lemon);

  item_price.blueberry = $("#qty_blueberry").val() * unit_price.blueberry;
  $("#price_blueberry").val(item_price.blueberry);

  item_price.cherry = $("#qty_cherry").val() * unit_price.cherry;
  $("#price_cherry").val(item_price.cherry);

  item_price.strawberry = $("#qty_strawberry").val() * unit_price.strawberry;
  $("#price_strawberry").val(item_price.strawberry);

  item_price.mango = $("#qty_mango").val() * unit_price.mango;
  $("#price_mango").val(item_price.mango);

  item_price.caramel = $("#qty_caramel").val() * unit_price.caramel;
  $("#price_caramel").val(item_price.caramel);

  let total =
    item_price.vanilla +
    item_price.chocolate +
    item_price.lemon +
    item_price.blueberry +
    item_price.cherry +
    item_price.strawberry +
    item_price.mango +
    item_price.caramel;
  console.log("Total" + total);
  $("#total_value").text(total);
}

$(function () {
  $(".qty").on("change keyup", calculateTotal);
});

//
