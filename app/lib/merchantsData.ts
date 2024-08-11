'use client'

const ITEMS_PER_PAGE = 10;

export async function fetchMerchantPages(query: string) {
    try {
        let count;
        const response = await fetch('https://61a0ea8a6c3b400017e69ae8.mockapi.io/api/v1/users/merchants');
        const result = await response.json();
        count = result.length;

        const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of invoices.');
    }
}
