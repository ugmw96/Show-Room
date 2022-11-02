import React from 'react'
import { AppButtonWrapper, InputField, Lable } from '../../shared/styles/Elements';
import { useForm } from "react-hook-form";



function NewProductForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Lable>Name</Lable> <InputField {...register("name")}/>
        <Lable>Price</Lable> <InputField type='number' min='0' {...register("price")}/>
        <Lable>Description</Lable> <InputField {...register("description")}/>
        <Lable>Image Url</Lable> <InputField {...register("imageUrl")}/>
        <AppButtonWrapper type='submit'>Add</AppButtonWrapper>
      </form>
    </div>
  )
}

export default NewProductForm
