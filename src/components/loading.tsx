import * as React from "react";
import { useTranslation } from 'react-i18next';
import * as LoadingImageUrl from "../assets/hearts.svg";

export const Loading = ({ match }: any) => {
    const { t } = useTranslation();

    return (<img src={LoadingImageUrl} />);
}