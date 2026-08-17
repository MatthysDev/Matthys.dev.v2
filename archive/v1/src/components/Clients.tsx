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

function LogoRow({ clients, ariaHidden = false }: ClientsListHomepageProps & { ariaHidden?: boolean }) {
    return (
        <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
            {clients.map(
                (client: ClientProps) =>
                    client.data && (
                        <div className="mx-3 flex justify-center md:mx-4" key={client.id}>
                            <Image
                                src={client.data.logo.url}
                                alt={ariaHidden ? '' : `Logo of ${client.data.name}`}
                                width={250}
                                height={250}
                                title={client.data.name}
                                className="h-20 w-20 rounded-2xl bg-white p-3 opacity-60 grayscale ring-1 ring-stone-900/10 transition duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 dark:ring-white/10 md:h-24 md:w-24"
                            />
                        </div>
                    )
            )}
        </div>
    );
}

export function Clients(data: ClientsListHomepageProps) {
    return (
        <div className="group/marquee relative my-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
                <LogoRow clients={data.clients} />
                <LogoRow clients={data.clients} ariaHidden />
            </div>
        </div>
    );
}
