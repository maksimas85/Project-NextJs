import {Button, Htag, P, Rating, Tag} from "../components";
import {useEffect, useState} from "react";

export default function Home(): JSX.Element {

    const [rating, setRating] = useState<number>(4)

    return (
        <>
            <Htag tag='h1'>Заголовок</Htag>
            <Button appearance="primary" arrow="right">Кнопка</Button>
            <Button appearance="ghost" arrow="down">Кнопка</Button>
            <P size={"l"}>Большой</P>
            <P>Средний</P>
            <P size={"s"}>Маленький</P>
            <Tag size={"s"}>smtag</Tag>
            <Tag size={"m"} color={"red"}>red</Tag>
            <Tag size={"s"} color={"green"}>green</Tag>
            <Tag color={"primary"}>smtag</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    );
}
