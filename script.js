//Number of Warm Up Rounds
document.getElementById('warmupround').onclick = function() {
 
    var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
 
    var select = document.createElement("select");
    select.name = "warmupround";
    select.id = "dropdown"
 
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
 
    var label = document.createElement("label");
    label.innerHTML = "Choose the number of rounds in the Warm-Up: "
    label.htmlFor = "warmupround";
 
    document.getElementById("container").appendChild(label).appendChild(select);
}


//Stroke(s) that will be swam during the Warm Up
function add_four(){
      var new_stroke_no_four = parseInt($('#total_stroke4').val())+1;
      var new_input="<input type='text' id='new_"+new_stroke_no_four+"'>";
      $('#new_stroke4').append(new_input);
      $('#total_stroke4').val(new_stroke_no_four)
    }
    function remove_four(){
      var last_stroke_no_four = $('#total_stroke4').val();
      if(last_stroke_no_four>0){
        $('#new_'+last_stroke_no_four).remove();
        $('#total_stroke4').val(last_stroke_no_four-1);
      }
    }


//Number of Preset Rounds
document.getElementById('presetround').onclick = function() {
 
    var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
 
    var select = document.createElement("select");
    select.name = "presetround";
    select.id = "dropdown"
 
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
 
    var label = document.createElement("label");
    label.innerHTML = "How many rounds will the Pre-Set be: "
    label.htmlFor = "presetround";
 
    document.getElementById("container3").appendChild(label).appendChild(select);
}


//Stroke(s) that will be swam during the Preset
function add_one(){
      var new_stroke_no_one = parseInt($('#total_stroke1').val())+1;
      var new_input="<input type='text' id='new_"+new_stroke_no_one+"'>";
      $('#new_stroke1').append(new_input);
      $('#total_stroke1').val(new_stroke_no_one)
    }
    function remove_one(){
      var last_stroke_no_one = $('#total_stroke1').val();
      if(last_stroke_no_one>0){
        $('#new_'+last_stroke_no_one).remove();
        $('#total_stroke1').val(last_stroke_no_one-1);
      }
    }


//Number of Main Set Rounds
document.getElementById('mainsetround').onclick = function() {
 
    var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
 
    var select = document.createElement("select");
    select.name = "mainsetround";
    select.id = "dropdown"
 
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
 
    var label = document.createElement("label");
    label.innerHTML = "How many rounds will the Main Set be: "
    label.htmlFor = "mainsetround";
 
    document.getElementById("container4").appendChild(label).appendChild(select);
}


//Stroke(s) that will be swam during the Main Set
function add_two(){
      var new_stroke_no_two = parseInt($('#total_stroke2').val())+1;
      var new_input="<input type='text' id='new_"+new_stroke_no_two+"'>";
      $('#new_stroke2').append(new_input);
      $('#total_stroke2').val(new_stroke_no_two)
    }
    function remove_two(){
      var last_stroke_no_two = $('#total_stroke2').val();
      if(last_stroke_no_two>0){
        $('#new_'+last_stroke_no_two).remove();
        $('#total_stroke2').val(last_stroke_no_two-1);
      }
    }


//Number of Warm Down Rounds
document.getElementById('warmdownround').onclick = function() {
 
    var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
 
    var select = document.createElement("select");
    select.name = "warmdownround";
    select.id = "dropdown"
 
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
 
    var label = document.createElement("label");
    label.innerHTML = "How many rounds will the Warm Down be: "
    label.htmlFor = "warmdownround";
 
    document.getElementById("container5").appendChild(label).appendChild(select);
}


//Stroke(s) that will be swam during the Warm Down
function add_three(){
      var new_stroke_no_three = parseInt($('#total_stroke3').val())+1;
      var new_input="<input type='text' id='new_"+new_stroke_no_three+"'>";
      $('#new_stroke3').append(new_input);
      $('#total_stroke3').val(new_stroke_no_three)
    }
    function remove_three(){
      var last_stroke_no_three = $('#total_stroke3').val();
      if(last_stroke_no_three>0){
        $('#new_'+last_stroke_no_three).remove();
        $('#total_stroke3').val(last_stroke_no_three-1);
      }
    }
