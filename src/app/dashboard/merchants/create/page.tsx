import Form from '@/app/ui/merchants/create-form';
import Breadcrumbs from '@/app/ui/users/breadcrumbs';

export default async function Page() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {label: 'Merchants', href: '/dashboard/merchants'},
                    {
                        label: 'Create Merchant',
                        href: '/dashboard/merchants/create',
                        active: true,
                    },
                ]}
            />
            <Form />
        </main>
    );
}
