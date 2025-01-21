import toast, { Toast } from 'react-hot-toast';

const showToast = (message: string, variant?: 'success' | 'error') => {
	const toastOptions: Partial<
		Pick<
			Toast,
			| 'id'
			| 'icon'
			| 'duration'
			| 'ariaProps'
			| 'className'
			| 'style'
			| 'position'
			| 'iconTheme'
		>
	> = {};

	if (variant === 'success') {
		return toast.success(message, toastOptions);
	} else if (variant === 'error') {
		return toast.error(message, toastOptions);
	} else {
		return toast(message, toastOptions);
	}
};

export default showToast;
