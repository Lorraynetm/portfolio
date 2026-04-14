import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_4k7euzt",
        "template_6dqdie5",
        form.current,
        "1PUlpVn5uUC_-jM5U"
      )
      .then(
        () => {
          setStatus("Mensagem enviada com sucesso!");
          form.current?.reset();
        },
        () => {
          setStatus("Erro ao enviar a mensagem. Tente novamente.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-20 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400">
          Contato
        </h2>
        <p className="text-gray-400 mt-4">
          Entre em contato comigo preenchendo o formulário abaixo.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-10 bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Sua mensagem"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 transition duration-300 text-white font-semibold py-3 rounded-lg"
          >
            Enviar Mensagem
          </button>

          {status && (
            <p className="text-gray-300 mt-4">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;