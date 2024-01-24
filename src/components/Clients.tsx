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
        <div className="my-24 grid grid-cols-3 content-around gap-4 md:grid-cols-5">
            {data.clients.map(
                (client: ClientProps) =>
                    client.data && (
                        <div className="flex justify-center" key={client.id}>
                            <Image
                                src={client.data.logo.url}
                                alt={`logo of ${client.data.name} client of weshipit.today`}
                                width={250}
                                height={250}
                                className=" h-32 w-32 opacity-50 grayscale transition duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 dark:rounded-3xl dark:bg-white dark:p-4"
                            />
                        </div>
                    )
            )}
        </div>
    );
}