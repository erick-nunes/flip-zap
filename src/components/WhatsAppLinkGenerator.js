"use client"

import React, { useState } from 'react';

const WhatsAppLinkGenerator = () => {
  const [phoneNumbers, setPhoneNumbers] = useState('');
  const [processedNumbers, setProcessedNumbers] = useState([]);

  const processPhoneNumbers = () => {
    // Divide o texto em linhas e processa cada número
    const numbers = phoneNumbers.split('\n').filter(n => n.trim());
    
    const processed = numbers.map(number => {
      // Remove todos os caracteres não numéricos
      let cleaned = number.replace(/\D/g, '');
      
      // Adiciona o código do país (55) se não existir
      if (cleaned.length === 11 || cleaned.length === 10) {
        cleaned = '55' + cleaned;
      }
      // Se o número tiver 8 dígitos (sem DDD), assume DDD 11
      else if (cleaned.length === 8) {
        cleaned = '5511' + cleaned;
      }
      // Se o número tiver 9 dígitos (sem DDD), assume DDD 11
      else if (cleaned.length === 9) {
        cleaned = '5511' + cleaned;
      }
      
      return {
        original: number.trim(),
        processed: cleaned,
        valid: cleaned.length >= 12 && cleaned.length <= 13
      };
    });
    
    setProcessedNumbers(processed);
  };

  const createWhatsAppLink = (number) => {
    return `https://wa.me/${number}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4 text-black">Gerador de Links do WhatsApp</h1>
        <div className="mb-4">
          <textarea 
            value={phoneNumbers}
            onChange={(e) => setPhoneNumbers(e.target.value)}
            placeholder="Cole aqui os números de telefone (um por linha)"
            className="w-full h-32 p-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button 
          onClick={processPhoneNumbers}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Processar Números
        </button>
      </div>

      {processedNumbers.length > 0 && (
        <div className="mt-6">
          <h3 className="font-medium mb-4 text-black font-semibold">Números Processados:</h3>
          <div className="space-y-3">
            {processedNumbers.map((item, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-md ${item.valid ? 'bg-green-50' : 'bg-red-50'}`}
              >
                <p className="text-sm mb-2 text-slate-600">
                  Original: {item.original}
                </p>
                {item.valid ? (
                  <a
                    href={createWhatsAppLink(item.processed)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Abrir no WhatsApp
                  </a>
                ) : (
                  <p className="text-red-500 text-sm">
                    Número inválido
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppLinkGenerator;