import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Visitors'
	}
});

export default app;