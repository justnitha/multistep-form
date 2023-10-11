import PersonaLInfo from "../../components/PersonaLInfo"
import IsPlan from "../../components/IsPlan"
import AddOns from "../../components/AddOns"
import Summary from "../../components/Summary"

export const Linked = [
    {   
        id:1,
        header:"Personal info",
        paragraph:'Please provide your name, email address, and phone number.',
        category: 'personal-info',
        web: <PersonaLInfo />,
    },
    {   
        id:2,
        header:"Select Your Plan",
        paragraph:'You have the option of monthly or yearling billing.',
        category: 'plan',
        web: <IsPlan/>,
    },
    {   
        id:3,
        header:"Pick add-ons",
        paragraph:'add-ons help enhance your gaming experince.',
        category: 'add-ons',
        web: <AddOns/>,
    },
    {   
        id:4,
        header:"Finishing up",
        paragraph:'Double-check everything looks OK before confirming.',
        category: 'summary',
        web: <Summary/>,
    },
]