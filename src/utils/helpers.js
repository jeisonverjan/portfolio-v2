import emailjs from "@emailjs/browser";
export function sentEmail(form) {
  emailjs
    .sendForm(
      "service_dclwuqw",
      "template_pn7p1gp",
      form.current,
      "fH7Z_AyTL83FdkZnC"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
