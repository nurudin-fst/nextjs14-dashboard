'use client';

import {MerchantForm} from '@/app/lib/definitions';
import {AdjustmentsHorizontalIcon, BuildingOfficeIcon, IdentificationIcon, QueueListIcon, UserIcon,} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {Button} from '@/app/ui/button';
import {useActionState} from "react";
import { State, updateMerchant } from '@/app/lib/merchants';

export default function EditMerchantForm({
    merchant,
}: {
    merchant: MerchantForm;
}) {
    const initialState: State = {message: null, errors: {}};
    const updateMerchantWithId = updateMerchant.bind(null, merchant.id)
    const [state, formAction] = useActionState(updateMerchantWithId, initialState);
    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="merchantFullName" className="mb-2 block text-sm font-medium">
                        Mechant Full Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="merchantFullName"
                                name="merchantFullName"
                                type="text"
                                placeholder="Enter Merchant Full Name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={merchant.merchantFullName}
                            />
                            <UserIcon
                                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                        </div>
                    </div>
                    {state.errors?.merchantFullName &&
                        state.errors.merchantFullName.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div>
                <div className="mb-4">
                    <label htmlFor="merchantShortName" className="mb-2 block text-sm font-medium">
                        Mechant Short Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="merchantShortName"
                                name="merchantShortName"
                                type="text"
                                placeholder="Enter Merchant Short Name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={merchant.merchantShortName}
                            />
                            <UserIcon
                                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                        </div>
                    </div>
                    {state.errors?.merchantShortName &&
                        state.errors.merchantShortName.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="mb-2 block text-sm font-medium">
                        City
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="city"
                                name="city"
                                type="text"
                                placeholder="Enter City"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={merchant.city}
                            />
                            <BuildingOfficeIcon
                                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                        </div>
                    </div>
                    {state.errors?.city &&
                        state.errors.city.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div>
                <div className="mb-4">
                    <label htmlFor="postcode" className="mb-2 block text-sm font-medium">
                        Postcode
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="postcode"
                                name="postcode"
                                type="number"
                                placeholder="Enter Postcode"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={merchant.postcode}
                            />
                            <IdentificationIcon
                                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                        </div>
                    </div>
                    {state.errors?.postcode &&
                        state.errors.postcode.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div>
                <div className="mb-4">
                    <label htmlFor="criteria" className="mb-2 block text-sm font-medium">
                        Criteria
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="criteria"
                                name="criteria"
                                type="text"
                                placeholder="Enter Criteria"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={merchant.criteria}
                            />
                            <QueueListIcon
                                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                        </div>
                    </div>
                    {state.errors?.criteria &&
                        state.errors.criteria.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div>
                <div className="mb-4">
                    <label htmlFor="terminalQuantity" className="mb-2 block text-sm font-medium">
                        Terminal Quantity
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="terminalQuantity"
                                name="terminalQuantity"
                                type="number"
                                placeholder="Enter Terminal Quantity"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={merchant.terminalQuantity}
                            />
                            <AdjustmentsHorizontalIcon
                                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                        </div>
                    </div>
                    {state.errors?.terminalQuantity &&
                        state.errors.terminalQuantity.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div>
                <div className="mb-4">
                    <label htmlFor="merchantType" className="mb-2 block text-sm font-medium">
                        Mechant Type
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="merchantType"
                                name="merchantType"
                                type="text"
                                placeholder="Enter Merchant Type"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={merchant.merchantType}
                            />
                            <UserIcon
                                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                        </div>
                    </div>
                    {state.errors?.merchantType &&
                        state.errors.merchantType.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div>
                <div className="mb-4">
                    <label htmlFor="npwp" className="mb-2 block text-sm font-medium">
                        NPWP
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="npwp"
                                name="npwp"
                                type="text"
                                placeholder="Enter NPWP"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={merchant.npwp}
                            />
                            <UserIcon
                                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                        </div>
                    </div>
                    {state.errors?.npwp &&
                        state.errors.npwp.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div>
                <div className="mb-4">
                    <label htmlFor="qrType" className="mb-2 block text-sm font-medium">
                        QR Type
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="qrType"
                                name="qrType"
                                type="text"
                                placeholder="Enter QR Type"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={merchant.qrType}
                            />
                            <UserIcon
                                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                        </div>
                    </div>
                    {state.errors?.qrType &&
                        state.errors.qrType.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                    ))}
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/users"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Edit User</Button>
            </div>
        </form>
    );
}
