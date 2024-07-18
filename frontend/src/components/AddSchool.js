import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddSchool = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (imagePreview) {
      data.image = imagePreview;
    }
    console.log("data", data);
    try {
      const response = await axios.post('http://localhost:3001/addSchool', data);
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error adding school:', error);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImagePreview(null);
      setValue('image', null, { shouldValidate: true });
      return;
    }

    const data = await ImagetoBase64(file);
    setImagePreview(data);
    setValue('image', data, { shouldValidate: true });
  };

  return (
    <div className="container mx-auto p-6 max-w-md bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <input
            {...register('name', { required: 'School Name is required' })}
            placeholder="School Name"
            className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <input
            {...register('address', { required: 'Address is required' })}
            placeholder="Address"
            className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.address && <p className="text-red-600">{errors.address.message}</p>}
        </div>
        <div>
          <input
            {...register('city', { required: 'City is required' })}
            placeholder="City"
            className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.city && <p className="text-red-600">{errors.city.message}</p>}
        </div>
        <div>
          <input
            {...register('state', { required: 'State is required' })}
            placeholder="State"
            className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.state && <p className="text-red-600">{errors.state.message}</p>}
        </div>
        <div>
          <input
            {...register('contact', { required: 'Contact Number is required' })}
            placeholder="Contact Number"
            className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.contact && <p className="text-red-600">{errors.contact.message}</p>}
        </div>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            placeholder='Select Image'
            className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.image && <p className="text-red-600">{errors.image.message}</p>}
        </div>
        <div>
          {imagePreview && <img src={imagePreview} alt="Image Preview" className="mt-2 w-full h-auto rounded-md shadow-md" />}
        </div>
        <div>
          <input
            {...register('email_id', { required: 'Email is required' })}
            placeholder="Email"
            className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.email_id && <p className="text-red-600">{errors.email_id.message}</p>}
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add School
        </button>
      </form>
    </div>
  );
};

export default AddSchool;