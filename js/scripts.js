function Pizza(topping, size) {
 this.ptopping = topping;
 this.psize = size;
}

Pizza.prototype.calculate = function() {
  return this.ptopping + this.psize;
}

function resetFields() {
    $("#topping").val("");
    $("#size").val("");
}

$(document).ready(function() {
  $("form").submit(function(event) {
      if ($("#topping").val()==="0" || $("#size").val()==="0") {
        alert("Please select your pizza!");
      }
      else {
      jQuery(this).unbind('submit'); // unbind this submit handler first and ...
      var top = parseInt($("#topping").val());
      var size = parseInt($("#size").val());
      var newPizza = new Pizza(top, size);

        $(".show").append("<p>Your pizza price is $" + newPizza.calculate() + "</p>" + "<br>"
        + "<p>" + "Thanks for shopping with us" + "</p>");

}
    event.preventDefault();
  });
});
