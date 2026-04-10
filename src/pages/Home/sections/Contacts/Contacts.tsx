import {  Mail } from "lucide-react";

function Contacts() {
  return ( 
    <section id="contact" className="bg-gray-950 py-20 text-center">
      <h2 className="text-3xl font-bold text-purple-400 mb-4">
        Contato
      </h2>
      <p className="text-gray-400 mb-6">Vamos conversar!</p>

      <div className="flex justify-center gap-8">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-purple-400 transition">
          
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-purple-400 transition">
         
        </a>

        <a
          href="mailto:seuemail@email.com"
          className="text-gray-300 hover:text-purple-400 transition">
          <Mail size={30} />
        </a>
      </div>
    </section>
  );
}

export default Contacts;