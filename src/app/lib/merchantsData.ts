'use client'
import {useEffect, useState} from "react";

const ITEMS_PER_PAGE = 10;

export async function fetchMerchantPages(query: string) {
    try {
        //       const count = await sql`SELECT COUNT(*)
        //   FROM invoices
        //   JOIN customers ON invoices.customer_id = customers.id
        //   WHERE
        //     customers.name ILIKE ${`%${query}%`} OR
        //     customers.email ILIKE ${`%${query}%`} OR
        //     invoices.amount::text ILIKE ${`%${query}%`} OR
        //     invoices.date::text ILIKE ${`%${query}%`} OR
        //     invoices.status ILIKE ${`%${query}%`}
        // `;
        let count;
        const [data, setData] = useState([]);

        useEffect(() => {
            async function fetchData() {
                const response = await fetch('https://61a0ea8a6c3b400017e69ae8.mockapi.io/api/v1/users/merchants');
                const result = await response.json();
                setData(result);
            }

            fetchData();
        }, []);
        count = data.length;

        const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of invoices.');
    }
}
