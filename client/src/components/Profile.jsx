import { useState } from "react";

export default function ProfilePage({ user }) {
  // user идва от контекста или пропс: { username, firstName, lastName, email, address, city, notes }
  const [editMode, setEditMode] = useState(false);

  // локален state за редакция
  const [formData, setFormData] = useState({
    username: user?.username || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    address: user?.address || "",
    city: user?.city || "",
    notes: user?.notes || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: извикване на updateProfile(formData)
    console.log("Запазени данни:", formData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setFormData({
      username: user?.username,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      address: user?.address,
      city: user?.city,
      notes: user?.notes,
    });
    setEditMode(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-100 shadow-lg rounded-lg p-8">
      <form onSubmit={handleSave} className="space-y-12">
        {/* Профил */}
        <div className="border-b border-gray-300 pb-8">
          <h2 className="text-xl font-bold text-gray-900">Моят профил</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Потребителско име
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                disabled={!editMode}
                className={`mt-2 block w-full rounded-md border border-gray-400 px-3 py-2 text-gray-900 shadow-sm sm:text-sm ${
                  editMode
                    ? "bg-white focus:border-red-500 focus:ring-red-500"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              />
            </div>

            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                Име
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                disabled={!editMode}
                className={`mt-2 block w-full rounded-md border border-gray-400 px-3 py-2 text-gray-900 shadow-sm sm:text-sm ${
                  editMode
                    ? "bg-white focus:border-red-500 focus:ring-red-500"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Фамилия
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                disabled={!editMode}
                className={`mt-2 block w-full rounded-md border border-gray-400 px-3 py-2 text-gray-900 shadow-sm sm:text-sm ${
                  editMode
                    ? "bg-white focus:border-red-500 focus:ring-red-500"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!editMode}
                className={`mt-2 block w-full rounded-md border border-gray-400 px-3 py-2 text-gray-900 shadow-sm sm:text-sm ${
                  editMode
                    ? "bg-white focus:border-red-500 focus:ring-red-500"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Адрес за доставка
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                disabled={!editMode}
                className={`mt-2 block w-full rounded-md border border-gray-400 px-3 py-2 text-gray-900 shadow-sm sm:text-sm ${
                  editMode
                    ? "bg-white focus:border-red-500 focus:ring-red-500"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                Град
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                disabled={!editMode}
                className={`mt-2 block w-full rounded-md border border-gray-400 px-3 py-2 text-gray-900 shadow-sm sm:text-sm ${
                  editMode
                    ? "bg-white focus:border-red-500 focus:ring-red-500"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Бележки */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
            Бележки
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            disabled={!editMode}
            className={`mt-2 block w-full rounded-md border border-gray-400 px-3 py-2 text-gray-900 shadow-sm sm:text-sm ${
              editMode
                ? "bg-white focus:border-red-500 focus:ring-red-500"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          />
        </div>

        {/* Бутони */}
        <div className="mt-8 flex items-center justify-end gap-x-4">
          {!editMode ? (
            <button
              type="button"
              onClick={() => setEditMode(true)}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Редактирай
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={handleCancel}
                className="rounded-md border border-gray-400 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Отмени
              </button>
              <button
                type="submit"
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Запази
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
