document.addEventListener('DOMContentLoaded', event => {
  if (event) {
    console.info('DOM loaded')
  }

  // CREATE

  const createBurgerBtn = document.getElementById('create-form')

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', e => {
      e.preventDefault()

      // Takes the value of the text area that goes by the name "burger-name"
      const newBurger = {
        name: document.getElementById('burger-name').value.trim(),
      }
      console.log(newBurger)
      // Send POST request to create new burger
      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBurger)
      }).then(() => {
        // Empty the form
        document.getElementById('burger-name').value = ''

        // Reload the page to see the new burger.
        console.log('Created a new burger!')
        location.reload()
      })
    })
  }

  // UPDATE
  const devourItBtn = document.querySelectorAll('.change-devoured')

  if (devourItBtn) {
    devourItBtn.forEach(button => {
      button.addEventListener('click', e => {
        const id = e.target.getAttribute('data-id')
        
        const newDevouredState = {
          devoured: true
        }
        fetch(`/api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newDevouredState)
        }).then(response => {
          console.log(response)
          if (response.ok) {
            console.log(`changed devoured to: ${newDevouredState}`)
            location.reload('/')
          }
        })
      })
    })
  }
})
