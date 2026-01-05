import React from 'react'
import { useForm } from 'react-hook-form'
import { slide1 } from "@images"


function SignupForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid }
    } = useForm({ mode: 'onChange' })

    const password = watch("Password")

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='flex flex-col w-[960px] h-[480px] justify-center mt-32 mx-auto px-10 py-10 rounded-3xl bg-cover  '
            style={{ backgroundImage: `url(${slide1})` }}
        >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-96 pl-14  ">


                <label className='text-gray '>Name</label>
                <input
                    className='w-full bg-gray border border-b-primary rounded-lg'
                    {...register("Name", {
                        required: "İsim zorunlu",
                        minLength: { value: 3, message: "En az 3 karakterli olmalı" }
                    })}
                    placeholder='Name'
                />
                {errors.Name && <span className="text-alert">{errors.Name.message}</span>}


                <label className='text-gray'>Email</label>
                <input
                    type="email"
                    className='w-full bg-gray border border-b-primary rounded-lg'
                    {...register("Email", {
                        required: "Email zorunlu",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Geçerli bir email gir"
                        }
                    })}
                    placeholder='Email'
                />
                {errors.Email && <span className="text-alert">{errors.Email.message}</span>}


                <label className='text-gray'>Password</label>
                <input
                    type="password"
                    className='w-full bg-gray border border-b-primary rounded-lg'
                    {...register("Password", {
                        required: "Şifre zorunlu",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                            message: "En az 8 karakter, büyük-küçük harf, sayı ve özel karakter"
                        }
                    })}
                    placeholder='Password'
                />
                {errors.Password && <span className="text-alert">{errors.Password.message}</span>}


                <label className='text-gray'>Password Again</label>
                <input
                    type="password"
                    className='w-full bg-gray border border-b-primary rounded-lg'
                    {...register("PasswordValid", {
                        validate: value =>
                            value === password || "Şifreler uyuşmuyor"
                    })}
                    placeholder='Password Again'
                />
                {errors.PasswordValid && (
                    <span className="text-alert">{errors.PasswordValid.message}</span>
                )}


                <button
                    disabled={!isValid}
                    className='mt-4 bg-primary text-white py-2 rounded-lg disabled:opacity-50'
                >
                    Kayıt Ol
                </button>

            </form>


        </div>
    )
}

export default SignupForm
