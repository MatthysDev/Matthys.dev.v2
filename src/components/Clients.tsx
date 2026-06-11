import Image from 'next/image';

export interface ClientProps {
    id: string;
    data: {
        name: string;
        logo: {
            url: string;
        };
    };
}

export interface ClientsListHomepageProps {
    clients: ClientProps[];
}

export function Clients(data: ClientsListHomepageProps) {
    return (
        <div className="my-12 flex flex-wrap justify-center gap-4">
            {data.clients.map(
                (client: ClientProps) =>
                    client.data && (
                        <div className="flex justify-center" key={client.id}>
                            <Image
                                src={client.data.logo.url}
                                alt={`Logo of ${client.data.name}`}
                                width={250}
                                height={250}
                                title={client.data.name}
                                className="h-24 w-24 opacity-60 grayscale transition duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 rounded-2xl bg-white p-3 ring-1 ring-stone-900/10 dark:ring-white/10 md:h-28 md:w-28"
                            />
                        </div>
                    )
            )}
        </div>
    );
}
