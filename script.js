$(document).ready(function() {
    let totalExpense = 0;
  
    $('#expense-form').on('submit', function(e) {
      e.preventDefault();
      
      const expenseName = $('#expenseName').val();
      const expenseAmount = $('#expenseAmount').val();
      
      if(expenseName.trim() === "" || expenseAmount.trim() === "") {
         $('#errorMessage').text("Please fill in all the fields");
      } else {
        totalExpense += parseFloat(expenseAmount);
  
        const expenseRow = `<tr>
            <td>${expenseName}</td>
            <td>${expenseAmount}</td>
            <td><button class="btn btn-danger delete">Delete</button></td>
          </tr>`;
  
        $('#expenseTable tbody').append(expenseRow);
        $('#totalExpense').text(totalExpense);
        
        $('#expenseName').val("");
        $('#expenseAmount').val("");
      }
    });
  
    $('#expenseTable').on('click', '.delete', function() {
      const amount = parseFloat($(this).closest('tr').children('td:nth-child(2)').text());
      totalExpense -= amount;
  
      $(this).closest('tr').remove();
      $('#totalExpense').text(totalExpense);
    });
  });
  
