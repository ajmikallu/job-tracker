function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Job Tracker</p>
        <p className="opacity-75">Built with React + Vite</p>
      </div>
    </footer>
  )
}

export default Footer
