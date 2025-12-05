import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged, reauthenticateWithCredential, EmailAuthProvider, signOut, User } from 'firebase/auth';

@Component({
	selector: 'app-header',
	template: `
		<nav>
			<span *ngIf="user">Bienvenido, {{ user?.email }}</span>
			<button *ngIf="user" (click)="requestPasswordAndLogout()">Cerrar sesión</button>
			<span *ngIf="!user">No has iniciado sesión</span>
		</nav>
	`,
})
export class NavbarComponent implements OnInit {
	user: User | null = null;
	private auth = getAuth();

	constructor() {}

	ngOnInit() {
		onAuthStateChanged(this.auth, (user) => {
			this.user = user;
		});
	}

	async requestPasswordAndLogout() {
		if (!this.user || !this.user.email) {
			window.alert('No hay usuario autenticado');
			return;
		}

		const password = window.prompt('Por favor ingresa tu contraseña para confirmar:');
		if (password === null) {
			// Usuario canceló
			return;
		}

		try {
			const credential = EmailAuthProvider.credential(this.user.email, password);
			await reauthenticateWithCredential(this.user, credential);
			await signOut(this.auth);
			window.alert('Sesión cerrada correctamente.');
			// Opcional: redirigir o actualizar estado de la app
		} catch (err: any) {
			console.error('Error al reautenticar o cerrar sesión:', err);
			window.alert('Contraseña incorrecta o error al procesar la petición.');
		}
	}
}
