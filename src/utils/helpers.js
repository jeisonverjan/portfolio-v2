import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const serviceId = import.meta.env.VITE_MY_EMAILJS_ID;
const templateId = import.meta.env.VITE_MY_EMAILJS_TEMPLATE;
const publicKey = import.meta.env.VITE_MY_EMAILJS_KEY;

export function sentEmail(form) {
  emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
    (result) => {
      toast.success("Message successfully sent!");
      console.log(result.text);
    },
    (error) => {
      toast.error("Error sending the message", error.message);
    }
  );
}
