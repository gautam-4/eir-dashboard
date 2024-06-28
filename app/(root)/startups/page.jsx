import Link from "next/link";

const startups = [
  {
    id: 1,
    name: 'Company A',
    domain: 'Technology',
    eirAssigned: 'Shivani',
    stage: 'L1',
    prioritylevel: 'S1',
    isCurrent: false,
  },
  {
    id: 2,
    name: 'Company B',
    domain: 'NonTechnology',
    eirAssigned: 'Dhruv',
    stage: 'L2',
    prioritylevel: 'S3',
    isCurrent: false,
  },
  // More startups...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function StartupList() {
  // const router = useRouter();

  // const handleSelect = (id) => {
  //   router.push(`/startups/${id}/about`);
  // };

  return (
    <div className="px-4 sm:px-6 lg:px-8 text-gray-100">
      <div className="sm:flex sm:items-center">
        <div className="max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-100">Startups</h1>
        </div>
      </div>
      <div className="-mx-4 mt-10 ring-1 ring-gray-700 sm:-mx-6 md:mx-0 md:rounded-lg bg-black">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6">
                Startup Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell"
              >
                Domain
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell"
              >
                EIR Assigned
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell"
              >
                Stage
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">
                Priority Level
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Select</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {startups.map((startup, startupIdx) => (
              <tr key={startup.id}>
                <td
                  className={classNames(
                    startupIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-4 pl-4 sm:pl-6 pr-3 text-sm text-gray-100'
                  )}
                >
                  <div className="font-medium text-gray-100">
                    {startup.name}
                    {startup.isCurrent ? <span className="ml-1 text-indigo-400">(Current startup)</span> : null}
                  </div>
                  <div className="mt-1 flex flex-col text-gray-400 sm:block lg:hidden">
                    <span>
                      {startup.domain} / {startup.eirAssigned}
                    </span>
                    <span className="hidden sm:inline">·</span>
                    <span>{startup.stage}</span>
                  </div>
                  {startupIdx !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-800" /> : null}
                </td>
                <td
                  className={classNames(
                    startupIdx === 0 ? '' : 'border-t border-gray-800',
                    'hidden px-3 py-3.5 text-sm text-gray-400 lg:table-cell'
                  )}
                >
                  {startup.domain}
                </td>
                <td
                  className={classNames(
                    startupIdx === 0 ? '' : 'border-t border-gray-800',
                    'hidden px-3 py-3.5 text-sm text-gray-400 lg:table-cell'
                  )}
                >
                  {startup.eirAssigned}
                </td>
                <td
                  className={classNames(
                    startupIdx === 0 ? '' : 'border-t border-gray-800',
                    'hidden px-3 py-3.5 text-sm text-gray-400 lg:table-cell'
                  )}
                >
                  {startup.stage}
                </td>
                <td
                  className={classNames(
                    startupIdx === 0 ? '' : 'border-t border-gray-800',
                    'px-3 py-3.5 text-sm text-gray-400'
                  )}
                >
                  <div className="sm:hidden">{startup.prioritylevel}/mo</div>
                  <div className="hidden sm:block">{startup.prioritylevel}</div>
                </td>
                <td
                  className={classNames(
                    startupIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium'
                  )}
                >
                  {
                    
                    <Link href={`/startups/${startup.id}/about`}>
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-gray-300 shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                        disabled={startup.isCurrent}
                      >
                        Select<span className="sr-only">, {startup.name}</span>
                      </button>
                    </Link>
                  }
                  {startupIdx !== 0 ? <div className="absolute right-6 left-0 -top-px h-px bg-gray-800" /> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
