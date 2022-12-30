const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function hide(id) {
  const el = document.getElementById(id)
  el.style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = '';
}

function hideAllPages() {
    const pages = Array.from(document.querySelectorAll(".page"));
    pages.forEach(page => hide(page.id));
}

function showPage(pageId) {
    hideAllPages();
    show(pageId);
}

function listenMenuClicks() {
  document.addEventListener("click", e => {
  const link = e.target;
  if (link.matches("#top-menu-bar a")) {  
      const id = link.getAttribute("data-id");
      showPage(id);
      }
  });
};

listenMenuClicks();

showPage("home");

(function() {
    emailjs.init("user_SHLKn2xBkl3ckoRqEHfkt");
    })();

window.onload = function() {
      document.getElementById('contact-form').addEventListener('submit', function(event) {
          event.preventDefault();
          // generate a five digit number for the contact_number variable
          this.contact_number.value = Math.random() * 100000 | 0;
          // these IDs from the previous steps
          emailjs.sendForm('service_gr5y44a', 'template_k1qfiqj', this)
              .then(function(response) {
                  console.log('SUCCESS!', response.status, response.text);
              }, function(error) {
                  console.log('FAILED...', error);
              });
              event.target.reset()
      });
  }

/* function showTextOnClick() {
  document.getElementById("sendmessage").innerHTML = "You sent the message!";
  }

 function showTextOnClick() {
  const sendBtn = document.getElementById("sendBtn");

 sendBtn.addEventListener("click", ()=>{
    if(sendBtn.value === "Send" && email.value === "Email") {
      document.getElementById("sendmessage").innerHTML = "You sent the message!";
    }else{
        sendBtn.value = "Send";
    }
  })
  } */