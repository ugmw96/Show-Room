
const deleteProduct = async (id) => {
  console.log(id);
try {
  await fetch(`http://localhost:8080/api/product/${id}`, {
    method: 'Delete',
  })
} catch (error) {
  console.log(error);
}
  
}

export default deleteProduct
