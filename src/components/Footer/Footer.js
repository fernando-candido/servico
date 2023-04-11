import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <p>Meu footer</p>
        <div>
         <span> todos os direitos reservados </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;