$(".btnp").click(function(){
    var commcontent = $("#field").val();

  if(commcontent ==""){
alert("Write Something In TextBox.");

  }
  else{
    
$(".comments").append("<div>"+commcontent+"</div>");
  
  $("#field").val('');
  
  }
});