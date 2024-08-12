import Form from '@/app/ui/users/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import {notFound} from 'next/navigation';
import {Metadata} from 'next';

const fetchUser = async (id: string) => {
    const response = await fetch(`https://61a0ea8a6c3b400017e69ae8.mockapi.io/api/v1/users/users/${id}`);
    const data = await response.json();
    return data
};
export const metadata: Metadata = {
    title: 'Edit User',
};

export default async function Page({params}: { params: { id: string } }) {
    const id = params.id;
    const user = await fetchUser(id)

    if (!user) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {label: 'Users', href: '/dashboard/users'},
                    {
                        label: 'Edit User',
                        href: `/dashboard/users/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form user={user} />
        </main>
    );
}
