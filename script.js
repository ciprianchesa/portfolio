function toggleCheck() {
    if(document.getElementById('toggle-button').checked === true){
        document.getElementsByClassName('navbar-links').style.display = 'block';
    } else {
        document.getElementsByClassName('navbar-links').style.display = 'none';
    }
}
// const toggleButton = document.querySelector('#toggle-button');
// const navbarLinks = document.querySelector('.navbar-links');

// toggleButton.addEventListener('click', () => {
//  navbarLinks.classList.toggle('active')
// })

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

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

//SignUp Route
app.post('/signup', (req, res) => {
    const { firstName, lastName, email } = req.body;

    // Make sure fields are filled
    if (!firstName || !lastName || !email) {
        res.redirect('/fail.html');
        return;
    }

    //Construct req data
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const postData = JSON.stringify(data);

    fetch('https://us2.api.mailchimp.com/3.0/lists/5a43085df3', {
        method: 'POST',
        headers: {
            Authorization: 'auth 0c1b830aa6c92117957be603ae60fa75-us2'
        },
        body: postData
    })
        .then(res.statusCode === 200 ? 
            res.redirect('/success.html') :
            res.redirect('/fail.html'))
            .catch(err => console.log(err))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));

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

  function myFunction() {
    alert("message succesfully sent");
    window.location.reload();
  }