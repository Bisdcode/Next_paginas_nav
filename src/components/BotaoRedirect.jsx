"use client"

import { useRouter } from "next/navigation"

const BotaoRedirect = () => {
    const router = useRouter();
    
    function sendEmailAndRedirect() {
        // envio do email
        router.push("/dashboard");
    }

  // biome-ignore lint/a11y/useButtonType: <explanation>
  return <button onClick={sendEmailAndRedirect}>Finalizar envio</button>

}

export default BotaoRedirect
