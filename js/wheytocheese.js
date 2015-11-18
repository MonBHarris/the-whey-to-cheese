"use strict";

var AllCheeses = new Array;

//Cheese Constructor 

function Cheese(name, flavor, texture, milkType, originCountry, goodFor){
  this.name = name;
  this.flavor = flavor;
  this.texture = texture;
  this.milkType = milkType;
  this.originCountry = originCountry;
  this.goodFor = goodFor;
  AllCheeses.push(this);
  this.image = '<img src= images/'+this.name+".jpg></img>";
}

//Populate Name Field

Cheese.prototype.El = function() {
    return "<ul id="+this.id+'>'+this.name+
             '<li>'+this.flavor+"</li>"+
           "</ul>";
};

Cheese.prototype.create = function() {
    $(this.El()).addClass(this.flavor+' '+this.texture).appendTo('#CheeseDisplay');
};


//Cheeses

var BayleyHazenBlue = new Cheese("Bayley Hazen Blue", "funky", "smooth", "cow", "USA", "adventerous eaters"); 
var BeemsterGouda = new Cheese("Beemster Gouda", "nutty and sweet", "firm", "cow", "Holland", "everyone"); 

//Create Cheese Method

//Creating Cheeses

BayleyHazenBlue.create();
BeemsterGouda.create();

 $(document).ready(function(){


 });
