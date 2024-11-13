import WhatsAppLinkGenerator from '@/components/WhatsAppLinkGenerator'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <WhatsAppLinkGenerator />
      <div className='text-center text-slate-800 mt-6 text-sm font-thin antialiased'> Desenvolvido por <a href='https://ericknunes.dev' target='_blank' className='text-blue-500'>Erick Nunes</a></div>
    </main>
  )
}