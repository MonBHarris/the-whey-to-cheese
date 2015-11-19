"use strict";

var allCheeses = [
  {
    id: "1",
    name: 'Bayley Hazen Blue',
    flavor: 'funky, nutty',
    texture: 'smooth',
    milkType: 'cow',
    originCountry: 'USA',
    goodFor: 'adventerous'
  },
  {
    id: "2",
    name: 'Beemster Gouda',
    flavor: 'nutty, funky',
    texture: 'firm',
    milkType: 'cow',
    originCountry: 'Holland',
    goodFor: 'everyone'
  }
];

function setupCheese(cheese) {
  var cheeseDiv = "<div id='cheese"+cheese.id+"'></div>";
  $(cheeseDiv).appendTo('#cheeseDisplay');
  appendCheeseTitle(cheese, "name");
  appendCheeseParagraph(cheese, "flavor");
  appendCheeseParagraph(cheese, "texture");
  appendCheeseParagraph(cheese, "milkType")
  appendCheeseParagraph(cheese, "originCountry")
  appendCheeseParagraph(cheese, "goodFor");
}

function appendCheeseTitle(cheese, attribute) {
  var $cheeseDiv = $("#cheese"+cheese.id);
  $cheeseDiv.append("<h3>"+cheese[attribute]+"</h3>");
}

function appendCheeseParagraph(cheese, attribute) {
  var $cheeseDiv = $("#cheese"+cheese.id);
  $cheeseDiv.addClass(cheese[attribute].replace(',', ''))
  $cheeseDiv.append("<p>"+cheese[attribute]+"</p>");
}

function setupCheeses() { 
  $.each(allCheeses, function(i, cheese){
    setupCheese(cheese);
  });
}

function setupCheeseFilter(filterCollection, filterId) {
  $.each(filterCollection, function (i, filter){
    $('<input type="checkbox" value="'+filter+'" ><span>'+filter+'</span>').appendTo('#'+filterId);  
  });
}

function monitorCheeseFilters() {
  $("#filters input").change(function() {
    applyCheeseFilters();
  })
}

function applyCheeseFilters() {
  var $allCheeseDivs = $('#cheeseDisplay div')
  $allCheeseDivs.show();

  var allCheckedFilters = $('#filters input:checked');

  $.each(allCheckedFilters, function(i, filter) {
    var $filterSelector = $(this);
    var klassName = $filterSelector.val();

    $.each($allCheeseDivs, function(i, cheeseDiv){
      var showDiv = $(cheeseDiv).hasClass(klassName) && $(cheeseDiv).is(":visible");
      if(!showDiv) {
        $(cheeseDiv).hide();
      }
    });
  });
}

function setupCheeseFlavorFilter() {
  var cheeseFlavors = gatherCheeseFlavors();
  setupCheeseFilter(cheeseFlavors, "flavor")
};  

function setupCheeseTextureFilter() {
  var cheeseTextures = gatherCheeseTextures();
  setupCheeseFilter(cheeseTextures, "texture")
};  

function setupCheeseMilkTypeFilter() {
  var cheeseMilkTypes = gatherCheeseMilkTypes();
  setupCheeseFilter(cheeseMilkTypes, "milkType")
};

function setupCheeseOriginCountry() {
  var cheeseOriginCountries = gatherCheeseOriginCountries();
  setupCheeseFilter(cheeseOriginCountries, "originCountry")
};

function setupCheeseGoodFor() {
  var cheeseGoodFor = gatherCheeseGoodFor();
  setupCheeseFilter(cheeseGoodFor, "goodFor")
};

function gatherCheeseAttribute(attributeName) {
  var attributeValues = [];

  $.each(allCheeses, function (i, cheese) {
    attributeValues.push(cheese[attributeName].split(", "));
  });

  var attributeValues = [].concat.apply([], attributeValues);
  return $.unique(attributeValues);
}

function gatherCheeseFlavors() {
  return gatherCheeseAttribute("flavor");
}

function gatherCheeseTextures() {
  return gatherCheeseAttribute("texture");
}

function gatherCheeseMilkTypes() {
  return gatherCheeseAttribute("milkType");
}

function gatherCheeseOriginCountries() {
  return gatherCheeseAttribute("originCountry");
}

function gatherCheeseGoodFor() {
  return gatherCheeseAttribute("goodFor");
}

function setupFilters() {
  setupCheeseFlavorFilter();
  setupCheeseTextureFilter();
  setupCheeseMilkTypeFilter();
  setupCheeseOriginCountry();
  setupCheeseGoodFor();
}

function init() {
  setupFilters();
  setupCheeses();
  monitorCheeseFilters();
}

$(document).ready(function(){
  init();
});