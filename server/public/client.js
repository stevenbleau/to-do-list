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
 * Subit Task
 */
function submitTask(){
    console.log('in submitTask');
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