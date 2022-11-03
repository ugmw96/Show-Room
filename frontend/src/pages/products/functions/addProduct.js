
export const addNewProduct = (formData) => {
  try {
    fetch('http://localhost:8080/api/product/new', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
          'Content-Type': 'application/json'
      },
  })
  .then(res => res.json())
  .then(data => console.log(data)); 
  } catch (error) {
    console.log(error);
  }
}
