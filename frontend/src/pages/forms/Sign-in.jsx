import React, { useState } from 'react';
import Navbar from '../../components/general/navBar'
import Footer from '../../components/general/footer'
import {Input} from '../../components/forms/input'
import {Label} from '../../components/forms/label'
import RegisterButton from '../../components/forms/registerButton'
import axios from 'axios'

const SignIn = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:5000/register', {
            nombre,
            email,
            password
        });
        console.log(response.data);
        } catch (error) {
        console.error('Error al registrar el usuario:', error);
        }
    };

    return(
        <>
    <Navbar/>
    <div className="bg-black h-screen">
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md">
        <h2 class="mb-12 text-center text-5xl font-extrabold text-[#E31FAE]">Bienvenido.</h2>
            <form onSubmit={handleSubmit} className="mt-10 border border-white p-10 rounded-lg">
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div className="text-center font-bold">
                        <Label htmlFor="name">Nombre completo </Label>
                        <Input
                            id='name'
                            name='name'
                            type='text'
                            required
                            value={nombre} onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="text-center font-bold">
                        <Label htmlFor="emailAdress">Correo electronico </Label>
                        <Input
                            id='emailAdress'
                            name='email'
                            type='email'
                            required
                            value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="text-center font-bold">
                    <Label htmlFor="level">Nivel educativo </Label>
                        <Input
                            id='level'
                            name='level'
                            type='text'
                            required
                            
                        />  
                    </div>
                    <div className="text-center font-bold">
                    <Label htmlFor="speciality">Especialidad</Label>
                        <Input
                            id='speciality'
                            name='speciality'
                            type='text'
                            required
                           
                        />  
                    </div>
                    <div className="text-center font-bold">
                    <Label htmlFor="identify">Carnet </Label>
                        <Input
                            id='identify'
                            name='identify'
                            type='text'
                            required
                            
                        /> 
                    </div>
                    <div className='text-center font-bold'>
                    <Label htmlFor="password">Contraseña </Label>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            required
                            
                        />  
                    </div>
                </div>
                <RegisterButton/>
            </form>
        </section>
    </div>
    <Footer/>
</>

    );
}

export default SignIn;