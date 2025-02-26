'use client'

import { useQuery } from '@tanstack/react-query'

import { readInvoicesItems } from '@billing/invoice/services/item/read-invoice-items'

export const useReadInvoiceItems = (invoice_id: number) => {
    return useQuery({
        queryKey: ['invoice-items', { invoice_id }],
        queryFn: () => readInvoicesItems(invoice_id)
    })
}
