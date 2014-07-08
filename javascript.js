$(document).ready(function() {

  $.getJSON("data.json", function(data){
    $.each(data.statuses, function () {
        if (this['entities'].media === undefined) {        
        } else {
        $( "#stuff" ).append('<img src=' + this['entities'].media[0].media_url + '/>');
        }
      });
  })
});