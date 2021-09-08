function mobileNavbar() {
    var x = document.getElementById("navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

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
              .then(function() {
                  console.log('SUCCESS!');
              }, function(error) {
                  console.log('FAILED...', error);
              });
              event.target.reset()
      });
  }

document.getElementById("EmptyButton").onclick = function() {
document.getElementById("sendmessage").innerHTML = "You sent the message!";
}