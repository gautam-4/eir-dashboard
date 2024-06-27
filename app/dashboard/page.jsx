const plans = [
  {
    id: 1,
    name: 'Hobby',
    memory: '4 GB RAM',
    cpu: '4 CPUs',
    storage: '128 GB SSD disk',
    price: '$40',
    isCurrent: false,
  },
  {
    id: 2,
    name: 'Startup',
    memory: '8 GB RAM',
    cpu: '6 CPUs',
    storage: '256 GB SSD disk',
    price: '$80',
    isCurrent: true,
  },
  // More plans...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function StartupList() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 text-gray-100">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-100">Startup List</h1>
          
        </div>
        
      </div>
      <div className="-mx-4 mt-10 ring-1 ring-gray-700 sm:-mx-6 md:mx-0 md:rounded-lg secondary_color">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-6">
                Plan
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell"
              >
                Memory
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell"
              >
                CPU
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell"
              >
                Storage
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">
                Price
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Select</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, planIdx) => (
              <tr key={plan.id}>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-4 pl-4 sm:pl-6 pr-3 text-sm text-gray-100'
                  )}
                >
                  <div className="font-medium text-gray-100">
                    {plan.name}
                    {plan.isCurrent ? <span className="ml-1 text-indigo-400">(Current Plan)</span> : null}
                  </div>
                  <div className="mt-1 flex flex-col text-gray-400 sm:block lg:hidden">
                    <span>
                      {plan.memory} / {plan.cpu}
                    </span>
                    <span className="hidden sm:inline">·</span>
                    <span>{plan.storage}</span>
                  </div>
                  {planIdx !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-800" /> : null}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-gray-800',
                    'hidden px-3 py-3.5 text-sm text-gray-400 lg:table-cell'
                  )}
                >
                  {plan.memory}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-gray-800',
                    'hidden px-3 py-3.5 text-sm text-gray-400 lg:table-cell'
                  )}
                >
                  {plan.cpu}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-gray-800',
                    'hidden px-3 py-3.5 text-sm text-gray-400 lg:table-cell'
                  )}
                >
                  {plan.storage}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-gray-800',
                    'px-3 py-3.5 text-sm text-gray-400'
                  )}
                >
                  <div className="sm:hidden">{plan.price}/mo</div>
                  <div className="hidden sm:block">{plan.price}/month</div>
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium'
                  )}
                >
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-gray-300 shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                    disabled={plan.isCurrent}
                  >
                    Select<span className="sr-only">, {plan.name}</span>
                  </button>
                  {planIdx !== 0 ? <div className="absolute right-6 left-0 -top-px h-px bg-gray-800" /> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
