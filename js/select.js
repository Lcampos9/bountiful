// select HTML elements in the document
const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        
        const names = data.map(object => object.name);
        console.log(names);
        
        names.forEach(name => {

          const option1 = document.createElement('option');
          option1.innerHTML = name;


          const option2 = document.createElement('option');
          option2.innerHTML = name;

          const option3 = document.createElement('option');
          option3.innerHTML = name;
          document.getElementById('fruit1').appendChild(option1);
          document.getElementById('fruit2').appendChild(option2);
          document.getElementById('fruit3').appendChild(option3);
        });






      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();
  

  // Get a reference to the button and the <div> element
  const button = document.querySelector('#formbuttom');
  const outputDiv1 = document.querySelector('#displayform');
  var outputDiv2 = document.querySelector('#storeid1');
  var outputDiv3 = document.querySelector('#storeid2');
  var outputDiv4 = document.querySelector('#storeid3');
// Add a click event listener to the button
button.addEventListener('click', () => {
  // Get the values of each form element
  const firstName = document.querySelector('#fname').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  var fruit1 = document.querySelector('#fruit1').value;
  var fruit2 = document.querySelector('#fruit2').value;
  var fruit3 = document.querySelector('#fruit3').value;
  const desc = document.querySelector('#descr').value;

  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  
  // Set the innerHTML of the output <div> to a string containing the form information
  outputDiv1.innerHTML = `
 
    <p><strong>First Name:</strong> ${firstName}</p><br>
    <p><strong>Email:</strong> ${email}</p><br>
    <p><strong>Phone:</strong> ${phone}</p><br>
    <p><strong>Fruit 1:</strong> ${fruit1}</p><br>
    <p><strong>Fruit 2:</strong> ${fruit2}</p><br>
    <p><strong>Fruit 3:</strong> ${fruit3}</p><br>
    <p><strong>Special Instructions: </strong>${desc}</p><br>
    <p><strong>Order Date:</strong>${dateString}</p>
  `;
  outputDiv2.innerHTML = fruit1;
  outputDiv3.innerHTML = fruit2;
  outputDiv4.innerHTML = fruit3;
  
});


// select HTML elements in the document
const url1 = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function apiFetch1() {
    try {
      const response = await fetch(url1);
      if (response.ok) {
        const data1 = await response.json();

        const value1 = outputDiv2;

        const result = data1.find(obj => obj.name === value1);

        console.log(result);
     
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch1();