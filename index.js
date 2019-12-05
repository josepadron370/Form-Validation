document.querySelector("button[type='submit']").addEventListener('click', (e) => checkForm(e) );

function checkForm(e) {

    e.preventDefault();

    let error_list = "";

    let error_div = document.querySelector('[role=alert]');


    let cc = document.querySelector('#cc');

    if (cc.value == "") {
        error_list +=  "<div class='alert alert-danger'>Credit Card field can't be empty.</div>";
    }


    let cvc = document.querySelector('#cvc');

    if (cvc.value == "") {
        error_list +=  "<div class='alert alert-danger'>CVC field can't be empty.</div>";
    }

    let amount = document.querySelector('#amount');

    if (amount.value == "") {
        error_list +=  "<div class='alert alert-danger'>Amount field can't be empty.</div>";
    }

    let first = document.querySelector('#first');

    if (first.value == "") {
        error_list +=  "<div class='alert alert-danger'>First Name field can't be empty.</div>";
    }

    let last = document.querySelector('#last');

    if (last.value == "") {
        error_list +=  "<div class='alert alert-danger'>Last Name field can't be empty.</div>";
    }


    if (document.querySelector('#city').value == "") {
        error_list +=  "<div class='alert alert-danger'>City field can't be empty.</div>";
    }

    let state = document.querySelector('#state');

    if (state.value == "Pick a state") {
        error_list +=  "<div class='alert alert-danger'>State field can't be empty.</div>";
    }

    let zip = document.querySelector('#zip');

    if (zip.value == "") {
        error_list +=  "<div class='alert alert-danger'>Zip field can't be empty.</div>";
    }


    if (document.querySelector('#message').value == "") {
        error_list +=  "<div class='alert alert-danger'>Message field can't be empty.</div>";
    }



    let cc1 = document.querySelector("[value=option1]");

    let cc2 = document.querySelector("input[value=option2]");

    let cc3 = document.querySelector("[value=option3]");

    let cc4 = document.querySelector("input[value=option4]");


    if (!cc1.checked && !cc2.checked && !cc3.checked && !cc4.checked) {
        error_list +=  "<div class='alert alert-danger'>One must be checked.</div>";
    }







    error_div.innerHTML = error_list;

}