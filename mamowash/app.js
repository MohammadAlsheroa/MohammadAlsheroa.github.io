try {

    // Get the modal element - UNIQUE
var newCustomerModal = document.getElementById("new-customer-modal");
// Get the button that opens the modal - UNIQUE
var modalBtnNewCustomer = document.getElementById("modalBtnNewCustomer");

// Get the modal element - UNIQUE
var listCustomerModal = document.getElementById("list-customer-modal");
// Get the button that opens the modal - UNIQUE
var listBtnCustomer = document.getElementById("modalBtnListCustomer");

// ----------------------------------------------------------------------------

// Get the <span> element that closes the modal - COMMON
var closeBtn = document.getElementsByClassName("closeBtn")[0];
var closeBtn2 = document.getElementsByClassName("closeBtn")[1];

   
// Listen for open click - UNIQUE
modalBtnNewCustomer.addEventListener("click", openModal01);
listBtnCustomer.addEventListener("click", openModal02);


// Listen for close click - COMMON
closeBtn.addEventListener("click", closeAllModal);
closeBtn2.addEventListener("click", closeAllModal);


// Listen for outside click - COMMON
window.addEventListener("click", outsideClick);




// Function to open modal - UNIQUE
function openModal01() {
    newCustomerModal.style.display = "block";
}

// Function to open modal - UNIQUE
function openModal02() {
    listCustomerModal.style.display = "block";
}



// Function to close modal - COMMON
function closeAllModal() {
    newCustomerModal.style.display = "none";
    listCustomerModal.style.display = "none";

}

// Function to close modal if outside click - COMMON
function outsideClick(e) {
    if (e.target == newCustomerModal) {
        newCustomerModal.style.display = "none";
    }
    else if(e.target == listCustomerModal){
        listCustomerModal.style.display = "none";
    }
}
  
    
} catch (error) {
    
}


// ADD RECORD MODAL ON INDEX.HTML
const openModalBtn = document.querySelector('#open-modal-btn');
const myModal = document.querySelector('#myModal');
const closeModalBtn = document.querySelector('.close-modal-btn');

openModalBtn.addEventListener('click', function() {
  myModal.style.height = '50%';
});

closeModalBtn.addEventListener('click', function() {
  myModal.style.height = '0';
});
