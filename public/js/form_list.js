$(document).ready(function(){



  
   

       var getvalue = firebase.database().ref('contactForm');

   
   
       getvalue.on('value', function(snapshot) {
         var tbodyEl = $('tbody');
         tbodyEl.html('');
  
         snapshot.forEach(function(product) {

           tbodyEl.append('\
             <tr>\
             <td class="id col-sm-4">' + product.val().numberid + '</td>\
             <td class="col-sm-4">'+ product.val().name +'</td>\
             <td class="col-sm-4">'+ product.val().team +'</td>\
             <td class="col-sm-2">\
             <button class="btn  btn-success" id="delete">Удалить</button>\
             </td>\
             </tr>\
             ');
         });
       });
       $('table').on('click', '#delete', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        delete_todo(id);
      });
       function delete_todo(id) {
         
        getvalue.child(id).remove();
       }
   });
   //////todo display end ////////////////
   
   //////update todo start ////////////////
       $('table').on('click', '.edit', function() {
   
         var rowEl = $(this).closest('tr');
         var id = rowEl.find('.id').text();
         $('#'+id).attr("readonly", false);
         $("#edit"+id).html('Update');
         $("#edit"+id).addClass('update').removeClass('edit');
         $("#edit"+id).prop('id', 'update'+id);
   
       });
   
       $('table').on('click', '.update', function() {
         var rowEl = $(this).closest('tr');
         var id = rowEl.find('.id').text();
         var name = $('#'+id).val();
         $('#'+id).attr("readonly", false);
         $('#'+id).attr("readonly", true);
         $("#update"+id).html('Edit');
         $("#update"+id).addClass('edit').removeClass('update');
         $("#update"+id).prop('id', 'edit'+id);
         update_todo(id,name);
       });
   
       function update_todo(id, name) {
         console.log(id, name);
         var updates = {};
         updates['contactForm/Терапия/' + id + "/name"] = name;
         return firebase.database().ref().update(updates);
       }


   