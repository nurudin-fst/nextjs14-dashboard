import Search from '@/app/ui/search';
import {CreateUser} from '@/app/ui/users/buttons';
import {lusitana} from '@/app/ui/fonts';
import {UsersTableSkeleton} from "@/app/ui/skeletons";
import React, {Suspense} from "react";
import Table from '@/app/ui/users/table';
import {Metadata} from "next";
import Pagination from '@/app/ui/users/pagination';

const fetchUsers = async (query: string) => {
    const response = await fetch(`https://61a0ea8a6c3b400017e69ae8.mockapi.io/api/v1/users/users?search=${query}`);
    const data = await response.json();
    return {
        users: data,
        count: data.length
    };
};

export const metadata: Metadata = {
    title: 'Users',
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
    const data = await fetchUsers(query)
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Users</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search users..."/>
                <CreateUser/>
            </div>
            <Suspense key={query + currentPage} fallback={<UsersTableSkeleton/>}>
                <Table users={data.users} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={data.count}/>
            </div>
        </div>
    );
}
