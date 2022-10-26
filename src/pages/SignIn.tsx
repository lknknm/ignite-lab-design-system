import '../styles/global.css';

import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from "../components/TextInput";
import { Checkbox } from '../components/Checkbox';
import { Button } from '../components/Button';
import { Logo } from '../Logo';

import { Envelope } from "phosphor-react";
import { Lock } from "phosphor-react";
import { FormEvent, useState } from 'react';

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    function handleSignIn(event: FormEvent) {
        event.preventDefault()

        setIsUserSignedIn(true)
    }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100"> 
        <div className="
        w-[464px] h-[700px] 
        rounded-3xl 
        drop-shadow
        ">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-white to-gray-100 blur-2xl rounded-3xl opacity-20"></div>
        <div className="
        bg-gray-900
        w-[464px] h-[700px] 
        border-[1px]
        border-lime-400
        rounded-3xl 
        flex flex-col 
        drop-shadow
        items-center
        justify-center 
        ">
            <header className='flex flex-col items-center'>
                <Logo className="drop-shadow"/>

                <Heading size="lg" className="mt-0">
                overPass
                </Heading>

                <Text size="sm" className="mt-0 font-regular">
                Faça login para acessar o seu cofre protegido.
                </Text>
            </header>

            <form onSubmit={handleSignIn} className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
                { isUserSignedIn && <Text>Login realizado!</Text> }
                
                <label htmlFor="email" className="flex flex-col gap-3">
                <Text className="font-semibold">Endereço de e-mail</Text>
                <TextInput.Root>
                    <TextInput.Icon>
                    <Envelope />
                    </TextInput.Icon>

                    <TextInput.Input id='e-mail' placeholder="Digite seu e-mail" />

                </TextInput.Root>
                </label>

                <label htmlFor="password" className="flex flex-col gap-3">
                <Text className="font-semibold">Sua senha</Text>
                <TextInput.Root>
                    <TextInput.Icon>
                    <Lock />
                    </TextInput.Icon>

                    <TextInput.Input type="password" id="password" placeholder="*******"/>
                </TextInput.Root>
                </label>

                <label htmlFor="remember" className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Text size="sm" className='text-gray-200'>Lembrar de mim por 30 dias</Text>
                </label>

                <Button type="submit" className="mt-4">Log In</Button>
            </form>

            <footer className="flex flex-col items-center gap-3 mt-8">
                <Text asChild size="sm">
                <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
                </Text>
                <Text asChild size="sm">
                <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
                </Text>
            </footer>
            </div>
        </div>
    </div>
  )
}