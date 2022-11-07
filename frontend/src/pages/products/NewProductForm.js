import React from 'react'
import { AppButtonWrapper, InputField, Lable } from '../../shared/styles/Elements';
import { useForm } from "react-hook-form";
import { addNewProduct } from './functions/addProduct';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Case study name is required')
})


function NewProductForm() {
  // const [ formData, setFormData ] = useForm();
  const { register, handleSubmit } = useForm();
  const onSubmit = async data =>  addNewProduct(data);


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Lable>Name</Lable> <InputField name='name' type='text' {...register("name")}/>
        <Lable>Price</Lable> <InputField type='number' min='0' {...register("price")}/>
        <Lable>Description</Lable> <InputField {...register("description")}/>
        <Lable>Image Url</Lable> <InputField {...register("image")}/>
        <AppButtonWrapper type='submit'>Add</AppButtonWrapper>
      </form>
    </div>
  )
}

export default NewProductForm
