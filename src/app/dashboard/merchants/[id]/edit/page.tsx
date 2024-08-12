import Form from '@/app/ui/merchants/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import {notFound} from 'next/navigation';
import {Metadata} from 'next';

const fetchMerchant = async (id: string) => {
    const response = await fetch(`https://61a0ea8a6c3b400017e69ae8.mockapi.io/api/v1/users/merchants/${id}`);
    const data = await response.json();
    return data
};
export const metadata: Metadata = {
    title: 'Edit User',
};

export default async function Page({params}: { params: { id: string } }) {
    const id = params.id;
    const merchant = await fetchMerchant(id)

    if (!merchant) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {label: 'Merchants', href: '/dashboard/merchants'},
                    {
                        label: 'Edit Merchant',
                        href: `/dashboard/merchants/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form merchant={merchant} />
        </main>
    );
}
