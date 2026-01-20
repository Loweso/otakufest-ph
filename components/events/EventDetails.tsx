export interface MechanicsLink {
    label: string;
    url: string;
}

export interface MainEventMechanics {
    title: string;
    links: MechanicsLink[];
}

export interface PartneredEventMechanics {
    title: string;
    label: string;
    url: string;
}

export interface EventDescription {
    intro: string;
    body: string;
    end: string;
    mechanics: MainEventMechanics | PartneredEventMechanics;
}

interface Props {
    description: EventDescription;
}

const EventDetails = ({ description }: Props) => {
    const { intro, body, end, mechanics } = description;

    return (
        <section className="space-y-8 text-gray-700">
            <p className="font-bold text-xl">{intro}</p>
            <p>{body}</p>
            <p>{end}</p>

            {mechanics && 'links' in mechanics ? (
                // Main Event mechanics (multiple links)
                <div>
                    <h3 className="font-semibold">{mechanics.title}</h3>
                    <ul className="list-disc pl-6">
                        {mechanics.links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 visited:text-purple-600 hover:underline"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : mechanics ? (
                // Partnered Event mechanics (single link)
                <div>
                    <h3 className="font-semibold">{mechanics.title}</h3>
                    <a
                        href={mechanics.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 visited:text-purple-600 hover:underline"
                    >
                        {mechanics.label}
                    </a>
                </div>
            ) : null}
        </section>
    );
};

export default EventDetails;
