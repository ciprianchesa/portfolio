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