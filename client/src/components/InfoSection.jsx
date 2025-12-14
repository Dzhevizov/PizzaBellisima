export default function InfoSection() {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/pizza-bg.jpg')" }}
    >
      {/* Overlay за четимост */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Съдържание */}
      <div className="relative max-w-4xl mx-auto text-center text-white py-12 px-6 sm:px-12 lg:px-24">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-red-400">
          Защо да изберете Pizza Bellissima?
        </h2>
        <p className="mt-6 text-lg leading-8 sm:text-xl">
          Нашите пици се приготвят с автентични италиански продукти, 
          свежи зеленчуци и специално подбрани сирена. 
          Независимо дали поръчвате за дома или офиса, 
          винаги получавате вкус, който носи радост.
        </p>
      </div>
    </section>
  );
}
