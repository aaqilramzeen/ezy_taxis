"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsappChat = () => {
    return (
      <FloatingWhatsApp
        phoneNumber="447749439999"
        accountName="EZY Taxis"
        statusMessage="Typically replies within few minutes"
        avatar="/logo.png"
        chatMessage="Hello there! How can we help you?"
      />
    );
}

export default WhatsappChat;