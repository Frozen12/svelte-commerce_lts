import { OrdersService } from '$lib/services'
import { error, redirect } from '@sveltejs/kit'

export async function load({ locals }) {
	try {
		const storeId = locals.storeId
		const sid = locals.sid
		const res = await OrdersService.fetchOrders({
			storeId,
			server: true,
			sid
		})

		if (res) {
			return res
		}
	} catch (e) {
		redirect(307, '/auth/login')
	}

	error(404, 'Orders not found')
}
