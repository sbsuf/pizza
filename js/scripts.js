function Pizza(topping, size) {
 this.ptopping = topping;
 this.psize = size;
}


Pizza.prototype.calculate = function() {
  return this.ptopping + this.psize;
}

function resetFields() {
    $("#new-first-name").val("");
    $("#new-last-name").val("");
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var top = parseInt($("#topping").val());
    var size = parseInt($("#size").val());
    var newPizza = new Pizza(top, size);

    $(".show").append("<p>Your pizza price is $" + newPizza.calculate() + "</p>" + "<br>"
    + "<p>" + "Thanks for shopping with us" + "</p>");

    resetFields();

  });
});
