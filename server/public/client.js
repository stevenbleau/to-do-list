console.log('JS sourced');

$(document).ready(onReady);

function onReady() {
    console.log('Jquery sourced')

    //click event listeners
    $('body').on('click', '#submitBtn', submitTask);
    $('body').on('click','#completeBtn', completeTask);
    $('body').on('click','#deleteBtn', deleteTask);
}



/**
 * Submit Task
 */
function submitTask(){
    console.log('in submitTask');
    let taskInput = $('#taskInput').val();
    console.log('the taskInput is', taskInput);

    $.ajax({
        type: 'POST',
        url: '/todo',
        data: {
            task: taskInput
        }
    }).then(function(response){
        console.log('posted task to server')
    }).catch(function (error){
        console.log('ERROR in submitTask ', error);
        alert('Something went wrong in submitTask')
    })
}


/**
 * Complete Task
 */
function completeTask(){
    console.log('in completeTask');
}


/**
 * Delete Task
 */
function deleteTask(){
    console.log('in deleteTask');
}