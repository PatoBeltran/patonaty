import * as React from "react";
import { useTranslation } from "react-i18next";

interface Properties{
    guest: GuestMetadata;
    statusKey: "going" | "notGoing" | "coupleGoing";
}

export function RSVPSent({ guest, statusKey }: Properties) {
    const [t] = useTranslation();
    const firstName = guest.name.split(' ')[0];
    const messageKey = `rsvpSent.${guest.plusOne ? 'couple' : 'alone'}.${statusKey}`;
    const messageParams = guest.plusOne ? { plusOneName: guest.plusOne.name.split(' ')[0] } : undefined;

    return (
        <>
            <div>{t('rsvpSent.title', { guestName: firstName })} {t(messageKey, messageParams)}</div>
            <div>{t('rsvpSent.changeYourMind')}</div>
        </>);
}
