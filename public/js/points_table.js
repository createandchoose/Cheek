$(document).ready(function(){



  
   

    var getvalue = firebase.database().ref('points');



    getvalue.on('value', function(snapshot) {
      var tbodyEl = $('tbody1');
      tbodyEl.html('');

      snapshot.forEach(function(product) {

        tbodyEl.append('\
          <tr>\
          <td class="id col-sm-4">' + product.val().teamid + '</td>\
          <td class="col-sm-4">'+ product.val().label +'</td>\
          <td class="col-sm-4">'+ product.val().value +'</td>\
          <td class="col-sm-2">\
          <button class="btn  btn-success" id="delete">Удалить</button>\
          </td>\
          </tr>\
          ');
      });
    });
    $('table1').on('click', '#delete', function() {
     var rowEl = $(this).closest('tr');
     var id = rowEl.find('.id').text();
     delete_todo(id);
   });
    function delete_todo(id) {
      
     getvalue.child(id).remove();
    }
});





