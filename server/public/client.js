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
        getTasks();
    }).catch(function (error){
        console.log('ERROR in submitTask ', error);
        alert('Something went wrong in submitTask')
    })
}

/**
 * Get tasks and post them to the DOM
 */
function getTasks(){
    $.ajax({
        type: 'GET',
        url: '/todo',
    }).then(function(response){
        console.log('the response is ', response);
        $('#to-do-list').empty();
        for (let todo of response){
            $('#to-do-list').append(`
                <div class="to-do-item" id="to-do-1">
                    <h2>${todo.task}</h2>
                    <button id="completeBtn data-id="${todo.id}">Complete</button>
                    <button id="deleteBtn" data-id="${todo.id}>Delete</button>
                </div>
            `);
        }
    }).catch(function(error){
        console.log('error in getTasks', error);
        alert('Something went wrong!');
    });
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