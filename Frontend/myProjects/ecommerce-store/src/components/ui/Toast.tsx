interface ToastProps {
    message: string
    type: "success" | "error" | "info"
}

const styles = {
    success: "bg-green-600 text-white",
    error: "bg-red-600 text-white",
    info: "bg-blue-600 text-white",
}

const icons = {
    success: "✓",
    error: "✕",
    info: "ℹ"
}

const Toast = ({ message, type }: ToastProps) => {
    return (
        <div
            role="status"
            className={`flex items-center gap-3 rounded-lg px-4 py-3 shadow-lg min-w-64 ${styles[type]}`}
        >
            <span className="font-bold">{icons[type]}</span>
            <span className="text-sm">{message}</span>
        </div>
    )
}

export default Toast