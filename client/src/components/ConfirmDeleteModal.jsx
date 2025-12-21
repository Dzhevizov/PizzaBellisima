import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function ConfirmDeleteModal({ open, onCancel, onConfirm }) {
  if (!open) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
      <div
        className="
          bg-white rounded-lg shadow-xl p-6 w-full max-w-md border border-gray-200
          transform transition-all duration-200 ease-out
          animate-[fadeIn_0.2s_ease-out,scaleIn_0.2s_ease-out]
        "
      >
        <div className="flex items-center space-x-3">
          <ExclamationTriangleIcon className="h-8 w-8 text-red-600" />
          <h2 className="text-xl font-semibold text-gray-900">
            Изтриване на продукт
          </h2>
        </div>

        <p className="mt-3 text-gray-600">
          Сигурни ли сте, че искате да изтриете този продукт?  
          Това действие е необратимо.
        </p>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            Отказ
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-500"
          >
            Изтрий
          </button>
        </div>
      </div>

      {/* Анимации */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0 }
            to { opacity: 1 }
          }

          @keyframes scaleIn {
            from { transform: scale(0.95) }
            to { transform: scale(1) }
          }
        `}
      </style>
    </div>
  );
}
