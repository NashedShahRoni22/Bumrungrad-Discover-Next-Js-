import React from "react";

const LangugeInterpreter = () => {
    return (
        <div className='flex flex-col gap-2.5 max-sm:p-2 px-5 py-8 max-sm:text-[12px] overflow-y-auto'>
            <h5>
                Bumrungrad International Hospital understands the vital role
                communication plays in patient care. To enhance the experience
                for medical travel patients who are not fluent in English, we
                offer Cultural Support Officers proficient in a variety of
                languages. Additional languages may be available upon special
                request, depending on availability.
            </h5>
            <ul className='grid md:grid-cols-2 list-disc max-sm:text-[12px]  max-sm:grid-cols-2'>
                {languages.map((l, i) => (
                    <li key={i} className='ml-8'>
                        {l}
                    </li>
                ))}
            </ul>
            <p>
                <span className='font-semibold'>Cultural Helpdesk:</span> Our
                Cultural Helpdesks provide assistance with warm hospitality in
                your language. Services include medical care coordination,
                language support, escorts, concierge help and information.
            </p>
            <p>
                {" "}
                <span className='font-semibold'>Operation Time:</span> 08:00a.m.
                - 06:00p.m.
            </p>
            <p>
                {" "}
                <span className='font-semibold'>Location:</span> 10th Floor (Sky
                Lobby), BI Clinic Building
            </p>
            <p>Services at Cultural Helpdesks:</p>
            <ul className='list-disc max-sm:text-[12px] '>
                {helpDeskServices.map((hds, i) => (
                    <li key={i} className='ml-8'>
                        {hds}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const languages = [
    "Amharic",
    "Arabic",
    "Bengali",
    "Bahasa Indonesia",
    "Chinese-Cantonese",
    "Chinese-Mandarin",
    "French",
    "German",
    "Hindi",
    "Japanese",
    "Khmer",
    "Korean",
    "Mongolian",
    "Myanmar",
    "Nepali",
    "Russian",
    "Urdu",
    "Vietnamese",
    "Danish",
    "Finnish",
    "Greek",
    "Italian",
    "Norwegian",
    "Persian",
    "Sign Language",
    "Sinhala",
    "Spanish",
    "Turkish",
];

const helpDeskServices = [
    "Provide Information",
    "Medical/Non-Medical Coordination",
    "Assist to schedule appointments",
    "Assist to do registration",
    "Muslim prayer room",
    "Arrange Cultural Events",
];
export default LangugeInterpreter;
