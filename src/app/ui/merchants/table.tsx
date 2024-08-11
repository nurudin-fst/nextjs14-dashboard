import { DeleteUser, UpdateUser } from "@/app/ui/users/buttons";
import { DeleteMerchant, UpdateMerchant } from "./buttons";

type Merchant = {
  id: string;
  merchantFullName: string;
  merchantShortName: string;
  city: string;
  postcode: string;
  criteria: string;
  terminalQuantity: string;
  merchantType: string;
  npwp: string;
  qrType: string;
};

export default async function MerchantsTable({ merchants }: { merchants: Merchant[] }) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {merchants?.map((merchant) => (
              <div
                key={merchant.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{merchant.merchantFullName} {merchant.merchantShortName}</p>
                    </div>
                    <p className="text-sm text-gray-500">{merchant.city} ({merchant.postcode})</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <UpdateMerchant id={merchant.id} />
                    <DeleteMerchant id={merchant.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Merchant Full Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Merchant Short Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  City
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Postcode
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Criteria
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Terminal Quantity
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Merchant Type
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  NPWP
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  QR Type
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {merchants?.map((merchant) => (
                <tr
                  key={merchant.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3 pl-6">
                    {merchant.id}
                  </td>
                  <td className="whitespace-nowrap py-3 pr-3">
                    {merchant.merchantFullName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {merchant.merchantShortName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {merchant.city}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {merchant.postcode}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {merchant.criteria}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {merchant.terminalQuantity}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {merchant.merchantType}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {merchant.npwp}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {merchant.qrType}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateMerchant id={merchant.id} />
                      <DeleteMerchant id={merchant.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
