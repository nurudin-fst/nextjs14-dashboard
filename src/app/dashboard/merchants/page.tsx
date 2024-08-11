import Search from '@/app/ui/search';
import {lusitana} from '@/app/ui/fonts';
import {MerchantTableSkeleton} from "@/app/ui/skeletons";
import React, {Suspense} from "react";
import Table from '@/app/ui/merchants/table';
import {Metadata} from "next";
import Pagination from '@/app/ui/merchants/pagination';
import { CreateMerchant } from '@/app/ui/merchants/buttons';

const fetchMerchants = async (query: string, currentPage: number) => {
    const response = await fetch(`https://61a0ea8a6c3b400017e69ae8.mockapi.io/api/v1/users/merchants?search=${query}`);
    const data = await response.json();
    const startIndex = (currentPage - 1) * 10
    return {
        merchants: data.slice(startIndex, startIndex + 10),
        count: data.length
    };
};

export const metadata: Metadata = {
    title: 'Merchants',
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const data = await fetchMerchants(query, currentPage)
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Merchants</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search merchants..."/>
                <CreateMerchant/>
            </div>
            <Suspense key={query + currentPage} fallback={<MerchantTableSkeleton/>}>
                <Table merchants={data.merchants} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={Math.ceil(data.count / 10)}/>
            </div>
        </div>
    );
}
